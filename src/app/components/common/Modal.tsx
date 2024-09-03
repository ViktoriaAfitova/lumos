'use client';
import Image from 'next/image';

interface Props {
  className?: string;
  children: React.ReactNode;
  onClose: () => void;
}

const close = '/assets/images/closeIcon.png';

const Modal = ({ children, onClose }: Props) => {
  return (
    <div className='fixed inset-0 z-40 flex items-center justify-center bg-white'>
      <div className='relative bg-white p-6'>
        <button
          type='button'
          className='absolute right-2 top-2 text-black'
          onClick={onClose}
        >
          <Image width={24} height={24} src={close} alt='Close icon' />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
