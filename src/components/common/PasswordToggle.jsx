import { FaEye, FaEyeSlash } from 'react-icons/fa';

const PasswordToggle = ({ showPassword, onClick }) => {
  return (
    <div
      className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
      onClick={onClick}>
      {showPassword ? <FaEyeSlash /> : <FaEye />}
    </div>
  );
};

export default PasswordToggle;
