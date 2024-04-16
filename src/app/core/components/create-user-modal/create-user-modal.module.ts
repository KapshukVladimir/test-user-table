import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserModalComponent } from './create-user-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputModule } from '@/components/input/input.module';
import { ButtonModule } from '@/components/button/button.module';
import { ControlConverterModule } from '@/pipes/control-converter/control-converter.module';
import { SelectModule } from '@/components/select/select.module';

@NgModule({
  declarations: [CreateUserModalComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputModule,
    ButtonModule,
    ControlConverterModule,
    SelectModule,
  ],
  exports: [CreateUserModalComponent],
})
export class CreateUserModalModule {}
