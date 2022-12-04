//CALCULA O IMC
function getImc(peso, altura){
  const imc = peso / (altura*altura);

  return imc.toFixed(2);
}

//VALIDA O NIVEL DO IMC
function getNivelImc(imc){

  const nivel = [
    'Abaixo do peso',
    'Peso ideal',
    'Sobrepeso',
    'Obesidade grau 1',
    'Obesidade grau 2',
    'Obesidade grau 3'
  ];
  
  if(imc >=39.9){
    return nivel[5];

  }else if (imc >= 34.9){
      return nivel[4];

  }else if (imc >= 29.9){
    return nivel[3];

  }else if (imc >= 24.9){
    return nivel[2];

  }else if (imc >= 18.5){
    return nivel[1];

  }else if (imc < 18.5){
    return nivel[0];

  }

}

const form = document.querySelector('#formulario');

// VALIDAÇÕES APÓS CLICAR EM "CALCULAR"
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const inputPeso = event.target.querySelector('#peso');
  const inputAltura = event.target.querySelector('#altura');

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if(peso == 0 && altura == 0){
    setResultado('Preencha os Campos!', false);
    return;

  }else if(peso == 0){
    setResultado('Digite o Peso!', false);
    return;

  }else if(altura == 0){
    setResultado('Digite a Altura!', false);
    return;

  }else{

    if (!peso) {
      setResultado('Peso inválido', false);
      return;
    }
  
    if (!altura) {
      setResultado('Altura inválida', false);
      return;
    }

  }

  const imc = getImc(peso, altura);
  const nivel = getNivelImc(imc);

  const mensagem = `Seu IMC é ${imc} | ${nivel}`;

  setResultado(mensagem,true);

});

//CRIA UM ELEMENTO P (parágrafo).
function criaP () {
  const p = document.createElement('p');
  return p;
}

function setResultado (mensagem, isValid) {

  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';

  const p = criaP();

  if (isValid) {
    p.classList.add('resultado');

  } else {
    p.classList.add('erro');
    
  }

  p.innerHTML = mensagem;
  resultado.appendChild(p);
}

//ATUALIZA A PÁGINA
function refazer(){
  document.location.reload();
}
