import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonInput, IonItem, IonItemDivider, IonLabel, IonTitle } from '@ionic/react'
import {React ,  useState} from 'react'
import {getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth"

const  Login = (props) => {
    const initialEmail = ''
    const initialPassword = ''

    const [action , setAction] = useState(false)

    const [email, setEmail] = useState(initialEmail)
    const [password, setPassword] = useState(initialPassword)
    const [error, setError] = useState('')
    

    const submit_form = (e) => {
        e.preventDefault()
        const auth = getAuth()
        if(action){
            createUserWithEmailAndPassword(auth , email , password)
            .then((userCredential) => {
                console.log("Usuario Registrado: "+userCredential.user)
                setEmail(initialEmail)
                setPassword(initialPassword)
            }).catch((error) => {
                setError(error.message)
            })
        }else{
            signInWithEmailAndPassword(auth , email, password)
            .then((userCredential) => {
                props.setUser(userCredential)
            }).catch((error) => {
                setError(error.message)
            })
        }
       
        
    }
    return (
        
        <IonCard>
            <IonCardHeader className="ion-text-center">
                <h3>Acceder</h3>
                <IonCardSubtitle>Entra con tu Cuenta</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
                <form onSubmit={submit_form}>
                    <IonItem>
                        <IonLabel position="floating">Correo Electronico</IonLabel>
                        <IonInput value={email} type="email" onIonChange={e => setEmail(e.target.value)}/>
                    </IonItem>
                    <br/>
                    <IonItem>
                        <IonLabel position="floating">Contraseña</IonLabel>
                        <IonInput value={password} type="password" onIonChange={e => setPassword(e.target.value)}/>
                    </IonItem>
                    <br/>
                    <IonButton type="submit" expand="block">{action ? "REGISTRARSE" : "INICIAR SESION"}</IonButton>
                </form>
                <br/>
                <IonLabel color="danger">{error}</IonLabel>
                <IonButton fill="outline">{action ? "INICIAR SESION" : "REGISTRARSE"}</IonButton>
            </IonCardContent>
        </IonCard>
        
    )
}

export default Login
