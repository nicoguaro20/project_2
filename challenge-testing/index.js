class CarritoCompra {

    constructor(){
        this.carrito = [];
    };
    agregarProducto(producto){
        this.carrito.push(producto);
    };
    calcularTotal(){
        return this.carrito.reduce((acum, producto) => acum = acum + producto.precio, 0);
    };
    aplicarDescuento(descuento){
        const precioTotal = this.calcularTotal();
        return precioTotal * (1 - (descuento/100));
    };
};

module.exports = CarritoCompra;