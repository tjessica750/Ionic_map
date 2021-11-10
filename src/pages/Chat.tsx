import { IonAvatar, IonContent, IonLabel, IonList, IonListHeader, IonPage, IonItem, IonSearchbar, IonLoading } from '@ionic/react';
import React, { useContext, useEffect, useState } from 'react';
import { collection, DocumentData, getFirestore, onSnapshot } from "@firebase/firestore";
import avatarLogo from '../assets/avatardefault_92824.png'
import ChatModal from '../components/ChatModal';
import { AppContext } from '../context/AppContext';

const Chat: React.FC = () => {
    const { userData } = useContext(AppContext);

    const [loading, setLoading] = useState(true);
    const [showChat, setShowChat] = useState(false);
    const [toEmail, setToEmail] = useState<DocumentData>();
    const [users, setUsers] = useState<Array<DocumentData>>([])

    useEffect(() => {
        getUsers();
    }, [])

    const HandleClickUser = (user: DocumentData) => {
        setToEmail(user)
        setShowChat(true);

    }

    const getUsers = () => {
        const db = getFirestore();
        onSnapshot(collection(db, 'usuarios'), (query) => {
            const data: Array<DocumentData> = []
            query.forEach(doc => {
                data.push({ ...doc.data(), key: doc.id });
            })
            setUsers(data);
            setLoading(false);
        });
    }

    if (loading) {
        return (
            <IonLoading isOpen translucent />
        )
    }

    if (showChat) {
        return (
            <ChatModal
                showChat={showChat}
                setShowChat={setShowChat}
                toUser={toEmail}
            />
        )
    }


    return (
        <IonPage>
            <IonContent fullscreen>
                <IonSearchbar placeholder="Busca conversaciones recientes" />
                <IonList id="chat-list">
                    <IonListHeader>
                        CONVERSACIONES RECIENTES
                    </IonListHeader>
                    <IonItem button={true} >
                        <IonAvatar slot="start">
                            <img src="http://pm1.narvii.com/6513/891d31199d907db135932627c04bd737977ffc69_00.jpg" />
                        </IonAvatar>
                        <IonLabel>
                            <h2>Jessica</h2>
                            <h3>Hola Como estas ?</h3>
                        </IonLabel>
                    </IonItem>
                    <IonItem button={true}>
                        <IonAvatar slot="start">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZAWKHciGaR9qdyGy5li0CSLGiHjlYDPEKwA&usqp=CAU" />
                        </IonAvatar>
                        <IonLabel>
                            <h2>Joel Dovale</h2>
                            <h3>Hola Mi amor como estas ?</h3>
                        </IonLabel>
                    </IonItem>
                </IonList>
                <IonList id="user-list" lines="none">
                    <IonListHeader>
                        TODOS LOS USUARIOS
                    </IonListHeader>
                    {users.length > 0 && users.map((element: DocumentData) => {
                        if ( element.email != userData.email ) {
                            return (
                                <IonItem key={element.key}
                                    button={true}
                                    onClick={() => HandleClickUser(element)}
                                >
                                    <IonAvatar slot="start">
                                        <img src={avatarLogo} />
                                    </IonAvatar>
                                    <IonLabel>
                                        <h2 className="ion-text-capitalize">{element.name + ' ' + element.lastname}</h2>
                                        <h3>{element.email}</h3>
                                    </IonLabel>
                                </IonItem>
                            )
                        }

                    })
                    }
                </IonList>
            </IonContent>
        </IonPage>
    )

};

export default Chat;