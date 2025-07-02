// Importa desde los CDN de Firebase si usas type="module" en tu HTML
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD_9f_ftz-Hqy0GQ3O-_14YBLrEae5qNmU",
  authDomain: "vitrinachiloe-dd4da.firebaseapp.com",
  projectId: "vitrinachiloe-dd4da",
  storageBucket: "vitrinachiloe-dd4da.appspot.com",
  messagingSenderId: "242783206807",
  appId: "1:242783206807:web:6fe1574ebb77825fc3d8d2"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Registro
const formulario = document.getElementById("registro-form");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const credenciales = await createUserWithEmailAndPassword(auth, email, password);
    mensaje.textContent = "✅ Usuario registrado correctamente.";
    console.log("Usuario:", credenciales.user);
    formulario.reset();
  } catch (error) {
    console.error("Error:", error);
    mensaje.textContent = "❌ Error: " + error.message;
  }
});
