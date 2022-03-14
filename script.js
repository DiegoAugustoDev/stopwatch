let timer = document.getElementById("timer");
let seg = 0;
let min = 0;
let hour = 0;
let play1 = false
let play2 = false
let play3 = false
let segundos;
let atualizacao;

function atualizarSegundo(){

    seg++

    if(seg == 60){
        seg = 0
        min++

        if(min == 60){
            min = 0
            min++
        }
    }

    variation = (hour < 10 ? "0" + hour: hour) + ":" + (min <10 ? "0" + min :min) + ":" + (seg <10 ? "0" + seg :seg)
    timer.innerText = variation

}

function start(){
    if (!play1){
        segundos = setInterval(atualizarSegundo, 1000)

        play1 = true
        play2 = false
    }
}

function pause() {

    if (!play2) {
        clearInterval(segundos)
        play2 = true
        play1 = false
    }

}

function stop() {

    seg = 0
    min = 0
    hour = 0

    timer.innerText = "00:00:00"

    clearInterval(segundos)
    play2 = false
    play1 = false
}
