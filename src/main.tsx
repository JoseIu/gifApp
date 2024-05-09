import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import GifApp from './GifApp.tsx';
import GifDetailes from './components/GifDetails/GifDetailes.tsx';
import './main.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route index path="gifs" element={<GifApp />} />
      <Route path="gifs/:id" element={<GifDetailes />} />
      <Route path="*" element={<Navigate to={'gifs'} />} />
    </Routes>
  </BrowserRouter>
  // <React.StrictMode>
  // </React.StrictMode>
);
