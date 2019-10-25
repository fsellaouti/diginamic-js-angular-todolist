import { Component, OnInit } from '@angular/core';
import { Todos, Todo } from '../model/todo.model';
import { TodoListService } from '../services/todo-list.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'td-todo-edit',
	templateUrl: './todo-edit.component.html',
	styleUrls: ['./todo-edit.component.css']
})

export class TodoEditComponent implements OnInit {

	public todo : Todo;

	constructor(private todoListService : TodoListService, private router : Router, private activatedRoute : ActivatedRoute) { }

	ngOnInit() {
		let id = this.activatedRoute.snapshot.paramMap.get('id');
		if (id==null) {
			this.todo= new Todo(0, "");
		}
		else {
			this.todo= this.todoListService.get(Number(id)); 
		}
	}

	addTodo(){
		if(this.todo.id==0){
			this.todo.id= this.todoListService.getNewId();
			this.todoListService.add(this.todo);
		}
		else{
			this.todoListService.edit(this.todo);
		}
		this.router.navigate(['/list']);
	}
}