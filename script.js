//Recebendo dados do HTML
const real = document.getElementsByName('Real').value
const dolar = document.getElementsByName('Dolar')
const botao = document.querySelector('#btn');
const input = document.querySelector('#input');
const resultado = document.querySelector('#res');

console.log(real);
botao.addEventListener('click', function(){
     getValRadio('opt')

})

function getValRadio(name){
const real = document.getElementsByName(name)
    
    for (let i = 0; i < real.length; i++){
        if(real[i].checked){
             var val = real[i].value
        }if(val == '1'){
            const price = parseFloat(input.value) / 5
            return resultado.innerHTML = `Valor Convertido: R$${price.toFixed(2)}`
        }else{
            const price = parseFloat(input.value) * 5
            return resultado.innerHTML = `Valor Convertido: R$${price.toFixed(2)}`
        }
    }
}
