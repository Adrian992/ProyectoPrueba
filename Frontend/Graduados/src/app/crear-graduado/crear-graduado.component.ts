import { Component, OnInit, NgModule } from '@angular/core';
import { Graduado } from '../model/graduado';
import { GraduadoService } from '../graduado.service';
import {MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';

const MaterialComponents = [
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule, 
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})

@Component({
  selector: 'app-crear-graduado',
  templateUrl: './crear-graduado.component.html',
  styleUrls: ['./crear-graduado.component.css']
})

export class CrearGraduadoComponent implements OnInit {

  graduado: Graduado = new Graduado();

  constructor(private GraduadoService:GraduadoService) { }

  ngOnInit() {
  }

  registrarGraduado(){
    this.GraduadoService.createGraduado(this.graduado)
    .subscribe(datos=>console.log(datos), error=>console.log(error));
    this.graduado = new Graduado();
  }

}
