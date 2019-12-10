import {Rol} from './rol.model';

export class Gebruiker {
<<<<<<< HEAD
    constructor(public gebruikerID: number,authUID:string, public email: string, public naam: string, public rolID: number, public rol?: Rol, public ontvangers?: Array<Gebruiker>, public verzenders?: Array<Gebruiker>){}
    
=======
  constructor(public gebruikerID: number, public email: string, public naam: string, public rolID: number, public rol?: Rol, public ontvangers?: Array<Gebruiker>, public verzenders?: Array<Gebruiker>) {
  }
>>>>>>> 5c63a4e9357c6db8f281f984a6194cbb55e5b453
}
