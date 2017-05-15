
// Arreglo de las rutas de las imágenes
// Imágenes tomadas de placeimg.com
var images = [
  'img/1.jpg',
  'img/2.jpg',
  'img/3.jpg',
  'img/4.jpg',
  'img/5.jpg',
];

// Posición en el carousel
var pos = 0;

// Elemento html con id: carousel
var carousel = document.getElementById('carousel');

// Función para aumentar la posición en el arreglo y luego mostrarla
function siguiente() {
  pos++;
  pos = pos % images.length;
  carousel.src = images[pos]
}

// Hacemos que se ejecute la función "siguiente" cada 2 segundos
setInterval(siguiente, 2000);
