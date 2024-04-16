import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { IUser } from '@/models/user.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  @Input() tableData: IUser[] = [];
  @Output() chosenItem: EventEmitter<IUser> = new EventEmitter<IUser>();

  public choseTableItem(userItem: IUser): void {
    this.chosenItem.emit(userItem);
  }
}
