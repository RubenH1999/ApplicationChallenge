import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MakerHomeComponent } from './maker-home/maker-home.component';
import { ZoekComponent } from './zoek/zoek.component';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

const appRoutes: Routes = [
  { path: 'makerHome', component: MakerHomeComponent },
  { path: 'zoeken', component: ZoekComponent },
];


@NgModule({
  declarations: [MakerHomeComponent, ZoekComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    SharedModule
  ]
})
export class MakerModule { }
