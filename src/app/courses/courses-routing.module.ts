import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursListComponent } from './cours/cours-list/cours-list.component';

const routes: Routes = [{ path: 'cours', component: CoursListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class CoursesRoutingModule {}
