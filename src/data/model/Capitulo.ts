import Aula from "./Aula"


export default interface Capitulo{

    id: number,
    titulo: string,
    aulas: Aula[],
    ordem: number
}