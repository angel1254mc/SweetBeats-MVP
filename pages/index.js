import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import InstrumentContainer from '../components/InstrumentContainer'
import { useEffect, useState } from 'react'
import MeasuresContainer from '../components/MeasuresContainer'
import WebAudioScheduler from 'web-audio-scheduler/lib/WebAudioScheduler'
import {InstrumentsContextProvider} from '../hooks/InstrumentContext'

const inter = Inter({ subsets: ['latin'] })

let audioContext;
  let sched;
  let masterGain = null;
  let arp1Buffer;
  let lead1Buffer;
  let chord1Buffer;
  let chord2Buffer;
  let sourceArp1;
  let sourceLead1;
  let sourceChord1;
  let sourceChord2;
  async function fetchFile(fileURL) {
    let response = await fetch(fileURL)
    let arrayBuffer = await response.arrayBuffer();
    let audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    return audioBuffer
  }
  function metronome(e) {
    var t0 = e.playbackTime;

    sched.insert(t0 + 0.000, arpHome, { frequency: 880, duration: 5.65 });
    sched.insert(t0 + 0.000, leadHome, { frequency: 880, duration: 5.65 });
    sched.insert(t0 + 0.000, chordHome, {duration: 5.65});
    sched.insert(t0 + 5.65, chord2Home, {duration: 5.65});
    sched.insert(t0 + 11.3, metronome);
  }

  function chord2Home(e) {
    let sourceChord2 = audioContext.createBufferSource();
    sourceChord2.buffer = chord2Buffer;
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
  function chordHome(e) {
    let sourceChord1 = audioContext.createBufferSource();
    sourceChord1.buffer = chord1Buffer;
    let t0 = e.playbackTime;
    let t1 = t0 + e.args.duration;
    var amp = audioContext.createGain();
    sourceChord1.connect(amp);

    amp.gain.setValueAtTime(0.5, t0);
    amp.gain.exponentialRampToValueAtTime(0.4, t1);
    amp.connect(masterGain);
    sourceChord1.start(t0);
    sourceChord1.stop(t1);
    sched.nextTick(t1, function() {
      sourceChord1.disconnect();
      amp.disconnect();
    });
  }
  function arpHome(e) {
    let sourceArp1 = audioContext.createBufferSource();
    sourceArp1.buffer = arp1Buffer;
    let t0 = e.playbackTime;
    let t1 = t0 + e.args.duration;
    var amp = audioContext.createGain();
    sourceArp1.connect(amp);


    amp.gain.setValueAtTime(0.5, t0);
    amp.gain.exponentialRampToValueAtTime(0.4, t1);
    amp.connect(masterGain);
    sourceArp1.start(t0);
    sourceArp1.stop(t1);
    sched.nextTick(t1, function() {
      sourceArp1.disconnect();
      amp.disconnect();
    });
  }
  function leadHome(e) {
    let sourceLead1 = audioContext.createBufferSource();
    sourceLead1.buffer = lead1Buffer;
    let t0 = e.playbackTime;
    let t1 = t0 + e.args.duration;
    var amp = audioContext.createGain();
    sourceLead1.connect(amp);

    amp.gain.setValueAtTime(0.5, t0);
    amp.gain.exponentialRampToValueAtTime(0.4, t1);
    amp.connect(masterGain);
    sourceLead1.start(t0);
    sourceLead1.stop(t1);
    sched.nextTick(t1, function() {
      sourceLead1.disconnect();
      amp.disconnect();
    });
  }

  function start() {
    sched.start(metronome);
  }

  function stop() {
    sched.stop(true);
  }
  
export default function Home() {
  const [togglePlayer, setTogglePlayer] = useState(false);
  const [gesture, setGesture] = useState(false);
  const [activeInstruments, setActiveInstruments] = useState({})
  
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

    arp1Buffer = await fetchFile("https://cdn.shopify.com/s/files/1/0157/3493/1504/files/Arp_resonance.mp3?v=1589768873");
    lead1Buffer = await fetchFile("https://cdn.shopify.com/s/files/1/0157/3493/1504/files/LEAD_resonance.mp3?v=1589771759");
    chord1Buffer = await fetchFile("Chord1_resonance.mp3");
    chord2Buffer = await fetchFile("Chord2_resonance.mp3");
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <InstrumentsContextProvider>
        <div className="main_app_container">
          {
            !gesture ? 
            <div className="initialize-audio-overlay">
            <button className="initialize-audio-button" onClick={() => {
              initializeAudioContext();
              setGesture(true);
            }}>Click Here to Initialize Audio Context!</button>
          </div> : <></>}
          <MeasuresContainer/>
          <div className="instruments">
            <div className="instrument-types-label">
              Instrument Types
              <button onClick={() => {
                setTogglePlayer(!togglePlayer);
                if (togglePlayer) {
                  start();
                } else {
                  stop();
                }
              }}>Start</button>
            </div>
            <div className="instruments-container">
              <InstrumentContainer name="drums" color="#455192" instrument_ident="drums"/>
              <InstrumentContainer name="bass" color="#779F68" instrument_ident="bass"/>
              <InstrumentContainer name="melody" color="#B95264" instrument_ident="melody"/>
              <InstrumentContainer name="auxiliary" color="#D2C761" instrument_ident="auxiliary"/>
            </div>
          </div>
        </div>
        </InstrumentsContextProvider>
      </main>
    </>
  )
}
