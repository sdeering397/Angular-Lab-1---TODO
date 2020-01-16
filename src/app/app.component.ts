import { Component } from '@angular/core';
import {ITodo} from './todo/todo.component';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Todo-App';

  todos: ITodo[]= [
    {
      completed: false,
      task: 'Do the laundry'
    },
    {
      completed: true,
      task: 'Watch TV'
    },
    {
      completed: false,
      task: 'Fold Clothes'
    },
    {
      completed: true,
      task: 'Stare into Space'
    },
    {
      completed: false,
      task: 'Put away Clothes'
    },
    {
      completed: true,
      task: 'Do anything but Laundry'
    },
    
  ];
}

