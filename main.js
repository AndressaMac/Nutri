
const nome = document.querySelector('#nome')
const peso = document.querySelector('#peso')
const altura = document.querySelector('#altura')


function validaNascimento(){
  const data = document.querySelector('#dataNascimento').valueAsDate

  
  var mes = data.getUTCMonth() + 1; // meses iniciam com o valor 0 ¯\_(ツ)_/¯
  var ano = data.getUTCFullYear();
  
  let now = new Date();
  
  var mesNow = now.getUTCMonth() + 1; // meses iniciam com o valor 0 ¯\_(ツ)_/¯
  var anoNow = now.getUTCFullYear();

  let maior18 = anoNow - ano 
  let mesmaior18 = mesNow - mes
    
  if(maior18>18){
    imc()
  }
  if(maior18==18){
   if(mesmaior18 >= 0) {
    imc()
   }else {
    alert('Procure um nutricionista para fazer o calculo do imc, pois é menor de 18 anos.')
   }
  }if(maior18<18) {
    alert('Procure um nutricionista para fazer o calculo do imc, pois é menor de 18 anos.')
  } 

}


function imc(){
  let pesoimc = peso.value
  let aluturaimc = altura.value
  let nomeimc = nome.value

  let imc = pesoimc / (aluturaimc * aluturaimc)
    if(imc<18){
      alert(`${nomeimc} seu imc é ${imc}`)
      mostrarWhatssap()
     
    }
    if(imc>18.8 && imc< 24.9){
      alert(`${nomeimc} seu imc é ${imc}`)
    }
    if(imc>24.9){
      alert(`${nomeimc} seu imc é ${imc}`)
      mostrarWhatssap()
     
    }
}
//mostrar numero 
function mostrarWhatssap() {
   
  const numero =  document.querySelector('.whatssap')
  numero.classList.add('active')

}
//redirecionar para um site

 function numeroW() {
  location. href = '#'
   
 }


  
