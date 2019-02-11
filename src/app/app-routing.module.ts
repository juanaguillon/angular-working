import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetallesComponent } from './detalles/detalles.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CrearComponent } from './crear/crear.component';

const routes: Routes = [
  {
    path: 'lugares',
    component: LugaresComponent
  },
  {
    path: '',
    redirectTo: 'lugares',
    pathMatch: 'full'
  },
  {
    path: 'detalle/:id',
    component: DetallesComponent
  },
  {
    path: "contacto",
    component: ContactoComponent
  },
  {
    path:'crear',
    component: CrearComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
