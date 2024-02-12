// Selecciona todos los elementos con la clase 'cup-small'
const smallCups = document.querySelectorAll('.cup-small')
// Obtiene los elementos con los IDs 'liters', 'percentage' y 'remained'
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

// Llama a la función para actualizar el tamaño de la taza grande
updateBigCup()

// Añade un event listener a cada taza pequeña para resaltarlas al hacer clic
smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})

// Función para resaltar las tazas pequeñas
function highlightCups(idx) {
    // Maneja el caso especial cuando la última taza está llena
    if (idx === 7 && smallCups[idx].classList.contains("full")) idx--;
    // Maneja el caso cuando una taza está llena y la siguiente no
    else if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }

    // Itera sobre todas las tazas pequeñas y les agrega o quita la clase 'full' según su índice
    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    // Llama a la función para actualizar la taza grande
    updateBigCup()
}

// Función para actualizar el tamaño de la taza grande y mostrar la cantidad de líquido
function updateBigCup() {
    // Obtiene el número de tazas pequeñas llenas y el número total de tazas pequeñas
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    // Oculta o muestra el porcentaje de llenado según la cantidad de tazas llenas
    if(fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    // Oculta o muestra la cantidad restante de líquido según la cantidad de tazas llenas
    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}
