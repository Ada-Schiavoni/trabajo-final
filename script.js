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
       return minutos+":"+segundos
    } else {
        minutos=((tiempo)/60)
        return minutos.toFixed(2) /**NO DA BIEN EL VALOR VER PORQUE NECESITA LO DOS PUNTOS
        TENDRÍA QUE TOMAR EL ENTERO DE LOS MINUTOS Y LUEGO TOMAR LOS DECIMALES PARA SEGUNDOS? */
    }
    
}
window.addEventListener("load",()=>{
    zonaDuracion.textContent=calculoMinutos(video.duration)
    
});

/*Reproduce y pausa el video    VER QUE TODO ESTÉ CON ADDEVENTLISTENER O FUNCIÓN EJ ONCLICK*/
botonPlay.addEventListener("click",()=>{
    video.play()
});
botonPause.addEventListener("click",()=>{
    video.pause()
});

/*Pagína juego */
/*Reiniciar */
let botonInicio=document.getElementById("reinicio")
botonInicio.addEventListener("click",()=>{
    
});
