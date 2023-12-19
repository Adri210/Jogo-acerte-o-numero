
const giphy = document.getElementById('giphy')


function VerificaValor(chute){
    const numero = +chute

    if(NumeroInvalido(numero)){
        giphy.innerHTML = `
        <h1> <iframe src="https://giphy.com/embed/2Okete2V366ZO2HODS" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a 
        href="https://giphy.com/gifs/cat-angry-catgrass-2Okete2V366ZO2HODS"></a></p></h1>
        `
       Elementochute.innerHTML += '<div>valor invalido</div>'   
       return
    }

    if(numeroMaiorouMenor(numero)){
        giphy.innerHTML = `
        <h1> <iframe src="https://giphy.com/embed/2Okete2V366ZO2HODS" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a 
        href="https://giphy.com/gifs/cat-angry-catgrass-2Okete2V366ZO2HODS"></a></p></h1>
    ` 

        Elementochute.innerHTML +=
        `       
         <div>valor invalido: o numero secreto 
         deve estar entre ${MenorValor} e ${MaiorValor}</div>`
          
       return
    }

    if(numero === numeroSecreto){
        document.body.innerHTML=`
        <h1><iframe src="https://giphy.com/embed/0gDJyGdzzRSkAFi9XQ" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/happy-cat-good-0gDJyGdzzRSkAFi9XQ"></a></p></h1>
        <h2>Você acertou</h2>
        <h3>O numero secreto era ${numeroSecreto}</h3>
        <button id="jogar-novamente" class = "btn-jogar">Jogar Novamente</button>
        `
    }

    else if (numero > numeroSecreto){
        giphy.innerHTML = `
        <h1> <iframe src="https://giphy.com/embed/tItuKbSIL2OtbcR4HG" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cat-no-sad-tItuKbSIL2OtbcR4HG"></a></p></h1>
        `
        
        Elementochute.innerHTML += ` 
        <div>o numero secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
         `

         
    }
    else{
        giphy.innerHTML = `
        <h1> <iframe src="https://giphy.com/embed/tItuKbSIL2OtbcR4HG" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cat-no-sad-tItuKbSIL2OtbcR4HG"></a></p></h1>
        `
        Elementochute.innerHTML += ` <div>o numero secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
         `

         
         
    }
}
function  NumeroInvalido (numero){
    return Number.isNaN(numero)}

function numeroMaiorouMenor(numero){
        return numero > MaiorValor || numero < MenorValor
        console.log(`valor invalido: o numero secreto deve estar entre  ${MenorValor} e ${MaiorValor}`)

    }

    document.body.addEventListener('click', e=>{
        if(e.target.id == 'jogar-novamente'){
            window.location.reload()
        }
    })
    