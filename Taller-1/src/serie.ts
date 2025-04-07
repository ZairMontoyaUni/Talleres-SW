export class Serie {
    static idCounter: number = 1;
    
    constructor(
        public name: string,
        public channel: string,
        public seasons: number,
        public id: number = Serie.idCounter++
    ) {}
}