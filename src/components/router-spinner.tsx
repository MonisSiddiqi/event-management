import { useEffect, useRef } from "react";
import LoadingBar, { LoadingBarRef } from "react-top-loading-bar";
import { useRouterState } from "@tanstack/react-router";

export const RouterSpinner = () => {
  const ref = useRef<LoadingBarRef>(null);
  const isLoading = useRouterState({
    select: (s) => s.status === "pending",
  });

  useEffect(() => {
    if (isLoading) {
      ref?.current?.continuousStart();
    } else {
      ref?.current?.complete();
    }
  }, [isLoading]);

  return <LoadingBar color="#21A0D2" ref={ref} height={5} />;
};
