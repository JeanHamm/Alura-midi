function tocaSom(seletorAudio){

    const elemento = document.querySelector(seletorAudio);
    
    if(elemento.localName === 'audio' && elemento != null){
        elemento.play();
    } 
    else{
        console.log('Elemento ou classe não encontrado');
    }
}
const listaDeTecla = document.querySelectorAll('.tecla');

let contador = 0;
listaDeTecla[0].classList[1]

for (let contador = 0; contador < listaDeTecla.length; contador++){
    const tecla = listaDeTecla[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;
    console.log(idAudio)

    tecla.onclick = function() {
         tocaSom(idAudio);
    };

    tecla.onkeydown = function(event){
        if(event.code === 'Space'|| event.code === 'Enter'){  
        tecla.classList.add('ativa');
      }
    }   
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }

}




