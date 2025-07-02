// registro.js
import { auth, db } from './firebase-config.js';
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js';
import { doc, setDoc } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js';

document.getElementById('form-registro').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const nombre = document.getElementById('nombre').value;
  const rubro = document.getElementById('rubro').value;
  const descripcion = document.getElementById('descripcion').value;
  const ubicacion = document.getElementById('ubicacion').value;

  try {
    // Crear el usuario con correo y contraseña
    const credencial = await createUserWithEmailAndPassword(auth, email, password);
    const uid = credencial.user.uid;

    // Guardar datos adicionales en Firestore
    await setDoc(doc(db, 'fichas', uid), {
      nombre,
      rubro,
      descripcion,
      ubicacion
    });

    alert('Ficha creada con éxito ✅');
    document.getElementById('form-registro').reset(); // limpiar formulario
  } catch (error) {
    console.error('Error al registrar:', error);
    alert('Error: ' + error.message);
  }
});
