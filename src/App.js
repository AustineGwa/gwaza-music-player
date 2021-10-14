import react, { useState } from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import {FontAewsomeIcon} from '@fortawesome/react-fontawesome'
import {faPlay} from "@fortawesome/free-solid-svg-icons"
import './styles/app.scss'
import data from "./data"



function App() {

  const [songs , setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[1])
  return (
    <div className="App">
      <Song currentSong = {currentSong}/>
      <Player currentSong={currentSong}/>
    </div>
  );
}

export default App;
