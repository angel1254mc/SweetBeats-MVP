import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const MeasuresContainer = () => {
  return (
    <div className="top-container">
        <div className="chord-selector">
            <div className="chord-select-label">
                Chord Progression
            </div>
            <select className="chord-select-dropdown">
                <option className="chord-select-option">
                    <span>(4)</span>
                    <span>
                        (III - IV)
                    </span>
                </option>
            </select>
        </div>

    </div>
  )
}

export default MeasuresContainer