"use strict";
/**
 * array.push() carga un elemento en un array
 */


let numeros = [];
let interruptor = true;

const init = () => {
    //nodos
    let form = document.querySelector(".form-floating");
    let input = document.querySelector("#floatingInputValue");
    let output = document.querySelector(".salida"); //Es la 2a etiqueta de article
    let btnBorrar = document.querySelector(".btn-secondary")
    let success = document.querySelector(".alert-success");
    let ul = null;

    //Cargo el array primero 
    success.innerHTML = `Array [${numeros}]`;
    
    //funciones
    const crearUl = () => {
        ul = document.createElement("ul");
        ul.className = "lista";
        output.appendChild(ul);
    }

    const crearLi = (valor) => {
        const li = document.createElement("li");
        li.innerHTML = valor;
        ul.appendChild(li);
    }

    const deleteLi = () => {
        numeros = [];
        success.innerHTML = `Array [${numeros}]`;
        if(ul!==null){ //  Si el nodo ul creado existe limpio los li
            ul.innerHTML = "";
        }
    }

    //Eventos
    form.addEventListener(
        "submit",
        (ev) => {
            ev.preventDefault();
            const number = Number(input.value);
            numeros.push(number);

            
            if(interruptor===true){
                interruptor=false;
                crearUl();  
            }
            crearLi(number);
            success.innerHTML = `Array [${numeros}]`;
        }
    
    );


    btnBorrar.addEventListener(
        "click",
        deleteLi
    );








    
    
}











//El evento load se dispara cuando toda la página ha terminado de cargar.
window.addEventListener(
    "load",
    init
);