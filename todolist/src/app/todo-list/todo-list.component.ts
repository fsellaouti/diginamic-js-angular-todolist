import { Component, OnInit } from '@angular/core';
import { Todos } from '../model/todo.model';
import { TodoListService } from '../services/todo-list.service';

@Component({
	selector: 'td-todo-list',
	templateUrl: './todo-list.component.html',
	styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {

	public todolist : Todos;

	constructor(private todoListService : TodoListService) { }

	ngOnInit() {
		this.todolist = this.todoListService.getAll();
	}

}
