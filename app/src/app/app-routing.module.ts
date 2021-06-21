import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio/inicio.component';
import { UsuariosComponent } from './usuarios/usuarios/usuarios.component';
import { ProductosComponent } from './productos/productos/productos.component';
import { VentasComponent } from './ventas/ventas/ventas.component';
import { EmpleadoComponent } from './empleado/empleado/empleado.component';

const routes: Routes = [
  {path: 'Inicio', component: InicioComponent},
  {path: 'Usuarios', component: UsuariosComponent},
  {path: 'Productos', component: ProductosComponent},
  {path: 'Ventas', component: VentasComponent},
  {path: 'Empleado', component: EmpleadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
