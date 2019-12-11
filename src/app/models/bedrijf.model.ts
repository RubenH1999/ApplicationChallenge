import { Gebruiker } from './gebruiker.model';
import { Assignment } from './assignment.model';
import { TagBedrijf } from './tag-bedrijf.model';

export class Bedrijf {
    constructor(public bedrijfID: number, public locatie: string, public biografie: string, public telefoon: number, public gebruikerID: number, public gebruiker?: Gebruiker, public assignments?: Array<Assignment>, public tagBedrijven?: Array<TagBedrijf>){}
}
