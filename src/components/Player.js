import { faAngleLeft, faAngleRight, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useRef} from "react";
import { useState } from "react/cjs/react.development";

const Player = ({currentSong, isPlaying, setIsPlaying}) =>{

    const audioRef = useRef(null)
    const playSongHandler = () =>{

        if(isPlaying){
            audioRef.current.pause()
            setIsPlaying(!isPlaying)
        }else{
            audioRef.current.play()
            setIsPlaying(!isPlaying)
        }
     
    }

    const timeUpdateHandler = (e) =>{
        const current = e.target.currentTime
        const duration = e.target.duration
        setSongInfo({...songInfo, currentTime : current, duration : duration})

    }

    const getTime = (time) =>{
       return Math.floor(time /60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    }


    const [songInfo, setSongInfo] = useState({
        currentTime : null,
        duration : null
    })

    const dragHandler = (e) =>{
        audioRef.current.currentTime = e.target.value
        setSongInfo({...songInfo, currentTime : e.target.value})
    }

    return(
        <div className="player">
        <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>    
         <input
          min={0} 
          max={songInfo.duration} 
          value={songInfo.currentTime}
          onChange={dragHandler}
          type="range" />
         <p>{getTime(songInfo.duration)}</p>   
        </div>

        <div className="play-control">
        <FontAwesomeIcon className="skip-back" icon={faAngleLeft} size="2x" />
        <FontAwesomeIcon className="play" onClick={playSongHandler} icon={faPlay}  size="2x" />
        <FontAwesomeIcon className="skip-forward" icon={faAngleRight} size="2x" />
        </div>

        <audio 
            onTimeUpdate={timeUpdateHandler} 
            onLoadedMetadata={timeUpdateHandler}
            ref={audioRef} 
            src={currentSong.audio} >

        </audio>
        </div>
    
    )

}

export default Player;