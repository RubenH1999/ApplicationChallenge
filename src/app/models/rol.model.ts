import { Gebruiker } from './gebruiker.model';

export class Rol {
    constructor(public rollID: number, public type: string, public gebruikers?: Array<Gebruiker> ){}
}
