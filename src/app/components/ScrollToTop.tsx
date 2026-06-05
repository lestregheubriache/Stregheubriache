import { useEffect } from 'react';
import { useLocation } from 'react-router';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash anchor, let the page handle the scroll itself
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return null;
}
