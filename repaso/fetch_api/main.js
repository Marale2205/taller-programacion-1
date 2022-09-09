//vamos a crear un objeto 

let datos_personales ={
    nombre: 'Pepito',
    apellido: 'Rodriguez',
    dni:44987654,
    correos:{
        gmail:'pepi@gmail.com',
        outlook:'pepito@outlook.com',
        yahoo: 'pepito@yahoo.com.ar'
    },
    edad:25

}

//forma 1 de acceder  a una propiedades
/* 
const gmail=datos_personales.correos.gmail
const outlook=datos_personales.correos.gmail
const yahoo=datos_personales.correos.gmail
*/
//forma 2-Destruturing object
const{gmail,yahoo,outlook}= datos_personales.correos

console.log(`
    gmail:${gmail}
    outlook:${outlook}
    yahoo:${yahoo}
`)
//consumo de API

 async  function consumir_api (){
    //Realisa  por defecto una solicitud HTPP
    //Atraves del metodo GET  
    let publicaciones= await fetch('https://jsonplaceholder.typicode.com/posts')

    let publicaciones_definidas= await publicaciones.json()

    publicaciones_definidas.forEach(element => {
        console.log(element.title)
        
    });
}

consumir_api()

