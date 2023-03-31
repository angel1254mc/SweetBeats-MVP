import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect } from 'react'
import { InstrumentsContext } from '../hooks/InstrumentContext'
import Measure from './Measure'

const MeasuresContainer = () => {
    const {measureChords, setMeasureChords} = useContext(InstrumentsContext);
    const handleChangeMeasureChord = (stringVal) => {
      const commaIndex = stringVal.indexOf(',');
      const firstMeasure = stringVal.substring(0,commaIndex);
      const secondMeasure = stringVal.substring(commaIndex + 2);
      setMeasureChords({0: firstMeasure, 1: secondMeasure});
    }
    const parseChords = (chords) => {
      return `${chords[0]}, ${chords[1]}`;
    }

  return (
    <div className="top-container">
        <div className="chord-selector">
            <div className="chord-select-label">
                Chord Progression
            </div>
            <select
        defaultValue={parseChords(measureChords.chordKey)}
        onChange={e => handleChangeMeasureChord(e.target.value)}
        className="chord-select-dropdown">
            <option value="III, IV" className="chord-select-option">
                (1) (III, IV)
            </option>
            <option value="I, IV" className="chord-select-option">
                (2) (I, IV)
            </option>
            <option value="IV, V" className="chord-select-option">
                (3) (IV, V)

            </option>
            <option value="II, III" className="chord-select-option">
                (4) (II, III)
            </option>
        </select>
        </div>
        <div className="measures-container">
            <Measure id={0}/>
            <Measure id={1}/>
        </div>

    </div>
  )
}

export default MeasuresContainer