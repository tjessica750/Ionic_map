import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { ellipsisVertical, ellipsisHorizontal } from "ionicons/icons"
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { useState } from 'react';
import Login from './Login';
import Map from './Map';
import SideMenu from '../components/SideMenu'

const Home: React.FC = () => {

  const [user, setUser] = useState()

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <SideMenu />
          </IonButtons>
          <IonButtons slot="primary">
            <IonButton>
              <IonIcon slot="icon-only" ios={ellipsisHorizontal} md={ellipsisVertical}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        {user ? <Map  /> : <Login setUser= {setUser}/>}
      </IonContent>
    </IonPage>
  );
};

export default Home;
