import IonIcon from "@reacticons/ionicons";
import Image from "./assets/background.svg";
import { TrackPlayer } from "./component/TrackPlayer";

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
          <IonIcon name="play-back" size="large"></IonIcon>
          <IonIcon name="play" size="large"></IonIcon>
          <IonIcon name="play-forward" size="large"></IonIcon>
        </div>

        <div>
          <TrackPlayer />
        </div>
      </div>
    </div>
  );
}

export default App;
