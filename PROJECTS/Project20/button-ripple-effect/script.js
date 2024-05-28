const buttons = document.querySelectorAll(".ripple")


// Itera sobre cada elemento de la lista de botones.
buttons.forEach(button => {
    button.addEventListener("click", function (e) {
        // Obtiene las coordenadas X e Y del clic del ratón en relación con la página.
        const x = e.pageX
        const y = e.pageY

        // Obtiene la posición superior e izquierda del botón en relación con su contenedor.
        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft
        
        // Calcula la posición interna del clic del ratón en relación con el botón.
        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        // Crea un elemento span para representar el efecto de onda.
        const circle = document.createElement("span")
        circle.classList.add("circle")
        circle.style.top = yInside + "px"
        circle.style.left = xInside + "px"

        // Añade el elemento span al botón.
        this.appendChild(circle)

        // Elimina el elemento span después de 500 milisegundos.
        setTimeout(() => circle.remove(), 500)
    })
})