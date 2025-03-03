import React, { useState } from 'react';
import { useAuthForm } from '../../hooks/useAuthForm';
import { auth, db } from '../../firebase/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import InputField from '../../components/InputField';
import Modal from '../../components/Modal';
import { updateProfile } from 'firebase/auth';
import { validateForm } from '../../utils/validation';

// 회원가입 처리 함수
const signupUser = async ({ email, password, username, nickname }) => {
  // Firebase에 새 사용자 생성
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password,
  );

  // 사용자 프로필 업데이트
  await updateProfile(userCredential.user, {
    displayName: username,
  });

  // Firestore users테이블에 사용자 데이터 저장
  await setDoc(doc(db, 'users', userCredential.user.uid), {
    email: userCredential.user.email,
    createAt: serverTimestamp(),
    username,
    nickname,
  });

  return userCredential.user;
};

const SignUp = () => {
  const [state, dispatch] = useAuthForm();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false); // 비밀번호 표시 여부 상태
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false); // 비밀번호 확인 표시 여부 상태

  const [openModal, setOpenModal] = useState(false); // 모달 상태
  const [modalText, setModalText] = useState({
    title: '',
    description: '',
  }); // 모달에 표시할 텍스트 상태
  const [modalType, setModalType] = useState('success'); // 모달 타입 (성공/실패 등)

  // 회원가입 후 홈으로 이동
  const handleNavigate = () => {
    navigate('/');
  };

  const mutation = useMutation({
    mutationFn: signupUser,
    onSuccess: user => {
      setModalText({
        title: '회원가입이 완료되었습니다.',
        description: `${user.displayName}님 환영합니다!`,
      });
      setModalType('success');
      setOpenModal(true);
    },
    onError: error => {
      setModalText({
        title: '회원가입이 실패했습니다.',
        description: error.message,
      });
      setModalType('error');
      setOpenModal(true);
    },
  });

  const handleSubmit = e => {
    e.preventDefault();

    // 폼 유효성 검사
    const errors = validateForm(state);

    // 에러 상태 설정
    if (Object.keys(errors).length > 0) {
      dispatch({ type: 'SET_ERRORS', payload: errors });
      return;
    }

    // 회원가입 요청
    mutation.mutate({
      email: state.email,
      password: state.password,
      username: state.username,
      nickname: state.nickname,
    });
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
            회원가입
          </h2>
        </div>

        {/* 폼 영역 */}
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={handleSubmit}
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

            {/* 비밀번호 확인 */}
            <InputField
              label="비밀번호 확인"
              type="password"
              value={state.passwordConfirm}
              placeholder={state.placeholder.passwordConfirm}
              onChange={e =>
                dispatch({
                  type: 'SET_PASSWORDCONFIRM',
                  payload: e.target.value,
                })
              }
              error={state.errors.passwordConfirm}
              showPassword={showPasswordConfirm}
              onTogglePassword={() =>
                setShowPasswordConfirm(!showPasswordConfirm)
              }
            />

            {/* 이름 */}
            <InputField
              label="이름"
              type="text"
              value={state.username}
              placeholder={state.placeholder.username}
              onChange={e =>
                dispatch({ type: 'SET_USERNAME', payload: e.target.value })
              }
              error={state.errors.username}
            />

            {/* 닉네임 */}
            <InputField
              label="닉네임"
              type="text"
              value={state.nickname}
              placeholder={state.placeholder.nickname}
              onChange={e =>
                dispatch({ type: 'SET_NICKNAME', payload: e.target.value })
              }
              error={state.errors.nickname}
            />

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-indigo-600">
                회원가입
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* 모달 */}
      <Modal
        open={openModal}
        setOpen={setOpenModal}
        text={modalText}
        type={modalType}
        onNavigate={handleNavigate}
      />
    </>
  );
};

export default SignUp;
