import Head from 'next/head';
import React, { useContext, useState } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import InstrumentContainer from '../components/InstrumentContainer';
import InstrumentContainerDrag from '../components/InstrumentContainerDrag';
import MeasuresContainer2 from '../components/MeasuresContainer2';
import { InstrumentsContext } from '../hooks/InstrumentContext';
// Yea
/**
 * Program 2 is the same thing as the first program file, except that this one deals
 * with drag and drop
 * @library react-beautiful-drag-n-drop
 * Above library is gonna be the one CARRYING this UI literally
 * Comes with pre-packaged drag and drop events. Hardest part is gonna be parsing
 * the instrument state in a way that the dnd state handler can read it
 * @returns 
 */
export default function Program2() {
    const [togglePlayer, setTogglePlayer] = useState(true);
    const  {start, stop, setInstruments} = useContext(InstrumentsContext);
    const onDragHoverOver = ({}) => {
      // Function that reads if the current draggable is hovering over a measure, previews it when it enters, removes the preview once it leaves.
    }
    const onDragEnd = ({ source, destination, type, draggableId }) => {
      if (!destination) {
        return
      }

      // Get all the info we need for determining instrument activation/preview
      const instrument_ident = draggableId.substring(0, draggableId.length - 2);
      const instrument_number = draggableId.substring(draggableId.length - 1, draggableId.length);
     
      if (destination.droppableId.includes("measure-0")) {
        setInstruments({
          type: "toggle",
          instrument: instrument_ident,
          instrumentId: instrument_number,
          measureIndex: 0
        })
      } else if (destination.droppableId.includes("measure-1")) {
        setInstruments({
          type: "toggle",
          instrument: instrument_ident,
          instrumentId: instrument_number,
          measureIndex: 1
        });
      } 
    }
    return (
      <>
        <Head>
          <title>Alternate Design - Drag and Drop</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="main_app_container">
            <MeasuresContainer2/>
            <div className="instruments">
              <div className="instrument-types-label">
                Instrument Types
                <button onClick={() => {
                  if (togglePlayer) {
                    start();
                  } else {
                    stop();
                  }
                  setTogglePlayer(!togglePlayer);
                }}>Start</button>
              </div>
              <div className="instruments-container">
                <InstrumentContainerDrag name="kick" color="#455192" instrument_ident="kick"/>
                <InstrumentContainerDrag name="snare" color="#455192" instrument_ident="snare"/>
                <InstrumentContainerDrag name="cymbal" color="#455192" instrument_ident="cymbal"/>
                <InstrumentContainerDrag name="bass" color="#779F68" instrument_ident="bass"/>
                <InstrumentContainerDrag name="melody" color="#B95264" instrument_ident="melody"/>
                <InstrumentContainerDrag name="auxiliary" color="#D2C761" instrument_ident="auxiliary"/>
              </div>
            </div>
          </div>
          </DragDropContext>
        </main>
      </>
    )
}
// Oh my gooood