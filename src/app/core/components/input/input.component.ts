import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  @Input() formControl!: FormControl;
  @Input() label!: string;
  @Input() isRequired = false;
  @Input() labelName!: string;
  @Input() errorMessage!: string;
  @Input() type = 'text';
}
