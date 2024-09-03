'use client';
import { cn } from '@/utils/cn';
import { InputHTMLAttributes, forwardRef, useEffect, useState } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  isEmpty?: boolean;
  error?: { message: string };
  oppositeColor?: boolean;
}

const Input = forwardRef<HTMLInputElement, Props>(function InputInternal(
  {
    name,
    type,
    isEmpty,
    error,
    oppositeColor = false,
    className,
    placeholder,
    onChange,
    ...rest
  },
  ref,
) {
  const [hasError, setHasError] = useState(!!error);

  useEffect(() => {
    setHasError(!!error);
  }, [error]);

  return (
    <div className='relative'>
      <input
        ref={ref}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={(event) => {
          if (hasError) {
            setHasError(false);
          }
          onChange?.(event);
        }}
        className={cn(
          'mx-auto mb-2 block w-full max-w-full flex-col justify-center rounded-2xl border border-grey bg-greyLight p-4 text-base placeholder-grey placeholder-opacity-70 hover:border-b-black focus:border-b-black focus:opacity-100 focus:outline-none lg:w-[892px]',
          hasError &&
            'border-b-red-500 text-red-500 hover:border-b-red-500 focus:border-b-red-500',
          className,
          oppositeColor &&
            'border-b-white border-opacity-50 bg-black text-white placeholder-white placeholder-opacity-80 hover:border-b-white hover:border-opacity-80 focus:border-b-white focus:border-opacity-80',
        )}
        {...rest}
      />
    </div>
  );
});

export default Input;
