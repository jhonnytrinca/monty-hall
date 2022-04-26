import PortaModel from '../model/porta';

export const criarPortas = (qtd: number, comPresente: number): PortaModel[] => { 
  return Array.from({length: qtd}, (_, i) => {
    const numero = i + 1;
    const temPresente = numero === comPresente;
    return new PortaModel(numero, temPresente)
  })
}

export const atualizarPortas = (portas: PortaModel[], modif: PortaModel) => {
  return portas.map(porta => {
    const igual = porta.numero === modif.numero
    if (igual) {
      return modif
    } else {
      return modif.aberta ? porta : porta.desmarcar()
    }
  })
}