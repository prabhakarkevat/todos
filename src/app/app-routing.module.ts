import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodosComponent } from "./todos/todos.component";
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'todos', component: TodosComponent },
  { path: 'contact', component: ContactComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
