import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonLoading, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
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
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Signup from './containers/Signup';
import { AppContext, useAuthInit } from './context/AppContext';
import { map, chatbubbleEllipsesOutline, personCircleSharp } from 'ionicons/icons';
import Map from './pages/Map';
import Account from './pages/Account';
import Chat from './pages/Chat';


const App: React.FC = () => {

  const { loading, auth } = useAuthInit();

  if (loading) {
    return (<IonLoading isOpen translucent />)
  }
  if (auth) {
    console.log("Logged in", auth)
  }

  return (
    <AppContext.Provider value={auth!}>
      <IonApp>
        {auth?.loggedIn ? (
          <IonReactRouter>
            <IonTabs>
              <IonRouterOutlet>
                <Route exact path="/map" component={Map}/>
                <Route exact path="/chat" component={Chat}/>
                <Route exact path="/account" component={Account}/>
                <Route exact path="/">
                  <Redirect to="/map" />
                </Route>
              </IonRouterOutlet>
              <IonTabBar slot="bottom">
                <IonTabButton tab="tab1" href="/map">
                  <IonIcon icon={map} />
                  <IonLabel>Mapa</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab2" href="/chat">
                  <IonIcon icon={chatbubbleEllipsesOutline} />
                  <IonLabel>Chat</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab3" href="/account">
                  <IonIcon icon={personCircleSharp}/>
                  <IonLabel>Perfil</IonLabel>
                </IonTabButton>
              </IonTabBar>
            </IonTabs>
          </IonReactRouter>
        ) : (
          <IonReactRouter>
            <Route exact path="/welcome" component={Welcome} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route
              exact
              path="/">
              <Redirect  to="/welcome" />
            </Route>
          </IonReactRouter>
        )}
      </IonApp>
    </AppContext.Provider>
  );
};

export default App;
