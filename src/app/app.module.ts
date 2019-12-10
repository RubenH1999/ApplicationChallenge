import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {AngularFireModule, FirebaseApp} from '@angular/fire';
import { AngularFireAuthModule} from '@angular/fire/auth'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { MakerModule } from './maker/maker.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './auth/register/register.component';
import { BedrijvenModule } from './bedrijven/bedrijven.module';
import { AdminComponent } from './admin/admin/admin.component';
import { AuthService } from './auth/auth.service';
import { AdminModule } from './admin/admin.module';
import { AssignmentService } from './assignment.service';



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,    
    RegisterComponent,
    AdminComponent,
    

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
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FormsModule,
    BedrijvenModule,
    AdminModule
  ],
  providers: [AuthService, AssignmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
