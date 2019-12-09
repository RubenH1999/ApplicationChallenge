import { Bedrijf } from './bedrijf.model';
import { Tag } from './tag.model';

export class TagBedrijf {
    constructor(public tagBedrijfID: number, public bedrijfID: number, public tagID: number, public bedrijf?: Bedrijf, public tag?: Tag){}
}
