import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipo: any[] = [
    {
      nombre: 'Ignacio',
      especialidad: 'HTML',
      descripcion: 'Lorem 1'
    },
    {
      nombre: 'Ruben',
      especialidad: 'CCS',
      descripcion: 'Lorem 1'
    }

  ];  

  constructor() { 
    console.log('funcionando servicio');

  }

  getEquipo(){

    return this.equipo;
  }

  getOneEquipo(i){
    return this.equipo[i];
  }
}
