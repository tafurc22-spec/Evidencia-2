const peliculas = {
  avatar: {
    img: 'img/AVATAR2.jpg',
    title: 'Avatar',
    year: '2009',
    genre: 'Acción, aventura, ciencia ficción',
    synopsis: 'Jake Sully viaja a Pandora y se une al conflicto entre los humanos y los Na\'vi.'
  },
  walle: {
    img: 'img/wall e.jpg',
    title: 'Wall-E',
    year: '2008',
    genre: 'Animación, aventura, ciencia ficción',
    synopsis: 'Un robot recolector de basura descubre una nueva misión cuando conoce a EVE.'
  },
  spiderman: {
    img: 'img/spider-man.jpg',
    title: 'Spider-Man',
    year: '2002',
    genre: 'Acción, fantasía, superhéroes',
    synopsis: 'Peter Parker obtiene poderes arácnidos y decide usarlos para combatir el crimen.'
  },
  coraline: {
    img: 'img/coraline.jpg',
    title: 'Coraline',
    year: '2009',
    genre: 'Animación, fantasía, terror',
    synopsis: 'Coraline encuentra un mundo alterno detrás de una puerta secreta en su casa.'
  },
  ironman: {
    img: 'img/iron-man 3.jpg',
    title: 'Iron Man 3',
    year: '2013',
    genre: 'Acción, aventura, ciencia ficción',
    synopsis: 'Tony Stark enfrenta una amenaza misteriosa mientras intenta proteger a los suyos.'
  }
};

function limpiarBotones() {
  document.querySelectorAll('.btn').forEach(function(b) {
    b.classList.remove('activo');
  });
}

function ocultarInicio() {
  const inicio = document.getElementById('inicio');
  if (inicio) {
    inicio.style.display = 'none';
  }
}

function mostrarContenido() {
  const mensaje = document.getElementById('mensajeSeleccion');
  const etiqueta = document.getElementById('etiqueta');
  const info = document.getElementById('info');

  if (mensaje) mensaje.classList.remove('hidden-ui');
  if (etiqueta) etiqueta.classList.remove('hidden-ui');
  if (info) info.classList.remove('hidden-ui');
}

function ponerImagen(key) {
  limpiarBotones();

  const boton = document.querySelector(`.btn[data-movie="${key}"]`);
  if (boton) boton.classList.add('activo');

  ocultarInicio();
  mostrarContenido();

  const p = peliculas[key];
  if (!p) return;

  const fondo = document.getElementById('fondo');
  const etiqueta = document.getElementById('etiqueta');
  const info = document.getElementById('info');

  fondo.classList.add('oculto');
  setTimeout(function () {
    fondo.style.backgroundColor = '#000';
    fondo.style.backgroundImage = `url('${p.img}')`;

    fondo.classList.remove('oculto');
    fondo.classList.add('visible');
  }, 150);

  if (etiqueta) {
    etiqueta.textContent = p.title;
  }

  if (info) {
    info.innerHTML = `
      <strong>Año:</strong> ${p.year} |
      <strong>Género:</strong> ${p.genre}
      <br>
      ${p.synopsis}
    `;
  }

  actualizarMensaje(p.title);
}

function actualizarMensaje(nombre) {
  const mensaje = document.getElementById('mensajeSeleccion');
  if (mensaje) {
    mensaje.textContent = `Seleccionaste: ${nombre}`;
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const mensaje = document.getElementById('mensajeSeleccion');
  const etiqueta = document.getElementById('etiqueta');
  const info = document.getElementById('info');

  if (mensaje) mensaje.classList.add('hidden-ui');
  if (etiqueta) etiqueta.classList.add('hidden-ui');
  if (info) info.classList.add('hidden-ui');

  document.querySelectorAll('.btn').forEach(function(boton) {
    boton.addEventListener('click', function() {
      const clavePelicula = boton.dataset.movie;
      ponerImagen(clavePelicula);
    });
  });
});