import { Gebruiker } from './gebruiker.model';
import { Assignment } from './assignment.model';
import { TagBedrijf } from './tag-bedrijf.model';

export class Bedrijf {
    constructor(public bedrijfID: number,  public locatie: string, public biografie: string, public telefoon: number, public accountID: number, public account?: Account, public assignments?: Array<Assignment>, public tagBedrijven?: Array<TagBedrijf>){}
}
