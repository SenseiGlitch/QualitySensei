import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }
      log(logLine);
    }
  });

  next();
});

// Register routes
registerRoutes(app);

// Error handler
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  console.error(`❌ Error: ${status} - ${message}`);
  res.status(status).json({ message });
});

// Configuration
const isDev = process.env.NODE_ENV !== "production";
const PORT = Number(process.env.PORT) || 7001;

// Vercel deployment handler
const vercelHandler = async () => {
  if (isDev) {
    await setupVite(app, server);
  } else {
    const staticPath = path.join(__dirname, "public");
    app.use(express.static(staticPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(staticPath, "index.html"));
    });
  }
  return app;
};

// Local server startup
if (process.env.VERCEL !== "1") {
  (async () => {
    await vercelHandler();
    server.listen(PORT, "0.0.0.0", () => {
      log(`🚀 Server running on http://localhost:${PORT} (${isDev ? "Dev" : "Prod"})`);
    });
  })();
}

// Export for Vercel
export default vercelHandler();