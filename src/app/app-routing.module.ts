import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { PayComponent } from './pay/pay.component';

export const routes: Routes = [
  { component: MenuComponent, path: '' },
  { component: MenuComponent, path: 'menu' },
  { component: PayComponent, path: 'pay' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
