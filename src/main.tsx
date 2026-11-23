
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { WhatsAppButton } from './components/ui/WhatsAppButton';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/aviso-de-privacidad" element={<PrivacyPolicy />} />
      </Routes>

      <WhatsAppButton />
    </BrowserRouter>
  </StrictMode>,
);
