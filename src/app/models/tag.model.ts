import { TagAssignment } from './tag-assignment.model';
import { TagMaker } from './tag-maker.model';
import { TagBedrijf } from './tag-bedrijf.model';

export class Tag {
    constructor(public tagID: number, public beschrijving: string, public tagAssignments?: Array<TagAssignment>, public tagMakers?: Array<TagMaker>, public tagBedrijven?: Array<TagBedrijf>){}
}
