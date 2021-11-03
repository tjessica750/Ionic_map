import { useIonToast, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonInput, IonItem, IonItemDivider, IonLabel, IonTitle, useIonLoading, IonFooter } from '@ionic/react'
import {React ,  useState} from 'react'
import {getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth"

const  Login = (props) => {
    const initialEmail = ''
    const initialPassword = ''

    const [ toast, closeToast ] = useIonToast();
    const [ loading, setLoading ] = useIonLoading();

    const [action , setAction] = useState(false)

    const [email, setEmail] = useState(initialEmail)
    const [password, setPassword] = useState(initialPassword)
    const [error, setError] = useState('')
    

    const handleClick = () => {
        setAction(!action);
    }


    const submit_form = (e) => {
        e.preventDefault()
        const auth = getAuth()
        if(action){
            loading({ message : "Espere por favor"})
            createUserWithEmailAndPassword(auth , email , password)
            .then((userCredential) => {
                setLoading()
                toast("Usuario registrado con exito", 2000)
                setEmail(initialEmail)
                setPassword(initialPassword)
                setAction(false)
                setError('')
            }).catch((error) => {
                setLoading()
                setError(error.message)
            })
        }else{
            loading({ message : "Espere por favor"})
            signInWithEmailAndPassword(auth , email, password)
            .then((userCredential) => {
                setLoading();
                props.setUser(userCredential)
            }).catch((error) => {
                switch (error.code) {
                    case "auth/user-not-found":
                        setError("Usuario no encontrado")
                        break;
                    case "auth/invalid-email":
                        setError("Email invalido")
                        break;
                    case "auth/wrong-password":
                        setError("Contraseña incorrecta")
                        break;
                    default:
                        break;
                }
                setLoading();
            })
        }
             
    }
    return (

        <IonCard>
            <IonCardHeader className="ion-text-center">
                <h3>{action ? "Registrate" : "Acceder" }</h3>
                <IonCardSubtitle>{action ? "Coloca un correo y crea una contraseña" : "Ingresa con tu correo y contraseña"}</IonCardSubtitle>
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
                <IonLabel color="danger">{error}</IonLabel>
                <br/>
                <br />
                <IonButton fill="outline" onClick={handleClick}>{action ? "INICIAR SESION" : "REGISTRARSE"}</IonButton>
            </IonCardContent>
        </IonCard>
        

        
    )
}

export default Login
