import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MakerService } from 'src/app/services/maker.service';
import { Maker } from 'src/app/models/maker.model';

@Component({
  selector: 'app-admin-maker-detail',
  templateUrl: './admin-maker-detail.component.html',
  styleUrls: ['./admin-maker-detail.component.css']
})
export class AdminMakerDetailComponent implements OnInit {
  maker:Maker[];
  
  id=0
  private routeSub: Subscription;

  constructor(private route: ActivatedRoute, private router:Router, private _makerService:MakerService) { }

  ngOnInit() 
  {   this.routeSub=this.route.params.subscribe(params=>{
      this.id=params['id']
     
      });
    
    this.getMaker()
    console.log(this.maker)
  }

  getMaker(){
   
   this._makerService.getMakers().subscribe(
      result=>{
        this.maker=result.filter(x=>x.accountID==this.id)
        console.log(this.maker)
      })

  }

}
