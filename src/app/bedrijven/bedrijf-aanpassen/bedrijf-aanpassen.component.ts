import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Bedrijf} from '../../models/bedrijf.model';
import {BedrijfService} from '../../services/bedrijf.service';
import {Router} from '@angular/router';
import { TagService } from 'src/app/services/tag.service';
import { TagbedrijfService } from 'src/app/services/tagbedrijf.service';
import { Tag } from 'src/app/models/tag.model';
import { TagBedrijf } from 'src/app/models/tag-bedrijf.model';

@Component({
  selector: 'app-bedrijf-aanpassen',
  templateUrl: './bedrijf-aanpassen.component.html',
  styleUrls: ['./bedrijf-aanpassen.component.css']
})
export class BedrijfAanpassenComponent implements OnInit {

  bedrijf: Bedrijf;
  autoComplete: string[] = new Array<string>();
  tags: string[] = new Array<string>();


  constructor(private bedrijfService: BedrijfService, private _tagService: TagService, private _tagBedrijfService: TagbedrijfService, private router: Router) {
  }

  ngOnInit() {
    this.bedrijfService.getBedrijfByAccountID(+localStorage.getItem('accountID')).subscribe(result => {
      this.bedrijf = result;
      console.log(result);
    });

    this._tagService.getAllTags().subscribe(
      result => {
        result.forEach(tag => {
          this.autoComplete.push(tag.beschrijving);
        });
      }
    );

    this._tagBedrijfService.getTagBedrijvenWhereGebruikerID(Number(localStorage.getItem("accountID"))).subscribe(tagbedrijven => { 
      tagbedrijven.forEach(tagbedrijf => {
        this.tags.push(tagbedrijf.tag.beschrijving);
      });
    });
  }

  onSubmit() {
    this.bedrijfService.updateBedrijf(this.bedrijf.bedrijfID, this.bedrijf).subscribe(result => {
      console.log('update is succes');
      this.router.navigate(['bedrijf-home']);
    });
    this._tagBedrijfService.deleteTagBedrijfWhereBedrijfID(this.bedrijf.bedrijfID).subscribe();
    this.tags.forEach(tag => {
      this._tagService.getTagWhereBeschrijving(tag).subscribe(tagresult => {        
        this._tagBedrijfService.addTagBedrijf(new TagBedrijf(0, this.bedrijf.bedrijfID, tagresult.tagID)).subscribe();
      },
      (err) => {
        this._tagService.addTag(new Tag(0, tag)).subscribe(newTag => {
          this._tagBedrijfService.addTagBedrijf(new TagBedrijf(0, this.bedrijf.bedrijfID, newTag.tagID)).subscribe();          
        });
      });
    });

  }
}
