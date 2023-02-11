"use strict"

// - - - - - - - - PARA AGREGAR IMAGENES - - - - - - - - //

const archivo = document.querySelector(".archivo");
const textoAMostrar = document.querySelector(".zona-de-texto");
const borrar = document.querySelector(".div-archivo-aparecera-aqui");

archivo.addEventListener("change",(e)=>{
    leerArchivo(archivo.files);
});

let deleted = true

const leerArchivo = ar => {

    if (deleted == true){
        deleted = false
        textoAMostrar.removeChild(borrar)
        textoAMostrar.style.display = `grid`

        for (let i = 0; i < ar.length; i++) {

            const reader = new FileReader();

            reader.readAsDataURL(ar[i]);

            reader.addEventListener("load",(e)=>{

                let newImg = `<img src="${e.currentTarget.result}">`;

                textoAMostrar.innerHTML += newImg

            })
    
        }
    }

    else{
        for (let i = 0; i < ar.length; i++) {

            const reader = new FileReader();

            reader.readAsDataURL(ar[i]);

            reader.addEventListener("load",(e)=>{

                let newImg = `<img src="${e.currentTarget.result}">`;

                textoAMostrar.innerHTML += newImg

            })
    
        }
    }
    
}