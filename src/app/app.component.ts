import { Component, Input, ɵisBoundToModule__POST_R3__ } from '@angular/core';
import {ITodo} from './todo/todo.component';

 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Todo-App';
  filterText : string;
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


deleteItem(index) {
  console.log(index)
  this.todos.splice(index, 1);
  this.todos = [...this.todos]
}

completeItem(index){
  let task = this.todos[index];
  task.completed = true;
  this.todos = [...this.todos];

}

addTodo(tsk: string){
  this.todos = [...this.todos, {task: tsk, completed: false}];
}



}


