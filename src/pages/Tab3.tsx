import { IonButton, IonCol, IonContent, IonHeader, IonInput, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';
import { useState } from 'react';
import Header from '../components/Header';

const Tab3: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('title:', title);
    console.log('description:', description);

    const payload = {
      "data": {
        "Title": title,
        "description": description,
      }
    };

    fetch('http://localhost:1337/api/rsbs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Reset input fields after successful submission
      setTitle('');
      setDescription('');
    })
    .catch(error => console.error('Fetch error:', error));
  };

  return (
    <IonPage>
      <Header title="Tab3" />
      <IonContent fullscreen>
        <IonRow>
          <IonCol size="12">
            <IonInput value={title} onInput={(e:any) => setTitle(e.target.value)} fill="outline" label="Title" />
          </IonCol>
          <IonCol size="12">
            <IonInput value={description} onInput={(e:any) => setDescription(e.target.value)} fill="outline" label="Description" />
          </IonCol>
          <IonCol size="12">
            <IonButton fill="outline" expand="block" onClick={handleSubmit}>
              <span style={{fontSize:"2em"}}>Submit</span>
            </IonButton>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
