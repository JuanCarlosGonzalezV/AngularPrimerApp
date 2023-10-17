import { Component} from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',

})
export class DirectivaComponent {

  ListaCurso: string[] = ['Typescript', 'JavaScript', 'Java se', 'C#', 'PHP'];
  habilitar: boolean = true;

  constructor() { }

  setHabilitar(): void{
    this.habilitar = (this.habilitar==true)? false : true;
  }


}
