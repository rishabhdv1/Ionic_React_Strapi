import { IonContent, IonHeader, IonItem, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import Header from '../components/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Tab1: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [cardData, setCardData] = useState([]);


  useEffect(() => {
    const Cards = async () => {
        try {
            const response = await axios.get('http://localhost:1337/api/rsbs');
            console.log("DDD >>",response.data.data);
            setCardData(response.data.data);
        } catch (error) {
          console.error('Error fetching data from Strapi:', error);
        }
    };
    Cards();
  }, []);


  return (
    <IonPage>
      <Header title="Tab1" />
      <IonContent>
        <IonList>
          {cardData && cardData.map((card:any) => (
            <IonItem key={card.id}>
              <span>{card.attributes.Title}</span>
              <span>{card.attributes.description}</span>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
