const botonAvatar = document.getElementById('btn-avatar');
const botonWalle = document.getElementById('btn-walle');
const botonSpiderman = document.getElementById('btn-spiderman');
const botonCoraline = document.getElementById('btn-coraline');
const botonIronman = document.getElementById('btn-ironman');

botonAvatar.addEventListener('click', function() {
  document.body.style.backgroundImage = "url('img/AVATAR2.jpg')";
});

botonWalle.addEventListener('click', function() {
  document.body.style.backgroundImage = "url('img/wall e.jpg')";
});

botonSpiderman.addEventListener('click', function() {
  document.body.style.backgroundImage = "url('img/spider-man.jpg')";
});

botonCoraline.addEventListener('click', function() {
  document.body.style.backgroundImage = "url('img/coraline.jpg')";
});

botonIronman.addEventListener('click', function() {
  document.body.style.backgroundImage = "url('img/iron-man 3.jpg')";
});