'use client';

import React, {useState, useEffect} from 'react'
import BackBtn from '@/components/backBtn'
import { repoProps } from '@/types/repo'
import Loader from '@/components/loader';

type Props = {}

const page = ({ searchParams }: { searchParams: { login?: string } }) => {
  const login = searchParams.login;
  const [repos, setRepos] = useState<repoProps[] | [] | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(()=> {
    const loadRepos = async function (login?: string) {
      setLoading(true)
      const response = await fetch(`https://api.github.com/users/${login}/repos`)

      const data = await response.json()
      setRepos(data)
      setLoading(false)
    }

    loadRepos(searchParams.login)
  }, [])
  
  console.log(repos)
  return (
    <div>
      <h2>Repositórios de {searchParams.login}</h2>
      {loading && <Loader/>}
      {repos && repos.length === 0 && <p>Não há repositórios</p>}
      {repos && repos.length > 0 && (
        <div>
          {repos.map((repo, index) => (
            <div key={index}><h2>{repo.name}</h2></div>
          ))}
        </div>
      )}
      
      <BackBtn/>
    </div>
  )
}

export default page