import { Serie } from './serie.js';
import { dataSeries } from './data.js';

// Elementos del DOM
const SeriesTbody: HTMLElement = document.getElementById('Series')!;
const totalSeasons: HTMLElement = document.getElementById('total-credits')!;
const tabla: HTMLElement = document.getElementById("Tablita")!;

// Render inicial
renderSeriesInTable(dataSeries);
updateTotalSeasons(dataSeries);

function renderSeriesInTable(series: Serie[]): void {
    clearTable();
    series.forEach(serie => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${serie.id}</td>
            <td class="fw-bold" style = "color = blue">${serie.name}</td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
        `;
        SeriesTbody.appendChild(row);
    });
}
function updateTotalSeasons(series: Serie[]): void {
    const averageSeasons = series.reduce((acc, serie) => acc + serie.seasons, 0) / series.length;
    totalSeasons.textContent = `${averageSeasons.toFixed(0)}`;
}

function clearTable(): void {
    while (SeriesTbody.firstChild) {
        SeriesTbody.removeChild(SeriesTbody.firstChild);
    }
}


SeriesTbody.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    if (target && target.tagName === 'TD') {
        const row = target.parentElement as HTMLTableRowElement;
        const serieId = parseInt(row.cells[0].textContent || '0', 10);
        const selectedSerie = dataSeries.find(serie => serie.id === serieId);
        if (selectedSerie) {
            mostrarDescripcion(selectedSerie);
        }
    }
});

function mostrarDescripcion(serie: Serie): void {
    // Clear only the description table
    while (tabla.firstChild) {
        tabla.removeChild(tabla.firstChild);
    }

    const Imagen = document.createElement('tr');
    Imagen.innerHTML = `<td><img src="${serie.image}" alt="${serie.name}" style="max-width: 300px;" /></td>`;


    const Titulo = document.createElement('tr');
    Titulo.innerHTML = `<td>${serie.name}</td>`;

    const Descricion = document.createElement("tr");
    Descricion.innerHTML = `<td>${serie.description}</td>`;

    const Url = document.createElement("tr");
    Url.innerHTML = `<td><a href="${serie.url}" target="_blank">${serie.url}</a></td>`;

    tabla.appendChild(Imagen);
    tabla.appendChild(Titulo);
    tabla.appendChild(Descricion);
    tabla.appendChild(Url);
}