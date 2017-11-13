import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { ITodoList } from './../models/todoList';
import { ITodo } from '../models/todo';

@Injectable()
export class TodoService {
  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getTodoLists() {
    return this.http.get<ITodoList[]>(`${this.url}/todoLists`);
  }

  getTodosByListId(listId) {
    const params = new HttpParams().set('listId', listId);

    // hates string interpolation
    return this.http.get<ITodo[]>(this.url + '/todos', { params });
  }

  deleteTodo(id) {
    return this.http.delete(this.url + '/todos/' + id).toPromise();
  }

  putTodo(todo) {
    return this.http.put(this.url + '/todos/' + todo.id, todo).toPromise();
  }

  postNewTodo(todo) {
    return this.http.post(this.url + '/todos', todo).toPromise();
  }

}
