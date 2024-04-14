import { IonIcon, IonLabel, IonTabBar, IonTabButton } from "@ionic/react";
import { ellipse, refreshCircle, square, triangle } from "ionicons/icons";

const TabBar: React.FC = () => {
    return (
        <IonTabBar>
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon aria-hidden="true" icon={triangle} />
            <IonLabel>Tab 1</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon aria-hidden="true" icon={ellipse} />
            <IonLabel>Tab 2</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon aria-hidden="true" icon={square} />
            <IonLabel>Tab 3</IonLabel>
          </IonTabButton>
        </IonTabBar>
    )
}
export default TabBar;