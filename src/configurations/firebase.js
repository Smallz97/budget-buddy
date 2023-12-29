// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAI6M95JhPN6raXvgKz-8xXw06-FGo_znM",
  authDomain: "budget-buddie-application.firebaseapp.com",
  projectId: "budget-buddie-application",
  storageBucket: "budget-buddie-application.appspot.com",
  messagingSenderId: "939555877853",
  appId: "1:939555877853:web:eb8a766cffc46b07ca3c34",
  measurementId: "G-MQ7L0NWB74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);