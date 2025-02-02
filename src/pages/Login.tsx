import { IonButton, IonCardContent, IonCardHeader, IonCardSubtitle, IonContent, IonInput, IonItem, IonLabel, useIonLoading, IonPage, IonImg } from '@ionic/react'
import React, { useContext, useRef } from 'react'
import { Link, useHistory } from 'react-router-dom';
import mapa from '../assets/pin-de-mapa.png'
import { AppContext } from '../context/AppContext'
import useInitialState from '../hooks/useInitialState';


const Login: React.FC = () => {

    const authContext = useContext<any>(AppContext);
    const { loginUser } = useInitialState();
    const history = useHistory();
    const form = useRef<HTMLFormElement>(null);

    if (authContext.loggedIn) {
        history.replace('/map');
   }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        
        if (form.current) {
            const formdata = new FormData(form.current)
            const data = {
                email: formdata.get('email'),
                password: formdata.get('password')
    
            }
           loginUser(data);  
        }
    }

    return (
        <IonPage>
            <IonContent fullscreen className="ion-text-center">
                <IonCardHeader>
                    <IonImg src={mapa} style={{ width: "auto", height: "180px" }} />
                    <h3>Acceder</h3>
                    <IonCardSubtitle>Ingresa con tu correo y contraseña</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                    <form ref={form} onSubmit={handleSubmit}>
                        <IonItem>
                            <IonLabel position="floating">Correo Electronico</IonLabel>
                            <IonInput type="email" name="email" required/>
                        </IonItem>
                        <br />
                        <IonItem>
                            <IonLabel position="floating">Contraseña</IonLabel>
                            <IonInput type="password" name="password" required/>
                        </IonItem>
                        <br />
                        <IonButton 
                            type="submit" 
                            expand="block"
                        >
                            INICIAR SESION
                        </IonButton>
                    </form>
                    <br />
                    <IonLabel>No tienes cuenta ? </IonLabel><Link to="/signup" className="text-decoration-none" style={{ textDecoration: "none" }}>Registrate</Link>
                </IonCardContent>
            </IonContent>
        </IonPage>
    )

};

export default Login;

