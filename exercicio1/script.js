window.addEventListener('DOMContentLoaded', function (event) {

    const paisVelho = document.querySelector('#pais');

    paisVelho.addEventListener('change', function(){
        const paisVelhoValor = this.value;


        if (paisVelhoValor == "br") {
            document.getElementById("containerEscondida").style.display = "block";

            const cidadeVelho = document.querySelector('#cidade');
            cidadeVelho.addEventListener('change', function () {
                const cidadeVelhoValor = this.value;
                console.log(cidadeVelhoValor)

                if (cidadeVelhoValor == "Cx") {
                    result.innerHTML = `🍬 Minha amiga vai ganhar dois ovos de chocolate ao leite 🍫`;
                }

 
                else if (cidadeVelhoValor == "Sp") {
                    result.innerHTML = `🍫 Minha amiga vai ganhar dois ovos de chocolate amargo 🍬`;
                }

                else {
                    result.innerHTML = `🍫 Minha amiga vai ganhar dois ovos de chocolate branco 🍬`;
                }

            });
        }
            
            else if (paisVelhoValor == "eua") {
                document.getElementById("containerEscondida").style.display = "none";
                result.innerHTML = `🍬 Minha amiga vai ganhar dois ovos de chocolate ao leite 🍫`;
            }

            else if (paisVelhoValor == "uk") {
                document.getElementById("containerEscondida").style.display = "none";
                result.innerHTML = `🍫 Minha amiga vai ganhar dois ovos de chocolate amargo 🍬`;
            }

            else {
                document.getElementById("containerEscondida").style.display = "none";
                result.innerHTML = `🍫 Minha amiga vai ganhar dois ovos de chocolate branco 🍬`;
            }



    });
});