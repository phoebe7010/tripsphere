import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import { useEffect } from 'react';
import useAuthStore from './stores/useAuthStore';

const App = () => {
  const initializeAuth = useAuthStore(state => state.initializeAuth);

  // 컴포넌트가 마운트될 때, 인증 상태 초기화 실행
  useEffect(() => {
    initializeAuth();
  }, [initializeAuth]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
