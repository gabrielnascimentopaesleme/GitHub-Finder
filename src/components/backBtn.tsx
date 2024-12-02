import Link from 'next/link'
import React from 'react'

type Props = {}

const backBtn = (props: Props) => {
  return (
    <div >
      <Link className='absolute top-2 left-4' href={'/'}>Voltar</Link>
    </div>
  )
}

export default backBtn