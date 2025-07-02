// index.js
import { db } from './firebase-config.js';
import { collection, getDocs } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore-lite.js';

document.addEventListener('DOMContentLoaded', async () => {
  const contenedor = document.getElementById('contenedor-fichas');

  try {
    const fichasSnapshot = await getDocs(collection(db, 'fichas'));

    fichasSnapshot.forEach(doc => {
      const ficha = doc.data();
      const div = document.createElement('div');
      div.className = 'card';
      div.innerHTML = `
        <h2>${ficha.nombre}</h2>
        <p><strong>Rubro:</strong> ${ficha.rubro}</p>
        <p><strong>Descripción:</strong> ${ficha.descripcion}</p>
        <p><strong>Ubicación:</strong> ${ficha.ubicacion}</p>
      `;
      contenedor.appendChild(div);
    });
  } catch (error) {
    console.error('Error al cargar fichas:', error);
    contenedor.innerHTML = '<p>Error al cargar las fichas.</p>';
  }
});
