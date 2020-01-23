import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoFilterPipe } from './todo-filter.pipe';
import { FormsModule } from '@angular/forms';

// import {FormModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoFilterPipe
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
