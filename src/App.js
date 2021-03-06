import react, { useState } from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import {FontAewsomeIcon} from '@fortawesome/react-fontawesome'
import {faPlay} from "@fortawesome/free-solid-svg-icons"
import './styles/app.scss'
import data from "./data"
import Library from "./components/Library";

function App() {

  const [songs , setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[5])
  const [isPlaying, setIsPlaying] = useState(false)
  return (
    <div className="App">
      <Song currentSong = {currentSong}/>
      <Player
       setIsPlaying={setIsPlaying}
       isPlaying={isPlaying}
       currentSong={currentSong}/>
       <Library  songs={songs}/>
    </div>
  );
}

export default App;
