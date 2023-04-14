function tocaSom(idElementoAudio){
    // Tem que ser o querySelector alone, não pode ser o all, pois nessa logica ele pega apenas 1
    document.querySelector(idElementoAudio).play();

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
    console.log(contador);
    
}
