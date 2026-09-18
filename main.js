const numeroSenha= document.querySelector('.parametro-senha__texto');

numeroSenha.textContent = 5;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes{0}.onclick = diminuiTamanho;
botoes{1}.onclick = aumentaTamanho;

 function diminuiTamanho(){
   if (tamanhoSenha > 1){
       // tamanhoSenha = tamanhoSenha-1;
       tamanhoSenha--; 
   }
    numeroSenha.textContent = tamanhoSenha;
    gerarSenha();
 }
 function aumentaTamanho(){
   if (tamanhoSenha <20){
      // tamanhoSenha = tamanhoSenha+1;
      tamanhoSenha++;    
   }
    numeroSenha.textContent = tamanhoSenha;
    gerarSenha();
 }

 const campoSenha = document.querySelector('#campo-senha');
 const checkbox =document.querySelector('.checkbox');
 
  for (i=0;i < checkbox.length;i++){
   checkbox[i].onclick = gerarSenha;
  } 

 const letrasMaisculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
 const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
 const numeros = '0123456789';
 const simbolos = '!@%?';

 gerarSenha();

 function gerarSenha(){
   let alfabeto = ('');
   if (checkbox[0].checked){
      alfabeto = alfabeto + letrasMaisculas;
}
if (checkbox[1].checked){
   alfabeto = alfabeto + letrasMinusculas;
   }
   if (checkbox[2].checked){
   alfabeto = alfabeto + numeros;
   }
   if (checkbox[3].checked){
   alfabeto = alfabeto + simbolos;
   }
console.log(alfabeto);
  let senha = '';
  for (let i =0; i < tamanhoSenha;i++){
   let numeroAleatorio = Math.random()*alfabeto.length;
  numeroAleatorio = Math.floor(numeroAleatorio);
  senha = senha + alfabeto{numeroAleatorio};
  }
  campoSenha.value = senh/;
 }
 