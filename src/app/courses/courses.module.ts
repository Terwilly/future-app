import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursComponent } from './cours/cours.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CoursComponent],
  imports: [CommonModule, CoursesRoutingModule, RouterModule],
})
export class CoursesModule {}
