import { Component, Input } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { ListItemModel } from '../../model/list-item-model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ItemComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() list:ListItemModel[]=[]

itemRemoveHandler($event: ListItemModel) {
  let index = this.list.indexOf($event)
  this.list.splice(index,1)


}

}
