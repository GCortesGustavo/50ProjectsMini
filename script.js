const projects = [
    { id: 1, name: "Project 1", imgSrc: "projects/project1/screenshot1.jpg" },
    { id: 2, name: "Project 2", imgSrc: "projects/project2/screenshot2.jpg" },
    { id: 3, name: "Project 3", imgSrc: "projects/project2/screenshot2.jpg" },
    { id: 4, name: "Project 4", imgSrc: "projects/project2/screenshot2.jpg" },
    { id: 5, name: "Project 5", imgSrc: "projects/project2/screenshot2.jpg" },
    { id: 6, name: "Project 6", imgSrc: "projects/project2/screenshot2.jpg" },
    { id: 7, name: "Project 7", imgSrc: "projects/project2/screenshot2.jpg" },
    { id: 8, name: "Project 8", imgSrc: "projects/project2/screenshot2.jpg" },
    { id: 9, name: "Project 9", imgSrc: "projects/project2/screenshot2.jpg" },
    { id: 10, name: "Project 10", imgSrc: "projects/project2/screenshot2.jpg" },
    { id: 11, name: "Project 11", imgSrc: "projects/project2/screenshot2.jpg" },
    { id: 12, name: "Project 12", imgSrc: "projects/project2/screenshot2.jpg" },
    { id: 13, name: "Project 13", imgSrc: "projects/project2/screenshot2.jpg" },
    { id: 14, name: "Project 14", imgSrc: "projects/project2/screenshot2.jpg" },
    { id: 15, name: "Project 15", imgSrc: "projects/project2/screenshot2.jpg" },
    { id: 16, name: "Project 16", imgSrc: "projects/project2/screenshot2.jpg" },
    { id: 17, name: "Project 17", imgSrc: "projects/project2/screenshot2.jpg" },
    { id: 18, name: "Project 18", imgSrc: "projects/project2/screenshot2.jpg" },
    { id: 19, name: "Project 19", imgSrc: "projects/project2/screenshot2.jpg" },
    { id: 20, name: "Project 20", imgSrc: "projects/project2/screenshot2.jpg" },
    { id: 21, name: "Project 21", imgSrc: "projects/project2/screenshot2.jpg" },
    { id: 22, name: "Project 22", imgSrc: "projects/project2/screenshot2.jpg" },
    { id: 23, name: "Project 23", imgSrc: "projects/project2/screenshot2.jpg" },
    { id: 24, name: "Project 24", imgSrc: "projects/project2/screenshot2.jpg" },
    { id: 25, name: "Project 25", imgSrc: "projects/project2/screenshot2.jpg" },
    { id: 26, name: "Project 26", imgSrc: "projects/project2/screenshot2.jpg" },
    { id: 27, name: "Project 27", imgSrc: "projects/project2/screenshot2.jpg" },
    { id: 28, name: "Project 28", imgSrc: "projects/project2/screenshot2.jpg" },
    { id: 29, name: "Project 29", imgSrc: "projects/project2/screenshot2.jpg" },
    { id: 30, name: "Project 30", imgSrc: "projects/project2/screenshot2.jpg" },
    { id: 31, name: "Project 31", imgSrc: "projects/project2/screenshot2.jpg" },
    { id: 32, name: "Project 32", imgSrc: "projects/project2/screenshot2.jpg" },
    { id: 33, name: "Project 33", imgSrc: "projects/project2/screenshot2.jpg" },
    { id: 34, name: "Project 34", imgSrc: "projects/project2/screenshot2.jpg" },
    { id: 35, name: "Project 35", imgSrc: "projects/project2/screenshot2.jpg" },
    { id: 36, name: "Project 36", imgSrc: "projects/project2/screenshot2.jpg" },
    { id: 37, name: "Project 37", imgSrc: "projects/project2/screenshot2.jpg" },
    { id: 38, name: "Project 38", imgSrc: "projects/project2/screenshot2.jpg" },
    { id: 39, name: "Project 39", imgSrc: "projects/project2/screenshot2.jpg" },
    { id: 40, name: "Project 40", imgSrc: "projects/project2/screenshot2.jpg" },
    { id: 41, name: "Project 41", imgSrc: "projects/project2/screenshot2.jpg" },
    { id: 42, name: "Project 42", imgSrc: "projects/project2/screenshot2.jpg" },
    { id: 43, name: "Project 43", imgSrc: "projects/project2/screenshot2.jpg" },
    { id: 44, name: "Project 44", imgSrc: "projects/project2/screenshot2.jpg" },
    { id: 45, name: "Project 45", imgSrc: "projects/project2/screenshot2.jpg" },
    { id: 46, name: "Project 46", imgSrc: "projects/project2/screenshot2.jpg" },
    { id: 47, name: "Project 47", imgSrc: "projects/project2/screenshot2.jpg" },
    { id: 48, name: "Project 48", imgSrc: "projects/project2/screenshot2.jpg" },
    { id: 49, name: "Project 49", imgSrc: "projects/project2/screenshot2.jpg" },    
    { id: 50, name: "Project 50", imgSrc: "projects/project2/screenshot2.jpg" },    
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
