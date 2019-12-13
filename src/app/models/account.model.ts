import {Rol} from './rol.model';
import {Bedrijf} from './bedrijf.model';
import {Maker} from './maker.model';

export class Gebruiker {
  constructor(public accountID: number, public email: string, public naam: string, authUID: string, public rolID: number, public rol: Rol, public maker: Maker, public bedrijf: Bedrijf, public ontvangers?: Array<Gebruiker>, public verzenders?: Array<Gebruiker>) {
  }

}
