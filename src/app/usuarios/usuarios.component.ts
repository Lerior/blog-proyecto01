import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pr01Service } from '../pr01.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios:any;
  nombre='';


  constructor(private rt: Router, private pr01: Pr01Service) { }
llenarTabla(){
    this.pr01.usuarios().subscribe(
      datos => {
        console.log(datos);
        this.usuarios = datos;
      },
      error => {
        console.log(error);
      }
    );
  }
  ngOnInit(): void {
    this.pr01.getCuenta()
    this.llenarTabla();
  }

}
