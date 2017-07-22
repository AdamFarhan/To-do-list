var app = angular.module("TodoList", []);

app.controller("TodoCtrl", TodoCtrl);

function TodoCtrl() {

	this.todoItems = ["Lorem Ipsum", "Dolar", "Sit Amet"];
	this.isEdit = false;
	
	this.addNewTodo = function() {
		this.todoItems.push(this.newTodo);
		this.newTodo = "";
	}

	this.deleteItem = function(i) {
		this.todoItems.splice(i, 1);
	}

	this.toggleEditItems = function() {
		this.isEdit = !this.isEdit;
	}
}