import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "@/index.css";
import "@/fonts.css";

import { DefaultNotFoundPage } from "@/components/default-not-found-page";
import { DefaultErrorPage } from "@/components/default-error-page";
import { GlobalPending } from "@/components/global-pending";
import { routeTree } from "@/routeTree.gen";
import { HelmetProvider } from "react-helmet-async";

export const queryClient = new QueryClient();

const router = createRouter({
  routeTree,
  defaultNotFoundComponent: DefaultNotFoundPage,
  defaultPendingComponent: GlobalPending,
  defaultErrorComponent: ({ error, reset }) => (
    <DefaultErrorPage error={error} resetErrorBoundary={reset} />
  ),
  context: { auth: undefined!, queryClient },
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </QueryClientProvider>
    </StrictMode>
  );
}
