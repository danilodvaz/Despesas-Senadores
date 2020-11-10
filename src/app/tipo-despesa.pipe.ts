import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoDespesa'
})
export class TipoDespesaPipe implements PipeTransform {

  transform(id: number): string {
    return this.retornaNome(id);
  }

  retornaNome(id: number): string {
    const tipoDespesa = {
      1: 'Aluguel de imóveis e despesas concernentes a eles.',
      2: 'Divulgação da atividade parlamentar.',
      3: 'Aquisição de material de consumo para uso no escritório.',
      4: 'Passagens aéreas, aquáticas e terrestres nacionais.',
      5: 'Contratação de consultorias, assessorias, pesquisas, trabalhos técnicos e outros serviços.',
      6: 'Locomoção, hospedagem, alimentação e combustíveis.',
      7: 'Serviços de Segurança Privada.',
      8: 'Total'
    };

    return tipoDespesa[id];
  }
}
