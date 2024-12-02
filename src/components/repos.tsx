import React from 'react'
import { repoProps } from '@/types/repo'
import { BsCodeSlash } from 'react-icons/bs'
import { AiOutlineStar, AiOutlineFork } from 'react-icons/ai'


const repos = ({name, language, html_url, stargazers_count, forks_count}: repoProps) => {
  return (
    <div className='flex flex-col items-center content-center bg-sky-950 w-full'>
      <h3>Nome do Repositório: {name}</h3>
      <p className='flex items-center'><BsCodeSlash/>{language}</p>
      <p className='flex items-center'><AiOutlineStar/><span>{stargazers_count}</span></p>
      <p className='flex items-center'><AiOutlineFork/><span>{forks_count}</span></p>
      <a href={html_url} target='_blank'>Ir para o repositório</a>
    </div>
  )
}

export default repos