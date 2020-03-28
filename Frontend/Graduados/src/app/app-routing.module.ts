import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearGraduadoComponent } from './crear-graduado/crear-graduado.component';
import { ListarGraduadoComponent } from './listar-graduado/listar-graduado.component';


const routes: Routes = [
  {path:'Listar-Graduado', component:ListarGraduadoComponent},
  {path:'Crear-Graduado', component:CrearGraduadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
