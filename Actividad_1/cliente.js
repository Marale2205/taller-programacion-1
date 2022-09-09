export default class Cliente{
    constructor(Nombre,Apellido,DNI)
    {
        this.clienteNombre=Nombre
        this.clienteApellido=Apellido
        this.clienteDNI=DNI
    }
    Mostrar()
    {
        console.log(`el nombre ingresado es ${this.clienteNombre}`)
        console.log(`el apellido ingresado  es ${this.clienteApellido}`)
        console.log(`el dni ingresado  es ${this.clienteDNI}`)
    }

}