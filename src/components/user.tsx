import { userProps } from '@/types/user';
import Link from 'next/link';

import { MdLocationPin } from 'react-icons/md';

const user = ({
  login,
  avatar_url,
  name,
  followers,
  following,
  location,
}: userProps) => {
  return (
    <div className="bg-sky-950 text-slate-100 p-6 rounded-lg w-full flex flex-col items-center gap-4 md:w-2/4 max-w-[90%] md:max-w-none">
      <section className="flex flex-col items-center text-center gap-2">
        <img
          className="w-36 border-2 border-[rgb(12,74,110)] rounded-full mx-auto"
          src={avatar_url}
          alt={login}
        />
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="flex items-center gap-1 text-sm">
          <MdLocationPin /> {location}
        </p>
      </section>

      <section className="flex flex-col gap-4 text-center">
        <div className="flex">
          <div className='border-r-2 pr-2'>
            <p>Seguidores:</p>
            <p>{followers}</p>
          </div>
          <div className='pl-2'>
            <p>Seguindo:</p>
            <p>{following}</p>
          </div>
        </div>

        <Link href={`/repositorios?login=${login}`} className=" p-2 bg-indigo-950 rounded-lg">
          Ver melhores projetos
        </Link>
      </section>
    </div>
  );
};

export default user;
