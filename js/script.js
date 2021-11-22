const resultado = document.querySelector('#message')
const resultadoDos = document.querySelector('.resultadoDos')

const btnDolares = document.querySelector('#btn')
btnDolares.onclick = () =>{
    const inputDolares = document.querySelector('#conversorUno').value
    let valorDolar = (inputDolares*100.41)
    resultado.textContent=`Su conversion de dolares es $  ${valorDolar} pesos argentinos`
}

const btnEuros = document.querySelector('#btn-r')
btnEuros.onclick = () =>{
    const inputEuros = document.querySelector('#conversorDos').value
    let valorEuro = (inputEuros * 112.81)
    resultado.textContent=`Su conversion de euros es $ ${valorEuro} en pesos argentinos`
}

const btnBitcoins = document.querySelector('#btn-b')
btnBitcoins.onclick = () =>{
    const inputBitcoins = document.querySelector('#conversorTres').value
    let valorBitcoins = (inputBitcoins * 5612460.62)
    resultado.textContent=`Su conversion de bitcoins es $ ${valorBitcoins} en pesos argentinos`
}

const btnPesosaDolares = document.querySelector('#btn-cuatro')
btnPesosaDolares.onclick = () =>{
    const inputPesosAdol = document.querySelector('#conversorCuatro').value
    let valorPesoaDol = (inputPesosAdol* 0.0100)
    resultadoDos.innerText =`Su conversion de pesos es ${valorPesoaDol} dolares`
}

const btnpesosaEuros = document.querySelector('#btn-cinco')
btnpesosaEuros.onclick = () =>{
    const inputPesosAeur = document.querySelector('#conversorCinco').value
    let valorPesoaEu = (inputPesosAeur * 0.0089)
    resultadoDos.innerText =`Su conversion de pesos es  ${valorPesoaEu} euros`
}

const btnPesosaBitcoins = document.querySelector('#btn-seis')
btnPesosaBitcoins.onclick = () =>{
    const inputPesosaBtcn = document.querySelector('#conversorSeis').value
    let valorPesoaBtc = (inputPesosaBtcn *0.010) * 0.000018
    resultadoDos.innerText =`Su conversion de pesos es  ${valorPesoaBtc} bitcoins`
}

