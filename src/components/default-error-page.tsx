import { FC } from "react";
import { FallbackProps } from "react-error-boundary";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

export const DefaultErrorPage: FC<FallbackProps> = ({ error }) => {
  return (
    <div className="size-full flex justify-center items-center">
      <div className="flex flex-col items-center justify-center gap-4 p-4">
        <p className="text-2xl font-semibold text-gray-800 xl:text-4xl">
          Something went wrong
        </p>
        <p className="text-destructive">{error.message}</p>
        <div className="grid grid-cols-2 gap-4">
          <Button
            onClick={() => window.location.reload()}
            size={"sm"}
            variant={"outline"}
            className="mt-4"
          >
            Refresh
          </Button>
          <Button size={"sm"} asChild className="mt-4">
            <Link to="/">Go to home </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
