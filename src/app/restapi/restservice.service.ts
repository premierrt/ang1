import { Injectable } from '@angular/core';
import {environment} from 'environments/environment';
import {Http, Response} from '@angular/http';
import {Todo} from '../todo/todo';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class RestserviceService {

  constructor(private http: Http) {
       
  }

// API: GET /todos
  public getAllTodos(): Observable<Todo[]> {
  return this.http
    .get(API_URL + '/todos')
    .map(response => {
      const todos = response.json();
      return todos.map((todo) => new Todo(todo));
    })
    .catch(this.handleError);
}

  // API: POST /todos
  public createTodo(todo: Todo) {
    // will use this.http.post()
  }

  // API: GET /todos/:id
  public getTodoById(todoId: number) {
    // will use this.http.get()
  }

  // API: PUT /todos/:id
  public updateTodo(todo: Todo) {
    // will use this.http.put()
  }

  // DELETE /todos/:id
  public deleteTodoById(todoId: number) {
    // will use this.http.delete()
  }


private handleError (error: Response | any) {
  console.error('ApiService::handleError', error);
  return Observable.throw(error);
}
}

