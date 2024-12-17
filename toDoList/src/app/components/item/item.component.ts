import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ListItemModel } from '../../model/list-item-model';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input() item :ListItemModel= <ListItemModel> {}
  @Output() onItemRemove: EventEmitter<ListItemModel>=new EventEmitter<ListItemModel>()

removeItem() {
this.onItemRemove.emit(this.item)

}


}
