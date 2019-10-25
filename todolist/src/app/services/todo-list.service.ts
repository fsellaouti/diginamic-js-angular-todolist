import { Injectable } from '@angular/core';
import { Todos, Todo } from '../model/todo.model';

@Injectable({
	providedIn: 'root'
})

export class TodoListService {

	public todolist : Todos=[];

	getAll() {
		return this.todolist;
	}

	get(id : number) {
		for (let todo of this.todolist) {
			if (id === todo.id) {
				return todo;
			}
		}
	}

	getNewId() {
		let max = 0;
		for (let todo of this.todolist) {
			if (todo.id > max) {
				max = todo.id;
			}
		}
		return max+1;
	}

	add(todo : Todo) {
		this.todolist.push(todo);
	}

	edit(todo : Todo) {
		this.get(todo.id).label = todo.label;
	}

	delete(id : number) {
		this.todolist = this.todolist.splice(this.todolist.indexOf(this.get(id)), 1);
	}

}