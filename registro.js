// registro.js
import { auth, db } from './firebase-config.js';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

document.getElementById('registroForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Guarda datos adicionales en Firestore
    await setDoc(doc(db, "usuarios", user.uid), {
      nombre: nombre,
      email: email,
      uid: user.uid,
      fechaRegistro: new Date()
    });

    alert("Registro exitoso 🎉");
    window.location.href = "index.html";
  } catch (error) {
    console.error("Error en el registro:", error.message);
    alert("Error: " + error.message);
  }
});
