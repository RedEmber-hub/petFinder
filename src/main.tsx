import { createRoot } from 'react-dom/client';
import '@/assets/css/style.scss';
import { router } from './router/router';
import { RouterProvider } from 'react-router';

createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
