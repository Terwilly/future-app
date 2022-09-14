import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursComponent } from './cours/cours.component';
import { CourslargeComponent } from './courslarge/courslarge.component';
import { CoursListComponent } from './courslarge/cours-list/cours-list.component';
import { CoursItemComponent } from './courslarge/cours-list/cours-item/cours-item.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CoursComponent,
    CoursListComponent,
    CoursItemComponent,
    CourslargeComponent,
    CoursListComponent,
    CoursItemComponent,
  ],
  imports: [CommonModule, CoursesRoutingModule, RouterModule],
})
export class CoursesModule {}
