import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BedrijvenComponent} from './bedrijven/bedrijven.component';
import {SharedModule} from '../shared/shared.module';
import {Routes, RouterModule} from '@angular/router';
import {AppRoutingModule} from '../app-routing.module';
import {AssignmentComponent} from './assignment/assignment.component';
import {MakerDetailComponent} from './maker-detail/maker-detail.component';
import {AssignmentOverzichtComponent} from './assignment-overzicht/assignment-overzicht.component';
import {ReviewSchrijvenComponent} from './review-schrijven/review-schrijven.component';
import {ReviewListComponent} from './review-list/review-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule, MatSelectModule} from '@angular/material';
import {BedrijfHomeComponent} from './bedrijf-home/bedrijf-home.component';
import {BedrijfAanpassenComponent} from './bedrijf-aanpassen/bedrijf-aanpassen.component';
import { GuardGuard } from '../auth/guard.guard';

const appRoutes: Routes = [
  {path: 'bedrijf-home', component: BedrijfHomeComponent,canActivate:[GuardGuard]},
  {path: 'bedrijven', component: BedrijvenComponent,canActivate:[GuardGuard]},
  {path: 'bedrijf-assignment-aanmaken', component: AssignmentComponent,canActivate:[GuardGuard]},
  {path: 'makerdetail', component: MakerDetailComponent,canActivate:[GuardGuard]},
  {path: 'assignmentoverzicht', component: AssignmentOverzichtComponent,canActivate:[GuardGuard]},
  {path: 'reviews-bedrijf', component: ReviewListComponent,canActivate:[GuardGuard]},
  {path: 'schrijf-review-bedrijf', component: ReviewSchrijvenComponent,canActivate:[GuardGuard]},
  {path: 'bedrijf-aanpassen', component: BedrijfAanpassenComponent,canActivate:[GuardGuard]}
];

@NgModule({
  declarations: [BedrijvenComponent, AssignmentComponent, MakerDetailComponent, AssignmentOverzichtComponent, ReviewSchrijvenComponent, ReviewListComponent, BedrijfHomeComponent, BedrijfAanpassenComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    SharedModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
  ]
})
export class BedrijvenModule {
}
