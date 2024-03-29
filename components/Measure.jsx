import React, { useContext, useEffect } from 'react'
import useInstruments, { InstrumentsContext } from '../hooks/InstrumentContext'
import InstrumentBox from './InstrumentBox';

const Measure = ({id}) => {

    const {instruments, setInstruments, isPlaying} = useContext(InstrumentsContext);
    console.log("The thing is playing: " + isPlaying);
  return (
    <div className="measure-outer">
        {id == 0 ? <div id="myText2" style = {{
            animationName: isPlaying ? 'cruiseRight' : ''
        }} /> : null}
        <div className="measure-upper-container">
            <div className="measure-vert"/>
            <div className="measure-upper">
                <div className="instrument-stack upper">
                    {Object.keys(instruments["kick"]).map((instrument_number, index) => {
                        return <InstrumentBox key={"kick"+ index} name="Kick" instrument={"kick"} number={instrument_number} activity={instruments["kick"][instrument_number][id]}/>
                    })}
                </div>
                <div className="instrument-stack upper">
                    {Object.keys(instruments["snare"]).map((instrument_number, index) => {
                        return <InstrumentBox key={"snare"+ index} name="Snare" instrument={"snare"} number={instrument_number} activity={instruments["snare"][instrument_number][id]}/>
                    })}
                </div>
                <div className="instrument-stack upper">
                    {Object.keys(instruments["cymbal"]).map((instrument_number, index) => {
                        return <InstrumentBox key={"cymbal"+ index} name="Cymbal" instrument={"cymbal"} number={instrument_number} activity={instruments["cymbal"][instrument_number][id]}/>
                    })}
                </div>
            </div>
            <div className="measure-vert"/>
        </div>
        <div className="measure-lower-container">
            <div className="measure-vert"/>
            <div className="measure-lower">
                <div className="instrument-stack lower">
                    {Object.keys(instruments["bass"]).map((instrument_number, index) => {
                        return <InstrumentBox key={"bass" + index} name="Bass" instrument={"bass"} number={instrument_number} activity={instruments["bass"][instrument_number][id]}/>
                    })}
                </div>
                <div className="instrument-stack lower">
                {Object.keys(instruments["melody"]).map((instrument_number, index) => {
                        return <InstrumentBox key={"melody" + index} name="Melody" instrument={"melody"} number={instrument_number} activity={instruments["melody"][instrument_number][id]}/>
                    })}
                </div>
                <div className="instrument-stack lower">
                    {Object.keys(instruments["auxiliary"]).map((instrument_number, index) => {
                        return <InstrumentBox key={"auxiliary" + index} name="Auxiliary" instrument={"auxiliary"} number={instrument_number} activity={instruments["auxiliary"][instrument_number][id]}/>
                    })}
                </div>

            </div>
            <div className="measure-vert"/>
        </div>

    </div>
  )
}

export default Measure