import React, { useContext } from "react";
import { Droppable } from "react-beautiful-dnd";
import { InstrumentsContext } from "../hooks/InstrumentContext";
import styles from "../styles/Measure2.module.css";
import InstrumentRow from "./InstrumentRow";

const Measure2 = ({id}) => {
  const { instruments } = useContext(InstrumentsContext);
  /**
   * Measure 2 is gonna be similar to measure1, in that active elements are going to be dictated by the instruments
   * context, but unlike the first measure component, its going to be dnd compatible
   * The rendering cycle is gonna be horribly inefficient but thats ok
   */
  const instrumentKeys = Object.keys(instruments);
  return (
    <div className={styles.measure_col}>
      {instrumentKeys.map((key) => {
        // Ima need a droppable for each of the instruments
        return (
          <Droppable
            type="INSTRUMENT"
            direction="horizontal"
            // ensure unique id by identifying with instrument and measure index/id
            droppableId={`measure-${id}-${key}`}
          >
            {(droppableProvided, droppableSnapshot) => {
                // Inside here, return some element that takes in the droppable props needed for correct functionality
                return (
                    <InstrumentRow
                        key={key}
                        droppableProvidedInfo={droppableProvided}
                        measureId={id}
                        instrument={key}>
                            {/**Nothing inside here, let each instrument row handle its own instruments */}
                    </InstrumentRow>
                        
                )
            }}

          </Droppable>
        );
      })}
    </div>
  );
};

export default Measure2;
