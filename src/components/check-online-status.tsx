import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useOnlineStatus } from "@/hooks/use-online-status";

export const CheckOnlineStatus = () => {
  const isOnline = useOnlineStatus();

  const onRetryHandler = () => window.location.reload();

  return (
    <AlertDialog open={!isOnline}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>No Internet Connection</AlertDialogTitle>
          <AlertDialogDescription>
            <p>
              You are currently offline. Please check your internet connection.
            </p>
            <ol className="mt-2 list-inside list-decimal">
              <li>
                Ensure your Wi-Fi or Ethernet cable is properly connected.
              </li>
              <li>Restart your router or modem.</li>
              <li>Try reconnecting to your network.</li>
              <li>
                If the issue persists, contact your internet service provider.
              </li>
            </ol>
            <p className="mt-4">
              Once the connection is restored, this message will disappear, and
              you can continue using the application.
            </p>
            <p className="mt-2 font-semibold">
              Note: Some features of the application may not be available while
              you are offline.
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={onRetryHandler}>Retry</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
