export default  class Vehiculo{
    modelo= ''

    constructor(kilometraje)
    {
        this.vehiculokm=kilometraje

    }

    mostrar_kilometraje()
    {
        console.log(`El Kiometraje del vehiculo es igual a ${this.vehiculokm}km`)

    }
   
    mostrar_modelo()
    {
        console.log(this.modelo)

    }
}
