import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForbiddenPageComponent } from '@/pages/forbidden-page/forbidden-page.component';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from '@/components/button/button.module';

const routes: Routes = [
  {
    path: 'forbidden',
    component: ForbiddenPageComponent,
  },
];

@NgModule({
  declarations: [ForbiddenPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ButtonModule],
  exports: [ForbiddenPageComponent],
})
export class ForbiddenPageModule {}
