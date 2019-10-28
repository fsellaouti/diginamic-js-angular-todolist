import { Component, OnInit } from '@angular/core';
import { Todos } from '../model/todo.model';
import { TodoListService } from '../services/todo-list.service';
import { Router } from '@angular/router';

@Component({
	selector: 'td-todo-list',
	templateUrl: './todo-list.component.html',
	styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {

	public todolist : Todos;

	constructor(private todoListService : TodoListService, private router : Router) { }

	ngOnInit() {
		this.todolist = this.todoListService.getAll();
	}

	goToEdit(id){
		this.router.navigate(['edit', id])
	}

	deleteTodo(id){
		this.todoListService.delete(id);
		this.todolist = this.todoListService.getAll();
	}	

}
