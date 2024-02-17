//Selecciona el elemento con la clase empty
const fill = document.querySelector(".fill");
//Selecciona todos los elementos con la clase empty
const empties = document.querySelectorAll(".empty")


// Agrega listeners de eventos para iniciar y finalizar el arrastre en el elemento 'fill'
fill.addEventListener("dragstart", dragStart)
fill.addEventListener("dragend", dragEnd)


// Itera sobre cada elemento vacío y agrega listeners de eventos relacionados con el arrastre
for(const empty of empties) {
    empty.addEventListener("dragover", dragOver)
    empty.addEventListener("dragenter", dragEnter)
    empty.addEventListener("dragleave", dragLeave)
    empty.addEventListener("drop", dragDrop)
}

// Función que se activa cuando comienza el arrastre
function dragStart() {
    this.className += " hold"
    setTimeout(() => this.className = "invisible", 0)
}

// Función que se activa cuando termina el arrastre
function dragEnd() {
    this.className = "fill"
}

//Funcion que se activa cuando para por encima del div
function dragOver(e) {
    e.preventDefault()
}

//Funcion que se activa cuando entra a un elemento vacío
function dragEnter(e) {
    e.preventDefault()
    this.className += ' hovered'
}

//Funcion que se activa cuando el elemento sale del elemento vacío
function dragLeave() {
    this.className = "empty"
}

// Función que se activa cuando el elemento arrastrado se suelta sobre un elemento vacío
function dragDrop() {
    this.className = "empty"
    this.append(fill)
}




