const numeroSenha = document.querySelector('.parametro-senha-texto');
let tamanhoSenha=12;
numeroSenha.textContent=tamanhoSenha;
const botoes=document.querySelectorAll('.parametro-senha-botao');

botoes[0].onclick=diminuirTamanho;
botoes[1].onclick=aumentarTamanho;


function diminuirTamanho(){
    if( tamanhoSenha>4){
    tamanhoSenha= tamanhoSenha - 1;
    numeroSenha.textContent=tamanhoSenha;
    }  
}
function aumentarTamanho(){
    if( tamanhoSenha<13){
    tamanhoSenha= tamanhoSenha +1;
    numeroSenha.textContent=tamanhoSenha;
    }  
}

