import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Route, Routes } from 'react-router-dom';
import Work from './Components/Work';
import Frontpage from './Components/Frontpage';
import Working from './Components/Working';
import Spaeker from './Components/Spaeker';
import VoiceToText from './Components/VoiceToText';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Frontpage />}></Route>
        <Route path='/work' element={<Work />}></Route>
        <Route path='/working' element={<Working />}></Route>
        <Route path='/finally' element={<Spaeker />}></Route>
        <Route path='/finals' element={<VoiceToText />}></Route>
      </Routes>
    </div>
  );
}

export default App;
