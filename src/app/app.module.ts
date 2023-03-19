import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { TodoModule } from './components/todo/todo.module';
import { todoReducer } from './state/todos/todo.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './state/todos/todo.effects';

@NgModule({
  declarations: [AppComponent, MainComponent],
  imports: [
    BrowserModule,
    TodoModule,
    HttpClientModule,
    StoreModule.forRoot({ todos: todoReducer }),
    EffectsModule.forRoot([TodoEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
