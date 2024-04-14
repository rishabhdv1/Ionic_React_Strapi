import { IonCol, IonContent, IonHeader, IonMenuButton, IonPage, IonRow } from "@ionic/react";
import { } from "ionicons/icons";

export default function Header(props:any) {
    return (
        <IonHeader>
            <IonRow className="ion-align-items-center">
                <IonCol size="2">
                    <IonMenuButton style={{fontSize:"2em"}} />
                </IonCol>
                <IonCol size="8" className="ion-text-center" style={{fontSize:"1.8em"}}>
                    {props.title}
                </IonCol>
                <IonCol size="2"></IonCol>
            </IonRow>
        </IonHeader>
    )
}