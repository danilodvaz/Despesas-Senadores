export interface senador {
    id: number,
    nomeSenador: string
}

export interface despesa {
    tipo: number,
    fornec: string,
    ano: number,
    mes: number,
    dia: number,
    valor: number
}

export interface despesaSenador {
    id: number,
    nomeSenador: string,
    despesas: despesa[]
}

export interface resumoDespesa {
    id: number,
    valor: number
}