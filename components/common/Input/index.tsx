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
            <label
                htmlFor={id}
                className="block mb-1 text-base font-medium text-black"
            >
                {label}
            </label>
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
                className={`bg-[#F2F2F2] dark:bg-dark-700 dark:text-white border border-[#F2F2F2] dark:border-dark-700 placeholder-gray placeholder:font-medium text-black focus:border-success focus:ring-success focus:outline-none text-base rounded-lg block w-full py-4 px-4 ${inputClassName}`}
            />
            {type === InputType.Password && (
                <button
                    type="button"
                    onClick={handleTogglePassword}
                    className="absolute bottom-3 right-1 flex items-center focus:outline-none px-3"
                >
                    {!showPassword ? (
                        <HiOutlineEyeSlash
                            className="text-gray-50 "
                            size={24}
                        />
                    ) : (
                        <HiOutlineEye className="text-gray-50" size={24} />
                    )}
                </button>
            )}
        </div>
    );
};
