import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pr01Service } from '../pr01.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  user='';
  rol = '';
  nombre='';

  goTemas(){
    this.rt.navigate(['/temas']);
  }
  goInicio(){
    this.rt.navigate(['/inicio']);
  }
  goPerfil(){
    this.rt.navigate(['/perfil']);
  }
  goUsuarios(){
    this.rt.navigate(['/usuarios']);
  }

  constructor(private rt: Router, private pr01: Pr01Service) { }

  ngOnInit(): void {
    this.user = this.pr01.getCuenta().user;
    this.rol = this.pr01.getCuenta().rol;
    this.nombre=this.pr01.getCuenta().nombre;
  }

}
