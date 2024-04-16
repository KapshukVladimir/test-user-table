import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '@/pages/page-not-found/page-not-found.component';
import { ButtonModule } from '@/components/button/button.module';

const routes: Routes = [
  {
    path: '',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ButtonModule],
  exports: [PageNotFoundComponent],
})
export class PageNotFoundModule {}
