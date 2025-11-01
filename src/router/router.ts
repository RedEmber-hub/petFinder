import { createBrowserRouter } from 'react-router';
import { Layout } from '@/layouts/layout';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProductsPage } from '@/pages/ProductsPage';
import { ProductDescription } from '@/pages/ProductDescription';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { path: 'products', Component: ProductsPage },
      { path: 'products/:id', Component: ProductDescription },
      { path: '*', Component: NotFoundPage },
    ],
  },
]);
