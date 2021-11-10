import { IonAvatar, IonContent, IonLabel, IonList, IonListHeader, IonPage, IonItem, IonSearchbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { collection, DocumentData, getDocs, getFirestore, onSnapshot } from "@firebase/firestore";

const Chat: React.FC = () => {

    const [users, setUsers] = useState<DocumentData>()

    useEffect(() => {
        getUsers();
        console.log(users)

    }, [])

    const getUsers = async () => {
        const db = getFirestore();
        const temp: DocumentData[] = []
        await onSnapshot(collection(db, 'usuarios'), (query) => {
            query.forEach(doc => {
                temp.push(doc.data());
            })
        })
        setUsers(temp);
    }


    return (
        <IonPage>
            <IonContent fullscreen>
                <IonSearchbar placeholder="Busca conversaciones recientes" />
                <IonList id="chat-list">
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
                <IonList id="user-list">
                    <IonListHeader>
                        TODOS LOS USUARIOS
                    </IonListHeader>
                    {users && users.forEach((element: any) => {
                        return (
                            <IonItem>
                                <IonAvatar slot="start">
                                    <img src="http://pm1.narvii.com/6513/891d31199d907db135932627c04bd737977ffc69_00.jpg" />
                                </IonAvatar>
                                <IonLabel>
                                    <h2>{element.name + ' ' + element.lastname}</h2>
                                    <h3>{element.email}</h3>
                                </IonLabel>
                            </IonItem>
                        )
                    })
                    }
                </IonList>
            </IonContent>
        </IonPage>
    )

};

export default Chat;