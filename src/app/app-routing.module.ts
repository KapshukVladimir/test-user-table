import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../app/core/pages/home-page/home-page.module').then(
        (m) => m.HomePageModule
      ),
  },
  {
    path: 'forbidden',
    loadChildren: () =>
      import('../app/core/pages/forbidden-page/forbidden-page.module').then(
        (m) => m.ForbiddenPageModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('../app/core/pages/page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
