import {Rol} from './rol.model';
import {Bedrijf} from './bedrijf.model';
import {Maker} from './maker.model';

export class Gebruiker {
  constructor(public gebruikerID: number, public email: string, public naam: string, authUID: string, public rolID: number, rol?: Rol, ontvangers?: Array<Gebruiker>, verzenders?: Array<Gebruiker>) {
  }

}
