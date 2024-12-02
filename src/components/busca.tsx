import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import Link from 'next/link';

type Props = {
  getUser: (username: string) => Promise<void>;
};

const busca = ({ getUser }: Props) => {
  const [name, setName] = useState('');

  const handleSearch = () => {
    if (name.trim()) {
      getUser(name);
    }
  };
  return (
    <div className='bg-sky-950 text-slate-100 p-6 rounded-lg w-full h-56 flex flex-col items-center gap-4 md:w-2/4 max-w-[90%] md:max-w-none'>

      <div className="mb-4 text-center">
      <h2 className='text-4xl mb-4'>Busque o usuário</h2>
      <p className='text-lg'>Conheça seus melhores repositórios</p>
      </div>

      <div className="flex items-center ">
        <input
          type="text"
          placeholder="Digite o usuário"
          onChange={(e) => setName(e.target.value)}
          className="border pl-1 text-xl text-gray-950"
        />
        <button className="p-2" onClick={handleSearch}>
          <BsSearch />
        </button>
      </div>

    </div>
  );
};

export default busca;
