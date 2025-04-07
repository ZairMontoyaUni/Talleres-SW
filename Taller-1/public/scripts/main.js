// main.js
import { Serie } from './serie.js';
import { dataSeries } from './data.js';

const SeriesTbody = document.getElementById('Series');
const totalSeasons = document.getElementById('total-credits');

function renderSeriesInTable(series) {
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

function updateTotalSeasons(series) {
    totalSeasons.textContent = `${series.reduce((acc, serie) => acc + serie.seasons, 0)}`;
}

function clearTable() {
    while (SeriesTbody.firstChild) {
        SeriesTbody.removeChild(SeriesTbody.firstChild);
    }
}

// Inicialización
renderSeriesInTable(dataSeries);
updateTotalSeasons(dataSeries);