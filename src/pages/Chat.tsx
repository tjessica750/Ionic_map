import { IonAvatar, IonContent, IonLabel, IonList, IonListHeader, IonPage, IonItem } from '@ionic/react';
import React from 'react';

const Chat: React.FC = () => (
    <IonPage>
        <IonContent fullscreen>
            <IonList>
                <IonListHeader>
                    CONVERSACIONES RECIENTES
                </IonListHeader>

                <IonItem>
                    <IonAvatar slot="start">
                        <img src="http://pm1.narvii.com/6513/891d31199d907db135932627c04bd737977ffc69_00.jpg" />
                    </IonAvatar>
                    <IonLabel>
                        <h2>Jessica</h2>
                        <h3>Hola Como estas ?</h3>
                    </IonLabel>
                </IonItem>
                <IonItem>
                    <IonAvatar slot="start">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZAWKHciGaR9qdyGy5li0CSLGiHjlYDPEKwA&usqp=CAU" />
                    </IonAvatar>
                    <IonLabel>
                        <h2>Joel Dovale</h2>
                        <h3>Hola Mi amor como estas ?</h3>
                    </IonLabel>
                </IonItem>
            </IonList>

        </IonContent>
    </IonPage>

);
    

export default Chat;