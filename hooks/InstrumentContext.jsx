import React, { createContext, useEffect, useReducer, useRef, useState } from 'react'
import { Players, Sequence } from 'tone';
import { Transport, start as toneStart } from 'tone';
import WebAudioScheduler from 'web-audio-scheduler/lib/WebAudioScheduler'


export const InstrumentsContext = createContext(null);


const InstrumentsContextProvider = ({children}) => {
    const [loaded, setLoaded] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    const loop = useRef();
    const samples = useRef();

    const reducer = (state, action) => {
        let stateCopy = {...state};
        if (action.type == "toggle") {

            if (stateCopy[action.instrument][action.instrumentId][action.measureIndex] == "ON") {
                stateCopy[action.instrument][action.instrumentId][action.measureIndex] = "OFF";
                return stateCopy;
            } else if (stateCopy[action.instrument][action.instrumentId][action.measureIndex] == "OFF" || stateCopy[action.instrument][action.instrumentId][action.measureIndex] == "PREVIEW") {
                
                stateCopy[action.instrument][action.instrumentId][action.measureIndex] = "ON";
                return stateCopy;
            }
        }
        if (action.type == "preview" && stateCopy[action.instrument][action.instrumentId][action.measureIndex] != "ON") {
            stateCopy[action.instrument][action.instrumentId][action.measureIndex] = "PREVIEW";
            return stateCopy;
        }
        if (action.type == "unpreview" && stateCopy[action.instrument][action.instrumentId][action.measureIndex] != "ON") {
            stateCopy[action.instrument][action.instrumentId][action.measureIndex] = "OFF";
            return stateCopy;
        }
        return stateCopy;
    }
    const [instruments, setInstruments] = useReducer(reducer, {
            drums: {
                1: ["OFF", "OFF"],
                2: ["OFF", "OFF"],
                3: ["OFF", "OFF"],
                4: ["OFF", "OFF"],
                5: ["OFF", "OFF"],
            },
            bass: {
                1: ["OFF", "OFF"],
                2: ["OFF", "OFF"],
                3: ["OFF", "OFF"],
                4: ["OFF", "OFF"],
                5: ["OFF", "OFF"],
            },
            melody: {
                1: ["OFF", "OFF"],
                2: ["OFF", "OFF"],
                3: ["OFF", "OFF"],
                4: ["OFF", "OFF"],
                5: ["OFF", "OFF"],
            },
            auxiliary: {
                1: ["OFF", "OFF"],
                2: ["OFF", "OFF"],
                3: ["OFF", "OFF"],
                4: ["OFF", "OFF"],
                5: ["OFF", "OFF"],
            },
    });
  const start = () => {
    toneStart();
    Transport.start();
  }
  const stop = () => {  
    Transport.stop();
    samples.current.stopAll();
  }
  useEffect(() => {
    // Loads our stuff at the start of the program - namely our mp3 files for melodies, auxiliaries, bass, etc.
    Transport.bpm.value = 85;
    samples.current = new Players(
      {
        "melody1": "/Chord1_resonance.mp3",
        "melody2": "/Chord2_resonance.mp3",
        "auxiliary1": "/Lead1_resonance.mp3",
      },
      {
        onload: () => {
          setLoaded(true);
        }
      }
    ).toDestination();
  }, []);

  useEffect(() => {
    
    // Get rid of any leftover loop from previous isPlaying
    if (loop.current) {
      loop.current.dispose();
    }

    // Instantiate a single new loop to take care of scheduling
    //  Configured as a 85bpm track, but takes in four loops of 4 beats (and each of our measures is 8 beats so it works)
    loop.current = new Sequence(
      (time, beat) => {
        if (beat == 0) {
          console.log(samples.current);
          samples.current.player("melody1").start(time);
        }
        if (beat == 8) {
          samples.current.player("melody2").start(time);
        }
      },
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      "4n"
    ).start(0);
  },[isPlaying]);



    return (
        <InstrumentsContext.Provider value={{instruments, setInstruments, start, stop}}>
            {children}
        </InstrumentsContext.Provider>
    )
}

export {InstrumentsContextProvider};