'use client';
import React from 'react';
import { InputType } from '@/utils/commonTypes';
import { HiOutlineEye, HiOutlineEyeSlash } from 'react-icons/hi2';

interface InputProps {
  type?: InputType;
  id?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
  inputClassName?: string;
  disabled?: boolean;
}

export const Input: React.FC<InputProps> = ({
  type = InputType.Text,
  id,
  label,
  placeholder,
  value,
  onChange,
  required = false,
  className = '',
  inputClassName = '',
  disabled = false,
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleTogglePassword = (): void => {
    setShowPassword(prev => !prev);
  };

  return (
    <div className={`relative mb-4 ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className="block mb-1 text-base font-medium text-white"
        >
          {label}
        </label>
      )}
      <input
        type={
          type === InputType.Password
            ? showPassword
              ? InputType.Text
              : InputType.Password
            : type
        }
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className={`w-[363px] h-[40px] rounded-md px-3 text-sm 
          text-gray-300 placeholder-gray-500
          bg-[#1A1A1A] border border-[#6B95504D]
          focus:border-[#A1C45A] focus:ring-1 focus:ring-[#A1C45A]
          outline-none transition-all duration-200
          ${inputClassName}`}
      />

      {type === InputType.Password && (
        <button
          type="button"
          onClick={handleTogglePassword}
          className="absolute bottom-2 right-2 flex items-center focus:outline-none px-2"
        >
          {!showPassword ? (
            <HiOutlineEyeSlash className="text-gray-400" size={18} />
          ) : (
            <HiOutlineEye className="text-gray-400" size={18} />
          )}
        </button>
      )}
    </div>
  );
};

