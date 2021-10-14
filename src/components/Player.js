import { faAngleLeft, faAngleRight, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useRef} from "react";

const Player = ({currentSong}) =>{

    const audioRef = useRef(null)
    const playSongHandler = () =>{
      audioRef.current.play()
    }
    return(
        <div className="player">
        <div className="time-control">
        <p>Start Time</p>    
         <input type="range" />
         <p>End Time</p>   
        </div>

        <div className="play-control">
        <FontAwesomeIcon className="skip-back" icon={faAngleLeft} size="2x" />
        <FontAwesomeIcon className="play" onClick={playSongHandler} icon={faPlay}  size="2x" />
        <FontAwesomeIcon className="skip-forward" icon={faAngleRight} size="2x" />
        </div>

        <audio ref={audioRef} src={currentSong.audio}></audio>
        </div>
    
    )
}

export default Player;