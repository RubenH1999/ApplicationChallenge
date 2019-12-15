import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatCardModule, MatTabsModule, MatDialogModule } from '@angular/material';
import { TagInputModule } from 'ngx-chips';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatTabsModule,
    MatDialogModule,
    TagInputModule,
    FormsModule
  ],
  exports:[
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatTabsModule,
    MatDialogModule,
    TagInputModule,
    FormsModule
  ]
})
export class SharedModule { }
