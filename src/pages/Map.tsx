import { IonContent, IonHeader, IonPage } from '@ionic/react';
import React from 'react'
import MapApi from '../MapApi'

const Map: React.FC = () => (
    
    <IonPage>
        <IonContent fullscreen>
            <MapApi />
        </IonContent>
    </IonPage>
    
);

export default Map;
