import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/ErrorBoundary';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: 1, refetchOnWindowFocus: false },
  },
});

export const AppProviders = ({ children }: { children: React.ReactNode }) => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  </ErrorBoundary>
);
