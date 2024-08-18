import React, { useState, useEffect } from 'react';

const VoiceToText = () => {
  // State for transcripts
  const [transcript1, setTranscript1] = useState("");
  const [transcript2, setTranscript2] = useState("");

  // Create SpeechRecognition instances
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition1 = new SpeechRecognition();
  const recognition2 = new SpeechRecognition();

  // Configure recognition1
  recognition1.continuous = true;
  recognition1.interimResults = true;
  recognition1.onresult = (event) => {
    const result = event.results[event.resultIndex];
    if (result.isFinal) {
      setTranscript1((prev) => prev + result[0].transcript);
    }
  };

  // Configure recognition2
  recognition2.continuous = true;
  recognition2.interimResults = true;
  recognition2.onresult = (event) => {
    const result = event.results[event.resultIndex];
    if (result.isFinal) {
      setTranscript2((prev) => prev + result[0].transcript);
    }
  };

  // Start listening for transcript1
  const startListening1 = () => {
    recognition1.start();
  };

  // Stop listening for transcript1
  const stopListening1 = () => {
    recognition1.stop();
  };

  // Start listening for transcript2
  const startListening2 = () => {
    recognition2.start();
  };

  // Stop listening for transcript2
  const stopListening2 = () => {
    recognition2.stop();
  };

  return (
    <div>
      <div>
        <h3>Transcript 1:</h3>
        <p>{transcript1}</p>
        <button onClick={startListening1}>Start Listening 1</button>
        <button onClick={stopListening1}>Stop Listening 1</button>
      </div>

      <div>
        <h3>Transcript 2:</h3>
        <p>{transcript2}</p>
        <button onClick={startListening2}>Start Listening 2</button>
        <button onClick={stopListening2}>Stop Listening 2</button>
      </div>
    </div>
  );
};

export default VoiceToText;