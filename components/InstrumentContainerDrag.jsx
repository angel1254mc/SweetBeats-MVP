import React, { useContext, useEffect, useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { InstrumentsContext } from "../hooks/InstrumentContext";
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
const InstrumentContainerDrag = ({ name, color, instrument_ident }) => {
  const { instruments, setInstruments } = useContext(InstrumentsContext);
  const upperString = name.charAt(0).toUpperCase() + name.slice(1);
  const colorsMap = {
    /*
    1: "#D2C761",
    2: "#79606C",
    3: "#779F68",
    4: "#B95264",
    5: "#455192",
    6: "#f003fc",
    7: "#03e7fc",
    8: "#35fc03",
    9: "#9d03fc",
    10: "#fc9403",
    11: "#038cfc",
    12: "#fc5a03",
    */
    1: "#9d03fc",
    2: "#c21b1b",
    3: "#1f870c",
    4: "#1b49bf",
    5: "#455192",
  };

  // This function disables the drop animation
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

  const [winReady, setwinReady] = useState(false);
    useEffect(() => {
        setwinReady(true);
    }, []);
    if (!winReady || !instruments) {
        return <></>
    }
  if (instrument_ident == "kick")
    return (
      <div className={`${name} instrument-container`}>
        <div className={`${name} label`}>
          <div className="instrument-label" style={{ backgroundColor: color }}>
            {upperString}
          </div>
        </div>
        <div className="instrument-buttons">
          {Object.keys(instruments[instrument_ident]).map((key, index) => {
            return (
                <div key={key} className={`${name} button-container-${key}`}>
                  <p>{key}</p>
                  <Droppable
                    type="INSTRUMENT"
                    droppableId={`droppable-${instrument_ident}-${key}`}
                  >
                    {(droppableProvided, droppableSnapshot) => {
                      return (
                        <div
                          width={30}
                          ref={droppableProvided.innerRef}
                          {...droppableProvided.droppableProps}
                        >
                          <Draggable
                            type="INSTRUMENT"
                            key={key}
                            draggableId={`${instrument_ident}-${key}`}
                            index={index}
                          >
                            {(draggableProvided, draggableSnapshot) => {
                              return (
                                <div
                                  ref={draggableProvided.innerRef}
                                  {...draggableProvided.draggableProps}
                                  {...draggableProvided.dragHandleProps}
                                  style={getStyle(draggableProvided.draggableProps.style, draggableSnapshot)}
                                  isDragging={draggableSnapshot.isDragging && !draggableSnapshot.isDropAnimating}
                                >
                                  <Kick
                                    width={30}
                                    height={30}
                                    fill={colorsMap[key]}
                                  />
                                </div>
                              );
                            }}
                          </Draggable>
                        </div>
                      );
                    }}
                  </Droppable>
                </div>
              )
          })}
        </div>
      </div>
    );
    if (instrument_ident == "snare")
    return (
      <div className={`${name} instrument-container`}>
        <div className={`${name} label`}>
          <div className="instrument-label" style={{ backgroundColor: color }}>
            {upperString}
          </div>
        </div>
        <div className="instrument-buttons">
          {Object.keys(instruments[instrument_ident]).map((key, index) => {
            return (
                <div key={key} className={`${name} button-container-${key}`}>
                  <p>{key}</p>
                  <Droppable
                    type="INSTRUMENT"
                    droppableId={`droppable-${instrument_ident}-${key}`}
                  >
                    {(droppableProvided, droppableSnapshot) => {
                      return (
                        <div
                          width={30}
                          ref={droppableProvided.innerRef}
                          {...droppableProvided.droppableProps}
                        >
                          <Draggable
                            type="INSTRUMENT"
                            key={key}
                            draggableId={`${instrument_ident}-${key}`}
                            index={index}
                          >
                            {(draggableProvided, draggableSnapshot) => {
                              return (
                                <div
                                  ref={draggableProvided.innerRef}
                                  {...draggableProvided.draggableProps}
                                  {...draggableProvided.dragHandleProps}
                                  style={getStyle(draggableProvided.draggableProps.style, draggableSnapshot)}
                                  isDragging={draggableSnapshot.isDragging && !draggableSnapshot.isDropAnimating}
                                >
                                  <Snare
                                    width={30}
                                    height={30}
                                    fill={colorsMap[key]}
                                  />
                                </div>
                              );
                            }}
                          </Draggable>
                        </div>
                      );
                    }}
                  </Droppable>
                </div>
              )
          })}
        </div>
      </div>
    );
    if (instrument_ident == "cymbal")
    return (
      <div className={`${name} instrument-container`}>
        <div className={`${name} label`}>
          <div className="instrument-label" style={{ backgroundColor: color }}>
            {upperString}
          </div>
        </div>
        <div className="instrument-buttons">
          {Object.keys(instruments[instrument_ident]).map((key, index) => {
            return (
                <div key={key} className={`${name} button-container-${key}`}>
                  <p>{key}</p>
                  <Droppable
                    type="INSTRUMENT"
                    droppableId={`droppable-${instrument_ident}-${key}`}
                  >
                    {(droppableProvided, droppableSnapshot) => {
                      return (
                        <div
                          width={30}
                          ref={droppableProvided.innerRef}
                          {...droppableProvided.droppableProps}
                        >
                          <Draggable
                            type="INSTRUMENT"
                            key={key}
                            draggableId={`${instrument_ident}-${key}`}
                            index={index}
                          >
                            {(draggableProvided, draggableSnapshot) => {
                              return (
                                <div
                                  ref={draggableProvided.innerRef}
                                  {...draggableProvided.draggableProps}
                                  {...draggableProvided.dragHandleProps}
                                  style={getStyle(draggableProvided.draggableProps.style, draggableSnapshot)}
                                  isDragging={draggableSnapshot.isDragging && !draggableSnapshot.isDropAnimating}
                                >
                                  <Cymbal
                                    width={30}
                                    height={30}
                                    fill={colorsMap[key]}
                                  />
                                </div>
                              );
                            }}
                          </Draggable>
                        </div>
                      );
                    }}
                  </Droppable>
                </div>
              )
          })}
        </div>
      </div>
    );
  if (instrument_ident == "bass")
    return (
      <div className={`${name} instrument-container`}>
        <div className={`${name} label`}>
          <div className="instrument-label" style={{ backgroundColor: color }}>
            {upperString}
          </div>
        </div>
        <div className="instrument-buttons">
          {Object.keys(instruments[instrument_ident]).map((key, index) => {
            return (
                <div key={key} className={`${name} button-container-${key}`}>
                  <p>{key}</p>
                  <Droppable
                    type="INSTRUMENT"
                    droppableId={`droppable-${instrument_ident}-${key}`}
                  >
                    {(droppableProvided, droppableSnapshot) => {
                      return (
                        <div
                          width={30}
                          ref={droppableProvided.innerRef}
                          {...droppableProvided.droppableProps}
                        >
                          <Draggable
                            type="INSTRUMENT"
                            key={key}
                            draggableId={`${instrument_ident}-${key}`}
                            index={index}
                          >
                            {(draggableProvided, draggableSnapshot) => {
                              return (
                                <div
                                  ref={draggableProvided.innerRef}
                                  {...draggableProvided.draggableProps}
                                  {...draggableProvided.dragHandleProps}
                                  style={getStyle(draggableProvided.draggableProps.style, draggableSnapshot)}
                                  isDragging={draggableSnapshot.isDragging && !draggableSnapshot.isDropAnimating}
                                >
                                  <Bass
                                    width={30}
                                    height={30}
                                    fill={colorsMap[key]}
                                  />
                                </div>
                              );
                            }}
                          </Draggable>
                        </div>
                      );
                    }}
                  </Droppable>
                </div>
              )
          })}
        </div>
      </div>
    );
  if (instrument_ident == "melody")
    return (
      <div className={`${name} instrument-container`}>
        <div className={`${name} label`}>
          <div className="instrument-label" style={{ backgroundColor: color }}>
            {upperString}
          </div>
        </div>
        <div className="instrument-buttons">
          {Object.keys(instruments[instrument_ident]).map((key, index) => {
            return (
              <div key={key} className={`${name} button-container-${key}`}>
                <p>{key}</p>
                <Droppable
                  type="INSTRUMENT"
                  droppableId={`droppable-${instrument_ident}-${key}`}
                >
                  {(droppableProvided, droppableSnapshot) => {
                    return (
                      <div
                        width={30}
                        ref={droppableProvided.innerRef}
                        {...droppableProvided.droppableProps}
                      >
                        <Draggable
                          type="INSTRUMENT"
                          key={key}
                          draggableId={`${instrument_ident}-${key}`}
                          index={index}
                        >
                          {(draggableProvided, draggableSnapshot) => {
                            return (
                              <div
                                ref={draggableProvided.innerRef}
                                {...draggableProvided.draggableProps}
                                {...draggableProvided.dragHandleProps}
                                style={getStyle(draggableProvided.draggableProps.style, draggableSnapshot)}
                                isDragging={draggableSnapshot.isDragging && !draggableSnapshot.isDropAnimating}
                              >
                                <Melody
                                  width={30}
                                  height={30}
                                  fill={colorsMap[key]}
                                />
                              </div>
                            );
                          }}
                        </Draggable>
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            );
          })}
        </div>
      </div>
    );
  if (instrument_ident == "auxiliary")
    return (
      <div className={`${name} instrument-container`}>
        <div className={`${name} label`}>
          <div className="instrument-label" style={{ backgroundColor: color }}>
            {upperString}
          </div>
        </div>
        <div className="instrument-buttons">
          {Object.keys(instruments[instrument_ident]).map((key, index) => {
            return (
                <div key={key} className={`${name} button-container-${key}`}>
                  <p>{key}</p>
                  <Droppable
                    type="INSTRUMENT"
                    droppableId={`droppable-${instrument_ident}-${key}`}
                  >
                    {(droppableProvided, droppableSnapshot) => {
                      return (
                        <div
                          width={30}
                          ref={droppableProvided.innerRef}
                          {...droppableProvided.droppableProps}
                        >
                          <Draggable
                            type="INSTRUMENT"
                            key={key}
                            draggableId={`${instrument_ident}-${key}`}
                            index={index}
                          >
                            {(draggableProvided, draggableSnapshot) => {
                              return (
                                <div
                                  ref={draggableProvided.innerRef}
                                  {...draggableProvided.draggableProps}
                                  {...draggableProvided.dragHandleProps}
                                  style={getStyle(draggableProvided.draggableProps.style, draggableSnapshot)}
                                  isDragging={draggableSnapshot.isDragging && !draggableSnapshot.isDropAnimating}
                                >
                                  <Auxiliary
                                    width={30}
                                    height={30}
                                    fill={colorsMap[key]}
                                  />
                                </div>
                              );
                            }}
                          </Draggable>
                        </div>
                      );
                    }}
                  </Droppable>
                </div>
              )
          })}
        </div>
      </div>
    );
};

export default InstrumentContainerDrag;
