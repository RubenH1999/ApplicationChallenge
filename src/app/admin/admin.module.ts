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

const appRoutes: Routes = [
  { path: 'adminMaker', component: AdminMakerComponent },
  { path: 'voegMakerToe', component: MakerToevoegenComponent },
  { path: 'adminBedrijf', component: AdminBedrijvenComponent },
  { path: 'voegBedrijfToe', component: BedrijfToevoegenComponent },
];

@NgModule({
  declarations: [AdminMakerComponent,MakerToevoegenComponent,AdminBedrijvenComponent,BedrijfToevoegenComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    SharedModule
  ]
})
export class AdminModule { }
