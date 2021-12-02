import { Component, OnInit } from '@angular/core';
import { Pr01Service } from '../pr01.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
 user=''; 
 nombre=''; 
 pass='';

  constructor(private pr01: Pr01Service, private msgbox: ToastrService) { }

  ngOnInit(): void {
  }
  agregar(){
    this.pr01.addUser(this.user, this.nombre, this.pass).subscribe(
      datos => {
      }
    );
  }
}
