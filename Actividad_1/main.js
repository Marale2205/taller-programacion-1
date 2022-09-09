import Cliente from "./cliente.js"

const mostrar =()=>{
    const Nombre=document.getElementById("inp_Nombre").value
    const Apellido=document.getElementById("inp_Apellido").value
    const DNI=document.getElementById("inp_DNI").value

    let cliente=new Cliente(Nombre,Apellido,DNI)
    cliente.Mostrar()
}

document.getElementById("btn_mostrar").addEventListener("click", mostrar)
