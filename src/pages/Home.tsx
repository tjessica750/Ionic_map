import { IonIcon, IonTabs, IonRouterOutlet, IonTabButton, IonTabBar, IonLabel, IonApp } from '@ionic/react';
import { map, chatbubbleEllipsesOutline, personSharp } from "ionicons/icons"
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router-dom';
import Map from './Map';
import Chat from './Chat';
import Account from './Account';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';



const Home: React.FC = () => {

  const authContext = useContext<any>(AppContext)

  if (!authContext.loggedIn) {
    return (
      <Redirect to='/welcome' />
    )
  }

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/home/map">
              <Map />
            </Route>
            <Route exact path="/home/chat" component={Chat} />
            <Route exact path="/home/account" component={Account} />
            <Redirect from="/home" to="/home/map" />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="map" href="/home/map">
              <IonIcon icon={map} />
              <IonLabel>Mapa</IonLabel>
            </IonTabButton>
            <IonTabButton tab="chat" href="/home/chat">
              <IonIcon icon={chatbubbleEllipsesOutline} />
              <IonLabel>Chat</IonLabel>
            </IonTabButton>
            <IonTabButton tab="account" href="/home/account">
              <IonIcon icon={personSharp} />
              <IonLabel>Cuenta</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default Home;
