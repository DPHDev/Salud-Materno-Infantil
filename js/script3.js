// Obtener una referencia al elemento canvas del DOM
const $grafica9 = document.querySelector("#grafica9");
const $grafica10 = document.querySelector("#grafica10");
const $grafica11d = document.querySelector("#grafica11d");
const $grafica11v = document.querySelector("#grafica11v");
const $grafica11t = document.querySelector("#grafica11t");
const $grafica12 = document.querySelector("#grafica12");

// Las etiquetas son las que van en el eje X. 
const etiquetas = ["Anrabi", "Iltaqui", "Morales Chupa", "San Antonio del Punge", "Cumbas Conde", "San Pedro", "Topo Grande", "Peribuela", "El Cercado", "San Nicolás", "La Calera","Ambi Grande","Perafán","El Morlan", "Guitarra Ucu","Chilca Pamba"]
const afectosdif = ["Numero de registros", "Diversidad afectos"]
const ddhh = ["Laboral- ingresos", "Educación", "Salud", "Alimentación", "Vivienda", "Tiempo"]
const violencia = ["Violencia ginecobstétrica", "Salud emocional y psicológica", "Violencia", "Condición situacional"]
const tidii = ["Institucionalidad e infraestructura social", "Territorialidad vital", "Salud ancestral"]
const satisfaier = [ "A. Bienestar", "A. Educación", "A. Sanidad ", "A. Personalidad ", "A. Gratitud", "A. Responsabilidad afectiva", "A. Seguridad"]

// // Podemos tener varios conjuntos de datos
const difafectosp = {
    label: "Afectos positivos",
    data: [52,13], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(234, 100, 214, 0.5)',// Color de fondo
    borderColor: 'rgba(234, 100, 214, 1)',// Color del borde
    borderWidth: 1,// Ancho del borde
};

const difafectosn = {
    label: "Afectos negativos",
    data: [71,21], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(185, 100, 234, 0.5)',// Color de fondo
    borderColor: 'rgba(185, 100, 234, 1)',// Color del borde
    borderWidth: 1,// Ancho del borde
};


// // Podemos tener varios conjuntos de datos
const derechoslimit = {
    label: "Derechos (DDHH económicos, sociales y culturales y DDHH de la niñez)(en %)",
    data: [14.29, 17.86, 30.30, 26.04, 35, 30.95, 37.04, 26.47, 24.31, 38.1, 10.49, 22.46, 11.67, 24.07, 6.67, 27.27], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(234, 104, 100, 0.3)',// Color de fondo
    borderColor: 'rgba(234, 104, 100, 1)',// Color del borde
    borderWidth: 1,// Ancho del borde
};

const Violencialimit = {
    label: "Violencia (en %)",
    data: [53.57, 8.93, 9.09, 6.25, 12.5, 13.57, 25, 7.35, 16.67, 14.29, 19.44, 10.87, 9.17, 11.11, 15, 11.36], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(168, 111, 234, 0.5)', // Color de fondo
    borderColor: 'rgba(168, 111, 234, 1)', // Color del borde
    borderWidth: 1,// Ancho del borde
};

const tidiilimit = {
    label: "Territorialidad - interculturalidad- diversidad -Integralidad - inclusividad (en %)",
    data: [52.38, 19.05, 12.12, 60.42, 70, 25.71, 7.41, 9.8, 15.97, 28.57, 13.58, 5.8, 18.89, 22.22, 31.11, 27.27], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(123, 203, 219, 0.5)', // Color de fondo
    borderColor: 'rgba(123, 203, 219, 1)', // Color del borde
    borderWidth: 1,// Ancho del borde
};

// // Podemos tener varios conjuntos de datos
const ddhhdata = {
    label: "Derechos (DDHH económicos, sociales y culturales y DDHH de la niñez) (en %)",
    data: ["60.74", "18.12", "19.46", "21.48", "4.36", "11.41"], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(222, 67, 199, 0.5)',// Color de fondo
    borderColor: 'rgba(222, 67, 199, 1)',// Color del borde
    borderWidth: 1,// Ancho del borde
};

// // Podemos tener varios conjuntos de datos
const violenciadata = {
    label: "Violencia (en %)",
    data: ["6.04",	"11.07", "10.40", "28.19"], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(139, 67, 222, 0.5)',// Color de fondo
    borderColor: 'rgba(139, 67, 222, 1)',// Color del borde
    borderWidth: 1,// Ancho del borde
};

// // Podemos tener varios conjuntos de datos
const tidiidata = { 
    label: "Territorialidad - interculturalidad- diversidad -Integralidad - inclusividad (en %)",
    data: ["16.11", "20.81", "31.21"], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(100, 212, 234, 0.5)',// Color de fondo
    borderColor: 'rgba(100, 212, 234, 1)',// Color del borde
    borderWidth: 1,// Ancho del borde
};


// // Podemos tener varios conjuntos de datos
const satisdata = { 
    label: "Satisfacción subjetiva respecto a la maternidad (en %)",
    data: ["22.15","37.25","54.70","43.96","8.39","21.14","12.42"], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(222, 67, 199, 0.5)',// Color de fondo
    borderColor: 'rgba(222, 67, 199, 1)',// Color del borde
    borderWidth: 1,// Ancho del borde
};

//------------------------------------------------------------------------------------

new Chart($grafica9, {
    type: 'bar',// Tipo de gráfica
    data: {
        labels: afectosdif,
        datasets: [
            difafectosp,
            difafectosn
            // Aquí más datos...
        ]
    },
    options: {
        margin: 0,
        responsive: true,
        scales:{
            yAxes: [{
                ticks:{
                    beginAtZero: true               }
            }]
        },
        legend: {
        labels:{
            fontColor: 'Black'
        }}
    }      
});


new Chart($grafica10, {
    type: 'radar',// Tipo de gráfica
    data: {
        labels: etiquetas,
        datasets: [
            derechoslimit,
            Violencialimit,
            tidiilimit
            // Aquí más datos...
        ]
    },
    options: {
        scale: {
        ticks: {
            beginAtZero: true,
            min: 0,
            max: 100,
          }
        },
        margin: 0,
        legend: {
            labels:{
                fontColor: 'Black'
            }}     
    }      
});

new Chart($grafica11d, {
    type: 'radar',// Tipo de gráfica
    data: {
        labels: ddhh,
        datasets: [
            ddhhdata
            // Aquí más datos...
        ]
    },
    options: {
        scale: {
            ticks: {
                beginAtZero: true,
                min: 0,
                max: 100,
              }
            },
        margin: 0,
        legend: {
            labels:{
                fontColor: 'Black'
            }}     
    }      
});

new Chart($grafica11v, {
    type: 'radar',// Tipo de gráfica
    data: {
        labels: violencia,
        datasets: [
            violenciadata
            // Aquí más datos...
        ]
    },
    options: {        
        scale: {
        ticks: {
            beginAtZero: true,
            min: 0,
            max: 100,
          }
        },
        margin: 0,
        legend: {
            labels:{
                fontColor: 'Black'
            }}     
    }      
});

new Chart($grafica11t, {
    type: 'radar',// Tipo de gráfica
    data: {
        labels: tidii,
        datasets: [
            tidiidata
            // Aquí más datos...
        ]
    },
    options: {
        scale: {
            ticks: {
                beginAtZero: true,
                min: 0,
                max: 100,
              }
            },
        margin: 0,
        legend: {
            labels:{
                fontColor: 'Black'
            }}     
    }      
});

new Chart($grafica12, {
    type: 'radar',// Tipo de gráfica
    data: {
        labels: satisfaier,
        datasets: [
            satisdata
            // Aquí más datos...
        ]
    },
    options: {
        scale: {
            ticks: {
                beginAtZero: true,
                min: 0,
                max: 100,
              }
            },
        margin: 0,
        legend: {
            labels:{
                fontColor: 'Black'
            }}     
    }      
});