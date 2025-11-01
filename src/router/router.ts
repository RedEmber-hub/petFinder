import { createBrowserRouter } from 'react-router';
import { Layout } from '@/layouts/layout';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { MainPage } from '@/pages/ProductsPage';
import { ProductPage } from '@/pages/ProductPage';
import { CreateProductPage } from '@/pages/CreateProductPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { path: 'products', Component: MainPage },
      { path: 'products/:id', Component: ProductPage },
      { path: 'create-product', Component: CreateProductPage },
      { path: '*', Component: NotFoundPage },
    ],
  },
]);
