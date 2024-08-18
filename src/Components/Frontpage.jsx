import { Button, FormControl, Input, TextField } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './frontpage.css'

const Frontpage = () => {
  const form = ["Name", "Email", "Mobile", "Location"]
  const [data, setdata] = useState({name: '',mobile: '',email: '',location: ''});
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const [text, Settext] = useState('');
  const [name, Setname] = useState('');
  const [email, Setemail] = useState('');
  const [mobile, Setmobile] = useState('');
  const [location, Setlocation] = useState('');
  const [namedisable, Setnamedisable]=useState(false);
  const [emaildisable, Setemaildisable] = useState(false);
  const [currentfeild, Setcurrentfeild] = useState('name')
  const [currentinput, Setcurrentinput] = useState(0);
  const [namechange, Setnamechange] = useState(true);
  const [emailchange, Setemailchange] = useState(true);
  const [mobilechange, Setmobilechange] = useState(true);
  const [locationchange, Setlocationchange] = useState(true);
  const [namefocus, Setnamefocus] = useState(true);
  const [emailfocus, Setemailfocus] = useState(false);
  const [mobilefocus, Setmobilefocus] = useState(false);
  const [locationfocus, Setlocationfocus] = useState(false);
  const [namefocuso, Setnamefocuso] = useState(true);
  const [emailfocuso, Setemailfocuso] = useState(false);
  const [mobilefocuso, Setmobilefocuso] = useState(false);
  const [locationfocuso, Setlocationfocuso] = useState(false);
  const [currentinputindex, Setcurrentinputindex] = useState(0);
  const nameref=useRef(null);
  const tryreferenc=useRef(null);
  const inputingref = useRef([]);
  const { emailref, mobileref, locationref } = useRef(null);
  
  const disablename=()=>{
     if(nameref.current){
      nameref.current.disabled=true;
     }
  }

  useEffect(()=>{
    if(tryreferenc.current){
      console.log("ffdchbfhn")
      console.log(tryreferenc.current.value);
      const feul = tryreferenc.current.value;
      setdata(prev=>(
        {
          ...prev,
          name: tryreferenc.current.value
        }
      ))
    }
  },[tryreferenc])

  const handletry=()=>{
    resetTranscript();
  }

  useEffect(()=>{
    
    const handlekeyboard=(event)=>{
      if(event.key==='j'){
        startListening();
  
      }
      if(event.key==='f'){
        stoplistening();
      }
      if(event.key===' '){
        handleinputfeild();
      }

      if(event.key==='h'){
        const nextindex = (currentinputindex+1)%inputingref.current.length;
        Setcurrentinputindex(nextindex);
        inputingref.current[nextindex].focus();
      }

      if(event.key==='k'){
         if(namefocus){nameref.current.focus();
         Setnamefocus(false);
         Setemailfocus(true);
      }}
      if(event.key==='d'){
        if(emailfocus){
          emailref.current.focus();
          Setemailfocus(false);
          Setmobilefocus(true);
        }
        
      
      if(mobilefocus){
        mobileref.current.focus();
        Setmobilefocus(false);
        Setlocationfocus(true);
      }
      
    }
    }
    document.addEventListener('keypress', handlekeyboard);
    return(()=>{
      document.removeEventListener('keypress', handlekeyboard)
    })
  },[])
  
  const handlechange=(e)=>{
    const {name, value}=e.target;
    setdata((values)=>({...values, [name]:value}))
  }

  

  const startListening=()=>{
    SpeechRecognition.startListening({continuous: true, language: 'en-IN'});
    console.log(text);
    
    
}

const stoplistening=()=>{
  SpeechRecognition.stopListening();
}

  const handlesubmit=()=>{
     console.log(data);
  }

  const handlespeak=(text)=>{
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang='en-IN'
    speechSynthesis.speak(utterance);
  }

  async function waitforseconds(){
    await new Promise(resolve => setTimeout(resolve, 8000));
  }

  const handleinstructclick=()=>{
       const text = "Welcome to this form filling page through voice assistance If any queries please contact the instructor";
       handlespeak(text);
       waitforseconds();
       const text1='the process is simple as the start button is pressed to speak and stop to stop the proces'
       handlespeak(text1);
       waitforseconds();
       const text2='Repeat this for all the feilds and submit the form'
       handlespeak(text2);
       
  }

  

  const handleinputfeild=()=>{
    Setcurrentinput((prev)=>
    (prev+1)%4);
  };
 
  const handleinputvhange=(e)=>{
    console.log(e.target.name)
    if(e.target.name==='Name'){
      if(namechange){
    Setname(e.target.value);
    Setnamechange(false)
    resetTranscript();
  }
  }
  if(e.target.name==='Email'){
   if(emailchange){
    Setemail(e.target.value)
    Setemailchange(false);
    resetTranscript()
   }
  }
  if(e.target.name==='Mobile'){
    if(mobilechange){
      Setmobile(e.target.value);
      Setmobilechange(false);
      resetTranscript()
    }
  }
  if(e.target.name==='Location'){
    if(locationchange){
      Setlocation(e.target.value);
      Setlocationchange(false);
      resetTranscript();
    }
  }
  }


  const [transcript1, setTranscript1] = useState("");
  const [transcript2, setTranscript2] = useState("");
  const [transcript3, SetTranscript3] = useState("");
  const [transcript4, SetTranscript4] = useState("");

  // Create SpeechRecognition instances
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition1 = new SpeechRecognition();
  const recognition2 = new SpeechRecognition();
  const recognition3 = new SpeechRecognition();
  const recognition4 = new SpeechRecognition();

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

  recognition3.continuous = true;
  recognition3.interimResults = true;
  recognition3.onresult = (event) => {
    const result = event.results[event.resultIndex];
    if (result.isFinal) {
      SetTranscript3((prev) => prev + result[0].transcript);
    }
  };

  recognition4.continuous = true;
  recognition4.interimResults = true;
  recognition4.onresult = (event) => {
    const result = event.results[event.resultIndex];
    if (result.isFinal) {
      SetTranscript4((prev) => prev + result[0].transcript);
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

  // Start listening for transcript2
  const startListening3 = () => {
    recognition3.start();
  };

  // Stop listening for transcript2
  const stopListening3 = () => {
    recognition3.stop();
  };

  // Start listening for transcript2
  const startListening4 = () => {
    recognition4.start();
  };

  // Stop listening for transcript2
  const stopListening4 = () => {
    recognition4.stop();
  };
   
   
   
  return (
    <div>
        <div className='relative'>
            <div className='h-[100vh] bg-slate-200'>
               <div className='h-[10vh] rounded-md bg-blue-600 shadow-gray-900 border flex items-center justify-center'>
                <div className='text-3xl font-semibold font-serif text-white'>Form Filling Through Voice Assistance</div>
               </div>
               <div className='flex h-[90vh] items-center justify-center'>
                
                   <div className=''>
                    <form className=' flex-col h-[80vh] w-[40vw] border border-gray-100 rounded-md flex items-center justify-start bg-white shadow-2xl'>
                    <div className='text-3xl font-serif font-bold mt-[5vh]'>Form Data</div>
                       <div className='flex flex-row items-center justify-center mt-[10vh]'> 
                        <div className='w-[10vw] flex items-start justify-center flex-col space-y-[7vh] ml-[-12vh]'>
                          {form.map((name,index)=>(
                            <div className='text-2xl' key={index}>{name}</div>
                          ))}
                        </div>
                        <div className='w-[15vw] flex items-start justify-center flex-col space-y-[6vh]'>
                           
                            <div className='flex flex-row space-x-5'><TextField className=' h-[5vh] w-[25vh]'  label={"Name"} onChange={handlechange} ref={(el)=>inputingref.current[1] = el} name='name' value={transcript1}/><Button variant='contained' onClick={startListening1}>Start</Button><Button onClick={stopListening1} variant='contained'>stop</Button></div>
                            <div className='flex flex-row space-x-5'><TextField className=' h-[5vh] w-[25vh]' label={"Email"} onChange={handlechange} ref={(el)=>inputingref.current[2] = el} name='email' value={transcript2} /><Button variant='contained' onClick={startListening2}>Start</Button><Button onClick={stopListening2} variant='contained'>stop</Button></div>
                            <div className='flex flex-row space-x-5'><TextField className=' h-[5vh] w-[25vh]' label={"Mobile"} onChange={handlechange} ref={(el)=>inputingref.current[3] = el} name='mobile' value={transcript3}/><Button variant='contained' onClick={startListening3}>Start</Button><Button onClick={stopListening3} variant='contained'>stop</Button></div>
                            <div className='flex flex-row space-x-5'><TextField className=' h-[5vh] w-[25vh]' label={"Location"} onChange={handlechange} ref={(el)=>inputingref.current[4] = el} name='location' value={transcript4}/><Button variant='contained' onClick={startListening4}>Start</Button><Button onClick={stopListening4} variant='contained'>stop</Button></div>
                           
                        </div>
                        </div>
                        <div className='mt-[10vh]'><Button onClick={handlesubmit} variant='contained'>Submit form</Button></div>
                    </form>
                   </div>
                   <div className='absolute h-[70vh] w-[25vw] border shadow-xl left-6 bg-white rounded-md flex items-center justify-center flex-col'>
                        
               </div>
               <div className='absolute h-[70vh] w-[25vw] border shadow-xl right-6 bg-white rounded-md flex flex-col'>
                   <div className='font-semibold mt-[2vh]'>To start the program press the button below to activate voice instructions <Button onClick={handleinstructclick} variant='outlined'>Instruction</Button></div>
                   <div className='font-semibold mt-[2vh]'>To begin the form filling press the button below to start <Button variant='outlined'>Start</Button></div>
                   <p>{transcript}</p>
      <pre>{JSON.stringify(listening, null, 2)}</pre>
      <input type='text' onChange={(e)=>console.log(e.target.value)}/>
               </div>
               </div>
               
            </div>
        </div>
    </div>
  )
}

export default Frontpage