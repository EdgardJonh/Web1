let doc = document

doc = document.querySelector(".c1")

function auto(marca, modelo, patente){
    this.marca = marca
    this.modelo = modelo
    this.patente = patente
   

}


const auto1 = new auto("hiunday","12fddf","FFDDEE")
const auto2 = new auto("ddddddw","dsda","adasd")
console.log(auto1)
console.log(auto2)



function saludar(nombre) {
    console.log("bienbenido"  + nombre + "al curso de JavaScript")
}


saludar("pablo")
saludar("andres")
saludar("pedro")
