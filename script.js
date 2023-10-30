/* Video */
/*Llama al video y los botones play y pausa y duración del video */

let video=document.querySelector("#video_hist");
let botonPlay=document.getElementById("play_video");
let botonPause=document.getElementById("pausa_video");
let zonaDuracion=document.querySelector(".duracion")

/*Calculo de minutos. Duración duration: 281.10077*/

function calculoMinutos(tiempo) {
    let minutos;
    let segundos;
    if (parseInt(tiempo)<60) {
       minutos=0
       segundos=tiempo.toFixed(0); 
       
    } else {
        minutos=parseInt(tiempo/60);
        segundos=parseInt(tiempo%60);
        
    }
    return minutos+":"+segundos
}
window.addEventListener("load",()=>{
    zonaDuracion.textContent=calculoMinutos(video.duration)
    
});

//Reproduce y pausa el video    VER QUE TODO ESTÉ CON ADDEVENTLISTENER O FUNCIÓN EJ ONCLICK
botonPlay.addEventListener("click",()=>{
    video.play()
});
botonPause.addEventListener("click",()=>{
    video.pause()
});


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
imagenRompe1.addEventListener("dragstar", (evento)=>{
    evento.dataTransfer.setData("text/uri-list","./imagenes/Rompe1.png")
 });
imagenRompe1.addEventListener("dragend",finTraslado);

imagenRompe2.addEventListener("dragstar", (evento)=>{
    evento.dataTransfer.setData("text/uri-list","./imagenes/Rompe2.png")
 });
imagenRompe2.addEventListener("dragend",finTraslado);

imagenRompe3.addEventListener("dragstar", (evento)=>{
    evento.dataTransfer.setData("text/uri-list","./imagenes/Rompe3.png")
 });
imagenRompe3.addEventListener("dragend",finTraslado);

    //arma función para finalizar el traslado escondiendo la imagen original
function finTraslado(evento) {
    let imagen=evento.target
    imagen.style.visibility="hidden"

};

//area destino FALTA QUE CAMBIEN EL TAMAÑO DEL DESTINO!!!! VER TAMBIÉN QUE PONGA LA IMAGEN EN EL LUGAR QUE CORRESPONDE
destinoRompe1.addEventListener("dragover",prevenirDefault);
destinoRompe1.addEventListener("drop",(evento)=>{
    let dataImagen=evento.dataTransfer.getData("Text");
    destinoRompe1.innerHTML=`<img id="imagenes_rompe1" src="${dataImagen}"/>`
});  //arma la función para soltar el elemento
destinoRompe2.addEventListener("dragover",prevenirDefault);
destinoRompe2.addEventListener("drop",(evento)=>{
    let dataImagen=evento.dataTransfer.getData("Text");
    destinoRompe2.innerHTML=`<img id="imagenes_rompe2" src="${dataImagen}"/>`
}); //arma la función para soltar el elemento
destinoRompe3.addEventListener("dragover",prevenirDefault);
destinoRompe3.addEventListener("drop",(evento)=>{
    let dataImagen=evento.dataTransfer.getData("Text");
    destinoRompe3.innerHTML=`<img id="imagenes_rompe3" src="${dataImagen}"/>`
}); //arma la función para soltar el elemento


function prevenirDefault(evento) {
    evento.preventDefault()
}

/*Reiniciar */
let botonInicio=document.getElementById("reinicio")
botonInicio.addEventListener("click",()=>{
     window.location.reload();
});
