import React, { useContext } from "react";
import useInstruments, { InstrumentsContext } from "../hooks/InstrumentContext";

const InstrumentContainer = ({ name, color, instrument_ident }) => {
  const { instruments, setInstruments } = useContext(InstrumentsContext);
  const upperString = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <div className={`${name} instrument-container`}>
      <div className={`${name} label`}>
        <div className="instrument-label" style={{ backgroundColor: color }}>
          {upperString}
        </div>
      </div>
      <div className="instrument-buttons">
        <div className={`${name} button-container-1`}>
          <p>1</p>
          <div>
            <button
              onMouseLeave={() =>
                setInstruments({
                  type: "unpreview",
                  instrument: instrument_ident,
                  instrumentId: 1,
                  measureIndex: 0,
                })
              }
              onMouseEnter={() =>
                setInstruments({
                  type: "preview",
                  instrument: instrument_ident,
                  instrumentId: 1,
                  measureIndex: 0,
                })
              }
              className={`button-left ${
                instruments[instrument_ident][1][0] == "ON" ? "on" : "off"
              }`}
              onClick={() =>
                setInstruments({
                  type: "toggle",
                  instrument: instrument_ident,
                  instrumentId: 1,
                  measureIndex: 0,
                })
              }
            ></button>
            <button
              className={`button-right ${
                instruments[instrument_ident][1][1] == "ON" ? "on" : "off"
              }`}
              onMouseLeave={() =>
                setInstruments({
                  type: "unpreview",
                  instrument: instrument_ident,
                  instrumentId: 1,
                  measureIndex: 1,
                })
              }
              onMouseEnter={() =>
                setInstruments({
                  type: "preview",
                  instrument: instrument_ident,
                  instrumentId: 1,
                  measureIndex: 1,
                })
              }
              onClick={() =>
                setInstruments({
                  type: "toggle",
                  instrument: instrument_ident,
                  instrumentId: 1,
                  measureIndex: 1,
                })
              }
            ></button>
          </div>
        </div>
        <div className={`${name} button-container-2`}>
          <p>2</p>
          <div>
            <button
              className={`button-left ${
                instruments[instrument_ident][2][0] == "ON" ? "on" : "off"
              }`}
              onMouseLeave={() =>
                setInstruments({
                  type: "unpreview",
                  instrument: instrument_ident,
                  instrumentId: 2,
                  measureIndex: 0,
                })
              }
              onMouseEnter={() =>
                setInstruments({
                  type: "preview",
                  instrument: instrument_ident,
                  instrumentId: 2,
                  measureIndex: 0,
                })
              }
              onClick={() =>
                setInstruments({
                  type: "toggle",
                  instrument: instrument_ident,
                  instrumentId: 2,
                  measureIndex: 0,
                })
              }
            ></button>
            <button
              className={`button-right ${
                instruments[instrument_ident][2][1] == "ON" ? "on" : "off"
              }`}
              onMouseLeave={() =>
                setInstruments({
                  type: "unpreview",
                  instrument: instrument_ident,
                  instrumentId: 2,
                  measureIndex: 1,
                })
              }
              onMouseEnter={() =>
                setInstruments({
                  type: "preview",
                  instrument: instrument_ident,
                  instrumentId: 2,
                  measureIndex: 1,
                })
              }
              onClick={() =>
                setInstruments({
                  type: "toggle",
                  instrument: instrument_ident,
                  instrumentId: 2,
                  measureIndex: 1,
                })
              }
            ></button>
          </div>
        </div>
        <div className={`${name} button-container-3`}>
          <p>3</p>
          <div>
            <button
              className={`button-left ${
                instruments[instrument_ident][3][0] == "ON" ? "on" : "off"
              }`}
              onMouseLeave={() =>
                setInstruments({
                  type: "unpreview",
                  instrument: instrument_ident,
                  instrumentId: 3,
                  measureIndex: 0,
                })
              }
              onMouseEnter={() =>
                setInstruments({
                  type: "preview",
                  instrument: instrument_ident,
                  instrumentId: 3,
                  measureIndex: 0,
                })
              }
              onClick={() =>
                setInstruments({
                  type: "toggle",
                  instrument: instrument_ident,
                  instrumentId: 3,
                  measureIndex: 0,
                })
              }
            ></button>
            <button
              className={`button-right ${
                instruments[instrument_ident][3][1] == "ON" ? "on" : "off"
              }`}
              onMouseLeave={() =>
                setInstruments({
                  type: "unpreview",
                  instrument: instrument_ident,
                  instrumentId: 3,
                  measureIndex: 1,
                })
              }
              onMouseEnter={() =>
                setInstruments({
                  type: "preview",
                  instrument: instrument_ident,
                  instrumentId: 3,
                  measureIndex: 1,
                })
              }
              onClick={() =>
                setInstruments({
                  type: "toggle",
                  instrument: instrument_ident,
                  instrumentId: 3,
                  measureIndex: 1,
                })
              }
            ></button>
          </div>
        </div>
        <div className={`${name} button-container-4`}>
          <p>4</p>
          <div>
            <button
              className={`button-left ${
                instruments[instrument_ident][4][0] == "ON" ? "on" : "off"
              }`}
              onMouseLeave={() =>
                setInstruments({
                  type: "unpreview",
                  instrument: instrument_ident,
                  instrumentId: 4,
                  measureIndex: 0,
                })
              }
              onMouseEnter={() =>
                setInstruments({
                  type: "preview",
                  instrument: instrument_ident,
                  instrumentId: 4,
                  measureIndex: 0,
                })
              }
              onClick={() =>
                setInstruments({
                  type: "toggle",
                  instrument: instrument_ident,
                  instrumentId: 4,
                  measureIndex: 0,
                })
              }
            ></button>
            <button
              className={`button-right ${
                instruments[instrument_ident][4][1] == "ON" ? "on" : "off"
              }`}
              onMouseLeave={() =>
                setInstruments({
                  type: "unpreview",
                  instrument: instrument_ident,
                  instrumentId: 4,
                  measureIndex: 1,
                })
              }
              onMouseEnter={() =>
                setInstruments({
                  type: "preview",
                  instrument: instrument_ident,
                  instrumentId: 4,
                  measureIndex: 1,
                })
              }
              onClick={() =>
                setInstruments({
                  type: "toggle",
                  instrument: instrument_ident,
                  instrumentId: 4,
                  measureIndex: 1,
                })
              }
            ></button>
          </div>
        </div>
        <div className={`${name} button-container-5`}>
          <p>5</p>
          <div>
            <button
              className={`button-left ${
                instruments[instrument_ident][5][0] == "ON" ? "on" : "off"
              }`}
              onMouseLeave={() =>
                setInstruments({
                  type: "unpreview",
                  instrument: instrument_ident,
                  instrumentId: 5,
                  measureIndex: 0,
                })
              }
              onMouseEnter={() =>
                setInstruments({
                  type: "preview",
                  instrument: instrument_ident,
                  instrumentId: 5,
                  measureIndex: 0,
                })
              }
              onClick={() =>
                setInstruments({
                  type: "toggle",
                  instrument: instrument_ident,
                  instrumentId: 5,
                  measureIndex: 0,
                })
              }
            ></button>
            <button
              className={`button-right ${
                instruments[instrument_ident][5][1] == "ON" ? "on" : "off"
              }`}
              onMouseLeave={() =>
                setInstruments({
                  type: "unpreview",
                  instrument: instrument_ident,
                  instrumentId: 5,
                  measureIndex: 1,
                })
              }
              onMouseEnter={() =>
                setInstruments({
                  type: "preview",
                  instrument: instrument_ident,
                  instrumentId: 5,
                  measureIndex: 1,
                })
              }
              onClick={() =>
                setInstruments({
                  type: "toggle",
                  instrument: instrument_ident,
                  instrumentId: 5,
                  measureIndex: 1,
                })
              }
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstrumentContainer;
