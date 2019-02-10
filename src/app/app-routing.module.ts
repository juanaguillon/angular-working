import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetallesComponent } from './detalles/detalles.component';
import { LugaresComponent } from './lugares/lugares.component';

const routes: Routes = [
  {
    path: 'lugares',
    component: LugaresComponent
  },
  {
    path: 'detalle/:id',
    component: DetallesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
