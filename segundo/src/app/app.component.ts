import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'segundo';
  show:boolean = true;
  cursos:string[] = ['HTML','CSS','ANGULAR'];

  animales: Array<any> = [
    {tipo:'Perro',nombre:'Lisa',edad:10},
    {tipo:'Gato',nombre:'Vale',edad:12},
    {tipo:'Conejo',nombre:'Tintin',edad:3}
  ]
}
