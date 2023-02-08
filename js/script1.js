// Obtener una referencia al elemento canvas del DOM
const $grafica5 = document.querySelector("#grafica5");
const $grafica6 = document.querySelector("#grafica6");
const $grafica7 = document.querySelector("#grafica7");

// Las etiquetas son las que van en el eje X. 
const etiquetas2 = ["Bienestar emocional-espiritual", "Falta de Recursos", "Sensibilización - Capacitación", "Estructura - Organización", "Discriminación - Desvalorización", "Violencia obstétrica", "Transferencia de conocimientos- Formación", "Acompañamiento", "Malas prácticas", "Comunicación empática", "Interculturalidad(Cosmovisión)", "Integralidad","Apoyo estatal", "Pertenencia comunitaria", "Liderar el parto"]
const ventajas = ["Acompañamiento en parto y puerperio", "Seguridad y confianza", "Recursos y facilidad de asistir en zonas rurales", "Comodidad", "Acompañamiento familiar", "Salud mental y espiritual", "Herbolaria y medicina natural"]
const desventajas = ["Poca coordinación con el ministerio de salud", "Falta de complementariedad", "Falta de equipamiento", "Difícil acceso a respuesta ante complicaciones", "Formación y capacitación contínua", "Transferencia de conocimientos", "Factores de riesgo postnatales"]

// // Podemos tener varios conjuntos de datos
const ancestral = {
    label: "Medicina Ancestral",
    data: [4,2,3,-2,5,0,-3,2,1,1,3,3,-3,1,3], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(222, 67, 199, 0.5)',// Color de fondo
    borderColor: 'rgba(222, 67, 199, 1)',// Color del borde
    borderWidth: 1,// Ancho del borde
};

const occidental = {
    label: "Medicina Occidental",
    data: [-4,0,1,4,0,4,1,-1,1,-3,-3,0,-1,-3,0], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(139, 67, 222, 0.5)', // Color de fondo
    borderColor: 'rgba(139, 67, 222, 1)', // Color del borde
    borderWidth: 1,// Ancho del borde
};

// // Podemos tener varios conjuntos de datos
const ventajasdata = {
    label: "Ventajas",
    data: [7,7,2,2,6,3,2], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(100, 234, 210, 0.3)',// Color de fondo
    borderColor: 'rgba(100, 234, 210, 1)',// Color del borde
    borderWidth: 1,// Ancho del borde
};

const desventajasdata = {
    label: "Desventajas",
    data: [3,2,6,2,2,2,1], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(227, 36, 245, 0.3)', // Color de fondo
    borderColor: 'rgba(227, 36, 245, 1)', // Color del borde
    borderWidth: 1,// Ancho del borde
};

//------------------------------------------------------------------------------------

new Chart($grafica5, {
    type: 'horizontalBar',// Tipo de gráfica
    data: {
        labels: etiquetas2,
        datasets: [
            ancestral,
            occidental
            // Aquí más datos...
        ]
    },
    options: {
        margin: 0,
        responsive: true,
        scales:{

        // -----Opciones para gráfica tipo radar
        //     pointLabels:{
        //     fontSize: 18,
        //     fontColor: 'black'
        //     }     

            yAxes: [{
                ticks:{
                    fontSize: 18
                }
            }],
            xAxes: [{
                ticks: {
                max: 6,
                min: -5 
                }
            }]
        },
        legend: {
            labels:{
                fontSize: 18,
                fontColor: 'Black'
            }
        }
    }      
});

new Chart($grafica6, {
    type: 'horizontalBar',// Tipo de gráfica
    data: {
        labels: ventajas,
        datasets: [
            ventajasdata
            // Aquí más datos...
        ]
    },
    options: {
        margin: 0,
        responsive: true,
        scales:{
            yAxes: [{
                ticks:{
                    fontSize: 16
                }
            }],
            xAxes: [{
                ticks:{
                    max: 8,
                    beginAtZero: true
                }
            }]
        },
        legend: {
            position: 'right',
            labels:{
                fontColor: 'Black'
        }},
        plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 25,
                        weight: 700
                    }
                }
            }
        }

    }      
});

new Chart($grafica7, {
    type: 'horizontalBar',// Tipo de gráfica
    data: {
        labels: desventajas,
        datasets: [
            desventajasdata
            // Aquí más datos...
        ]
    },
    options: {
        margin: 0,
        responsive: true,
        scales:{
            yAxes: [{
                ticks:{
                    fontSize: 16
                }
            }],
            xAxes: [{
                ticks:{
                    max: 7,
                    beginAtZero: true
                }
            }]
        },
        legend: {
            position: 'right',
            labels:{
                fontColor: 'Black'
            }}
    }      
});