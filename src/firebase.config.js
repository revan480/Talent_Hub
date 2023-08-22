import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA7XAaCv8XneUIFuBQDyK-p1NGbCVc43Ic",
    authDomain: "code-wizards-fc74f.firebaseapp.com",
    databaseURL: "https://code-wizards-fc74f-default-rtdb.firebaseio.com",
    projectId: "code-wizards-fc74f",
    storageBucket: "code-wizards-fc74f.appspot.com",
    messagingSenderId: "234449959263",
    appId: "1:234449959263:web:e13df4fba67348aa3b1eea",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };