const CarritoCompra = require("../index.js");


let nuevoCarrito;

beforeEach(()=>{
    nuevoCarrito = new CarritoCompra();
});

describe("Class CarritoCompra",() =>{

    it ("Existencia de la clase CarritoCompra", () => {
        expect(CarritoCompra).toBeDefined();
        expect(CarritoCompra).toBeInstanceOf(Function);
        expect(typeof CarritoCompra).toBe("function");
    });

    it("La clase CarritoCompra debe poder ser instanciada", () => {
        expect(nuevoCarrito).toBeInstanceOf(CarritoCompra);
    });
    it ("La clase CarritoCompra debe tener los siguientes métodos:", () => {
        expect(CarritoCompra.prototype.constructor).toBeInstanceOf(Function);
    });

describe("Constructor",() => {
    it("Inicializa el carrito como un objeto con la propiedad 'carrito' la cual es un arreglo vacio", () => {
        expect(Array.isArray(nuevoCarrito.carrito)).toBe(true);
        expect(nuevoCarrito.carrito.length).toBe(0);
    });
})

describe("agregarProducto",() =>{
    it("Recibe un objeto respresentando un producto y lo agrega al carrito", () => {
        const producto = {nombre: "Producto 1", precio: 100}
        nuevoCarrito.agregarProducto(producto)
        expect(nuevoCarrito.carrito.length).toBe(1)
        expect(nuevoCarrito.carrito[0]).toEqual(producto)
        expect(nuevoCarrito.carrito[0].nombre).toEqual("Producto 1")
    })

    it("Agrega multiples productos al carrito", () => {
        const producto = [
            {nombre: "Producto 1", precio: 100},
            {nombre: "Producto 2", precio: 200},
            {nombre: "Producto 3", precio: 300},
            {nombre: "Producto 4", precio: 400},
            {nombre: "Producto 5", precio: 400},
        ];

        producto.forEach(producto => nuevoCarrito.agregarProducto(producto));
        
        expect(nuevoCarrito.carrito.length).toBe(5)
        expect(nuevoCarrito.carrito[4]).toEqual({nombre: "Producto 5", precio: 400});
        expect(nuevoCarrito.carrito[2].nombre).toEqual("Producto 3")
    });
});

describe("Calcular total",()=>{
    it("Calcula el valor de la compra sumando los precios de todos los productos en el carrito", () => {
        const producto = [
            {nombre: "Producto 1", precio: 100},
            {nombre: "Producto 2", precio: 200},
            {nombre: "Producto 3", precio: 300},
            {nombre: "Producto 4", precio: 400},
            {nombre: "Producto 5", precio: 400},
        ];

        producto.forEach(producto => nuevoCarrito.agregarProducto(producto));
        expect(nuevoCarrito.calcularTotal()).toBe(1400);
            
        });
    });


describe("Calcular total",()=>{
    it("Calcula el valor de la compra sumando los precios de todos los productos en el carrito", () => {
        const producto = [
            {nombre: "Producto 1", precio: 100},
            {nombre: "Producto 2", precio: 200},
            {nombre: "Producto 3", precio: 300},
            {nombre: "Producto 4", precio: 400},
            {nombre: "Producto 5", precio: 400},
        ]

        producto.forEach(producto => nuevoCarrito.agregarProducto(producto));
        expect(nuevoCarrito.calcularTotal()).toBe(1400)
            
        });
    })

describe("Aplicar descuento",()=>{
    it("aplica un descuento al total de la compra según el porcentaje especficado", () => {
        const producto = [
            {nombre: "Producto 1", precio: 100},
            {nombre: "Producto 2", precio: 200},
            {nombre: "Producto 3", precio: 300},
            {nombre: "Producto 4", precio: 400},
            {nombre: "Producto 5", precio: 400},
        ];
    
        producto.forEach(producto => nuevoCarrito.agregarProducto(producto));
        expect(nuevoCarrito.aplicarDescuento(0)).toBe(1400)
        expect(nuevoCarrito.aplicarDescuento(10)).toBe(1260)
        expect(nuevoCarrito.aplicarDescuento(20)).toBe(1120)
        expect(nuevoCarrito.aplicarDescuento(50)).toBe(700)
        expect(nuevoCarrito.aplicarDescuento(100)).toBe(0)
                
        });
    }); 

});
