import Image from 'next/image';
import React from 'react'
import styles from "../styles/Measure2.module.css";
import Circle from "../public/circle.svg";
import Pentagon from "../public/pentagon.svg";
import Square from '../public/square.svg';
import Triangle from "../public/triangle.svg"
const InstrumentImage = ({instrument, number, empty}) => {

  const colorsMap = {
    1: "#D2C761",
    2: "#79606C",
    3: "#779F68",
    4: "#B95264",
    5: "#455192",
  }
    // If its empty just return nothing
    if (empty)
    return ( 
        <div className={styles.instrument_image}>

        </div>
    )
    // If its not empty then return something
  return (
    <div className={styles.instrument_image}>
      {
        instrument == "drums" ? <Circle width={60} height={60} fill={colorsMap[number]}/> : instrument == "melody" ? <Square width={60} height={60} fill={colorsMap[number]}/> : instrument == "auxiliary" ? <Pentagon width={60} height={60}  fill={colorsMap[number]}/> : <Triangle width={60} height={60}  fill={colorsMap[number]}/> 
      }
    </div>
  )
}

export default InstrumentImage