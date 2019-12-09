import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AdminMakerComponent } from './admin/admin-maker/admin-maker.component';
import { AdminBedrijvenComponent } from './admin/admin-bedrijven/admin-bedrijven.component';
import { RouterModule, Routes } from '@angular/router';
import { MakerToevoegenComponent } from './admin/maker-toevoegen/maker-toevoegen.component';
import { BedrijfToevoegenComponent } from './admin/bedrijf-toevoegen/bedrijf-toevoegen.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [

  { path: 'admin', component: AdminComponent },
  { path: 'adminMaker', component: AdminMakerComponent },
  { path: 'adminBedrijf', component: AdminBedrijvenComponent },
  { path: 'voegMakerToe', component: MakerToevoegenComponent },
  { path: 'voegBedrijfToe', component: BedrijfToevoegenComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminMakerComponent,
    AdminBedrijvenComponent,
    MakerToevoegenComponent,
    BedrijfToevoegenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
