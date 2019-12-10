import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BedrijvenComponent } from './bedrijven/bedrijven.component';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { AssignmentComponent} from './assignment/assignment.component';

const appRoutes: Routes = [
  { path: 'bedrijven', component: BedrijvenComponent },
  { path: 'assignment', component: AssignmentComponent },
];
@NgModule({
  declarations: [BedrijvenComponent, AssignmentComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    SharedModule
  ]
})
export class BedrijvenModule { }
