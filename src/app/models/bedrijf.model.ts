import { Gebruiker } from './gebruiker.model';

export class Bedrijf {
    constructor(public bedrijfID: number, public locatie: string,public tags: string,public biografie: string, public telefoon: string, public gebruiker: Gebruiker){}
}
