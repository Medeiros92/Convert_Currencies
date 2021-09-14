//Recebendo dados do HTML
const botao = document.querySelector('#btn');
const input = document.querySelector('#input');
const resultado = document.querySelector('#res');
const imagem = document.querySelector('.img-con');
const quadroImg = document.querySelector('.imagem')


botao.addEventListener('click', function(){
     getValRadio('opt')
     
     quadroImg.style.visibility = 'visible';
})

function getValRadio(name){
const real = document.getElementsByName(name)
    
    for (let i = 0; i < real.length; i++){
        if(real[i].checked){
             var val = real[i].value
        }if(val == '1'){
            imagem.setAttribute('src', './image/eua.jpg')
            const price = parseFloat(input.value) / 5
            return resultado.innerHTML = `Valor Convertido: U$${price.toFixed(2)}`
        }else{
            imagem.setAttribute('src', './image/brasil.jpg')
            const price = parseFloat(input.value) * 5
            return resultado.innerHTML = `Valor Convertido: R$${price.toFixed(2)}`
        }
    }
}
