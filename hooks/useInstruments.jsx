import React from 'react'

const useInstruments = () => {
    const [chordProgression, setChordProgression] = useState([]);
    const [instruments, setInstruments] = useState({
            drums: {
                1: [false, false],
                2: [false, false],
                3: [false, false],
                4: [false, false],
                5: [false, false],
            },
            bass: {
                1: [false, false],
                2: [false, false],
                3: [false, false],
                4: [false, false],
                5: [false, false],
            },
            melody: {
                1: [false, false],
                2: [false, false],
                3: [false, false],
                4: [false, false],
                5: [false, false],
            },
            auxiliary: {
                1: [false, false],
                2: [false, false],
                3: [false, false],
                4: [false, false],
                5: [false, false],
            },
    });

    useEffect(() => {

    }, [])
    return [

  ]
}

export default useInstruments