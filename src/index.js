import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  IonApp,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonInfiniteScroll,
  IonList,
  IonInfiniteScrollContent
} from "@ionic/react";
import "./styles.css";
import "@ionic/react/css/ionic.bundle.css";

function App() {
  const [state, setState] = useState(Array.from(new Array(20).keys()));
  const loadData = e => {
    console.log("loading...");
    setTimeout(() => {
      console.log("done");
      setState([...state, ...Array.from(new Array(40).keys())]);
      e.target.complete();
    }, 2000);
  };
  return (
    <IonApp>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle />
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            {state.map((item, idx) => (
              <IonItem key={idx}>Item {idx}</IonItem>
            ))}
          </IonList>
          <IonInfiniteScroll onIonInfinite={e => loadData(e)} threshold="100px">
            <IonInfiniteScrollContent loadingText="Loading data...." />
          </IonInfiniteScroll>
        </IonContent>
      </IonPage>
    </IonApp>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
