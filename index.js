const button = document.querySelector(".botao")
const soma = document.querySelector("h2")

const cart = [10, 244, 99, 2, 20, 33, 250]
let finalValue = 0

function calculateDiscount(price, discount) {
    const result = (price * discount) / 100
    return result
}

calculateDiscount(250, 7)

function cliqueiNoBotao() {

    soma.innerHTML = "A soma dos valores com desconto: R$ " + finalValue
}


cart.forEach(value => {

    if (value > 30) {
        const discount = calculateDiscount(value, 10)
        finalValue = finalValue + (value - discount)
    } else {
        finalValue += value
    }

});

console.log(finalValue);


button.addEventListener("click", cliqueiNoBotao)