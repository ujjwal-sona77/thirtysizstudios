import React from 'react'
import Canvas from './Canvas'
import data from './data'
import LocomotiveScroll from 'locomotive-scroll'
import { useEffect } from 'react'
const App = () => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll()
  }, []);
  return <>
    <div className='w-full min-h-screen relative'>
      {data[0].map((canvasDets, index) => (
        <Canvas details={canvasDets} />
      ))}

    </div>
    <div className='w-full min-h-screen relative'>
      {data[1].map((canvasDets, index) => (
        <Canvas details={canvasDets} />
      ))}

    </div>
    <div className='w-full min-h-screen relative'>
      {data[1].map((canvasDets, index) => (
        <Canvas details={canvasDets} />
      ))}

    </div>
    <div className='w-full min-h-screen relative'>
      {data[1].map((canvasDets, index) => (
        <Canvas details={canvasDets} />
      ))}

    </div>
  </>
}

export default App