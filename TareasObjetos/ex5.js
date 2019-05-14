/* 12.- Crear una clase Cuenta que tenga los siguientes atributos y metodos:
	 -Titular y cantidad
	 -ingresar(cantidad)
	 -retirar(cantidad)
	 Hacer las validaciones previas
     Como regla de negocio no debe de tener más de $900 y menos de $10 */


class Cuenta {
    constructor(titular, cantidad, saldo) {
        this.titular = titular;
        this.cantidad = cantidad;
        this.saldo = saldo
    }
    ingresar() {
        if (this.saldo < 900+1) {
            console.log('su saldo no puede ser mayor a $900.00')
        } else if (this.saldo == 900){
            console.log('usted puede ingresar dinero en su cuenta')
        } else {
            console.log('hubo un error')
        }
    }
    retirar(quanti) {
        if (this.saldo < 10) {
            console.log('saldo insuficiente')
        } else { console.log('retirando la cantidad de: ' + quanti) }
    }
}

const myCuenta= new Cuenta("jac", 500, 100);
console.log(myCuenta);
console.log(myCuenta.ingresar());
console.log('*****');
console.log(myCuenta.retirar(30));