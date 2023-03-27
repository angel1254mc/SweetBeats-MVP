import React, { useContext, useEffect, useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { InstrumentsContext } from "../hooks/InstrumentContext";
import Circle from "../public/circle.svg";
import Pentagon from "../public/pentagon.svg";
import Square from "../public/square.svg";
import Triangle from "../public/triangle.svg";
const InstrumentContainerDrag = ({ name, color, instrument_ident }) => {
  const { instruments, setInstruments } = useContext(InstrumentsContext);
  const upperString = name.charAt(0).toUpperCase() + name.slice(1);
  const colorsMap = {
    1: "#D2C761",
    2: "#79606C",
    3: "#779F68",
    4: "#B95264",
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
  if (instrument_ident == "drums")
    return (
      <div className={`${name} instrument-container`}>
        <div className={`${name} label`}>
          <div className="instrument-label" styles={{ backgroundColor: color }}>
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
                                  <Circle
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
                                  <Triangle
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
                                <Square
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
                                  <Pentagon
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
