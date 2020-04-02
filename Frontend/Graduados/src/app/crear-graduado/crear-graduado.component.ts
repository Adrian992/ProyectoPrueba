import { Component, OnInit, NgModule } from '@angular/core';
import { Graduado } from '../model/graduado';
import { GraduadoService } from '../graduado.service';

import { Router } from "@angular/router";
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-crear-graduado',
  templateUrl: './crear-graduado.component.html',
  styleUrls: ['./crear-graduado.component.css']
})

export class CrearGraduadoComponent implements OnInit {

  graduado: Graduado = new Graduado();

  constructor(private GraduadoService:GraduadoService, private router: Router, private snackbar: MatSnackBar) { }

  ngOnInit() {
  }

  registrarGraduado(){
    this.GraduadoService.createGraduado(this.graduado)
    .subscribe(datos=>{
      console.log(datos);
      this.correctoSnackBar();
      this.router.navigate(['Listar-Graduado']);
      this.graduado = new Graduado();
    }, error=> {
      console.log(error)
      this.errorSnackBar();
    }); 
  }

  errorSnackBar(){
    this.snackbar.open("Error al ingresar los datos","",
    { duration:1300, panelClass: ['mat-toolbar', 'mat-warn']});
  }

  correctoSnackBar(){
    this.snackbar.open("¡Datos ingresados correctamente!","",
    { duration:1300, panelClass: ['mat-toolbar', 'mat-primary']});
  }

}
