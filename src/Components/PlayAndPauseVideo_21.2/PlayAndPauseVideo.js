import React, { useState, useEffect, useRef } from 'react'

export default function PlayAndPauseVideo() {
    
    const videoRef = useRef();

    const playVideo = ()=>{
        videoRef.current.play()
    }

    const pauseVideo = ()=>{
        videoRef.current.pause()
    }


    return (
        <div>
            <video ref={videoRef} width="750" height="450" controls >
                <source src="https://sample-videos.com/video123/mp4/240/big_buck_bunny_240p_10mb.mp4" type="video/mp4" />
            </video>
            <div>
                <button onClick={playVideo}>play</button>
                <button onClick={pauseVideo}>pause</button>
            </div>
        </div>
    )
}
