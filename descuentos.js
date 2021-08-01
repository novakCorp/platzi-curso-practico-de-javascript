function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}


// interacting with HTML
function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDisccount = document.getElementById("InputDisccount");
    const disccountValue = inputDisccount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, disccountValue);

    // writing html with javascript inside a "p" tag
    const ResultP = document.getElementById("ResultP");
    ResultP.innerText = `El precio del descuento son: $${precioConDescuento}`;
}


