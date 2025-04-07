// serie.js
export class Serie {
    constructor(name, channel, seasons, id = Serie.idCounter++) {
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.id = id;
    }
}
Serie.idCounter = 1;