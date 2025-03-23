import { QueryClient, QueryFunction } from "@tanstack/react-query";

// Modified for static site - using local JSON files instead of API calls
export async function fetchLocalData(path: string): Promise<any> {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error loading data from ${path}:`, error);
    throw error;
  }
}

// Static data query function - uses local JSON files
export const staticDataQueryFn: QueryFunction = async ({ queryKey }) => {
  const path = queryKey[0] as string;
  return fetchLocalData(path);
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: staticDataQueryFn,
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
  },
});
