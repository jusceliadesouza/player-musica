import IonIcon from '@reacticons/ionicons';
import Image from './assets/background.svg';

function App() {
  return (
    <div className="container">
      <div className='p-7 flex items-center gap-7'>
        <img src={Image} alt="" />

        <div>
          <h1 className='text-2xl font-medium'>Acorda Devinho</h1>
          <p className='text-lg font-light opacity-67'>Banda Rocketseat</p>
        </div>
      </div>

      <div className='center gap-14'>
        <IonIcon name="play-back"size='large'></IonIcon>
        <IonIcon name="play"size='large'></IonIcon>
        <IonIcon name="play-forward"size='large'></IonIcon>
      </div>
    </div>
  )
}

export default App
