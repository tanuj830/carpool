import { initializeApp } from "firebase/app";
import {getStorage}  from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyABLbYmUr0YDp2xXVAcdzHKiYPUnppKPVA",
  authDomain: "carpool-658bd.firebaseapp.com",
  projectId: "carpool-658bd",
  storageBucket: "carpool-658bd.appspot.com",
  messagingSenderId: "524558289002",
  appId: "1:524558289002:web:87d33b86fcda8b3cf42213",
  measurementId: "G-DR87BRT1YV"
};

  const app = initializeApp(firebaseConfig)
  export const storage = getStorage(app)
  export default app


