import { NgModule             } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then(
        (m) => m.HomeModule
      ),
  },
  {
    path: 'manager',
    loadChildren: () => 
      import('./pages/fullpage/fullpage.module').then(
        (m) => m.FullpageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
