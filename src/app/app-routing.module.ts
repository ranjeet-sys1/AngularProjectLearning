import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {path:'all',component:StudentListComponent,pathMatch:'full'},
  {path:'save',component:StudentCreateComponent,pathMatch:'full'},
  {path:'',redirectTo:'all',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
