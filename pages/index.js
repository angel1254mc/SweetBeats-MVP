import Link from 'next/link'
import React from 'react'
import Image from "../public/logo.jpg"

const index = () => {
  return (
    <div>


      <img  src={'../public/logo.jpg'}/>

      <img  src={Image}/>

      <Link href="/program">Get started</Link>

    </div>
  )
}

export default index