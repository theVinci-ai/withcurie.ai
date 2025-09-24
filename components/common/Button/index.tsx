import { ButtonType, ButtonVariant } from '@/utils/commonTypes';
import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

interface IButton {
  type?: ButtonType;
  variant?: ButtonVariant;
  className?: string;
  onClick: () => void;
  children?: React.ReactNode;
  icon?: boolean;
  iconComponent?: React.ReactNode;
}

export const Button: React.FC<IButton> = ({
  type = ButtonType.Button,
  variant = ButtonVariant.Success,
  className = '',
  onClick,
  children,
  icon = false,
  iconComponent,
}) => {
  const baseStyle =
    'text-sm md:text-base text-center font-gilroy-semibold rounded-md inline-flex items-center justify-center transition-colors duration-400 ease-in-out px-4 md:px-6 py-3';
  const variantStyle = (() => {
    switch (variant) {
      case ButtonVariant.Success:
        return 'bg-success hover:bg-light-300 text-white';
      case ButtonVariant.Light:
        return 'bg-white hover:bg-light-300 text-[#4E4F4E] hover:text-white';
      case ButtonVariant.successLight:
        return 'bg-[#4A6F3E33] hover:bg-success text-success hover:text-white';
      default:
        return 'bg-primary hover:bg-secondary text-white';
    }
  })();
  return (
    <button
      type={type}
      className={`${baseStyle} ${variantStyle} ${className}`}
      onClick={onClick}
    >
      {children}
      {icon && <MdArrowOutward size={20} className='inline-flex ms-1' />}
      {iconComponent}
    </button>
  );
};
