import React from 'react'

const Measure = () => {
  return (
    <div className="measure-outer">
        <div className="measure-upper-container">
            <div className="measure-vert"/>
            <div className="measure-upper">
                <div className="instrument-stack upper">
                    <div className="instrument-block drums">
                        Drums 2
                    </div>
                    <div className="instrument-block drums">
                        Drums 1
                    </div>
                </div>
                <div className="instrument-stack upper">
                    <div className="instrument-block bass">
                        Bass 1
                    </div>
                </div>
            </div>
            <div className="measure-vert"/>
        </div>
        <div className="measure-lower-container">
            <div className="measure-vert"/>
            <div className="measure-lower">
                <div className="instrument-stack lower">
                    <div className="instrument-block melody">
                        Melody 1
                    </div>
                    <div className="instrument-block melody">
                        Melody 2
                    </div>
                    <div className="instrument-block melody">
                        Melody 3
                    </div>
                    <div className="instrument-block melody">
                        Melody 4
                    </div>
                </div>
                <div className="instrument-stack">
                    <div className="instrument-block auxiliary">
                        Auxiliary 1
                    </div>
                </div>

            </div>
            <div className="measure-vert"/>
        </div>

    </div>
  )
}

export default Measure