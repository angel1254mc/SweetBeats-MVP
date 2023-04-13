import Image from "next/image";
import React, { useContext } from "react";
import styles from "../styles/Measure2.module.css";
import Circle from "../public/circle.svg";
import Pentagon from "../public/pentagon.svg";
import Square from "../public/square.svg";
import Triangle from "../public/triangle.svg";
import Snare from "../public/drum.svg";
import Cymbal from "../public/cymbal.svg";
import Kick from "../public/kick.svg";
import Bass from "../public/bass.svg";
import Melody from "../public/melody.svg";
import Auxiliary from "../public/auxiliary.svg";
import { InstrumentsContext } from "../hooks/InstrumentContext";
import { Draggable } from "react-beautiful-dnd";
const InstrumentImage = ({ instrument, number, empty, measure }) => {
  const { setInstruments } = useContext(InstrumentsContext);
  const colorsMap = {
    1: "#D2C761",
    2: "#79606C",
    3: "#779F68",
    4: "#B95264",
    5: "#455192",
  };
  function getStyle(style, snapshot) {
    console.log(snapshot.isDropAnimating);
    if (!snapshot.isDropAnimating) {
      return style;
    }
    return {
      ...style,

      transition: `all 0.001s ease`,
      opacity: 0,
    };
  }
  const removeFromMeasure = () => {
    setInstruments({
      type: "toggle",
      instrument: instrument,
      instrumentId: number,
      measureIndex: measure,
    });
  };
  // If its empty just return nothing
  if (empty) return <div className={styles.instrument_image}></div>;
  // If its not empty then return something
  return (
    <Draggable
      type="INSTRUMENT-DROPPED"
      key={number}
      draggableId={`${instrument}-${number}-${measure}`}
      index={0}
    >
      {(draggableProvided, draggableSnapshot) => (
        <div
          ref={draggableProvided.innerRef}
          {...draggableProvided.draggableProps}
          {...draggableProvided.dragHandleProps}
          style={getStyle(draggableProvided.draggableProps.style, draggableSnapshot)}
          onClick={removeFromMeasure}
          className={styles.instrument_image}
        >
          {instrument == "cymbal" ? (
            <Cymbal width={50} height={50} fill={colorsMap[number]} />
          ) : instrument == "snare" ? (
            <Snare width={50} height={50} fill={colorsMap[number]} />
          ) : instrument == "kick" ? (
            <Kick width={50} height={50} fill={colorsMap[number]} />
          ) : instrument == "melody" ? (
            <Melody width={50} height={50} fill={colorsMap[number]} />
          ) : instrument == "auxiliary" ? (
            <Auxiliary width={50} height={50} fill={colorsMap[number]} />
          ) : (
            <Bass width={50} height={50} fill={colorsMap[number]} />
          )}
        </div>
      )}
    </Draggable>
  );
};

export default InstrumentImage;
