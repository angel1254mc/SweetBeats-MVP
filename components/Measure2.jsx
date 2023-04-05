import React, { useContext } from "react";
import { Droppable } from "react-beautiful-dnd";
import { InstrumentsContext } from "../hooks/InstrumentContext";
import styles from "../styles/Measure2.module.css";
import InstrumentRow from "./InstrumentRow";

const Measure2 = ({id}) => {
  const { instruments, isPlaying } = useContext(InstrumentsContext);
  /**
   * Measure 2 is gonna be similar to measure1, in that active elements are going to be dictated by the instruments
   * context, but unlike the first measure component, its going to be dnd compatible
   * The rendering cycle is gonna be horribly inefficient but thats ok
   */
  const instrumentKeys = Object.keys(instruments);
  return (
    <Droppable
            type="INSTRUMENT"
            direction="horizontal"
            // ensure unique id by identifying with instrument and measure index/id
            droppableId={`measure-${id}`}
          >
             {(droppableProvided, droppableSnapshot) => {
                // Inside here, return some element that takes in the droppable props needed for correct functionality
                return (
                  <div 
                  ref={droppableProvided.innerRef}
                  {...droppableProvided.droppableProps}
                  className={styles.measure_col}>
                    {id == 0 ? <div className="DND" id="myText2" style = {{
                        animationName: isPlaying ? 'cruiseRight' : ''
                    }} /> : null}
                    {instrumentKeys.map((key) => {
                      return (
                        <InstrumentRow
                            key={key}
                            measureId={id}
                            instrument={key}>
                                {/**Nothing inside here, let each instrument row handle its own instruments */}
                        </InstrumentRow>
                      )
                    })}
                    
                  </div>
                )}}
    </Droppable>
  );
};

export default Measure2;
