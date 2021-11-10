import { IonContent, IonLabel, IonPage, IonCardHeader, IonCardSubtitle, IonImg, IonCardContent, IonItem, IonInput, IonButton, useIonViewWillEnter } from '@ionic/react';
import React, { useContext, useRef } from 'react';
import { Link, Redirect } from 'react-router-dom';
import logo from '../assets/pin-de-mapa.png'
import {AppContext} from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

const Signup: React.FC = () => {

    const { auth } = useContext<any>(AppContext)
    const { signUpUser } = useInitialState();
    const form = useRef<HTMLFormElement>(null);

    useIonViewWillEnter(() => {
        if (auth) {
            return (
                <Redirect to="/home"></Redirect>
            )
        }
    });
    
    const handleSubmit = ( e : React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault();

        if(form.current){
            const formdata = new FormData(form.current);
            const data = {
                name: formdata.get('name'),
                lastname: formdata.get('lastname'),
                email: formdata.get('email'),
                password: formdata.get('password')
    
            };
            signUpUser(data)
        }
    }

    return (
        <IonPage>
            <IonContent fullscreen className="ion-text-center">
                <IonCardHeader>
                    <IonImg src={logo} style={{ width: "auto", height: "180px" }} />
                    <h3>Registrarse</h3>
                    <IonCardSubtitle>Coloca un correo y crea una contraseña</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                    <form ref={form} onSubmit={handleSubmit}>
                        <IonItem>
                            <IonLabel position="floating" >Nombre</IonLabel>
                            <IonInput type="text" name="name" required />
                        </IonItem>
                        <br />
                        <IonItem>
                            <IonLabel position="floating">Apellido</IonLabel>
                            <IonInput type="text" name="lastname"/>
                        </IonItem>
                        <br />
                        <IonItem>
                            <IonLabel position="floating">Correo Electronico</IonLabel>
                            <IonInput type="email" name="email"/>
                        </IonItem>
                        <br />
                        <IonItem>
                            <IonLabel position="floating">Contraseña</IonLabel>
                            <IonInput type="password" name="password"/>
                        </IonItem>
                        <br />
                        <IonButton type="submit" expand="block">Registrarse</IonButton>
                    </form>
                    <br />
                    <IonLabel>ya estas registrado ? </IonLabel><Link to="/login" className="text-decoration-none" style={{ textDecoration: "none" }}>Iniciar sesion</Link>
                </IonCardContent>
            </IonContent>
        </IonPage>
    );
};

export default Signup;