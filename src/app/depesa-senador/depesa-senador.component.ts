import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsultaService } from '../consulta.service';
import { resumoDespesa, despesa } from '../interfaces';

const tipoDespesa = {
  1: 'Aluguel de imóveis e despesas concernentes a eles.',
  2: 'Divulgação da atividade parlamentar.',
  3: 'Aquisição de material de consumo para uso no escritório.',
  4: 'Passagens aéreas, aquáticas e terrestres nacionais.',
  5: 'Contratação de consultorias, assessorias, pesquisas, trabalhos técnicos e outros serviços.',
  6: 'Locomoção, hospedagem, alimentação e combustíveis.',
  7: 'Serviços de Segurança Privada.'
};

@Component({
  selector: 'app-depesa-senador',
  templateUrl: './depesa-senador.component.html',
  styleUrls: ['./depesa-senador.component.css']
})
export class DepesaSenadorComponent implements OnInit {

  constructor(private rotaAtiva: ActivatedRoute, private consultaService: ConsultaService) { }

  despesas: despesa[];
  resumoDespesa: resumoDespesa[] = [];

  ngOnInit(): void {
    this.rotaAtiva.paramMap.subscribe(paramMap => {
      const id = parseInt(paramMap.get('id'));
      this.retornaDespesas(id);
    });
  }

  retornaDespesas(id: number) {
    this.consultaService.retornaDespesas(id).subscribe(despesaSenador => {
      this.despesas = despesaSenador.despesas;
      this.calculaResumoDespesa();
    });
  }

  calculaResumoDespesa() {
    let totalDespesa: number = 0;
    let totalGeral: number = 0;

    for (let tipo in tipoDespesa) {
      totalDespesa = this.despesas
        .filter(despesa => parseInt(tipo) == despesa.tipo)
        .reduce((soma, atual) => {
          return soma + atual.valor;
        }, 0);

      this.resumoDespesa = [...this.resumoDespesa, { id: parseInt(tipo), valor: totalDespesa }];
      totalGeral = totalGeral + totalDespesa;
    }

    this.resumoDespesa = [...this.resumoDespesa, { id: 8, valor: totalGeral }];
  }

}
