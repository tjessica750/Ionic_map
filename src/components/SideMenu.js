import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'

 const SideMenu = () => {
    return (
        <>
        <IonMenu side="start" contentId="sidemenu">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>MENU</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonMenuToggle auto-hide="false">
                        <IonItem button routerLink={'/home'} routerDirection="none">
                            <IonLabel>HOME</IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                    <IonMenuToggle auto-hide="false">
                        <IonItem button routerLink={'/page1'} routerDirection="none">
                            <IonLabel>PAGE1</IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                    <IonMenuToggle auto-hide="false">
                        <IonItem button routerLink={'/page2'} routerDirection="none">
                            <IonLabel>PAGE2</IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                </IonList>
            </IonContent>
        </IonMenu>
        <IonRouterOutlet id="sidemenu" main></IonRouterOutlet>
        </>
    )
}

export default SideMenu;