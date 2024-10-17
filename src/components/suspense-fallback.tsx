import { cn } from "@/lib/utils";
import { LoaderCircleIcon } from "lucide-react";
import { FC } from "react";

type Props = {
  className?: string;
};
export const SuspenseFallback: FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "w-full h-[calc(100vh-12rem)] flex items-center justify-center",
        className
      )}
    >
      <LoaderCircleIcon className="size-[5vw] min-h-16 min-w-16 animate-spin" />
    </div>
  );
};
