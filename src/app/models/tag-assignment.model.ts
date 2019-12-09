import { Assignment } from './assignment.model';
import { Tag } from './tag.model';

export class TagAssignment {
    constructor(public tagAssignmentID: number, public assignmentID: number, public tagID: number, public assignment?: Assignment, public tag?: Tag){}
}
