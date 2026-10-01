import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  // Disable browser scroll restoration on refresh
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo(0, 0);

    const handleLoadOrUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener('beforeunload', handleLoadOrUnload);
    window.addEventListener('load', handleLoadOrUnload);

    return () => {
      window.removeEventListener('beforeunload', handleLoadOrUnload);
      window.removeEventListener('load', handleLoadOrUnload);
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
