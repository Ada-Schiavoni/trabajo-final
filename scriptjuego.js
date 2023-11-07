/*Página juego 
 llama a los elementos de arrastre */
 let imagenRompe1=document.querySelector("#imagenes_rompe1");
 let imagenRompe2=document.querySelector("#imagenes_rompe2");
 let imagenRompe3=document.querySelector("#imagenes_rompe3");
 
 /** Llama a la zona destino */
 let destinoRompe1=document.querySelector(".caja_imagen1");
 let destinoRompe2=document.querySelector(".caja_imagen2");
 let destinoRompe3=document.querySelector(".caja_imagen3");
 
 //arrastra los elementos

 //comienzo de arrastre para el evento y las imagenes
 imagenRompe1.addEventListener("dragstart", (evento)=>{
     evento.dataTransfer.setData("text/uri-list","./imagenes/Rompe1.png")
  });
  
 imagenRompe2.addEventListener("dragstart", (evento)=>{
     evento.dataTransfer.setData("text/uri-list","./imagenes/Rompe2.png")
  });
 
 imagenRompe3.addEventListener("dragstart", (evento)=>{
     evento.dataTransfer.setData("text/uri-list","./imagenes/Rompe3.png")
  });
  
 //area destino 
 //arma las funciones para soltar el elemento 
 destinoRompe1.addEventListener("dragover",prevenirDefault);
 destinoRompe1.addEventListener("drop",(evento)=>{
     let dataImagen=evento.dataTransfer.getData("text/uri-list");
     console.log(dataImagen)
     if (dataImagen==="./imagenes/Rompe1.png") {
            destinoRompe1.innerHTML=`<img id="imagenes_rompe1" src="${dataImagen}"/>`;
            imagenRompe1.style.visibility="hidden";
        } else {
             alert("La imagen no corresponde al rompecabezas");
             
        };
 });  
 destinoRompe2.addEventListener("dragover",prevenirDefault);
 destinoRompe2.addEventListener("drop",(evento)=>{
     let dataImagen=evento.dataTransfer.getData("text/uri-list");

     if (dataImagen==="./imagenes/Rompe2.png") {
        destinoRompe2.innerHTML=`<img id="imagenes_rompe2" src="${dataImagen}"/>`;
        imagenRompe2.style.visibility="hidden";
    } else {
         alert("La imagen no corresponde al rompecabezas");
         
    };
 }); 
 destinoRompe3.addEventListener("dragover",prevenirDefault);
 destinoRompe3.addEventListener("drop",(evento)=>{
     let dataImagen=evento.dataTransfer.getData("text/uri-list");
     if (dataImagen==="./imagenes/Rompe3.png") {
        destinoRompe3.innerHTML=`<img id="imagenes_rompe3" src="${dataImagen}"/>`;
        imagenRompe3.style.visibility="hidden";
    } else {
         alert("La imagen no corresponde al rompecabezas");
        
    };
 }); 
 
 
 function prevenirDefault(evento) {
     evento.preventDefault()
 }
 
 /*Reiniciar */
 let botonInicio=document.getElementById("reinicio")
 botonInicio.addEventListener("click",()=>{
      window.location.reload();
 });