import { useState, useEffect } from "react";

const useIsSmallScreen = () => {
  // Initial state to check if the screen width is 1024px or less
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    // Media query to match screen widths of 1024px or less
    const mediaQuery = window.matchMedia("(max-width: 1024px)");

    // Event listener to handle screen size changes
    const handleChange = (e: MediaQueryListEvent) => {
      setIsSmallScreen(e.matches);
    };

    // Attach the listener to the media query
    mediaQuery.addEventListener("change", handleChange);

    // Set the initial state based on the current screen width
    setIsSmallScreen(mediaQuery.matches);

    // Cleanup function to remove the event listener
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return isSmallScreen;
};

export default useIsSmallScreen;
