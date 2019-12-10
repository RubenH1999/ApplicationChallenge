import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BedrijvenComponent } from './bedrijven/bedrijven.component';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { AssignmentComponent} from './assignment/assignment.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { MakerDetailComponent } from './maker-detail/maker-detail.component';
import { AssignmentOverzichtComponent } from './assignment-overzicht/assignment-overzicht.component'
=======
import { MakerDetailComponent } from './maker-detail/maker-detail.component'

>>>>>>> 86d97d9a87b1fa99850227d16db9364df9b05161
=======
import { MakerDetailComponent } from './maker-detail/maker-detail.component';
import { AssignmentOverzichtComponent } from './assignment-overzicht/assignment-overzicht.component'
>>>>>>> assignment overzicht en home bedrijven opgekuist
const appRoutes: Routes = [
  { path: 'bedrijven', component: BedrijvenComponent },
  { path: 'assignment', component: AssignmentComponent },
  { path: 'makerdetail', component: MakerDetailComponent},
  { path: 'assignmentoverzicht', component: AssignmentOverzichtComponent}
  
];
@NgModule({
  declarations: [BedrijvenComponent, AssignmentComponent, MakerDetailComponent, AssignmentOverzichtComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    SharedModule
  ]
})
export class BedrijvenModule { }
