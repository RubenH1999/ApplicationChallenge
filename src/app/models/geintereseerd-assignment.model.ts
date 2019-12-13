import { Maker } from './maker.model';
import { Assignment } from './assignment.model';

export class GeintereseerdAssignment {
    constructor(public geintereseerdAssignmentID: number, public makerID: number, public assignmentID: number,public maker?: Maker, public assignment?: Assignment) {
    }
}
