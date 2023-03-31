import React, { createContext, useCallback, useEffect, useReducer, useRef, useState } from 'react'
import { Players, Sequence } from 'tone';
import { Transport, start as toneStart } from 'tone';
import WebAudioScheduler from 'web-audio-scheduler/lib/WebAudioScheduler'


export const InstrumentsContext = createContext(null);


const InstrumentsContextProvider = ({children}) => {
    const [loaded, setLoaded] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [measureChords, setMeasureChords] = useReducer((state, newState) => {
      let stateCopy =  {...state};
      stateCopy["chordKey"][0] = newState[0];
      stateCopy["chordKey"][1] = newState[1];
      return stateCopy;
    },{"chordKey": {0:"I", 1:"IV"}});

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

        "melody1I": "/Lead 1 I.wav",
        "melody2I": "/Lead 2 I.wav",
        "melody3I": "/Lead 3 I.wav",
        "melody4I": "/Lead 4 I.wav",
        "auxiliary1I": "/Aux 1 I.wav",
        "auxiliary2I": "/Aux 2 I.wav",
        "auxiliary3I": "/Aux 3 I.wav",
        "auxiliary4I": "/Aux 4 I.wav",
        "bass1I": "/Bass 1 I.wav",
        "bass2I": "/Bass 2 I.wav",
        "bass3I": "/Bass 3 I.wav",
        "bass4I": "/Bass 4 I.wav",

        "melody1II": "/Lead 1 bII.wav",
        "melody2II": "/Lead 2 bII.wav",
        "melody3II": "/Lead 3 bII.wav",
        "melody4II": "/Lead 4 bII.wav",
        "auxiliary1II": "/Aux 1 bII.wav",
        "auxiliary2II": "/Aux 2 bII.wav",
        "auxiliary3II": "/Aux 3 bII.wav",
        "auxiliary4II": "/Aux 4 bII.wav",
        "bass1II": "/Bass 1 bII.wav",
        "bass2II": "/Bass 2 bII.wav",
        "bass3II": "/Bass 3 bII.wav",
        "bass4II": "/Bass 4 bII.wav",

        "melody1III": "/Lead 1 bIII.wav",
        "melody2III": "/Lead 2 bIII.wav",
        "melody3III": "/Lead 3 bIII.wav",
        "melody4III": "/Lead 4 bIII.wav",
        "auxiliary1III": "/Aux 1 bIII.wav",
        "auxiliary2III": "/Aux 2 bIII.wav",
        "auxiliary3III": "/Aux 3 bIII.wav",
        "auxiliary4III": "/Aux 4 bIII.wav",
        "bass1III": "/Bass 1 bIII.wav",
        "bass2III": "/Bass 2 bIII.wav",
        "bass3III": "/Bass 3 bIII.wav",
        "bass4III": "/Bass 4 bIII.wav",

        "melody1IV": "/Lead 1 IV.wav",
        "melody2IV": "/Lead 2 IV.wav",
        "melody3IV": "/Lead 3 IV.wav",
        "melody4IV": "/Lead 4 IV.wav",
        "auxiliary1IV": "/Aux 1 IV.wav",
        "auxiliary2IV": "/Aux 2 IV.wav",
        "auxiliary3IV": "/Aux 3 IV.wav",
        "auxiliary4IV": "/Aux 4 IV.wav",
        "bass1IV": "/Bass 1 IV.wav",
        "bass2IV": "/Bass 2 IV.wav",
        "bass3IV": "/Bass 3 IV.wav",
        "bass4IV": "/Bass 4 IV.wav",

        "melody1V": "/Lead 1 V.wav",
        "melody2V": "/Lead 2 V.wav",
        "melody3V": "/Lead 3 V.wav",
        "melody4V": "/Lead 4 V.wav",
        "auxiliary1V": "/Aux 1 V.wav",
        "auxiliary2V": "/Aux 2 V.wav",
        "auxiliary3V": "/Aux 3 V.wav",
        "auxiliary4V": "/Aux 4 V.wav",
        "bass1V": "/Bass 1 V.wav",
        "bass2V": "/Bass 2 V.wav",
        "bass3V": "/Bass 3 V.wav",
        "bass4V": "/Bass 4 V.wav",
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
          for (let n = 0; n < instrumentKeys.length; n++) {
            const key = instrumentKeys[n];
            console.log(instrumentKeys.length);
            for (let i = 1; i < 5; i++) {
              let instrumentState = instruments[key][i][0];
              if (instrumentState != "OFF") {
                if (["bass", "melody", "auxiliary"].indexOf(key) != -1) {
                  let chord = measureChords["chordKey"][0];
                  samples.current.player(`${key}${i}${chord}`).start(time);
                }
                else
                  samples.current.player(`${key}${i}`).start(time);
              }
            }
          }
        }
        if (beat == 4) {
          console.log(measureChords[1])
          instrumentKeys.forEach((key) => {
            for (let i = 1; i < 5; i++) {
              let instrumentState = instruments[key][i][1];
              if (instrumentState != "OFF") {
                if (["bass", "melody", "auxiliary"].indexOf(key) != -1) {
                  let chord = measureChords["chordKey"][1];
                  console.log(chord);
                  samples.current.player(`${key}${i}${chord}`).start(time);
                }
                else
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
        <InstrumentsContext.Provider value={{instruments, setInstruments, start, stop, measureChords, setMeasureChords}}>
            {children}
        </InstrumentsContext.Provider>
    )
}

export {InstrumentsContextProvider};