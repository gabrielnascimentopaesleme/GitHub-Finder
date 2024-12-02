'use client';

import { useState, useEffect } from 'react';
import Busca from '@/components/busca';
import User from '@/components/user';
import Loader from '@/components/loader';
import { userProps } from '@/types/user';

export default function Home() {
  const [user, setUser] = useState<userProps | null>(null);
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const getUser = async (userName: string) => {
    try {
      setLoading(true)
      setError(false)
      setUser(null)
      const response = await fetch(`https://api.github.com/users/${userName}`, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_API_TOKEN}`,
        },
      });
      setLoading(false)

      if (!response.ok) {
        setError(true)
        throw new Error('Erro ao buscar dados do usuário no GitHub');
      }
      const data = await response.json();
      console.log(data)
      const { avatar_url, name, login, followers, following, location } = data;

      const userData: userProps = {
        avatar_url,
        name,
        login,
        followers,
        following,
        location,
      };

      setUser(userData);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">

      <main className="flex flex-col items-center gap-8">
        <Busca getUser={getUser} />
        {loading && <Loader/>}
        {user && <User {...user} />}
        {error && <p>Usuário não encontrado</p>}

      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
