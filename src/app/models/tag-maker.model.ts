import { Tag } from './tag.model';
import { Maker } from './maker.model';

export class TagMaker {
    constructor(public tagMakerID: number, public tagID: number, public makerID: number, public tag?: Tag, public maker?: Maker){}
}
