import React, { createContext, useEffect, useReducer, useState } from 'react'
import WebAudioScheduler from 'web-audio-scheduler/lib/WebAudioScheduler'


export const InstrumentsContext = createContext(null);

/**
 * Context is aware of itself and webaudio api, webaudio api is only aware of itself- no access to constant variables
 * 
 * On every change of Instruments, refresh our local "Instruments" variable that web audio api can access
 */


let audioContext;
  let sched;
  let masterGain = null;
  
  let arp1Buffer;
  let arp2Buffer;
  let arp3Buffer;
  let arp4Buffer;
  let arp5Buffer;

  let lead1Buffer;
  let lead2Buffer;
  let lead3Buffer;
  let lead4Buffer;
  let lead5Buffer;
  
  let chord1Buffer;
  let chord2Buffer;
  let chord3Buffer;
  let chord4Buffer;
  let chord5Buffer;
  let sourceArp1;
  let sourceLead1;
  let sourceChord1;
  let sourceChord2;
  let bpm = 85;
  let measureLength = 5.65;
  let instrumentBuffers = {
    drums: {
    },
    bass: {
    },
    melody: {
    },
    auxiliary: {
    }
    
  }
  let currInstruments = {
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
    }
};
const fetchAudios = async () => {
    instrumentBuffers["auxiliary"][1] = await fetchFile("https://cdn.shopify.com/s/files/1/0157/3493/1504/files/Arp_resonance.mp3?v=1589768873");
    instrumentBuffers["melody"][2] = await fetchFile("https://cdn.shopify.com/s/files/1/0157/3493/1504/files/LEAD_resonance.mp3?v=1589771759");
    instrumentBuffers["melody"][1] = await fetchFile("Chord1_resonance.mp3");
    instrumentBuffers["melody"][3] = await fetchFile("Chord2_resonance.mp3");
    console.log(chord2Buffer);
}
  async function fetchFile(fileURL) {
    let response = await fetch(fileURL)
    let arrayBuffer = await response.arrayBuffer();
    let audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    return audioBuffer
  }
  function metronome(e) {
    var t0 = e.playbackTime;
    console.log(arp1Buffer);
    if (typeof currInstruments != undefined) {
        // for each measure
        for (let i = 0; i < 2; i++) {
            let instrumentKeys = Object.keys(currInstruments);
            // For each instrument
            instrumentKeys.forEach((instrument) => {
                // and each distinct instrument beat
                for (let j = 1; j < 6; j++) {
                    // insert it into the schedule for the given measure
                    if (currInstruments[instrument][j][i] != "OFF") {
                        console.log(instrumentBuffers[instrument][j]);
                        sched.insert(t0 + i*measureLength, measureHome, {duration: 5.65, buffer: instrumentBuffers[instrument][j]} )
                    }
                }
            })
        }
    }
    sched.insert(t0 + 11.3, metronome);
  }

  function measureHome(e) {

    let sourceChord2 = audioContext.createBufferSource();
    console.log("buffer argument");
    console.log(e.buffer);
    sourceChord2.buffer = e.args.buffer;
    let t0 = e.playbackTime;
    let t1 = t0 + e.args.duration;
    var amp = audioContext.createGain();
    sourceChord2.connect(amp);

    amp.gain.setValueAtTime(0.5, t0);
    amp.gain.exponentialRampToValueAtTime(0.4, t1);
    amp.connect(masterGain);
    sourceChord2.start(t0);
    sourceChord2.stop(t1);
    sched.nextTick(t1, function() {
      sourceChord2.disconnect();
      amp.disconnect();
    });
  }
  
const InstrumentsContextProvider = ({children}) => {
    const [chordProgression, setChordProgression] = useState([]);
    const reducer = (state, action) => {

        let stateCopy = {...state};
        if (action.type == "toggle") {

            if (stateCopy[action.instrument][action.instrumentId][action.measureIndex] == "ON") {
                stateCopy[action.instrument][action.instrumentId][action.measureIndex] = "OFF";
                currInstruments[action.instrument][action.instrumentId][action.measureIndex] = "OFF"
                return stateCopy;
            } else if (stateCopy[action.instrument][action.instrumentId][action.measureIndex] == "OFF" || stateCopy[action.instrument][action.instrumentId][action.measureIndex] == "PREVIEW") {
                
                stateCopy[action.instrument][action.instrumentId][action.measureIndex] = "ON";
                currInstruments[action.instrument][action.instrumentId][action.measureIndex] = "ON";
                return stateCopy;
            }
        }
        if (action.type == "preview" && stateCopy[action.instrument][action.instrumentId][action.measureIndex] != "ON") {
            stateCopy[action.instrument][action.instrumentId][action.measureIndex] = "PREVIEW";
            currInstruments[action.instrument][action.instrumentId][action.measureIndex] = "PREVIEW"
            return stateCopy;
        }
        if (action.type == "unpreview" && stateCopy[action.instrument][action.instrumentId][action.measureIndex] != "ON") {
            stateCopy[action.instrument][action.instrumentId][action.measureIndex] = "OFF";
            currInstruments[action.instrument][action.instrumentId][action.measureIndex] = "OFF"
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

          // This is where shit gets real
  // You Are Now Watching a React Bad Practice Master at Work
  // Using example fromm web audio scheduler
  const initializeAudioContext = async () => { 
    // Create the global audio context
    audioContext = new AudioContext();

    // Create the web audio scheduler
    sched = new WebAudioScheduler({ context: audioContext });
    // Establish dispatch listeners to handle start case
    sched.on("start", function() {
      masterGain = audioContext.createGain();
      masterGain.connect(audioContext.destination);
    });
  
    // Establish another dispatch listener to handle exit case
    sched.on("stop", function() {
      masterGain.disconnect();
      masterGain = null;
    });
    fetchAudios();
  }

  function start() {
    sched.start(metronome);
  }

  function stop() {
    sched.stop(true);
  }



    return (
        <InstrumentsContext.Provider value={{instruments, setInstruments, initializeAudioContext, start, stop}}>
            {children}
        </InstrumentsContext.Provider>
    )
}

export {InstrumentsContextProvider};