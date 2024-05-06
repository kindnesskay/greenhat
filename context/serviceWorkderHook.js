import { useEffect, useState } from "react";

export default function useServiceWorkerRegistration() {
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js", { scope: "/" })
        .then((registration) => {
          setIsRegistered(true);
          // console.log("Service worker registration successful:", registration);
        })
        .catch((error) => {
          console.error("Service worker registration failed:", error);
        });
    }
  }, []);

  return isRegistered;
}
