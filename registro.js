import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

// Configuración Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD_9f_ftz-Hqy0GQ3O-_14YBLrEae5qNmU",
  authDomain: "vitrinachiloe-dd4da.firebaseapp.com",
  projectId: "vitrinachiloe-dd4da",
  storageBucket: "vitrinachiloe-dd4da.appspot.com",
  messagingSenderId: "242783206807",
  appId: "1:242783206807:web:6fe1574ebb77825fc3d8d2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Formulario
const formulario = document.getElementById("registro-form");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const rubro = document.getElementById("rubro").value;
  const descripcion = document.getElementById("descripcion").value;
  const ubicacion = document.getElementById("ubicacion").value;

  try {
    const credenciales = await createUserWithEmailAndPassword(auth, email, password);
    const uid = credenciales.user.uid;

    await setDoc(doc(db, "profesionales", uid), {
      nombre,
      email,
      rubro,
      descripcion,
      ubicacion
    });

    mensaje.textContent = "✅ Usuario registrado y ficha creada correctamente.";
    formulario.reset();
  } catch (error) {
    console.error("Error:", error);
    mensaje.textContent = "❌ Error: " + error.message;
  }
});
