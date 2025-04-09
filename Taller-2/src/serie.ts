export class Serie {
    static idCounter: number = 1;
    
    constructor(
        public name: string,
        public channel: string,
        public seasons: number,
        public description: string = "",
        public url: string = "",
        public image: string = "",
        public id: number = Serie.idCounter++
    ) {}
}