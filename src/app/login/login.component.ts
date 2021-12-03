import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pr01Service } from '../pr01.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //TypeScript
  titulo = "Inicio de sesión";
  user = "";
  pass = "";
  rol = '';

  loginL() {
    this.pr01.login(this.user, this.pass).subscribe(
      datos => {
        console.log(datos);
        this.respuesta(datos);
        if(this.pr01.getCuenta().rol=="A"){
        this.rt.navigate(['/inicio']);
        this.msgbox.success("Bienvenido");
        }else if(this.pr01.getCuenta().rol=="U"){
          this.rt.navigate(['/temas']);
        this.msgbox.success("Bienvenido");
        }
      },
      error => {
        console.log(error);
        this.msgbox.error("No se ha podido iniciar sesión")
      } );
  }
  respuesta(datos:any){
    this.pr01.setCuenta(datos['user']['user'],datos['user']['nombre'],datos['user']['rol'],datos['token'],datos['user']['edad'],datos['user']['tel'],datos['user']['email']);
    console.log("user:"+datos['user']['user'],datos['user']['nombre'],datos['user']['rol'],datos['token'],datos['user']['edad'],datos['user']['tel'],datos['user']['email']);
  }

  registrar(){
    this.rt.navigate(['/registro']);
  }

  // respuestaError(error:any){
  //   console.log(error)
  // }
  constructor(private rt: Router, private pr01: Pr01Service,
    private msgbox: ToastrService) { }

    ngOnInit(): void {
      this.user = this.pr01.getCuenta().user;
      this.rol = this.pr01.getCuenta().rol;
    }
  

}