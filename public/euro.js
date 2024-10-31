
document.addEventListener('DOMContentLoaded', function (e) {
    button = document.getElementById("genBtn");
    button.addEventListener('click', gerachave);

    });

function gerador (n, min, max){
    extracao = new Set();
    while (extracao.size < n){
        novo = Math.floor (Math.random() * (max - min + 1) + min);
        extracao.add (novo); 
    }
    return [...extracao].sort((a, b) => a - b ); //funcao seta
}

function gerachaveJSON(){
    let an = gerador (5, 1, 50);
    let ae = gerador (2, 1, 12);
     chaveJS = {
        numeros: an,
        estrelas: ae,
        gerador: 'pedromoreira'
    }
    return JSON.stringify (chaveJS);
} 

function consomeChaveJSON(chavejson){
    let chaveJS = JSON.parse(chavejson);
    return chaveJS;
}

function gerachave(e) { 
    let an = gerador (5, 1, 50);
    let ae = gerador (2, 1, 12);

    console.log (gerador (5, 1, 50));
    console.log("vou gerar a chave", e);

    //debugger;

    listanumeros = document.getElementById("olMain");
    listanumeros.innerHTML = "";
    an.forEach((numero) => { //an é array de numeros
        let newli = document.createElement ("li");
        newli.innerHTML = numero;
        listanumeros.appendChild(newli);
    })

    listaestrelas = document.getElementById("olStars");
    listaestrelas.innerHTML = "";
    ae.forEach((estrela) => { //ae é array de estrelas
        let newli = document.createElement ("li");
        newli.innerHTML = estrela;
        listaestrelas.appendChild(newli);
    })
}