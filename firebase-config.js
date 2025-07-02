// firebase-config.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore-lite.js';

const firebaseConfig = {
  apiKey: "AIzaSyD_9f_ftz-Hqy0GQ3O-_14YBLrEae5qNmU",
  authDomain: "vitrinachiloe-dd4da.firebaseapp.com",
  projectId: "vitrinachiloe-dd4da",
  storageBucket: "vitrinachiloe-dd4da.appspot.com",
  messagingSenderId: "242783206807",
  appId: "1:242783206807:web:6fe1574ebb77825fc3d8d2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);