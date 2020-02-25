const lenguage = new idioma();
const uiHome = new interfazHome(lenguage.ObtenerIdiomaActual());





//Agregamos los eventos
document.getElementById('idioma').addEventListener('click', (e) => {
   e.preventDefault();

   uiHome.cambiarLenguaje(lenguage.ObtenerIdiomaActual())
});

document.getElementById('home').addEventListener('click', (e) => {
   e.preventDefault();
   uiHome.cambiarActivo(e.target.id);
});

document.getElementById('services').addEventListener('click', (e) => {
   e.preventDefault();
   uiHome.cambiarActivo(e.target.id);
});

document.getElementById('buyRentals').addEventListener('click', (e) => {
   e.preventDefault();
   uiHome.cambiarActivo(e.target.id);
});

document.getElementById('aboutUs').addEventListener('click', (e) => {
   e.preventDefault();
   uiHome.cambiarActivo(e.target.id);
});

document.getElementById('contact').addEventListener('click', (e) => {
   e.preventDefault();
   uiHome.cambiarActivo(e.target.id);
});

document.getElementById('diamond').addEventListener('click', (e) => {
   e.preventDefault();
   uiHome.cargarInformacion(e.target.id);
});

document.getElementById('star').addEventListener('click', (e) => {
   e.preventDefault();
   uiHome.cargarInformacion(e.target.id);
});