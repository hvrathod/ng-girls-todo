import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Injectable()
export class TodoListService {

  constructor() { }

  private todoList: TodoItem[] = [  {title: 'install NodeJS'},
  {title: 'install Angular CLI'},
  {title: 'create new app'},
  {title: 'serve app'},
  {title: 'develop app'},
  {title: 'deploy app'},
];
}
