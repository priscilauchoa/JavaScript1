window.addEventListener('DOMContentLoaded', function () {

    const listaJogadas = ["pedra", "papel", "tesoura", "lagartro", "spock"];

    // Pega o texto digitado no input

    // faz uma jogada aleatória para o computador


    let jogar = document.querySelector("#botao");
    
    jogar.addEventListener('click', function () {
        let listaJogadas = ["pedra", "papel", "tesoura", "lagartro", "spock"];
        let escolhaComputador = listaJogadas[Math.floor(Math.random() * listaJogadas.length)];
        let escolhaUsuario = document.querySelector("#entrada").value;
        

        switch (escolhaUsuario) {
            case listaJogadas[0]:
                if (escolhaComputador == "pedra") {
                    document.querySelector("#result").innerHTML = `Empate, pois o computador  escolheu ${escolhaComputador}`;
                }
                else if (escolhaComputador == "papel" || escolhaComputador == "lagarto") {
                    document.querySelector("#result").innerHTML = `Ganhou, pois o computador  escolheu ${escolhaComputador}`;
                }

                else {
                    document.querySelector("#result").innerHTML = `Perdeu, pois o computador  escolheu ${escolhaComputador}`;
                }
                break;
            
                
            case listaJogadas[1]:
                if (escolhaComputador == "papel") {
                    document.querySelector("#result").innerHTML = `Empate, pois o computador  escolheu ${escolhaComputador}`;
                }
                else if (escolhaComputador == "pedra") {
                    document.querySelector("#result").innerHTML = `Ganhou, pois o computador  escolheu ${escolhaComputador}`;
                }

                else {
                    document.querySelector("#result").innerHTML = `Perdeu, pois o computador  escolheu ${escolhaComputador}`;
                }
                break;

            
            case listaJogadas[2]:
                if (escolhaComputador == "tesoura") {
                    document.querySelector("#result").innerHTML = `Empate, pois o computador  escolheu ${escolhaComputador}`;
                }
                else if (escolhaComputador == "papel" || escolhaComputador == "lagarto" || escolhaComputador == "spock") {
                    document.querySelector("#result").innerHTML = `Ganhou, pois o computador  escolheu ${escolhaComputador}`;
                }

                else {
                    document.querySelector("#result").innerHTML = `Perdeu, pois o computador  escolheu ${escolhaComputador}`;
                }
                break;
                
            case listaJogadas[3]:
                if (escolhaComputador == "lagarto") {
                    document.querySelector("#result").innerHTML = `Empate, pois o computador  escolheu ${escolhaComputador}`;
                }
                else if (escolhaComputador == "papel" || escolhaComputador == "spock") {
                    document.querySelector("#result").innerHTML = `Ganhou, pois o computador  escolheu ${escolhaComputador}`;
                }

                else {
                    document.querySelector("#result").innerHTML = `Perdeu, pois o computador  escolheu ${escolhaComputador}`;
                }
                break;

                
            case listaJogadas[4]:
                if (escolhaComputador == "spock") {
                    document.querySelector("#result").innerHTML = `Empate, pois o computador  escolheu ${escolhaComputador}`;
                }
                else if (escolhaComputador == "lagarto" || escolhaComputador == "papel") {
                    document.querySelector("#result").innerHTML = `Perdeu, pois o computador  escolheu ${escolhaComputador}`;
                }

                else {
                    document.querySelector("#result").innerHTML = `Ganhou, pois o computador  escolheu ${escolhaComputador}`;
                }
                break;

        default: 
                alert("Nenhuma opção válida foi escolhida")
                document.querySelector("#result").innerHTML = '';
                
        break;
        }


    })


















});