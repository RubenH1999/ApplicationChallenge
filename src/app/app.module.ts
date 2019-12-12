import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {AngularFireModule, FirebaseApp} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {MakerModule} from './maker/maker.module';
import {SharedModule} from './shared/shared.module';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './auth/login/login.component';
import {environment} from 'src/environments/environment';
import {FormsModule} from '@angular/forms';
import {RegisterComponent} from './auth/register/register.component';
import {BedrijvenModule} from './bedrijven/bedrijven.module';
import {AdminComponent} from './admin/admin/admin.component';
import {AuthService} from './auth/auth.service';
import {AdminModule} from './admin/admin.module';
import {AssignmentService} from './services/assignment.service';
import {HttpClientModule} from '@angular/common/http';
import {AccountService} from './services/account.service';
import {BedrijfService} from './services/bedrijf.service';
import {MakerService} from './services/maker.service';
import {ReviewService} from './services/review.service';
import {RolService} from './services/rol.service';
import {StatusService} from './services/status.service';
import {TagService} from './services/tag.service';
import {TagassignmentService} from './services/tagassignment.service';
import {TagbedrijfService} from './services/tagbedrijf.service';
import {TagmakerService} from './services/tagmaker.service';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'admin', component: AdminComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MakerModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FormsModule,
    BedrijvenModule,
    AdminModule
  ],
  providers: [
    AuthService,
    AccountService,
    AssignmentService,
    BedrijfService,
    MakerService,
    ReviewService,
    RolService,
    StatusService,
    TagService,
    TagassignmentService,
    TagbedrijfService,
    TagmakerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
