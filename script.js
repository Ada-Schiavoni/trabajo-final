/* Video */
/*Llama al video y los botones play y pausa y duración del video */

let video=document.querySelector("#video_hist");
let botonPlay=document.querySelector("#play_video");
let botonPause=document.querySelector("#pausa_video");
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

