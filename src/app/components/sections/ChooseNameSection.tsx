'use client';
import React, { useState, useEffect } from 'react';
import Button from '../common/Button';
import { User } from '@/app/api/types';
import { getUsers } from '@/app/api/api';

function ChooseNameSection() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    const loadUsers = async () => {
      const users = await getUsers();
      setUsers(users);
    };

    loadUsers();
  }, []);


  const handleUserSelect = (user: User) => {
    setSelectedUser(user);
  };

  return (
    <section className='mx-auto flex w-[396px] max-w-full flex-col justify-center lg:w-[896px] mb-24'>
      <h2 className='text-left text-2xl font-bold uppercase text-black'>
        Choose <span className='text-blue'>your name</span>
      </h2>
      <div className='mt-4'>
        {users.map((user, index) => (
          <div className='mt-6 flex h-20 w-[396px] max-w-full rounded-2xl px-2 py-8 text-2xl shadow-shadow-block lg:w-[896px]'>
            <label key={index} className='flex items-center'>
              <input
                type='radio'
                name='user'
                className='h-6 w-6 rounded-full border border-grey cursor-pointer'
                onChange={() => handleUserSelect(user)}
                checked={
                  selectedUser?.name.first === user.name.first &&
                  selectedUser?.name.last === user.name.last
                }
              />
              <span className='ml-2 text-black text-base font-semibold'>
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
      />
    </section>
  );
}

export default ChooseNameSection;
