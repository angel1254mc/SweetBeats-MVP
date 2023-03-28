import Link from 'next/link'
import React from 'react'

const disclaimer = () => {
  return (
    <div style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        rowGap: "8px",
        fontSize: "1.4rem"
    }}>
        <div style={{
            width: "70%",
            height: "auto"
        }}>
            SweetBeats is a music looping application designed for beginners
            as well as people experienced in music production. Sweetbeats allows you
            to add or remove tracks from either or both of two measures which loop 
            into each other. You can also hover over an instrumentent track to hear
            a preview of how it will sound in the mix. Click start to begin playing the loop.
        </div>
        <Link href="/program">Access First Design</Link>
        <Link href="/program2">Access Alternate Design</Link>

    </div>
  )
}

export default disclaimer