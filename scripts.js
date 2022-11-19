    let btnStart = document.getElementById("start") // Essas variável é o nosso botão do HTML
    let btnStop = document.getElementById("stop") 
    let btnReset =document.getElementById("reset")
    let mili = document.getElementById("mili") // Essas variável é o milisegundo do HTML
    let segundos = document.getElementById("segundos")
    let minutos = document.getElementById("minutos")
    let horas = document.getElementById("horas")

    let startimer // Essa variável, guarda o nosso times
    let ms = "00" // Essa variável guardará o milisegundos dentro do JavaScript
    let seg = "00"
    let min = "00"
    let hr = "00"

     // Essa função dispara o timer, e é chamada quando eu clico no botão START
    function start() {
        startTimer = setInterval(function () {
            ms++ // Cada vez que eu passo aqui, eu somo + 1

            if (ms === 100) {  // SÓ ENTRA AQUI QUANDO O MS FOR IGUAL A 100
                seg++

                if (seg < 10) {  // SÓ ENTRA AQUI QUANDO O SEG FOR MENOR QUE 10
                    seg = "0" + seg // COLOCA UM ZERO NA FRENTE, MAS SÓ QUANDO O NUMERO FOR MENOR QUE 10
                }
                ms = 0
            }

            if (seg == 60) {  // SÓ ENTRA AQUI QUANDO O SEG FOR IGUAL A 60
                min++
                if (min < 10) {
                    min = "0" + min
                }
                seg = 0
            }

            if (min == 60) {
                hr++
                if (hr < 10) {
                    hr = "0" + hr
                }
                min = 0
            }

            btnStart.classList.add("ativo")
            btnStop.classList.remove("ativo")
            atualizavalor()
        }, 10); // de quanto em quanto tempo será chamado em milisegundos
    }

    function stop (){  // PARA O CRONOMETRO
        clearInterval(startTimer) // PAUSA O SET INTERVAL
        btnStop.classList.add("ativo") // ADICIONA A CLASSE ATIVO AO BOTAO STOP
        btnStart.classList.remove("ativo") // REMOVE A CLASSE ATIVO AO BOTAO START
    }

    function reset(){ // RESETA O TIMER
        clearInterval(startTimer) // PAUSA O SET INTERVAL
        ms = "00"
        seg = "00"
        min = "00"
        hr = "00"
        atualizavalor()
        btnStart.classList.remove("ativo") // REMOVE A CLASSE ATIVO AO BOTAO START
        btnStop.classList.remove("ativo") // REMOVE A CLASSE ATIVO AO BOTAO STOP
    }

    function atualizavalor() { // PEGA OS VALORES DAS VARIAVEIS NO JAVASCRIPT E COLOCA NO HTML
        mili.innerHTML = ms // INNERHTML, INSERE UM VALOR EM UM ELEMENTO HTML
        segundos.innerHTML = seg
        minutos.innerHTML = min
        horas.innerHTML = hr
    }

    btnStart.addEventListener("click", start) // SEMPRE QUE HOUVER UM EVENTO DETERMINADO, NESSE CASO O CLICK, CHAMA UMA FUNCAO
    btnStop.addEventListener("click", stop)
    btnReset.addEventListener("click", reset)