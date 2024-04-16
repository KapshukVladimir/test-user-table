import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { CreateUserModalModule } from '@/components/create-user-modal/create-user-modal.module';
import { TableModule } from '@/components/table/table.module';
import { ButtonModule } from '@/components/button/button.module';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
];

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableModule,
    CreateUserModalModule,
    ButtonModule,
  ],
  exports: [HomePageComponent],
})
export class HomePageModule {}
