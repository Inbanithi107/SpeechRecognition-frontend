import React, { useEffect, useState } from 'react'


const Working = () => {

    const [transcript, Settranscript] = useState('')

    const recognition = new window.SpeechRecognition();
    recognition.onresult=(event)=>{
        const current = event.resultIndex;
        const transcript = event.results[current]
        [0].transcript;
        Settranscript(transcript);

        
    }

    const handlestart=()=>{
        recognition.start();
    }
    const stoplisten=()=>{
        recognition.stop();
    }

  return (
    <div>
        <p>Transcript: {transcript}</p>
        <div className='flex space-x-5'>
            <button onClick={handlestart}>
            start
        </button>
        <button onClick={stoplisten}> stop</button></div>
        
    </div>
  )
}

export default Working