import React from 'react'
import Measure2 from './Measure2';

const MeasuresContainer2 = () => {
  return (
    <div className="top-container">
    <div className="chord-selector">
        <div className="chord-select-label">
            Chord Progression
        </div>
        <select className="chord-select-dropdown">
            <option className="chord-select-option">
                (1) (III - IV)
            </option>
            <option className="chord-select-option">
                (2) (I - IV)
            </option>
            <option className="chord-select-option">
                (3) (IV - V)

            </option>
            <option className="chord-select-option">
                (4) (II - III)
            </option>
        </select>
    </div>
    <div className="measures-container">
        {/**
         * Droppables are handled within each measure
         */}
        <Measure2 id={0}/>
        <Measure2 id={1}/>
    </div>

</div>
  )
}

export default MeasuresContainer2;