import { Component, OnInit, Input } from '@angular/core';

export interface ITodo{
  completed: boolean;
  task: string;
}

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements ITodo {

  @Input() completed : boolean;
  @Input() task : string;

  completedClassList : any;


  constructor() {

   }

  ngOnInit() {
  }

}
