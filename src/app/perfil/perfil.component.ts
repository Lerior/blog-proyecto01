import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pr01Service } from '../pr01.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  user='';
  rol = '';
  nombre='';
  edad='';
  tel='';
  email='';
  topics:any;
  tema='';
  temaEdit:any;
  constructor(private rt: Router, private pr01: Pr01Service) { }
  llenarTabla(){
    this.pr01.topics().subscribe(
      datos => {
        console.log(datos);
        this.topics = datos;
      },
      error => {
        console.log(error);
      }
    );
  }
  ngOnInit(): void {
    this.user = this.pr01.getCuenta().user;
    this.rol = this.pr01.getCuenta().rol;
    this.nombre=this.pr01.getCuenta().nombre;
    this.edad=this.pr01.getCuenta().edad;
    this.tel=this.pr01.getCuenta().tel;
    this.email=this.pr01.getCuenta().email;
    this.pr01.getCuenta()
    this.llenarTabla();
  }

}
