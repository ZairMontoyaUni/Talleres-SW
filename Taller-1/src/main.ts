import { Serie } from './serie.js';
import { dataSeries } from './data.js';

// Elementos del DOM
const SeriesTbody: HTMLElement = document.getElementById('Series')!;
const totalSeasons: HTMLElement = document.getElementById('total-credits')!;

// Render inicial
renderSeriesInTable(dataSeries);
updateTotalSeasons(dataSeries);

function renderSeriesInTable(series: Serie[]): void {
    clearTable();
    series.forEach(serie => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${serie.id}</td>
            <td class="fw-bold">${serie.name}</td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
        `;
        SeriesTbody.appendChild(row);
    });
}

function updateTotalSeasons(series: Serie[]): void {
    totalSeasons.textContent = `${series.reduce((acc, serie) => acc + serie.seasons, 0)}`;
}

function clearTable(): void {
    while (SeriesTbody.firstChild) {
        SeriesTbody.removeChild(SeriesTbody.firstChild);
    }
}