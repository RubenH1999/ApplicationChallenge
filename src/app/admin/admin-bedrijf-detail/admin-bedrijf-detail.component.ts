import { Component, OnInit } from '@angular/core';
import { BedrijfService } from 'src/app/services/bedrijf.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Bedrijf } from 'src/app/models/bedrijf.model';

@Component({
  selector: 'app-admin-bedrijf-detail',
  templateUrl: './admin-bedrijf-detail.component.html',
  styleUrls: ['./admin-bedrijf-detail.component.css']
})
export class AdminBedrijfDetailComponent implements OnInit {
  id=0
  private routeSub: Subscription;
  bedrijf: Bedrijf;

  constructor(private route: ActivatedRoute, private router:Router, private _bedrijfService:BedrijfService, ) { }

  ngOnInit() {
    this.routeSub=this.route.params.subscribe(params=>{
      this.id=params['id']
     
      });
    this._bedrijfService.getBedrijf(this.id).subscribe(
      result => {  
        this.bedrijf = result;  
      }
    );
  }

  onSubmit() {
    this._bedrijfService.updateBedrijf(this.bedrijf.bedrijfID, this.bedrijf).subscribe(result => {
      console.log('update is succes');
      this.router.navigate(['adminBedrijf']);
    });

  }

}
