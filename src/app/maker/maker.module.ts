import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MakerHomeComponent} from './maker-home/maker-home.component';
import {ZoekComponent} from './zoek/zoek.component';
import {SharedModule} from '../shared/shared.module';
import {Routes, RouterModule} from '@angular/router';
import {AppRoutingModule} from '../app-routing.module';
import {AssignmentDetailComponent} from './assignment-detail/assignment-detail.component';
import {BedrijfDetailComponent} from './bedrijf-detail/bedrijf-detail.component';
import {ReviewListComponent} from './review-list/review-list.component';
import {ReviewSchrijvenComponent} from './review-schrijven/review-schrijven.component';
import {MatInputModule, MatSelectModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import { GegevensAanpassenComponent } from './gegevens-aanpassen/gegevens-aanpassen.component';
import { GuardGuard } from '../auth/guard.guard';

const appRoutes: Routes = [
  {path: 'maker-home', component: MakerHomeComponent ,canActivate:[GuardGuard] },
  {path: 'zoeken', component: ZoekComponent ,canActivate:[GuardGuard]},
  {path: 'bedrijfDetail', component: BedrijfDetailComponent,canActivate:[GuardGuard]},
  {path: 'assignmentDetail', component: AssignmentDetailComponent,canActivate:[GuardGuard]},
  {path: 'reviews-maker', component: ReviewListComponent,canActivate:[GuardGuard]},
  {path: 'schrijf-review-maker', component: ReviewSchrijvenComponent,canActivate:[GuardGuard]},
  {path: 'maker-account-settings', component: GegevensAanpassenComponent,canActivate:[GuardGuard]},
];


@NgModule({
  declarations: [MakerHomeComponent, ZoekComponent, AssignmentDetailComponent, BedrijfDetailComponent, ReviewListComponent, ReviewSchrijvenComponent, GegevensAanpassenComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    SharedModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class MakerModule {
}
