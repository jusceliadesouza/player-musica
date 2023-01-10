import IonIcon from "@reacticons/ionicons";
import Image from "./assets/background.svg";

import { TrackPlayer } from "./components/TrackPlayer";

function App() {
  return (
    <div className="container">
      <div className="header">
        <img src={Image} alt="" />

        <div>
          <h1 className="text-2xl font-medium">Acorda Devinho</h1>
          <p className="text-lg font-light opacity-67">Banda Rocketseat</p>
        </div>
      </div>

      <div className="player">
        <div className="icons">
          <button>
            <IonIcon name="play-back" size="large"></IonIcon>
          </button>

          <button>
            <IonIcon name="play" size="large"></IonIcon>
          </button>

          <button>
            <IonIcon name="play-forward" size="large"></IonIcon>
          </button>
        </div>

        
      </div>
    </div>
  );
}

export default App;
