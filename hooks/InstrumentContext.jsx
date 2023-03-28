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
    const instrumentKeys = ["kick", "snare", "cymbal", "bass", "melody", "auxiliary"];

    // action.instrument = string identifier for the instrument ("drums", "melody", etc.)
    // action.instrumentId = number identifier for which of the 5 different tracks are to be added
    // action.measureIndex = index of the measure to play/preview/remove the instrument from (0 for the first one, 1 for the second one)

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
            kick: {
                1: ["OFF", "OFF"],
                2: ["OFF", "OFF"],
                3: ["OFF", "OFF"],
                4: ["OFF", "OFF"],
            },
            snare: {
              1: ["OFF", "OFF"],
              2: ["OFF", "OFF"],
              3: ["OFF", "OFF"],
              4: ["OFF", "OFF"],
            },
            cymbal: {
              1: ["OFF", "OFF"],
              2: ["OFF", "OFF"],
              3: ["OFF", "OFF"],
              4: ["OFF", "OFF"],
            },
            bass: {
                1: ["OFF", "OFF"],
                2: ["OFF", "OFF"],
                3: ["OFF", "OFF"],
                4: ["OFF", "OFF"],
            },
            melody: {
                1: ["OFF", "OFF"],
                2: ["OFF", "OFF"],
                3: ["OFF", "OFF"],
                4: ["OFF", "OFF"],
            },
            auxiliary: {
                1: ["OFF", "OFF"],
                2: ["OFF", "OFF"],
                3: ["OFF", "OFF"],
                4: ["OFF", "OFF"],
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
    Transport.bpm.value = 120;
    samples.current = new Players(
      {
        
        "auxiliary1": "/Lead1_resonance.mp3",
        "kick1": "/Kick 1.wav",
        "kick2": "/Kick 2.wav",
        "kick3": "/Kick 3.wav",
        "kick4": "/Kick 4.wav",
        "snare1": "/Snare 1.wav",
        "snare2": "/Snare 2.wav",
        "snare3": "/Snare 3.wav",
        "snare4": "/Snare 4.wav",
        "cymbal1": "/Cymbal 1.wav",
        "cymbal2": "/Cymbal 2.wav",
        "cymbal3": "/Cymbal 3.wav",
        "cymbal4": "/Cymbal 4.wav",
        "melody2" : "/Melody 1.wav",
        "auxiliary3": "/Aux 1.wav",
        "bass4": "/Bass 1.wav"
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
          
          instrumentKeys.forEach((key) => {
            for (let i = 1; i < 5; i++) {
              let instrumentState = instruments[key][i][0];
              if (instrumentState != "OFF") {
                samples.current.player(`${key}${i}`).start(time);
              }
            }
          })
        }
        if (beat == 4) {
          instrumentKeys.forEach((key) => {
            for (let i = 1; i < 5; i++) {
              let instrumentState = instruments[key][i][1];
              if (instrumentState != "OFF") {
                samples.current.player(`${key}${i}`).start(time);
              }
            }
          })
        }
      },
      [0, 1, 2, 3, 4, 5, 6, 7],
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