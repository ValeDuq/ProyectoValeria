import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio/inicio.component';
import { AppRoutingModule } from './app-routing.module';
import { UsuariosComponent } from './usuarios/usuarios/usuarios.component';
import { ProductosComponent } from './productos/productos/productos.component';
import { VentasComponent } from './ventas/ventas/ventas.component';
import { EmpleadoComponent } from './empleado/empleado/empleado.component';
import { DetalleComponent } from './detalle/detalle/detalle.component';
import { ListaComponent } from './lista/lista.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    UsuariosComponent,
    ProductosComponent,
    VentasComponent,
    EmpleadoComponent,
    DetalleComponent,
    ListaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
