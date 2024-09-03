'use client';
import { cn } from '@/utils/cn';
import { ButtonHTMLAttributes } from 'react';

interface Props extends Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  text: React.ReactNode;
  onClick?: () => void;
  className?: string;
  oppositeColor?: boolean;
}

const Button = ({ text, onClick, className, type, oppositeColor }: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        'font-primary flex items-center justify-center text-sm',
        className,
        oppositeColor,
      )}
    >
      {text}
    </button>
  );
};

export default Button;
