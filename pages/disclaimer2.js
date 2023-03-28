import Link from 'next/link'
import React from 'react'

const disclaimer2 = () => {
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
        <div style={{
            width: "70%",
            marginTop: "12px"
        }}>
        <b>Task 1:</b> Add a different track to measure 1, measure 2, and both measures EACH <br></br>
        ○ Task objective: One track is playing on measure 1 only, one track is <br></br>
        playing on measure 2 only, and one track is playing on both measures <br></br>
        <b>Task 2:</b> Add a track of each instrument group to the track loop. <br></br>
        ○ Task objective: The loop is continuously playing one track from each instrument type simultaneously
        
        </div>
        <Link href="/program2">Go to SweetBeats</Link>

    </div>
  )
}

export default disclaimer2