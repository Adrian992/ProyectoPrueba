import { Component, OnInit, Inject } from '@angular/core';
import { Graduado } from '../model/graduado';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GraduadoService } from '../graduado.service';

@Component({
  selector: 'app-dialog-editar',
  templateUrl: './dialog-editar.component.html',
  styleUrls: ['./dialog-editar.component.css']
})
export class DialogEditarComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogEditarComponent>,
    private graduadoService:GraduadoService,
    @Inject(MAT_DIALOG_DATA) public data: Graduado) { }

  ngOnInit() {
    let id = localStorage.getItem("id");
    
    this.graduadoService.getGraduado(parseInt(id))
    .subscribe(datos=>{this.data=datos});
  }

  cancelar(){
    this.dialogRef.close();
  }

}
