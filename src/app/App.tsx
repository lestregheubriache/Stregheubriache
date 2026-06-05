import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import StoriaPage from './pages/StoriaPage';
import ContattiPage from './pages/ContattiPage';
import EsperienzePage from './pages/EsperienzePage';
import PrivacyPage from './pages/PrivacyPage';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  useEffect(() => {
    // Set favicon
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/svg+xml';
    link.rel = 'icon';
    link.href = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' fill='%230d0708'/><circle cx='16' cy='16' r='6' fill='%23e0763d'/></svg>";
    document.head.appendChild(link);

    // Set theme color
    const metaTheme = document.querySelector("meta[name='theme-color']") || document.createElement('meta');
    metaTheme.setAttribute('name', 'theme-color');
    metaTheme.setAttribute('content', '#0d0708');
    document.head.appendChild(metaTheme);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/storia" element={<StoriaPage />} />
        <Route path="/contatti" element={<ContattiPage />} />
        <Route path="/esperienze" element={<EsperienzePage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
    </BrowserRouter>
  );
}