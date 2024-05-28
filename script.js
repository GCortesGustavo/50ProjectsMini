const projects = [
    { id: 1, name: "Project 1", imgSrc: "projects/project1/screenshot1.jpg" },
    { id: 2, name: "Project 2", imgSrc: "projects/project2/screenshot2.jpg" },
    // Agrega todos los proyectos aquí
];

const container = document.querySelector('.projects-container');

projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.className = 'project';
    projectElement.innerHTML = `
        <a href="projects/project${project.id}/index.html" target="_blank">
            <img src="${project.imgSrc}" alt="${project.name}">
            <h2>${project.name}</h2>
        </a>
    `;
    container.appendChild(projectElement);
});
