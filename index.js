function Validar(){
    let botao1 = document.getElementById("botao1").value;
    let botao2 = document.getElementById("botao2").value;

    botao1 = parseInt(botao1);
    botao2 = parseInt(botao2);

    if(botao1 >= 10 || botao2 < 1000){
        console.log("Valido");
    }
    else{
        console.log("Invalido");
    }

}


