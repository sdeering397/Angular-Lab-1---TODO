import { Pipe, PipeTransform, ɵisBoundToModule__POST_R3__ } from '@angular/core';
import {ITodo} from './todo/todo.component';
@Pipe({
  name: 'todoFilter'
})
export class TodoFilterPipe implements PipeTransform {

  transform(todo: ITodo[], filterText : string): any {
    const newTodos = todo.filter(todo => {
      if (filterText) {
        return todo.task.toLowerCase().includes(filterText.toLocaleLowerCase());

      } else{
        return true;
      }
        
    })
    return newTodos
  }

}
