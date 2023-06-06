import { createBrowserRouter } from 'react-router-dom'

import CheckoutSusccessView from './components/payment/CheckoutSusccessView'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminOrdersPage from './pages/admin/AdminOrdersPage'
import AdminOutlet from './pages/admin/AdminOutlet'
import AdminUsersPage from './pages/admin/AdminUsersPage'
import AdminCollectionsPage from './pages/admin/collections/AdminCollectionsPage'
import CreateCollectionPage from './pages/admin/collections/CreateCollectionPage'
import AdminProductsPage from './pages/admin/products/AdminProductsPage'
import CreateProductPage from './pages/admin/products/CreateProductPage'
import EditProductPage from './pages/admin/products/EditProductPage'
import CartPage from './pages/CartPage'
import CollectionsPage from './pages/CollectionsPage'
import CompletePaymentPage from './pages/CompletePaymentPage'
import ErrorPage from './pages/ErrorPage'
import HomePage from './pages/HomePage'
import Layout from './pages/Layout'
import LoginPage from './pages/LoginPage'
import PaymentPage from './pages/PaymentPage'
import { PrivateOutlet } from './pages/PrivateOutlet'
import ProductsDetailPage from './pages/ProductsDetailPage'
import ProductsPage from './pages/ProductsPage'
import SignupPage from './pages/SignupPage'
import UserProfile from './pages/UserProfilePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'collections', element: <HomePage /> },
      { path: 'collections/:collectionSlug', element: <CollectionsPage /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'products/:slug', element: <ProductsDetailPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'Register', element: <SignupPage /> },
      { path: 'signup', element: <SignupPage /> },
      { path: 'cart', element: <CartPage /> },
      { path: 'payment', element: <PaymentPage /> },
      { path: 'checkoutsucess', element: <CheckoutSusccessView /> },
      { path: 'completepayment', element: <CompletePaymentPage /> },

      {
        path: '/',
        element: <PrivateOutlet />,
        children: [{ path: 'userprofile', element: <UserProfile /> }],
      },
    ],
  },
  {
    path: '/admin',
    element: <AdminOutlet />,
    children: [
      { path: 'products', element: <AdminProductsPage /> },
      { path: 'products/createproduct', element: <CreateProductPage /> },
      { path: 'products/:slug', element: <EditProductPage /> },

      { path: 'collections', element: <AdminCollectionsPage /> },
      {
        path: 'collections/createcollection',
        element: <CreateCollectionPage />,
      },
      { path: 'orders', element: <AdminOrdersPage /> },
      { path: 'users', element: <AdminUsersPage /> },
      { path: '', element: <AdminDashboard /> },
    ],
  },
])

export default router
