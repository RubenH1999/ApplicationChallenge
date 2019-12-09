import { Gebruiker } from './gebruiker.model';
import { Assignment } from './assignment.model';
import { TagMaker } from './tag-maker.model';

export class Maker {

constructor(public makerID:number, public geboorteDatum:string, public biografie:string, public student:boolean, public linkdin:string, public ervaring:string,public telefoonNummer:string){}

}
