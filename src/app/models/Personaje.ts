export class Personaje{
    constructor(
        public id: number,
        public nombre: string,
        public apellido: string,
        public casa: 'Hufflepuff' | 'Ravenclaw' | 'Griffyndor' | 'Slytherin',
        public vivo: boolean,
        public patronus: string,
        public img: string
    ){
    }
}