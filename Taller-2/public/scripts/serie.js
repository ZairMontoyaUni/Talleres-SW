export class Serie {
    constructor(name, channel, seasons, description = "", url = "", image = "", id = Serie.idCounter++) {
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.url = url;
        this.image = image;
        this.id = id;
    }
}
Serie.idCounter = 1;
