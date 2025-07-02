// registro.js
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD_9f_ftz-Hqy0GQ3O-_14YBLrEae5qNmU",
  authDomain: "vitrinachiloe-dd4da.firebaseapp.com",
  projectId: "vitrinachiloe-dd4da",
  storageBucket: "vitrinachiloe-dd4da.appspot.com",
  messagingSenderId: "242783206807",
  appId: "1:242783206807:web:6fe1574ebb77825fc3d8d2"
};

// Inicializar Firebase y Auth
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Lógica del formulario
const form = document.getElementById("registro-form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    alert("¡Cuenta creada con éxito para " + cred.user.email + "!");
  } catch (error) {
    alert("Error: " + error.message);
  }
});
