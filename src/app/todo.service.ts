import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  baseUrl: string = 'http://localhost:3000/todos';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.baseUrl}`);
  }
}
