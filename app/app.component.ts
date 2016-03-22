import { Component } from 'angular2/core';
@Conponent({
  selector: 'task-list',
  inputs: ['taskList'],
  template: `
  <h3 *ngFor="#currentTask of taskList" (click)="taskClicked(currentTask)">
    {{ currentTask.description }}
  </h3>
  `
})


@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>To-Do List</h1>
      <h3 *ngFor="#task of tasks" (click)="taskWasSelected(task)">
        {{ task.description }}
      </h3>
    </div>
  `
})
export class AppComponent {
  public tasks: Task[]; //Task[] (or Array<Task>) identifies tasks as an array of task objects
  constructor(){
    this.tasks = [
      new Task("Create To-Do List app.", 0),
      new Task("Learn Judo.", 1),
      new Task("Rewatch all the Tremors movies.", 2),
      new Task("Do homework.", 3)
    ];
  }
  taskWasSelected(clickedTask: Task): void {
    console.log(clickedTask);
  }
}
export class Task {
  public done: boolean = false;
  constructor(public description: string, public id: number) {

  }
}
