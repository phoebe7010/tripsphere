import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthForm } from '../../hooks/useAuthForm';
import { auth } from '../../firebase/firebaseConfig';
import { useMutation } from '@tanstack/react-query';
import { validateForm } from '../../utils/validation';
import InputField from '../../components/common/InputField';
import Modal from '../../components/common/Modal';
import useAuthStore from '../../stores/useAuthStore';

const SignIn = () => {
  const [state, dispatch] = useAuthForm();
  const [showPassword, setShowPassword] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalText, setModalText] = useState({ title: '', description: '' });
  const [modalType, setModalType] = useState('error');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      console.log('???' + JSON.stringify(user));
      if (user) {
        navigate('/');
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  // 로그인 mutation
  const loginMutation = useMutation({
    mutationFn: async () => {
      const { email, password } = state;

      // 폼 유효성 검사
      const errors = validateForm({ email, password }, 'signin');

      // 에러 상태 설정
      if (Object.keys(errors).length > 0) {
        dispatch({ type: 'SET_ERRORS', payload: errors });
        return;
      }

      // 로그인 요청
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      return userCredential.user;
    },
    onSuccess: async user => {
      const userData = {
        email: user.email,
        uid: user.uid,
        token: await user.getIdToken(),
      };

      useAuthStore.getState().login(userData);

      localStorage.setItem('user', JSON.stringify(userData));

      setModalText({ title: '', description: '로그인 성공' });
      setModalType('success');
      setModalOpen(true);
      navigate('/');
    },
    onError: error => {
      let errorMessage = '로그인에 실패했습니다. 다시 시도해주세요.';

      if (error.code === 'auth/user-not-found') {
        errorMessage = '일치하는 회원정보가 없습니다.';
      }

      if (error.code === 'auth/wrong-password') {
        errorMessage = '비밀번호가 일치하지 않습니다.';
      }

      setModalText({ title: '로그인 실패', description: errorMessage });
      setModalType('error');
      setModalOpen(true);
    },
  });

  // 폼 제출 처리
  const handleLogin = e => {
    e.preventDefault();
    loginMutation.mutate();
  };

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Link to="/">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
          </Link>

          <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
            로그인
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={handleLogin}
            className="space-y-6"
            action="#"
            method="POST">
            {/* 이메일 */}
            <InputField
              label="이메일"
              type="email"
              value={state.email}
              placeholder={state.placeholder.email}
              onChange={e =>
                dispatch({ type: 'SET_EMAIL', payload: e.target.value })
              }
              error={state.errors.email}
            />

            {/* 비밀번호 */}
            <InputField
              label="비밀번호"
              type="password"
              value={state.password}
              placeholder={state.placeholder.password}
              onChange={e =>
                dispatch({ type: 'SET_PASSWORD', payload: e.target.value })
              }
              error={state.errors.password}
              showPassword={showPassword}
              onTogglePassword={() => setShowPassword(!showPassword)}
            />

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-indigo-600">
                로그인
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            아직 회원이 아닌가요?{' '}
            <Link
              to="/signup"
              className="font-semibold text-indigo-600 hover:text-indigo-500">
              회원가입
            </Link>
          </p>
        </div>
      </div>

      {/* 모달 */}
      <Modal
        open={modalOpen}
        setOpen={setModalOpen}
        text={modalText}
        type={modalType}
        onNavigate={() => navigate('/')}
      />
    </>
  );
};

export default SignIn;
