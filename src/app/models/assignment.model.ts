import { Status } from './status.model';
import { Maker } from './maker.model';
import { Bedrijf } from './bedrijf.model';
import { TagAssignment } from './tag-assignment.model';

export class Assignment {
    constructor(public assignmentID: number, public titel: string,public omschrijving: string, public locatie: string, public type: string, public statusID: number,public makerID: number,public bedrijfID: number, public status?: Status, public maker?: Maker, public bedrijf?: Bedrijf, public tagsAssignments?: Array<TagAssignment>){}
}

