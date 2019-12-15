import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AdminComponent } from './admin/admin.component';
import { AdminBedrijvenComponent } from './admin-bedrijven/admin-bedrijven.component';
import { AdminMakerComponent } from './admin-maker/admin-maker.component';
import { MakerToevoegenComponent } from './maker-toevoegen/maker-toevoegen.component';
import { BedrijfToevoegenComponent } from './bedrijf-toevoegen/bedrijf-toevoegen.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminMakerDetailComponent } from './admin-maker-detail/admin-maker-detail.component';
import { AdminBedrijfDetailComponent } from './admin-bedrijf-detail/admin-bedrijf-detail.component';
import { AdminGuard } from '../auth/admin.guard'
import { AdminBedrijfReviewComponent } from './admin-bedrijf-review/admin-bedrijf-review.component';

const appRoutes: Routes = [
  { path: 'adminMaker', component: AdminMakerComponent },
  { path: 'voegMakerToe', component: MakerToevoegenComponent },
  { path: 'detailMaker/:id', component: AdminMakerDetailComponent },
  { path: 'adminBedrijf', component: AdminBedrijvenComponent },
  { path: 'voegBedrijfToe', component: BedrijfToevoegenComponent },
  { path: 'detailBedrijf/:id', component: AdminBedrijfDetailComponent },
  { path: 'bedrijfReview/:id', component: AdminBedrijfReviewComponent },
];

@NgModule({
  declarations: [AdminMakerComponent,MakerToevoegenComponent,AdminBedrijvenComponent,BedrijfToevoegenComponent, AdminMakerDetailComponent, AdminBedrijfDetailComponent, AdminBedrijfReviewComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    SharedModule,
    
  ], providers: [
    AdminGuard
  ],
})
export class AdminModule { }
