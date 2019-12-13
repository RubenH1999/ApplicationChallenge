import {Component, OnInit} from '@angular/core';
import {Assignment} from 'src/app/models/assignment.model';
import {FormControl, FormGroup, Validators, FormArray} from '@angular/forms';
import {AssignmentService} from '../../services/assignment.service';
import {Router} from '@angular/router';
import {TagService} from 'src/app/services/tag.service';
import {TagassignmentService} from 'src/app/services/tagassignment.service';
import {TagAssignment} from 'src/app/models/tag-assignment.model';
import {Tag} from 'src/app/models/tag.model';


@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  autoComplete: string[];
  tags: string[];
  tagAssignments: TagAssignment[];

  assignmentForm = new FormGroup({
    titel: new FormControl('', Validators.required),
    omschrijving: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    statusID: new FormControl(''),
    bedrijfID: new FormControl(''),
  });

  constructor(private assignmentService: AssignmentService, private _tagService: TagService, private _tagAssignmentService: TagassignmentService, private router: Router) {
  }

  ngOnInit() {
    this.autoComplete = new Array<string>();
    this._tagService.getAllTags().subscribe(
      result => {
        result.forEach(tag => {
          this.autoComplete.push(tag.beschrijving);
        });
      }
    );
  }

  onSubmit() {
    this.assignmentForm.controls.statusID.setValue(1);
    this.assignmentForm.controls.bedrijfID.setValue(Number(localStorage.getItem('accountID')));
    this.assignmentService.addAssignment(this.assignmentForm.value).subscribe(result => {
      this.tags.forEach(tag => {
        this._tagService.getTagWhereBeschrijving(tag).subscribe(tagresult => {
            this._tagAssignmentService.addTagAssignment(new TagAssignment(0, result.assignmentID, tagresult.tagID)).subscribe();
          },
          (err) => {
            this._tagService.addTag(new Tag(0, tag)).subscribe(newTag => {
              this._tagAssignmentService.addTagAssignment(new TagAssignment(0, result.assignmentID, newTag.tagID)).subscribe();
            });
          });
      });
      if (result.assignmentID) {
        this.router.navigate(['bedrijf-home']);
      }
    });
  }


}
