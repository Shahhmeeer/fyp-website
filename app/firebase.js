// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbNrOdILln0q3s0_OVoqnmPIgo7JMYDuM",
  authDomain: "plant-e-store-e642f.firebaseapp.com",
  databaseURL: "https://plant-e-store-e642f-default-rtdb.firebaseio.com",
  projectId: "plant-e-store-e642f",
  storageBucket: "plant-e-store-e642f.appspot.com",
  messagingSenderId: "101928514401",
  appId: "1:101928514401:web:e597e72e3831afd8a98b20",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
