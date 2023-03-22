import React, { useContext } from "react";
import { InstrumentsContext } from "../hooks/InstrumentContext";
import styles from "../styles/Measure2.module.css";
import InstrumentImage from "./InstrumentImage";
const InstrumentRow = ({instrument, measureId }) => {
  const { instruments } = useContext(InstrumentsContext);
  // Grab the instruments from the instrument context, check if the instruments matching 'instrument' exist in the current row
  // if they do exist, render them in their correct spot
  // Otherwise just dont render them
  return (
    <div
      className={styles.row}
    >
      {
        // Top ten worst practices I've engaged in for sure
        [1, 2, 3, 4, 5].map((instrument_number) => {
          if (instruments[instrument][instrument_number][measureId] != "ON") {
            return <InstrumentImage key={instrument_number} empty={true}/>
          } else return <InstrumentImage key={instrument_number} instrument={instrument} number={instrument_number} measure={measureId} />;
        })
      }
    </div>
  );
};

export default InstrumentRow;
