import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Measure from './Measure'

const MeasuresContainer = () => {
  return (
    <div className="top-container">
        <div className="chord-selector">
            <div className="chord-select-label">
                Chord Progression
            </div>
            <select className="chord-select-dropdown">
                <option className="chord-select-option">
                    <span>(1)</span>
                    <span>
                        (III - IV)
                    </span>
                </option>
                <option className="chord-select-option">
                    <span>(2)</span>
                    <span>
                        (I - IV)
                    </span>
                </option>
                <option className="chord-select-option">
                    <span>(3)</span>
                    <span>
                        (IV - V)
                    </span>
                </option>
                <option className="chord-select-option">
                    <span>(4)</span>
                    <span>
                        (II - III)
                    </span>
                </option>
            </select>
        </div>
        <div className="measures-container">
            <Measure id={0}/>
            <Measure id={0}/>
        </div>

    </div>
  )
}

export default MeasuresContainer