const projects = [
    { id: 1, name: "Projecto 1", imgSrc: "projects/project1/screenshot1.jpg", },
    { id: 2, name: "Projecto 2", imgSrc: "projects/project2/screenshot2.jpg" },
    { id: 3, name: "Projecto 3", imgSrc: "projects/project3/screenshot3.jpg" },
    { id: 4, name: "Projecto 4", imgSrc: "projects/project4/project4.jpg" },
    { id: 5, name: "Projecto 5", imgSrc: "projects/project5/project5.jpg" },
    { id: 6, name: "Projecto 6", imgSrc: "projects/project6/project6.jpg" },
    { id: 7, name: "Projecto 7", imgSrc: "projects/project7/project7.jpg" },
    { id: 8, name: "Projecto 8", imgSrc: "projects/project8/project8.jpg" },
    { id: 9, name: "Projecto 9", imgSrc: "projects/project9/project9.jpg" },
    { id: 10, name: "Projecto 10", imgSrc: "projects/project10/project10.jpg" },
    { id: 11, name: "Projecto 11", imgSrc: "projects/project11/project11.jpg" },
    { id: 12, name: "Projecto 12", imgSrc: "projects/project12/project12.jpg" },
    { id: 13, name: "Projecto 13", imgSrc: "projects/project13/project13.jpg" },
    { id: 14, name: "Projecto 14", imgSrc: "projects/project14/project14.jpg" },
    { id: 15, name: "Projecto 15", imgSrc: "projects/project15/project15.jpg" },
    { id: 16, name: "Projecto 16", imgSrc: "projects/project16/project16.jpg" },
    { id: 17, name: "Projecto 17", imgSrc: "projects/project17/project17.jpg" },
    { id: 18, name: "Projecto 18", imgSrc: "projects/project18/project18.jpg" },
    { id: 19, name: "Projecto 19", imgSrc: "projects/project19/project19.jpg" },
    { id: 20, name: "Projecto 20", imgSrc: "projects/project20/project20.jpg" },
    { id: 21, name: "Projecto 21", imgSrc: "projects/project21/project21.jpg" },
    { id: 22, name: "Projecto 22", imgSrc: "projects/project22/project22.jpg" },
    { id: 23, name: "Projecto 23", imgSrc: "projects/project23/project23.jpg" },
    { id: 24, name: "Projecto 24", imgSrc: "projects/project24/project24.jpg" },
    { id: 25, name: "Projecto 25", imgSrc: "projects/project25/project25.jpg" },
    { id: 26, name: "Projecto 26", imgSrc: "projects/project26/project26.jpg" },
    { id: 27, name: "Projecto 27", imgSrc: "projects/project27/project27.jpg" },
    { id: 28, name: "Projecto 28", imgSrc: "projects/project28/project28.jpg" },
    { id: 29, name: "Projecto 29", imgSrc: "projects/project29/project29.jpg" },
    { id: 30, name: "Projecto 30", imgSrc: "projects/project30/project30.jpg" },
    { id: 31, name: "Projecto 31", imgSrc: "projects/project31/project31.jpg" },
    { id: 32, name: "Projecto 32", imgSrc: "projects/project32/project32.jpg" },
    { id: 33, name: "Projecto 33", imgSrc: "projects/project33/project33.jpg" },
    { id: 34, name: "Projecto 34", imgSrc: "projects/project34/project34.jpg" },
    { id: 35, name: "Projecto 35", imgSrc: "projects/project35/project35.jpg" },
    { id: 36, name: "Projecto 36", imgSrc: "projects/project36/project36.jpg" },
    { id: 37, name: "Projecto 37", imgSrc: "projects/project37/project37.jpg" },
    { id: 38, name: "Projecto 38", imgSrc: "projects/project38/project38.jpg" },
    { id: 39, name: "Projecto 39", imgSrc: "projects/project39/project39.jpg" },
    { id: 40, name: "Projecto 40", imgSrc: "projects/project40/project40.jpg" },
    { id: 41, name: "Projecto 41", imgSrc: "projects/project41/project41.jpg" },
    { id: 42, name: "Projecto 42", imgSrc: "projects/project42/project42.jpg" },
    { id: 43, name: "Projecto 43", imgSrc: "projects/project43/project43.jpg" },
    { id: 44, name: "Projecto 44", imgSrc: "projects/project44/project44.jpg" },
    { id: 45, name: "Projecto 45", imgSrc: "projects/project45/project45.jpg" },
    { id: 46, name: "Projecto 46", imgSrc: "projects/project46/project46.jpg" },
    { id: 47, name: "Projecto 47", imgSrc: "projects/project47/project47.jpg" },
    { id: 48, name: "Projecto 48", imgSrc: "projects/project48/project48.jpg" },
    { id: 49, name: "Projecto 49", imgSrc: "projects/project49/project49.jpg" },    
    { id: 50, name: "Projecto 50", imgSrc: "projects/project50/project50.jpg" },    
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
