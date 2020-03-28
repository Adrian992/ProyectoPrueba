import { Component, OnInit, Inject } from '@angular/core';
import { Graduado } from '../model/graduado';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-editar',
  templateUrl: './dialog-editar.component.html',
  styleUrls: ['./dialog-editar.component.css']
})
export class DialogEditarComponent implements OnInit {

  //graduado: Graduado = new Graduado();

  constructor(public dialogRef: MatDialogRef<DialogEditarComponent>,
    @ Inject(MAT_DIALOG_DATA) public data: Graduado) { }

  ngOnInit() {
  }

  cancelar(){
    this.dialogRef.close();
  }

}
