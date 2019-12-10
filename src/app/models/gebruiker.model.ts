import { Rol } from './rol.model';

export class Gebruiker {
    constructor(public gebruikerID: number,authUID:string, public email: string, public naam: string, public rolID: number, public rol?: Rol, public ontvangers?: Array<Gebruiker>, public verzenders?: Array<Gebruiker>){}
    
}
