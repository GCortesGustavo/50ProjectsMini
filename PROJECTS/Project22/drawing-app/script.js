// Obtener el elemento del lienzo y los botones de aumento y disminución del tamaño, el elemento de tamaño,
// el elemento de color y el elemento de borrado.
const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEL = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

// Obtener el contexto del lienzo en 2D.
const ctx = canvas.getContext('2d');

// Inicializar variables de tamaño, estado de presión del mouse, color, y coordenadas X e Y.
let size = 10;
let isPressed = false;
colorEl.value = 'black';
let color = colorEl.value;
let x;
let y;

// Evento para detectar cuando se presiona el mouse en el lienzo.
canvas.addEventListener('mousedown', (e) => {
    isPressed = true;

    // Guardar las coordenadas X e Y donde se ha presionado el mouse.
    x = e.offsetX;
    y = e.offsetY;
});

// Evento para detectar cuando se levanta el mouse en cualquier parte del documento.
document.addEventListener('mouseup', (e) => {
    isPressed = false;

    // Reiniciar las coordenadas X e Y.
    x = undefined;
    y = undefined;
});

// Evento para detectar el movimiento del mouse en el lienzo.
canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        // Obtener las nuevas coordenadas X e Y del movimiento del mouse.
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        // Dibujar un círculo en la posición actual del mouse.
        drawCircle(x2, y2);

        // Dibujar una línea desde la posición anterior hasta la posición actual del mouse.
        drawLine(x, y, x2, y2);

        // Actualizar las coordenadas X e Y actuales.
        x = x2;
        y = y2;
    }
});

// Función para dibujar un círculo en la posición dada.
function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

// Función para dibujar una línea desde (x1, y1) hasta (x2, y2).
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

// Función para actualizar el tamaño mostrado en la pantalla.
function updateSizeOnScreen() {
    sizeEL.innerText = size;
}

// Evento para aumentar el tamaño del pincel al hacer clic en el botón de aumento.
increaseBtn.addEventListener('click', () => {
    size += 5;

    // Limitar el tamaño máximo del pincel.
    if (size > 50) {
        size = 50;
    }

    // Actualizar el tamaño mostrado en la pantalla.
    updateSizeOnScreen();
});

// Evento para disminuir el tamaño del pincel al hacer clic en el botón de disminución.
decreaseBtn.addEventListener('click', () => {
    size -= 5;

    // Limitar el tamaño mínimo del pincel.
    if (size < 5) {
        size = 5;
    }

    // Actualizar el tamaño mostrado en la pantalla.
    updateSizeOnScreen();
});

// Evento para cambiar el color del pincel al seleccionar un nuevo color en el elemento de color.
colorEl.addEventListener('change', (e) => color = e.target.value);

// Evento para limpiar el lienzo al hacer clic en el botón de borrado.
clearEl.addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height));
