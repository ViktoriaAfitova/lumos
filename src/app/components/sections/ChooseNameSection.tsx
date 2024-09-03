'use client';
import React, { useState, useEffect } from 'react';
import Button from '../common/Button';
import { User } from '@/app/api/types';
import { getUsers } from '@/app/api/api';
import Modal from '../common/Modal';
import Input from '../common/Input';
import Image from 'next/image';

const secure = '/assets/images/secureIcon.png';

function ChooseNameSection() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string | null>(null);

  useEffect(() => {
    const loadUsers = async () => {
      const users = await getUsers();
      setUsers(users);
    };

    loadUsers();
  }, []);

  const selectUser = (user: User) => {
    setSelectedUser(user);
  };

  const isOpen = () => {
    if (selectedUser) {
      setIsModalOpen(true);
    }
  };

  const isClose = () => {
    setIsModalOpen(false);
    setEmail('');
    setEmailError(null);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleContinueClick = () => {
    if (validateEmail(email)) {
      console.log(`Email: ${email}`);
      setEmail('');
      setEmailError(null);
      setIsModalOpen(false);
    } else {
      setEmailError('Please enter a valid email address');
    }
  };

  return (
    <section className='mx-auto mb-24 flex w-[392px] max-w-full flex-col justify-center lg:w-[896px]'>
      <h2 className='text-left text-2xl font-bold uppercase text-black'>
        Choose <span className='text-blue'>your name</span>
      </h2>
      <div className='mt-4'>
        {users.map((user, index) => (
          <div
            key={index}
            className='mt-6 flex h-20 w-[392px] max-w-full rounded-2xl px-2 py-8 text-2xl shadow-shadow-block lg:w-[896px]'
          >
            <label className='flex items-center'>
              <input
                type='radio'
                name='user'
                className='h-6 w-6 cursor-pointer rounded-full border border-grey'
                onChange={() => selectUser(user)}
                checked={
                  selectedUser?.name.first === user.name.first &&
                  selectedUser?.name.last === user.name.last
                }
              />
              <span className='ml-2 text-base font-semibold text-black'>
                {user.name.first} {user.name.last}
              </span>
            </label>
          </div>
        ))}
      </div>
      <Button
        type='button'
        className='mx-auto mt-4 h-16 w-96 max-w-full items-center justify-center rounded-2xl bg-orange text-2xl font-bold text-white shadow-shadow-block lg:w-[896px]'
        text='Get VPN'
        onClick={isOpen}
      />
      {isModalOpen && (
        <Modal
          onClose={isClose}
          className='mx-auto mb-24 flex w-[392px] max-w-full flex-col justify-center lg:w-[896px]'
        >
          <h2 className='mb-8 mt-10 text-2xl font-bold uppercase'>Your name</h2>
          <p className='mb-8 text-base font-bold'>
            {selectedUser
              ? `${selectedUser.name.first} ${selectedUser.name.last}`
              : ''}
          </p>
          <Input
            placeholder='Enter your email'
            value={email}
            onChange={handleEmailChange}
            className={`mb-4 ${emailError ? 'border-red-500' : ''}`}
          />
          {emailError && <p className='text-sm text-red-500'>{emailError}</p>}
          <div className='flex'>
            <Image
              width={16}
              height={16}
              src={secure}
              alt='Secure icon'
              style={{
                width: '16px',
                height: '16px',
              }}
            />
            <p className='ml-2 text-sm font-medium text-grey'>
              Your information is 100% secure. We don’t share your personal
              information.
            </p>
          </div>
          <Button
            type='button'
            className='mx-auto mt-4 h-16 w-96 max-w-full items-center justify-center rounded-2xl bg-orange text-2xl font-bold text-white shadow-shadow-block lg:w-[896px]'
            text='Continue'
            onClick={handleContinueClick}
          />
        </Modal>
      )}
    </section>
  );
}

export default ChooseNameSection;
