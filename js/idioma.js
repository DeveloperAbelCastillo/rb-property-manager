class idioma{
   constructor(){
   }

   ObtenerIdiomaActual(){
      if (document.getElementById('idioma').textContent.trim() == 'English'){
         document.getElementById('idioma').innerHTML = ' Español';
         return 'en';
      }
      else{
         document.getElementById('idioma').innerHTML = ' English';
         return 'es';
      }
   }
}