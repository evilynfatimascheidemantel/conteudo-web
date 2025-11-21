//*variaveis globais

let qtdcliques = 0;

// função para lidar com o clique do botao 
function handleclick(){
    qtdcliques++; //mesma coisa que qtdcliques = qtdcliques + 1
    atualizacontador();
    geraposicaobotao();
}

//gera uma nova posição para o botão
function geraposicaobotao(){
    let botao = document.getElementsByTagName('button')[0];
    botao.style.position = 'absolute';
    botao.style.left = geraposicaoaleatoria(2,75);
     botao.style.top = geraposicaoaleatoria(10,80);
}

//gera valor aleatorio para a posição
function geraposicaoaleatoria(min,max){
    return ((Math.random()*max)+min)+'%'

}
//Atualiza contador na tela
function atualizacontador(){
    let container = document.getElementById('quantidade-cliques');
    console.log(container)
    container.innerText = qtdcliques;
}

let segundos = 0;

//Crônometro de execução 
function cronometro(){
    setTimeout(()=>{
        atualizacronometro();
        calculacliquesporminuto();
        atualizaCPM();

        segundos++;

        cronometro();
    },1000)

}

function atualizacronometro(){
    let elemento_cronometro = document.getElementById('cronometro')
        elemento_cronometro.innertext = segundos;
}
let cliquesporminuto = 0;

function calculacliquesporminuto(){
    cliquesporminuto = qtdcliques/(segundos/60)

}

function atualizaCPM(){
    let cpm = document.getElementById('cpm')
        Cpm.innertext = cliquesporminuto;

}
window.onload = ()=>{
    cronometro();
}