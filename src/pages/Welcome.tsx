import { IonButton, IonContent, IonIcon, IonImg, IonLabel, IonPage, IonSlide, IonSlides, IonicSwiper } from '@ionic/react';
import { arrowForward, arrowBack } from 'ionicons/icons';
import React, { useContext } from 'react';
import bienvenido_1 from '../assets/bienvenido_1.png'
import bienvenido_3 from '../assets/bienvenido3.png'

import '../theme/Welcome.css'

import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper-bundle.min.css'
import '@ionic/react/css/ionic-swiper.css';
import { AppContext } from '../context/AppContext';
import { Redirect } from 'react-router-dom';

SwiperCore.use([IonicSwiper, Pagination, Navigation])


const Welcome: React.FC = () => {

    const authContext = useContext<any>(AppContext);

    if (authContext.loggedIn) {
        return(
            <Redirect to="/home" />
        );
    }

    return (
        <IonPage>
            <IonContent fullscreen className="ion-padding" scrollY={false}>
                <Swiper
                    slidesPerView={1}
                    navigation
                >
                    <SwiperSlide>
                        <div className="slide">
                            <IonImg src={bienvenido_1} />
                            <h1>BIENVENIDO A NAVIGATIONAPP</h1>
                            <p className="ion-content-justify">Podras ver en tiempo real tu ubicacion y la de tus amigos que se encuentren conectados, ademas de poder conversar con ellos con nuestro chat incorporado</p>
                            <IonButton fill="clear">Continua<IonIcon slot="end" icon={arrowForward} /></IonButton>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide">
                            <IonImg src={bienvenido_3} style={{ paddingTop: '60px' }} />
                            <h1>Conectate...</h1>
                            <p>puedes iniciar sesion o registrarte para comenzar a usar nuestros servicios</p>
                            <IonButton routerLink="/login" expand="block">Iniciar sesion</IonButton>
                            <IonLabel>ó</IonLabel>
                            <IonButton routerLink="/signup" expand="block" color="secondary" fill="clear">Registrarse</IonButton>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </IonContent>
        </IonPage>
    )

}

export default Welcome;

