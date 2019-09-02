import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { ContactComponent } from './contact/contact.component';
import { TodoService } from "./todo.service";

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClient, TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
