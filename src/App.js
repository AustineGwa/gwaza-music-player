import react from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import {FontAewsomeIcon} from '@fortawesome/react-fontawesome'
import {faPlay} from "@fortawesome/free-solid-svg-icons"

function App() {
  return (
    <div className="App">
      <Song/>
      <Player/>
    </div>
  );
}

export default App;
