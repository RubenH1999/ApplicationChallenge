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
  maker:Maker;
  id=0
  private routeSub: Subscription;

  constructor(private route: ActivatedRoute, private router:Router, private _makerService:MakerService) { }

  ngOnInit() 
  {   this.routeSub=this.route.params.subscribe(params=>{
      this.id=params['id']
     
      });
      this._makerService.getMaker(this.id).subscribe(
        result => {  
          this.maker = result;  
        }
      );
  }

  onSubmit() {
    this._makerService.updateMakerAdmin(this.maker.makerID, this.maker)
      console.log('update is succes');
      this.router.navigate(['adminMaker']);
   

  }
 
  

}
