"use client"

import { useRef } from 'react';
import Image from 'next/image';

import play from '../icons/Play.png';

const CustomVideo = () => {

   const videoRef = useRef(null) 

    const handlePlay = () => {
        if(videoRef.current.paused){
            videoRef.current.play()
        } else {
            videoRef.current.pause()
        }
    }

  return (
    <div>
        <video autoPlay ref={videoRef} width="1030" height="406" preload="none" className='rounded-xl'>
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div className='w-[120px] h-[120px] bg-white opacity-30 rounded-full relative z-10 -mt-80 p-10 mx-auto'  >
            <button className='bg-transparent text-black'  onClick={handlePlay} >
                <Image src={play} alt="play" />
            </button>
        </div>
        
    </div>
  )
}

export default CustomVideo