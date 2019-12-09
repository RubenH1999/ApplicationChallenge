import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {AngularFireModule} from '@angular/fire';
import { AngularFireAuthModule} from '@angular/fire/auth'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AdminMakerComponent } from './admin/admin-maker/admin-maker.component';
import { AdminBedrijvenComponent } from './admin/admin-bedrijven/admin-bedrijven.component';
import { MakerToevoegenComponent } from './admin/maker-toevoegen/maker-toevoegen.component';
import { BedrijfToevoegenComponent } from './admin/bedrijf-toevoegen/bedrijf-toevoegen.component';


import { RouterModule, Routes } from '@angular/router';
import { MakerModule } from './maker/maker.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { BedrijvenModule } from './bedrijven/bedrijven.module';
import { BedrijvenComponent } from './bedrijven/bedrijven/bedrijven.component';
import { AssignmentComponent } from './assignment/assignment.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bedrijven', component: BedrijvenComponent}
=======
import { LoginComponent } from './auth/login/login.component';
import { environment } from 'src/environments/environment';
import { RegistrationComponent } from './auth/registration/registration.component';
import { FormsModule } from '@angular/forms';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'adminMaker', component: AdminMakerComponent },
  { path: 'adminBedrijf', component: AdminBedrijvenComponent },
  { path: 'voegMakerToe', component: MakerToevoegenComponent },
  { path: 'voegBedrijfToe', component: BedrijfToevoegenComponent },
>>>>>>> c8e86eb4c30f2bcfb32c8032140eebb28dd63ceb
];
@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HomeComponent,
    AssignmentComponent
    
=======
  AdminComponent,
    AdminMakerComponent,
    AdminBedrijvenComponent,
    MakerToevoegenComponent,
    BedrijfToevoegenComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent

>>>>>>> c8e86eb4c30f2bcfb32c8032140eebb28dd63ceb
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MakerModule,
<<<<<<< HEAD
    BedrijvenModule
=======
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FormsModule

>>>>>>> c8e86eb4c30f2bcfb32c8032140eebb28dd63ceb
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
