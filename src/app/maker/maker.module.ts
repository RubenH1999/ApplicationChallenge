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
import {AppModule} from '../app.module';
import {ReactiveFormsModule} from '@angular/forms';

const appRoutes: Routes = [
  {path: 'makerHome', component: MakerHomeComponent},
  {path: 'zoeken', component: ZoekComponent},
  {path: 'bedrijfDetail', component: BedrijfDetailComponent},
  {path: 'assignmentDetail', component: AssignmentDetailComponent},
  {path: 'reviews', component: ReviewListComponent},
  {path: 'schrijf-review', component: ReviewSchrijvenComponent},
];


@NgModule({
  declarations: [MakerHomeComponent, ZoekComponent, AssignmentDetailComponent, BedrijfDetailComponent, ReviewListComponent, ReviewSchrijvenComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatInputModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    SharedModule,
    MatSelectModule,
    ReactiveFormsModule
  ]
})
export class MakerModule {
}
