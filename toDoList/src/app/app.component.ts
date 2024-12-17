import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddToDoComponent } from './components/add-to-do/add-to-do.component';
import { ListComponent } from './components/list/list.component';
import { ListItemModel } from './model/list-item-model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AddToDoComponent,ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  myTasks:ListItemModel[]=[]
itemAddedHandler($event: ListItemModel) {
  this.myTasks=[...this.myTasks,$event]
}

  title = 'toDoList';
}
