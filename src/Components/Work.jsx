import { useSpeechContext } from '@speechly/react-client';
import React, { useEffect, useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Work = () => {
    const { transcript, listening, resetTranscript } = useSpeechRecognition();

  

  const [text, Settext] = useState('');
  const [user, Setuser] = useState({name: '', email: ''});
  const {speak} = useSpeechContext();
  const handlespeak=()=>{
    const utterance = new SpeechSynthesisUtterance("ramesh");
    utterance.lang='en-IN'
    speechSynthesis.speak(utterance);
  };
  useEffect(()=>{
    Settext(transcript);
  },[transcript])

  const handlechange=(e)=>{
       Settext(e.target.value);
       Setuser(e.target.value)
  }

  const startListening=()=>{
       SpeechRecognition.startListening({continuous: true, language: 'en-IN'});
       console.log(text);
       
  }

  const stopListening=()=>{
    SpeechRecognition.stopListening();
  }

  if(!SpeechRecognition.browserSupportsSpeechRecognition()){
         return <p>your browser does not support</p>
  }
  const show=()=>{
    console.log(user);
  }
  return (
    <div>
        <h1>hello world</h1>
      <input type='text' value={text} onChange={handlechange}/>
      <div>
        <button onClick={startListening}>startListening</button>
        <button onClick={stopListening}>stopListening</button>
      </div>
      <p>{transcript}</p>
      <pre>{JSON.stringify(listening, null, 2)}</pre>
      <button onClick={show}>show result</button>
      <button onClick={handlespeak}>start speak</button>
    
    </div>
  )
}

export default Work