import { Button, TextField } from '@mui/material'
import React from 'react'

const Inputfeild = ({instance}) => {

    const { transcript, resetTranscript } = instance;

    const handleListen = () => {
        instance.startListening();
    };


  return (
    <div>
        <div className='flex flex-row items-center justify-center'>
              <div><TextField value={transcript} /></div>
              <div><Button variant='contained' onClick={handleListen}>Start</Button></div>
              <div><Button variant='contained' onClick={instance.stopListening}>Stop</Button></div>
        </div>
    </div>
  )
}

export default Inputfeild