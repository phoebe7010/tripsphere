import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import SubLayout from '../layouts/SubLayout';
import Home from '../pages/Home';
import SignIn from '../pages/auth/SignIn';
import SignUp from '../pages/auth/SignUp';
import NotFound from '../pages/error/NotFound';
import ProductList from '../pages/product/ProductList';
import ProductDetail from '../pages/product/ProductDetail';
import Profile from '../pages/user/Profile';
import MyPage from '../pages/user/MyPage';
import OrderHistory from '../pages/order/OrderHistory';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'products', element: <ProductList /> },
      { path: 'product/:id', element: <ProductDetail /> },
      { path: 'profile', element: <Profile /> },
      { path: 'mypage', element: <MyPage /> },
      { path: 'orderhistory', element: <OrderHistory /> },
    ],
  },
  {
    path: '/',
    element: <SubLayout />,
    children: [
      { path: 'signin', element: <SignIn /> },
      { path: 'signup', element: <SignUp /> },
    ],
  },
  { path: '*', element: <NotFound /> },
]);

export default router;
