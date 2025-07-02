// Importa las funciones necesarias de Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Configuración de tu proyecto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD_9f_ftz-Hqy0GQ3O-_14YBLrEae5qNmU",
  authDomain: "vitrinachiloe-dd4da.firebaseapp.com",
  projectId: "vitrinachiloe-dd4da",
  storageBucket: "vitrinachiloe-dd4da.appspot.com", // corregido .app a .com
  messagingSenderId: "242783206807",
  appId: "1:242783206807:web:6fe1574ebb77825fc3d8d2"
};

// Inicializa la app Firebase
const app = initializeApp(firebaseConfig);

// Exporta la autenticación y la base de datos
export const auth = getAuth(app);
export const db = getFirestore(app);
