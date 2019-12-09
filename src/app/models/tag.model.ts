import { TagAssignment } from './tag-assignment.model';
import { TagMaker } from './tag-maker.model';
import { TagBedrijf } from './tag-bedrijf.model';

export class Tag {
    constructor(public tagID: number, public beschrijving: string, public tagsAssignments?: Array<TagAssignment>, public tagMakers?: Array<TagMaker>, public tagsBedrijf?: Array<TagBedrijf>){}
}
