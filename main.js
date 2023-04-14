function tocaSomPom(){
    const listaDeSom = document.querySelectorAll('audio')
    listaDeSom[0].play();
}

const listaDeTecla = document.querySelectorAll('.tecla');

let contador = 0;

while(contador < listaDeTecla.length){
    
    listaDeTecla[contador].onclick = tocaSomPom;

    contador++;

    console.log(contador);

}