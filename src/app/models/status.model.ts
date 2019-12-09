import { Assignment } from './assignment.model';

export class Status {
    constructor(public statusID: number, public beschrijving: string, public assignments?: Array<Assignment> ){}
}
