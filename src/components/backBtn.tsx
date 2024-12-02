import Link from 'next/link'
import React from 'react'

type Props = {}

const backBtn = (props: Props) => {
  return (
    <div>
      <Link href={'/'}>Voltar</Link>
    </div>
  )
}

export default backBtn