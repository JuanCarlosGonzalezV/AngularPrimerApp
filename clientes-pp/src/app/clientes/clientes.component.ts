import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
})
export class ClientesComponent implements OnInit {
//creo un arreglo al estilo json pero usando la clase cliente.ts
  clientes: Cliente[];

  constructor(private clienteservice: ClienteService) { }

  // llenando la lista de clientes de forma reactiva con observable y suscribe
  ngOnInit() {
    this.clienteservice.getClientes().subscribe(
    (clientes) => this.clientes = clientes
    );
  }

}
