import React from 'react'
import { FaSpinner } from 'react-icons/fa'

type Props = {}

const loader = (props: Props) => {
  return (
    <div>
      <FaSpinner className='animate-rotate text-slate-100'/>
    </div>
  )
}

export default loader

