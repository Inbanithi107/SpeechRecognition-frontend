import { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Speechsetter = () => {
    const [instances, setInstances] = useState([]);

    const createInstance = () => {
        const instance = useSpeechRecognition();
        setInstances(prevInstances => [...prevInstances, instance]);
        return instance;
    };

    const removeInstance = index => {
        setInstances(prevInstances => {
            const updatedInstances = [...prevInstances];
            updatedInstances.splice(index, 1);
            return updatedInstances;
        });
    };

    return { instances, createInstance, removeInstance };
};

export default Speechsetter;