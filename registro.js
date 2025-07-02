// registro.js
import { auth, db } from './firebase-config.js';
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js';
import { doc, setDoc } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore-lite.js';

document.getElementById('form-registro').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const nombre = document.getElementById('nombre').value;
  const rubro = document.getElementById('rubro').value;
  const descripcion = document.getElementById('descripcion').value;
  const ubicacion = document.getElementById('ubicacion').value;

  try {
    const credencial = await createUserWithEmailAndPassword(auth, email, password);
    const uid = credencial.user.uid;

    await setDoc(doc(db, 'fichas', uid), {
      nombre,
      rubro,
      descripcion,
      ubicacion
    });

    alert('Ficha creada con éxito');
  } catch (error) {
    console.error(error);
    alert('Error al registrar: ' + error.message);
  }
});
