import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAXbobLkxf9lbYTnG-pOILYNIFu6uu7nWs",
    authDomain: "closet-swap-ddf5b.firebaseapp.com",
    projectId: "closet-swap-ddf5b",
    storageBucket: "closet-swap-ddf5b.appspot.com",
    messagingSenderId: "1052558508809",
    appId: "1:1052558508809:web:3505d5369bdf3de0c149d8",
    measurementId: "G-21NWTFZESB"
  };

  const app = initializeApp(firebaseConfig);
  export default getFirestore();

