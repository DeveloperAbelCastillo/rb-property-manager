class interfazHome{
   constructor(idioma){
      this.init(idioma);
   }

   init(idioma){
      document.title = "RB Property Manager";
      document.getElementById('marca').textContent = "RB Property Manager";
      this.cambiarLenguaje(idioma);
   }

   cambiarLenguaje(idioma){
      this.idioma = idioma;
      this.cargarLenguaje();
   } 

   cargarLenguaje(){
      this.cargarMenu();
      this.cargarActivo();
   }
   
   cargarMenu(){
      fetch(this.idioma+'.json')
         .then(function(res) {
            return res.json();
         })
         .then(function(data){
            //Cambiando el menu
            const menu = data.menu;
            document.getElementById('home').innerHTML = menu.home;
            document.getElementById('services').innerHTML = menu.services;
            document.getElementById('buyRentals').innerHTML = menu.buyRentals;
            document.getElementById('aboutUs').innerHTML = menu.aboutUs;
            document.getElementById('contact').innerHTML = menu.contact;
            
            //Cambiando los paquetes
            const paquetes = data.packages;
            document.getElementById('diamond').innerHTML = paquetes.diamond;
            document.getElementById('diamond').parentElement.parentElement.children[1].textContent = paquetes.diamondDetail;
            document.getElementById('star').innerHTML = paquetes.star;
            document.getElementById('star').parentElement.parentElement.children[1].textContent = paquetes.starDetail;
         })
         .catch(function(error) {
            console.log(error);
         });
   }

   cambiarActivo(activo){
      document.querySelector('.active').classList.remove("active");
      document.getElementById(activo).classList.add("active");
      uiHome.cargarActivo();
   }
   
   cargarActivo(){
      document.getElementById('section').innerHTML = '';
      const activo = document.querySelector('.active').id;
      this.cargarInformacion(activo);
   }

   cargarInformacion(activo){
      if(activo === 'home')
         this.cargarHome();
      if(activo === 'services')
         this.cargarServices();
      if(activo === 'buyRentals')
         this.cargarBuyRentals();
      if(activo === 'aboutUs')
         this.cargarAboutUs();
      if(activo === 'contact')
         this.cargarContact();
      if(activo == 'diamond')
         this.cargarDiamond();
      if(activo == 'star')
         this.cargarStar();
   }

   cargarDiamond(){
      fetch(this.idioma+'.json')
         .then(function(res) {
            return res.json();
         })
         .then(function(data){
            //Cambiando el contenido
            const diamond = data.diamond;
            let templateHTML = ``;
            diamond.forEach(function(seccion){
               if(seccion['imagen']){
                  templateHTML += `
                     <h2 id="title" class="titulo"><img src="images/${seccion.imagen}" width="35" height="35"> ${seccion.title}</h2>
                     <ul>
                  `;
                  seccion.lista.forEach(function(item){
                     templateHTML += `
                        <li>${item.value}</li>
                     `;
                  });
                  templateHTML += `
                     </ul>
                  `;
               }

               if(seccion['value']){
                  templateHTML += `
                     <p class="informacion">${seccion.value}</p>
                  `;
                  console.log(seccion)
                  if(seccion['lista']){
                     templateHTML += `             
                        <ul>
                     `;
                     seccion.lista.forEach(function(item){
                        templateHTML += `
                           <li>${item.value}</li>
                        `;
                     });
                     templateHTML += `
                        </ul>
                     `;
                  }
               }

               if(seccion['tables']){
                  templateHTML += `
                     <div>
                        <table>
                           <tbody>
                  `;
                  seccion.tables.forEach(function(table){
                     templateHTML += `
                        <tr class="encabezado">
                           <th>${table.name.toUpperCase()}</th>
                           <th>PRICE</th>
                        </tr>
                     `;
                     table.rows.forEach(function(row){
                        templateHTML += `
                           <tr>
                              <th>${row.value}</th>
                              <th>${row.price}</th>
                           </tr>
                        `;
                     })
                  });
                  templateHTML += `
                           </tbody>
                        </table>
                     </div>
                  `;
               }
            });
         document.getElementById('section').innerHTML = templateHTML;
         })
         .catch(function(error) {
            console.log(error);
         });
   }

   cargarStar(){
      fetch(this.idioma+'.json')
         .then(function(res) {
            return res.json();
         })
         .then(function(data){
            //Cambiando el contenido
            const star = data.star;
            let templateHTML = ``;
            star.forEach(function(seccion){
               if(seccion['imagen']){
                  templateHTML += `
                     <h2 id="title" class="titulo"><img src="images/${seccion.imagen}" width="35" height="35"> ${seccion.title}</h2>
                     <ul>
                  `;
                  seccion.lista.forEach(function(item){
                     templateHTML += `
                        <li>${item.value}</li>
                     `;
                  });
                  templateHTML += `
                     </ul>
                  `;
               }

               if(seccion['value']){
                  templateHTML += `
                     <p class="informacion">${seccion.value}</p>
                  `;
               }

               if(seccion['tables']){
                  templateHTML += `
                     <div>
                        <table>
                           <tbody>
                  `;
                  seccion.tables.forEach(function(table){
                     templateHTML += `
                        <tr class="encabezado">
                           <th>${table.name.toUpperCase()}</th>
                           <th>PRICE</th>
                        </tr>
                     `;
                     table.rows.forEach(function(row){
                        templateHTML += `
                           <tr>
                              <th>${row.value}</th>
                              <th>${row.price}</th>
                           </tr>
                        `;
                     })
                  });
                  templateHTML += `
                           </tbody>
                        </table>
                     </div>
                  `;
               }
            });
         document.getElementById('section').innerHTML = templateHTML;
         })
         .catch(function(error) {
            console.log(error);
         });
   }

   //Cargamos el JSON
   cargarHome() {
      fetch(this.idioma+'.json')
         .then(function(res) {
            return res.json();
         })
         .then(function(data){
            //Cambiando el contenido
            const home = data.home;
            let templateHTML = ``;
            home.forEach(function(hom) {
               templateHTML += `
                  <h2 id="title" class="titulo">${hom.title}</h2>
               `;
               hom.parrafos.forEach(function(parrafo) {
                  if(parrafo['value']){
                     templateHTML += `
                        <p class="informacion">${parrafo.value}</p>
                     `;
                  }
                  if(parrafo['lista']){
                     templateHTML += `
                        <ul>
                     `;
                     parrafo.lista.forEach(function(item) {
                        templateHTML += `
                           <li>
                        `;
                        if(item['title']){
                           templateHTML += `
                              <strong>${item.title}</strong> - 
                           `;
                        }
                        templateHTML += `
                           ${item.value}</li>
                        `;
                     })
                     templateHTML += `
                        </ul>
                     `;
                  }
               })
            })
            document.getElementById('section').innerHTML = templateHTML;
         })
         .catch(function(error) {
            console.log(error);
         });
   }

   cargarServices() {
      fetch(this.idioma+'.json')
         .then(function(res) {
            return res.json();
         })
         .then(function(data){
            //Cambiando el contenido
            const services = data.services;
            let templateHTML = ``;
            services.forEach(function(service) {
               templateHTML += `
                  <h2 id="title" class="titulo">${service.title}</h2>
               `;
               service.parrafos.forEach(function(parrafo) {
                  if(parrafo['title']){
                     templateHTML += `
                        <p class="informacion"><strong>${parrafo.title}</strong> - ${parrafo.value}</p>
                     `;
                  } else {
                     templateHTML += `
                        <p class="informacion">${parrafo.value}</p>
                     `;
                  }
                  if(parrafo['lista']){
                     templateHTML += `
                        <ul>
                     `;
                     parrafo.lista.forEach(function(item) {
                        templateHTML += `
                           <li>${item.value}</li>
                        `;
                     })
                     templateHTML += `
                        </ul>
                     `;
                  }
               })
            })
            document.getElementById('section').innerHTML = templateHTML;
         })
         .catch(function(error) {
            console.log(error);
         });
   }

   cargarBuyRentals() {
      fetch(this.idioma+'.json')
         .then(function(res) {
            return res.json();
         })
         .then(function(data){
            //Cambiando el contenido
            const buyRentals = data.buyRentals;
            let templateHTML = ``;
            buyRentals.forEach(function(buyRental) {
               templateHTML += `
                  <h2 id="title" class="titulo">${buyRental.title}</h2>
               `;
               buyRental.parrafos.forEach(function(parrafo) {
                  templateHTML += `
                     <p class="informacion">${parrafo.value}</p>
                  `;
               })
            })
            document.getElementById('section').innerHTML = templateHTML;
         })
         .catch(function(error) {
            console.log(error);
         });
   }

   cargarAboutUs() {
      fetch(this.idioma+'.json')
         .then(function(res) {
            return res.json();
         })
         .then(function(data){
            //Cambiando el contenido
            const aboutUs = data.aboutUs;
            let templateHTML = ``;
            aboutUs.forEach(function(about) {
               templateHTML += `
                  <h2 id="title" class="titulo">${about.title}</h2>
               `;
               about.parrafos.forEach(function(parrafo) {
                  templateHTML += `
                     <p class="informacion">${parrafo.value}</p>
                  `;
               })
            })
            document.getElementById('section').innerHTML = templateHTML;
         })
         .catch(function(error) {
            console.log(error);
         });
   }

   cargarContact(){
      let templateHTML = `
      <form class="form">
         <h2>CONTACT US</h2>
         <p type="Name:"><input id="name" placeholder="Write your name here.."></input></p>
         <p type="Email:"><input id="email" placeholder="Let us know how to contact you back.."></input></p>
         <p type="Message:"><textarea id="message" placeholder="What would you like to tell us.."></textarea></p>
         <button id="enviarEmail">Send Message</button>
         <div>
            <span></span>001 1023 567
            <span></span> contact@company.com
         </div>
      </form>
      `;
      document.getElementById('section').innerHTML = templateHTML;
      // this.inicioApp();
      // document.getElementById('name').addEventListener('blur', this.validarCampo());
      // document.getElementById('email').addEventListener('blur', this.validarCampo());
      // document.getElementById('message').addEventListener('blur', this.validarCampo());
      document.getElementById('enviarEmail').addEventListener('click', (e) => {
         e.preventDefault();
         uiHome.abreEmail();
      });
   }
   
   abreEmail() {
      if(this.validarCampo()){
         const emailTo = 'abel@abcala.net';
         const subject = document.getElementById('name').value + ' - ' + document.getElementById('email').value;
         const message = document.getElementById('message').value;
         location.href = "mailto:"+emailTo+'?subject='+subject+'&body='+message;
      }
   }

   inicioApp() {
      // deshabilitar el envio
      document.getElementById('enviarEmail').disabled = true;
   }
   
   validarCampo() {
      // Se valida la longitud del texto y que no este vacio
      if(this.validarLongitud(document.getElementById('name')) && this.validarLongitud(document.getElementById('email')) && this.validarLongitud(document.getElementById('message'))){
         // Validar unicamente el email
         if(this.validarEmail(document.getElementById('email'))){
            return true;
         }
      }
      return false;
   }

   // Verifica la longitud del texto en los campos
   validarLongitud(campo) {
      if(campo.value.length > 0 ) {
         return true;
      } else {
         return false;
      }
   }

   validarEmail(campo) {
      const mensaje = campo.value;
      if(mensaje.indexOf('@') !== -1 ) {
         return true;
      } else {
           return false;
      }
   }
}