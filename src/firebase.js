import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  setDoc,
  where,
  deleteDoc,
  onSnapshot,
  query,
} from "firebase/firestore";

let store;
const collection_name = "users";

function useDB(user) {
  const [posts, setPosts] = useState([]);

  function add(m) {
    setPosts((current) => {
      const posts = [m, ...current];
      posts.sort(
        (a, b) => (a.time && a.time.seconds) - (b.time && b.time.seconds)
      );
      return posts;
    });
  }
  function remove(id) {
    setPosts((current) => current.filter((m) => m.id !== id));
  }

  useEffect(async () => {
    const q = user
      ? query(collection(store, collection_name), where("user", "==", user))
      : query(collection(store, collection_name));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        const { doc, type } = change;
        if (type === "added") add({ ...doc.data(), id: doc.id });
        if (type === "removed") remove(doc.id);
      });
    });
  }, [user]);
  return posts;
}

const db = {};
db.send = async function (post) {
  return addDoc(collection(store, collection_name), post);
};
db.edit = async function (id, post) {
  return setDoc(doc(store, collection_name, id), post);
};
db.delete = async function (id) {
  return deleteDoc(doc(store, collection_name, id));
};

export { db, useDB };

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
store = getFirestore(app);
