import { IonButton, IonCol, IonTitle } from '@ionic/react'
import React from 'react'
import MapApi from '../MapApi'

const Map = () => {
    return (
        <div>
            <div className="ion-text-center">
                <MapApi />
                <IonButton color="danger">LOGOUT</IonButton>
            </div>
        </div>
    )
}

export default Map
