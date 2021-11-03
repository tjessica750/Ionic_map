import { Redirect, Route } from 'react-router-dom';
import { map, chatbubbleEllipsesOutline, exitOutline } from 'ionicons/icons'
import { IonApp, IonRouterOutlet, IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Login from './pages/Login';
import Map from './pages/Map';
import Chat from './pages/Chat';

const App: React.FC = () => (

  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tab1">
            <Map />
          </Route>
          <Route exact path="/tab2">
            <Chat />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={map} />
            <IonLabel>Mapa</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={chatbubbleEllipsesOutline} />
            <IonLabel>Chat</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3">
            <IonIcon icon={exitOutline} />
            <IonLabel>Salir</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
