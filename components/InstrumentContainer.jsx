import React from 'react'

const InstrumentContainer = ({name, color}) => {

    const upperString = name.charAt(0).toUpperCase() + name.slice(1);
    return (
    <div className={`${name} instrument-container`}>
      <div className={`${name} label`}>
        <div className="instrument-label" style={{backgroundColor: color}}>
            {upperString}
        </div>
      </div>
      <div className="instrument-buttons">
        <div className={`${name} button-container-1`}>
            <p>1</p>
            <div>
                <button className="button-left">

                </button>
                <button className="button-right">

                </button>
            </div>
        </div>
        <div className={`${name} button-container-2`}>
            <p>2</p>
            <div>
                <button className="button-left">

                </button>
                <button className="button-right">

                </button>
            </div>
        </div>
        <div className={`${name} button-container-3`}>
            <p>3</p>
            <div>
                <button className="button-left">

                </button>
                <button className="button-right">

                </button>
            </div>
        </div>
        <div className={`${name} button-container-4`}>
            <p>4</p>
            <div>
                <button className="button-left">

                </button>
                <button className="button-right">

                </button>
            </div>
        </div>
        <div className={`${name} button-container-5`}>
            <p>5</p>
            <div>
                <button className="button-left">

                </button>
                <button className="button-right">
                    
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default InstrumentContainer