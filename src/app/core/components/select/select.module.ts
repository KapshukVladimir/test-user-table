import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select.component';
import { ControlConverterModule } from '@/pipes/control-converter/control-converter.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SelectComponent],
  imports: [CommonModule, ControlConverterModule, ReactiveFormsModule],
  exports: [SelectComponent],
})
export class SelectModule {}
