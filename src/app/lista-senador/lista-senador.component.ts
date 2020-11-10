import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../consulta.service';
import { senador } from '../interfaces';

const urlBase = 'http://localhost:3000';

@Component({
  selector: 'app-lista-senador',
  templateUrl: './lista-senador.component.html',
  styleUrls: ['./lista-senador.component.css']
})
export class ListaSenadorComponent implements OnInit {

  constructor(private consultaService: ConsultaService) { }

  senadores: senador[];

  ngOnInit(): void {
    this.consultaService.retornaSenadores().subscribe(senadores => {
      this.senadores = senadores;
    });
  }
}
