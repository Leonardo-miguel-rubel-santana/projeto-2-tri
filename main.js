const numeroSenha= document.querySelector('.parametro-senha__texto');

numeroSenha.textContent = 5;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes{0}.onclick = diminuiTamanho;

 function diminuiTamanho(){
    tamanhoSenha = tamanhoSenha-1;
    numeroSenha.textContent = tamanhoSenha;

 }
 console.log(botoes);