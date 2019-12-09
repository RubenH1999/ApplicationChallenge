import { Gebruiker } from './gebruiker.model';

export class Review {
    constructor(public reviewID: number, public beschrijving: string, public ontvangerID: number, public verzenderID: number, public ontvanger?: Gebruiker, public verzender?: Gebruiker ){}
}
