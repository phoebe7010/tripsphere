import { FaEye, FaEyeSlash } from 'react-icons/fa';

const InputField = ({
  label,
  type,
  value,
  placeholder,
  onChange,
  error,
  showPassword,
  onTogglePassword,
}) => {
  return (
    <div>
      <label
        htmlFor={label}
        className="block text-sm font-medium text-gray-900">
        {label}
      </label>
      <div className="mt-2 relative">
        <input
          type={type === 'password' && showPassword ? 'text' : type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className={`block w-full rounded-md px-3 py-1.5 text-base text-gray-900 outline-1 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm ${
            error ? 'outline-red-600' : 'outline-gray-300 '
          }`}
        />
        {type === 'password' && (
          <div
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={onTogglePassword}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        )}
      </div>
      {error && <p className="mt-2 text-red-600 text-xs">{error}</p>}
    </div>
  );
};

export default InputField;
