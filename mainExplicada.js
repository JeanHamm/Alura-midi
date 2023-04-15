function tocaSom(seletorAudio){
    // Tem que ser o querySelector alone, não pode ser o all, pois nessa logica ele pega apenas 1
    //transforei em elemento para para ser mais facil de compreender no futuro
    const elemento = document.querySelector(seletorAudio);
    
    //Usado para que os dados de som informados sejam validos
    
    //Usado para identificar se o elemento achado é um audio ou não, como descrevi a baixo
    // && é o perador lógico de E 
    // Deixado apenas elemento para que o java entenda que se tem algo ali já é valido
    if(elemento.localName === 'audio' && elemento){
        
        // prococuramos dentro do elemento(document.querySelector) algumas propriedades e achamos o localName que tem o tipo de elemento, no nosso caso é o Aúdio
        console.log(elemento.localName === 'audio')
        
        elemento.play();
    } 
    else{
        //Usado para dar uma mensagem no comando, quando tentarem usar uma tag que não seja audio
        console.log('Elemento não encontrado');
    }
}
//o querySelector quando está no all, e procura algo amplo ele vai ser identificado depois com o [0, 1, 2...], recomendo passar para uma variavel ou constante esse atributo para manipular melhor
const listaDeTecla = document.querySelectorAll('.tecla');

let contador = 0;
// class list é usado para acessar qual classe vai puxar
listaDeTecla[0].classList[1]

for (let contador = 0; contador < listaDeTecla.length; contador++){
    const tecla = listaDeTecla[contador];
    const instrumento = tecla.classList[1];

    // Como dentro da função tocaSom eu preciso usar o '' dentro dos parenteses, usando os `` $ {} conseguimos modificar a string para usar na função tocaSom (Chamado de template String)
    const idAudio = `#som_${instrumento}`;
    console.log(idAudio)

    //Foi colocada a função anonima para não executar a tocaSom antes do clique no botão
    tecla.onclick = function() {
         tocaSom(idAudio);
    };
        //onkeydown é quando clicado com o teclado "keydown" acontece isso
        //Foi colocado o function(event) para usar no console.log para rastrear os eventos quando apertar a tecla
    tecla.onkeydown = function(event){
      
        //usado junto com a função event par alocalizar o nome da tecla clicada
        console.log(event.code === 'Space'|| event.code === 'Enter')
      
        // Fazemos uma comparação logica para ver se a funcão"onkeydonw" é igual a tecla de espaço
        // Podemos usar 2 compradores de igual: O == que compra apenas valores seja string com números ou o comparador lógico === que comprara valores e tipos como números != de strings
        //O operador lógico || é usado para OU 
        if(event.code === 'Space'|| event.code === 'Enter'){  

        //usado uma caracteristica ao classList, o add, ele púxa uma subclasse daquela classe Ex: tecla:active ou tecla.ativa
        tecla.classList.add('ativa');

      }
    }   
    // Quando a soltar a tecla ele "keyup" acontece isso    
    tecla.onkeyup = function(){
        //informa para retirar a class ativa da tecla
        tecla.classList.remove('ativa');
    }

}




