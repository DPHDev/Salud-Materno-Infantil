// Obtener una referencia al elemento canvas del DOM
const $grafica1 = document.querySelector("#grafica1");
const $grafica2 = document.querySelector("#grafica2");
const $grafica3 = document.querySelector("#grafica3");
const $grafica4 = document.querySelector("#grafica4");

// Las etiquetas son las que van en el eje X. 
const etiquetas = ["Anrabi", "Iltaqui", "Morales Chupa", "San Antonio del Punge", "Cumbas Conde", "San Pedro", "Topo Grande", "Peribuela", "El Cercado", "San Nicolás", "La Calera","Ambi Grande","Perafán","El Morlan", "Guitarra Ucu","Chilca Pamba"]

// // Podemos tener varios conjuntos de datos
const genero = {
    label: "Género",
    data: [1,0,0,0,0,4,0,0,2,0,2,2,1,2,1,0], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(254, 106, 0, 0.3)', // Color de fondo
    borderColor: 'rgba(254, 106, 0, 1)', // Color del borde
    borderWidth: 1,// Ancho del borde
};

const generon1 = {
    label: "Nivel 1",
    data: [0,0,0,0,0,2,0,0,0,0,2,2,0,0,1,0], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(33, 164, 234, 0.3)', // Color de fondo
    borderColor: 'rgba(33, 164, 234, 1)', // Color del borde
    borderWidth: 1,// Ancho del borde
};
const generon2 = {
    label: "Nivel 2",
    data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(243, 95, 220, 0.3)', // Color de fondo
    borderColor: 'rgba(243, 95, 220, 1)', // Color del borde
    borderWidth: 1,// Ancho del borde
};

const generoint = {
    label: "Intenciones",
    data: [1,0,0,0,0,2,0,0,2,0,0,0,1,2,0,0], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(105, 239, 116, 0.3)',// Color de fondo
    borderColor: 'rgba(105, 239, 116, 1)',// Color del borde
    borderWidth: 1,// Ancho del borde
};

// // Podemos tener varios conjuntos de datos
const derechos = {
    label: "Derechos y Salud",
    data: [2,2,0,3,1,5,0,0,5,5,2,3,4,3,2,4], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(238, 231, 33, 0.3)',// Color de fondo
    borderColor: 'rgba(238, 231, 33, 1)',// Color del borde
    borderWidth: 1,// Ancho del borde
};

const saludn1 = {
    label: "Nivel 1",
    data: [2,2,0,2,1,4,0,0,2,1,1,3,4,3,0,3], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(33, 164, 234, 0.3)', // Color de fondo
    borderColor: 'rgba(33, 164, 234, 1)', // Color del borde
    borderWidth: 1,// Ancho del borde
};
const saludn2 = {
    label: "Nivel 2",
    data: [0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(243, 95, 220, 0.3)', // Color de fondo
    borderColor: 'rgba(243, 95, 220, 1)', // Color del borde
    borderWidth: 1,// Ancho del borde
};
const saludint = {
    label: "Intenciones",
    data: [0,0,0,1,0,1,0,0,3,3,0,0,0,0,2,0], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(105, 239, 116, 0.3)',// Color de fondo
    borderColor: 'rgba(105, 239, 116, 1)',// Color del borde
    borderWidth: 1,// Ancho del borde
};

// // Podemos tener varios conjuntos de datos
const idiit = {
    label: "IDIIT",
    data: [3,4,3,2,2,1,3,3,3,3,2,2,0,0,0,3], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(118, 5, 170, 0.3)',// Color de fondo
    borderColor: 'rgba(118, 5, 170, 1)',// Color del borde
    borderWidth: 1,// Ancho del borde
};

const idiitn1 = {
    label: "Nivel 1",
    data: [1,0,0,0,0,1,1,1,3,3,2,2,0,0,0,0], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(33, 164, 234, 0.3)', // Color de fondo
    borderColor: 'rgba(33, 164, 234, 1)', // Color del borde
    borderWidth: 1,// Ancho del borde
};

const idiitn2 = {
    label: "Nivel 2",
    data: [2,1,1,2,0,0,1,1,0,0,0,0,0,0,0,1], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(243, 95, 220, 0.3)', // Color de fondo
    borderColor: 'rgba(243, 95, 220, 1)', // Color del borde
    borderWidth: 1,// Ancho del borde
};

const idiitint = {
    label: "Intenciones",
    data: [0,3,2,0,2,0,1,1,0,0,0,0,0,0,0,2], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(105, 239, 116, 0.3)',// Color de fondo
    borderColor: 'rgba(105, 239, 116, 1)',// Color del borde
    borderWidth: 1,// Ancho del borde
};


//------------------------------------------------------------------------------------

new Chart($grafica1, {
    type: 'radar',// Tipo de gráfica
    data: {
        labels: etiquetas,
        datasets: [
            genero,
            derechos,
            idiit
            // Aquí más datos...
        ]
    },
    options: {
        margin: 0,
        legend: {
            labels:{
                fontColor: 'Black'
            }}     
    }      
});

new Chart($grafica2, {
    type: 'bar',// Tipo de gráfica
    data: {
        labels: etiquetas,
        datasets: [
            generon1,
            generon2,
            generoint
            // Aquí más datos...
        ]
    },
    options: {
        margin: 0,
        responsive: true,
        scales:{
            yAxes: [{
                ticks:{
                    max: 2.5
                }
            }]
        },
        legend: {
        labels:{
            fontColor: 'Black'
        }}
    }      
});

new Chart($grafica3, {
    type: 'bar',// Tipo de gráfica
    data: {
        labels: etiquetas,
        datasets: [
            saludn1,
            saludn2,
            saludint
            // Aquí más datos...
        ]
    },
    options: {
        margin: 0,
        responsive: true,
        
        legend: {
        labels:{
            fontColor: 'Black'
        }}
    }      
});

new Chart($grafica4, {
    type: 'bar',// Tipo de gráfica
    data: {
        labels: etiquetas,
        datasets: [
            idiitn1,
            idiitn2,
            idiitint
            // Aquí más datos...
        ]
    },
    options: {
        margin: 0,
        responsive: true,
        scales:{
            yAxes: [{
                ticks:{
                    max: 3.5
                }
            }]
        },
        legend: {
        labels:{
            fontColor: 'Black'
        }}
    }      
});