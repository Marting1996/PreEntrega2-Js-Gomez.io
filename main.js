class Celular {
    constructor(modelo, camara, almacenamiento, precio, tamPantalla, resPantalla, frecuencia, ram, tipoCarga, bateria) {
        this.modelo = modelo;
        this.camara = camara;
        this.almacenamiento = almacenamiento;
        this.precio = precio;
        this.tamPantalla = tamPantalla;
        this.resPantalla = resPantalla;
        this.frecuencia = frecuencia;
        this.ram = ram;
        this.tipoCarga = tipoCarga;
        this.bateria = bateria;
    }
    infoCelu() {
        alert(

            `
            Modelo: ${this.modelo}
            Precio: $${this.precio} (precio lista)
            Camara: ${this.camara}
            Almacenamiento: ${this.almacenamiento}
            Tamaño de Pantalla:${this.tamPantalla}
            Resolucion de Pantalla: ${this.resPantalla}
            Frecuencia de la Pantalla: ${this.frecuencia}
            Memoria Ram: ${this.ram}
            Tipo de carga: ${this.tipoCarga}
            Batería: ${this.bateria}
            `
        )
    }
    infoCeluCompra(){
        return`
            Modelo: <b>${this.modelo}</b></br>
            Camara: <b>${this.camara}</b></br>
            Almacenamiento: <b>${this.almacenamiento}</b></br>
            Tamaño de Pantalla: <b>${this.tamPantalla}</b></br>
            Resolucion de Pantalla: <b>${this.resPantalla}</b></br>
            Frecuencia de la Pantalla: <b>${this.frecuencia}</b></br>
            Memoria Ram: <b>${this.ram}</b></br>
            Tipo de carga: <b>${this.tipoCarga}</b></br>
            Batería: <b>${this.bateria}</b></br>
            `

    }


}

let celular1 = new Celular("S23 Ultra", "102Mp", "512GB", "1500 USD", "6.8'", "4k", "120hz", "12GB", "Inalambrica ultra rapida", "5000mAh");
let celular2 = new Celular("S23 Plus", "50Mp", "256GB", "1000 USD", "6.6'", "2k", "90hz", "8GB", "Inalambrica rapida", "4700mAh");
let celular3 = new Celular("S23", "40Mp", "128GB", "800 USD", "6.1'", "Full HD", "90hz", "8GB", "Rapida", "3900mAh");

alert("Bienvenido, los celulares en stock actualmente son: S23 Ultra, S23 Plus y S23")

let seleccion = prompt("Por favor elija un modelo")
while (seleccion != "S23 Ultra" && seleccion != "S23 Plus" && seleccion != "S23") {
    alert("No tenemos ese producto")
    seleccion = prompt("Que producto desea comprar?")
}
if (seleccion == "S23 Ultra") {
    precio = 1500
    celular1.infoCelu();
    document.write(`${celular1.infoCeluCompra()}`);

} else if (seleccion == "S23 Plus") {
    precio = 1000
    celular2.infoCelu();
    document.write(`${celular2.infoCeluCompra()}`);

} else if (seleccion == "S23") {
    precio = 800
    celular3.infoCelu();
    document.write(`${celular3.infoCeluCompra()}`);
}

const colores = [
    {color: "Lavander"},
    {color: "Green"},
    {color: "Cream"},
    {color: "Black"}
]
alert("Estos son los colores disponibles:")
let todosLosColores = colores.map((colores) => colores.color);
alert(todosLosColores.join(" - "))

let selectColor = prompt("Por favor elija un color")
while(selectColor != "Lavander" && selectColor != "Green" && selectColor != "Cream" && selectColor != "Black"){
    alert("Ese color no esta disponible");
    selectColor = prompt("Por favor elija un color");
}





let moneda = prompt("Por favor elija la moneda con la que va a realizar el pago");

while (moneda != "dolar" && moneda != "pesos") {
    alert("Solo se puede pagar en pesos o dolares");
    moneda = prompt("Por favor elija la moneda con la que va a realizar el pago");

}
if (moneda == "pesos") {
    precioFinal = precio * 380
} else if (moneda == "dolar") {
    precioFinal = precio
}
const suma = (a, b) => a + b
const iva = precioFinal => precioFinal * 0.21

let total = suma(precioFinal, iva(precioFinal));

alert("El precio total a pagar con iva incluido es de: " + total);



