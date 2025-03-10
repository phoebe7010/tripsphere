import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';

const breadcrumb = [
  { link: '/mypage', text: '마이페이지' },
  { link: '/profile', text: '내 정보 수정' },
];

const Profile = () => {
  const navigate = useNavigate();

  return (
    <form className="max-w-[700px] mx-auto py-[40px]">
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <PageHeader
            title="내 정보 수정"
            breadcrumb={breadcrumb}
            hasBackButton={true}
          />

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="username"
                className="block text-sm/6 font-medium text-gray-900">
                이름
              </label>
              <div className="mt-2">
                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="이름을 입력해 주세요."
                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    readOnly
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="nickname"
                className="block text-sm/6 font-medium text-gray-900">
                닉네임
              </label>
              <div className="mt-2">
                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                  <input
                    id="nickname"
                    name="nickname"
                    type="text"
                    placeholder="닉네임을 입력해 주세요."
                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900">
                이메일
              </label>
              <div className="mt-2">
                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-900">
                비밀번호
              </label>
              <div className="mt-2">
                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="비밀번호를 입력해 주세요."
                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="passwordConfirm"
                className="block text-sm/6 font-medium text-gray-900">
                비밀번호 확인
              </label>
              <div className="mt-2">
                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                  <input
                    id="passwordConfirm"
                    name="passwordConfirm"
                    type="password"
                    placeholder="비밀번호를 입력해 주세요."
                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          onClick={() => navigate('/mypage')}
          className="text-sm/6 font-semibold text-gray-900">
          취소
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          저장
        </button>
      </div>
    </form>
  );
};

export default Profile;
