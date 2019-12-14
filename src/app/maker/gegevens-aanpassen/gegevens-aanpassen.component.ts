import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/auth/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Maker } from 'src/app/models/maker.model';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { MakerService } from 'src/app/services/maker.service';
import { Gebruiker } from 'src/app/models/gebruiker.model';
import { Router } from '@angular/router';
import { TagService } from 'src/app/services/tag.service';
import { TagmakerService } from 'src/app/services/tagmaker.service';
import { Tag } from 'src/app/models/tag.model';
import { TagMaker } from 'src/app/models/tag-maker.model';

@Component({
  selector: 'app-gegevens-aanpassen',
  templateUrl: './gegevens-aanpassen.component.html',
  styleUrls: ['./gegevens-aanpassen.component.css']
})
export class GegevensAanpassenComponent implements OnInit {

  autoComplete: string[] = new Array<string>();
  tags: string[] = new Array<string>();
  account : Gebruiker;
  maker: Maker;
  
  constructor(private _account: AccountService, private auth: AuthService, private _maker: MakerService, private _tagService: TagService, private _tagMakerService: TagmakerService, private router : Router) { 
    
    this._account.getMakerByUID(localStorage.getItem('authUID')).subscribe(result => {
      this.account= result;

    });
    this._maker.getMakerByID(localStorage.getItem('accountID')).subscribe(result => {
      this.maker = result;
    })
    
    
  }
  pasAan(){
    
    this._account.updateAccount(this.account);
    this._maker.updateMaker(this.maker).subscribe();
    this._tagMakerService.deleteTagMakerWhereMakerID(this.maker.makerID).subscribe();
    this.tags.forEach(tag => {
      this._tagService.getTagWhereBeschrijving(tag).subscribe(tagresult => {
        this._tagMakerService.addTagMaker(new TagMaker(0, tagresult.tagID, this.maker.makerID)).subscribe();
      },
      (err) => {
        this._tagService.addTag(new Tag(0, tag)).subscribe(newTag => {
          this._tagMakerService.addTagMaker(new TagMaker(0, newTag.tagID, this.maker.makerID)).subscribe();          
        });
      });
    });
    this.auth.changeEmail(this.account.email);
    this.router.navigate(['']);
  }
  

  ngOnInit() {
    this._tagService.getAllTags().subscribe(
      result => {
        result.forEach(tag => {
          this.autoComplete.push(tag.beschrijving);
        });
      }
    );

    this._tagMakerService.getTagMakersWhereGebruikerID(Number(localStorage.getItem("accountID"))).subscribe(tagmakers => { 
      console.log(tagmakers);
      tagmakers.forEach(tagmaker => {
        this.tags.push(tagmaker.tag.beschrijving);
      });
    });
  }

}
