import React from 'react'

const InstrumentBox = ({instrument, number, activity, name}) => {
 
  return (
    <div className={`instrument-block ${instrument} ${activity}`}>
        {`${name} ${number}`}
    </div>
  )
}

export default InstrumentBox