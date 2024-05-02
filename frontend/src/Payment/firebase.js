// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBZQ0JM_482UYhI8aV0RCTRtQvjtemRfrQ",
    authDomain: "product--app-4e5b9.firebaseapp.com",
    projectId: "product--app-4e5b9",
    storageBucket: "product--app-4e5b9.appspot.com",
    messagingSenderId: "308542490673",
    appId: "1:308542490673:web:b3cee0933f8ee71b9c6d10"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export default app;
