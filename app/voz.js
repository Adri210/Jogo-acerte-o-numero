const Elementochute = document.getElementById('chute')
window.SpeechRecognition = window.SpeechRecongnition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-BR'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e){

    chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
    VerificaValor(chute)

}

function exibeChuteNaTela(chute){
        Elementochute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
        `
}

recognition.addEventListener('end', ( ) => recognition.start())