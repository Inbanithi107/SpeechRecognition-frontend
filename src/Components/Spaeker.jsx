import React from 'react'
import Speechsetter from './Speechsetter'
import Inputfeild from './Inputfeild';

const Spaeker = () => {

    const { instances, createInstance, removeInstance } = Speechsetter();

    createInstance();
    createInstance();
    createInstance();
    createInstance();

  return (
    <div>
        <div className='flex flex-col space-y-6'>
        {instances.map((instance, index) => (
                <div key={index}>
                    
                    <Inputfeild instance={instance} />
                </div>
            ))}

        </div>
    </div>
  )
}

export default Spaeker