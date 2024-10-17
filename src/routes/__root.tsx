import { createRootRoute, Outlet } from "@tanstack/react-router";

import { CheckOnlineStatus } from "@/components/check-online-status";
import { RouterSpinner } from "@/components/router-spinner";
import { Toaster } from "@/components/ui/toaster";

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  return (
    <>
      <RouterSpinner />
      <CheckOnlineStatus />
      <Outlet />
      {/* <TanStackRouterDevtools /> */}
      <Toaster />
    </>
  );
}
