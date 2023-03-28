import Link from 'next/link'
import React from 'react'
import Image from "next/image";

export default function Home2() {
  return (
    <div class="home-page"> 
<Image src={'/logo.png'}
            width="900"
            height="275"
            alt={'SweetBeats'}/>
<h1><br></br>

A project by Angel Lopez Pol, Jacob Mass and Alex Harvey</h1>
<br></br>
<h1>   <Link href="/disclaimer2"> Get started</Link></h1>

              
    </div>
    
  )
}
