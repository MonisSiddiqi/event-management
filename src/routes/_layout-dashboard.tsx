import { createFileRoute, Outlet } from "@tanstack/react-router";

import { ScrollArea } from "@/components/ui/scroll-area";

export const Route = createFileRoute("/_layout-dashboard")({
  component: LayoutDashboard,
});

function LayoutDashboard() {
  return (
    <div className="mx-auto flex max-h-screen min-h-screen flex-1 flex-col justify-between overflow-hidden max-w-screen-2xl">
      <ScrollArea>
        <Outlet />
      </ScrollArea>
    </div>
  );
}
