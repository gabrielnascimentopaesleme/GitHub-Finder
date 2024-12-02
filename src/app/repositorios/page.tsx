'use client';

import React, { useState, useEffect } from 'react';
import BackBtn from '@/components/backBtn';
import Repos from '@/components/repos';
import { repoProps } from '@/types/repo';
import Loader from '@/components/loader';

type Props = {};

const page = ({ searchParams }: { searchParams: { login?: string } }) => {
  const login = searchParams.login;
  const [repos, setRepos] = useState<repoProps[] | [] | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const loadRepos = async function (login?: string) {
      const response = await fetch(
        `https://api.github.com/users/${login}/repos`
      );

      const data = await response.json();
      setRepos(data);
      setLoading(false);
    };

    loadRepos(searchParams.login);
  }, []);

  console.log(repos);
  return (
    <div className='flex flex-col items-center content-center '>
      <BackBtn />
      <h2>Repositórios de {searchParams.login}</h2>
      {loading && <Loader />}
      {repos && repos.length === 0 && <p>Não há repositórios</p>}
      {repos && repos.length > 0 && (
        <div className='flex flex-col gap-4'>
          {repos.map((repo: repoProps, index) => (
            <div key={index}>
              <Repos {...repo}/>
            </div>
          ))}
        </div>
      )}

      
    </div>
  );
};

export default page;
