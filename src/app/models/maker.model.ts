import { Gebruiker } from './gebruiker.model';

export class Maker {
    constructor(public makerID: number, public geboorteDatum: string, public biografie: boolean, public linkdin: string, public ervaring: string, public telefoonNummer: string, public gebruiker: Gebruiker){}
}
