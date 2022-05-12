import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  agregar(newnombre:any,sexo:any,email:any,fecha:any){
    
    localStorage.setItem('nombre',newnombre.value);
    if(sexo.value==1){
      localStorage.setItem('Sexo', 'Masculino');
    }else{
      localStorage.setItem('Sexo', 'Femenino');

    }
    localStorage.setItem('email', email.value);
    localStorage.setItem('fecha', fecha.value);

  }
}
