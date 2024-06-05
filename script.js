const projects = [
    { id: 1, name: "Imagenes Expandidas", imgSrc: "projects/project1/screenshot1.jpg", },
    { id: 2, name: "Pasos de Progreso", imgSrc: "projects/project2/screenshot2.jpg" },
    { id: 3, name: "Animación de Navegación Giratoria", imgSrc: "projects/project3/screenshot3.jpg" },
    { id: 4, name: "Búsqueda Oculta", imgSrc: "projects/project4/project4.jpg" },
    { id: 5, name: "Carga con Fondo Borroso", imgSrc: "projects/project5/project5.jpg" },
    { id: 6, name: "Animación de Scroll", imgSrc: "projects/project6/project6.jpg" },
    { id: 7, name: "Página Dividida", imgSrc: "projects/project7/project7.jpg" },
    { id: 8, name: "UI de Registro de Usuario", imgSrc: "projects/project8/project8.jpg" },
    { id: 9, name: "Barra de Sonidos", imgSrc: "projects/project9/project9.jpg" },
    { id: 10, name: "Chistes de Padre", imgSrc: "projects/project10/project10.jpg" },
    { id: 11, name: "Códigos de Teclado", imgSrc: "projects/project11/project11.jpg" },
    { id: 12, name: "Desplegable de Preguntas Frecuentes", imgSrc: "projects/project12/project12.jpg" },
    { id: 13, name: "Selector de Elección Aleatoria", imgSrc: "projects/project13/project13.jpg" },
    { id: 14, name: "Navegación Animada", imgSrc: "projects/project14/project14.jpg" },
    { id: 15, name: "Contador Incremental", imgSrc: "projects/project15/project15.jpg" },
    { id: 16, name: "Beber Agua!", imgSrc: "projects/project16/project16.jpg" },
    { id: 17, name: "App de Películas", imgSrc: "projects/project17/project17.jpg" },
    { id: 18, name: "Background Slider", imgSrc: "projects/project18/project18.jpg" },
    { id: 19, name: "Reloj", imgSrc: "projects/project19/project19.jpg" },
    { id: 20, name: "Efecto Click Botón", imgSrc: "projects/project20/project20.jpg" },
    { id: 21, name: "Agarrar y Soltar", imgSrc: "projects/project21/project21.jpg" },
    { id: 22, name: "App para Dibujar", imgSrc: "projects/project22/project22.jpg" },
    { id: 23, name: "Cargador Kinético", imgSrc: "projects/project23/project23.jpg" },
    { id: 24, name: "Card con Información", imgSrc: "projects/project24/project24.jpg" },
    { id: 25, name: "Barra de Navegación Fija", imgSrc: "projects/project25/project25.jpg" },
    { id: 26, name: "Animación Imágenes Verticales", imgSrc: "projects/project26/project26.jpg" },
    { id: 27, name: "PopUp Notificaciones", imgSrc: "projects/project27/project27.jpg" },
    { id: 28, name: "Buscador de Perfiles GitHub", imgSrc: "projects/project28/project28.jpg" },
    { id: 29, name: "Click Doble Corazón", imgSrc: "projects/project29/project29.jpg" },
    { id: 30, name: "Efecto Texto Automático", imgSrc: "projects/project30/project30.jpg" },
    { id: 31, name: "Generador de Contraseñas Aleatorias", imgSrc: "projects/project31/project31.jpg" },
    { id: 32, name: "Botones Bueno-Barato-Rápido", imgSrc: "projects/project32/project32.jpg" },
    { id: 33, name: "Conteo Regresivo Animado", imgSrc: "projects/project33/project33.jpg" },
    { id: 34, name: "App de Notas", imgSrc: "projects/project34/project34.jpg" },
    { id: 35, name: "Carrusel de Imágenes", imgSrc: "projects/project35/project35.jpg" },
    { id: 36, name: "Hoverboard!", imgSrc: "projects/project36/project36.jpg" },
    { id: 37, name: "Pokedex", imgSrc: "projects/project37/project37.jpg" },
    { id: 38, name: "Navegación en Celular", imgSrc: "projects/project38/project38.jpg" },
    { id: 39, name: "+ Fuerza de Contraseña, - Fondo Borroso.", imgSrc: "projects/project39/project39.jpg" },
    { id: 40, name: "Cajas 3D", imgSrc: "projects/project40/project40.jpg" },
    { id: 41, name: "UI Código de Verificación", imgSrc: "projects/project41/project41.jpg" },
    { id: 42, name: "Filtro de Usuarios", imgSrc: "projects/project42/project42.jpg" },
    { id: 43, name: "Formulario Feedback", imgSrc: "projects/project43/project43.jpg" },
    { id: 44, name: "Barra de Volumen", imgSrc: "projects/project44/project44.jpg" },
    { id: 45, name: "Animación Menú Netflix", imgSrc: "projects/project45/project45.jpg" },
    { id: 46, name: "App Cuestionario", imgSrc: "projects/project46/project46.jpg" },
    { id: 47, name: "Caja de Testimonios", imgSrc: "projects/project47/project47.jpg" },
    { id: 48, name: "Generador de Imagenes Random", imgSrc: "projects/project48/project48.jpg" },
    { id: 49, name: "ToDo List", imgSrc: "projects/project49/project49.jpg" },    
    { id: 50, name: "Juego Atrapa al Famoso", imgSrc: "projects/project50/project50.jpg" },    
];

const container = document.querySelector('.projects-container');

projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.className = 'project';
    projectElement.innerHTML = `
        <a href="projects/project${project.id}/index.html">
            <img src="${project.imgSrc}" alt="${project.name}">
            <h2>${project.name}</h2>
        </a>
    `;
    container.appendChild(projectElement);
});
