import { Component, EventEmitter, Output } from '@angular/core';
import { ListItemModel } from '../../model/list-item-model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-to-do',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './add-to-do.component.html',
  styleUrl: './add-to-do.component.css'
})
export class AddToDoComponent {

@Output() onItemAdded:EventEmitter<ListItemModel>=new EventEmitter<ListItemModel>()
description:string="";


addNewTask() {
  let task:ListItemModel= {
id:crypto.randomUUID(),
description:this.description,
isCompelet:false
};
this.onItemAdded.emit(task)
}

}
