const cardTanques = document.querySelectorAll(".cardTanque");
const cardMunicoes = document.querySelectorAll(".cardMunicoes");

const vidaTanques = {
    'Puma': 10,
    'Tiger': 20,
    'Maus': 30
};
// let danosMunicoes = [0];
// let danoMunicao = 0
// for(let i = 0; i < 3; i++){
//     danoMunicao = document.querySelector("{{municao.tipo}}").getAttribute("value");
//     danosMunicoes.push(danoMunicao)
// }

let tanqueSelecionado;
let municaoSelecionado;

for(const cardTanque of cardTanques){
    cardTanque.addEventListener("click",function(){
        for(const CardTanque of cardTanques){
            CardTanque.classList.remove("selecionado")
            tanqueSelecionado = null;
        }
        if(!this.classList.contains("selecionado")){
            this.classList.add("selecionado");
            tanqueSelecionado = cardTanque;
        }else{
            this.classList.remove("selecionado");
        }
    })
}

for(const CardMunicao of cardMunicoes){
    CardMunicao.addEventListener("click",function(){
        for(const cardMunicao of cardMunicoes){
            cardMunicao.classList.remove("selecionado")
            municaoSelecionado = null;
        }
        if(!this.classList.contains("selecionado")){
            this.classList.add("selecionado");
            municaoSelecionado = CardMunicao;
        }else{
            this.classList.remove("selecionado")
        }
    })
}

function dano(){
    if (!tanqueSelecionado || !municaoSelecionado) {
        alert('Selecione o tanque inimigo e o tipo de munição para calcular o dano');
        return;
    }

    const danoDados = sorte();
    const danoMunicao = municaoSelecionado.getAttribute("value");
    const danoTotal = danoDados + parseInt(danoMunicao);
    const vidaTanque = tanqueSelecionado.getAttribute("value");

    let resultado = 'Dano: ' + danoTotal + '! ';

    if (danoTotal >= parseInt(vidaTanque)) {
        resultado += 'Parabéns, você destruiu ' + tanqueSelecionado.getAttribute("id") + "!";
    } else {
        resultado += 'Seu tiro não danificou ' +tanqueSelecionado.getAttribute("id")+"!";
    }

    document.getElementById('resultado').innerHTML = resultado;
}

function sorte() {
    const max = Math.floor(10);

    return Math.floor(Math.random() * (max + 1));
}
