import { Gebruiker } from './gebruiker.model';
import { Assignment } from './assignment.model';
import { TagMaker } from './tag-maker.model';

export class Maker {

constructor(public makerID: number, public geboorteDatum: string, public biografie: string, public studentCheck: boolean, public linkdIn: string, public ervaring: string,public telefoonNummer: number, public accountID: number,public gebruiker?: Gebruiker, public assignments?: Array<Assignment>, public tagMakers?: Array<TagMaker>){}

}
