import React, { useContext } from 'react'
import { InstrumentsContext } from '../hooks/InstrumentContext';
import Circle from "../public/circle.svg";
import Pentagon from "../public/pentagon.svg";
import Square from '../public/square.svg';
import Triangle from "../public/triangle.svg"
const InstrumentContainerDrag = ({ name, color, instrument_ident }) => {

const { instruments, setInstruments } = useContext(InstrumentsContext);
  const upperString = name.charAt(0).toUpperCase() + name.slice(1);
  const colorsMap = {
    1: "#D2C761",
    2: "#79606C",
    3: "#779F68",
    4: "#B95264",
    5: "#455192",
  }
  if (instrument_ident ==  "drums")
  return (
    <div className={`${name} instrument-container`}>
      <div className={`${name} label`}>
        <div className="instrument-label" style={{ backgroundColor: color }}>
          {upperString}
        </div>
      </div>
      <div className="instrument-buttons">
        {
            Object.keys(instruments[instrument_ident]).map((key) => {
                return  (
                    <div className={`${name} button-container-${key}`}>
                      <p>{key}</p>
                      <div>
                        <Circle width={30} height={30} fill={colorsMap[key]}/>
                      </div>
                    </div>
                );
            })
        }
      </div>
    </div>
  )
  if (instrument_ident == "bass")
  return (
    <div className={`${name} instrument-container`}>
      <div className={`${name} label`}>
        <div className="instrument-label" style={{ backgroundColor: color }}>
          {upperString}
        </div>
      </div>
      <div className="instrument-buttons">
        {
            Object.keys(instruments[instrument_ident]).map((key) => {
                return  (
                    <div className={`${name} button-container-${key}`}>
                      <p>{key}</p>
                      <div>
                        <Triangle width={30} height={30} fill={colorsMap[key]}/>
                      </div>
                    </div>
                );
            })
        }
      </div>
    </div>
  )
  if (instrument_ident == "melody")
  return (
    <div className={`${name} instrument-container`}>
      <div className={`${name} label`}>
        <div className="instrument-label" style={{ backgroundColor: color }}>
          {upperString}
        </div>
      </div>
      <div className="instrument-buttons">
        {
            Object.keys(instruments[instrument_ident]).map((key) => {
                return  (
                    <div className={`${name} button-container-${key}`}>
                      <p>{key}</p>
                      <div>
                        <Square width={30} height={30} fill={colorsMap[key]}/>
                      </div>
                    </div>
                );
            })
        }
      </div>
    </div>
  )
  if (instrument_ident == "auxiliary")
  return (
    <div className={`${name} instrument-container`}>
      <div className={`${name} label`}>
        <div className="instrument-label" style={{ backgroundColor: color }}>
          {upperString}
        </div>
      </div>
      <div className="instrument-buttons">
        {
            Object.keys(instruments[instrument_ident]).map((key) => {
                return  (
                    <div className={`${name} button-container-${key}`}>
                      <p>{key}</p>
                      <div>
                        <Pentagon width={30} height={30} fill={colorsMap[key]}/>
                      </div>
                    </div>
                );
            })
        }
      </div>
    </div>
  )
}

export default InstrumentContainerDrag