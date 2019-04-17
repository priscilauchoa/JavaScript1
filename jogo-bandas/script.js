window.addEventListener('DOMContentLoaded', function() {
   
    let banda = [
        "./acdc.gif",
        "./guns.gif",
        "./kiss.gif"
    ]
    // pegar o botao no html
    let botao = document.getElementById("botao");
    // fazer evento click nesse botao
    botao.addEventListener("click", function(){
        document.getElementById("botao").style = "display: none";
        document.getElementById("gif").src = banda[0];
        setTimeout(function(){document.getElementById("gif").src = banda[1];}, 2000);
        setTimeout(function(){document.getElementById("gif").src = banda[2];}, 4000);
        setTimeout(function(){document.getElementById("gif").src = "";}, 6000);
        setTimeout(function(){document.getElementById("resposta").innerHTML = `<h3>😈AC/DC😈</h3> <h3>🔫GUNS N' ROSES🌹</h3> <h3>🧛KISS🧛</h3>`;}, 6000);
        
    })









  });