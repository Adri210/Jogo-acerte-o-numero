const MaiorValor = 1000
const MenorValor = 1
const numeroSecreto = GerarNumeroAleatorio()
function GerarNumeroAleatorio (){
    return parseInt(Math.random() * MaiorValor + 1)
}

console.log('numero secreto :',numeroSecreto)

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = MenorValor

const elementoMaiorValor =  document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = MaiorValor

