import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

export const DefaultNotFoundPage = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="flex size-full items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div>
            <h1 className="text-[10rem] font-bold text-gray-400">404</h1>
            <p className="text-2xl font-medium text-center text-gray-600">
              Page Not Found
            </p>
          </div>
          <Button asChild className="w-fit" size={"sm"}>
            <Link to="/"> Go to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
