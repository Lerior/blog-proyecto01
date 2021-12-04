import { Component, OnInit } from '@angular/core';
import { Pr01Service } from '../pr01.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
 user=''; 
 nombre=''; 
 pass='';
 edad='';
 email='';
 tel='';
  rol='U';
  users:any;
  constructor(private rt: Router, private pr01: Pr01Service, private msgbox: ToastrService) { }

  ngOnInit(): void {
  }
  agregar(){
    this.pr01.addUser(this.user, this.pass, this.nombre, this.rol, this.edad, this.tel, this.email).subscribe(
      datos => {
        this.msgbox.success("Registro exitoso!");
        this.goLogin();
        this.llenarTabla();
      },
      error => {
        this.msgbox.error("Error al resgistrar");
        console.log(error);
      }
    );
  }
  llenarTabla(){
    this.pr01.usuarios().subscribe(
      datos => {
        console.log(datos);
        this.users = datos;
      },
      error => {
        console.log(error);
      }
    );
  }
  goLogin(){
    this.rt.navigate(['/login']);
  }
}
