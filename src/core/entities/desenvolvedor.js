const Funcionario = require('./funcionario');

class Desenvolvedor extends Funcionario {
  constructor(nome, salarioBase) {
    super(nome, salarioBase);
    this._projetosConcluidos = 0;
    this.cargo = 'Desenvolvedor';
  }

  adicionarProjetoConcluido() {
    this._projetosConcluidos += 1;
  }

  calcularSalario() {
    const salarioBaseMaisBeneficios = super.calcularSalario();

    const aumentoProjetos = this._salarioBase * 0.1 * this._projetosConcluidos;

    return salarioBaseMaisBeneficios + aumentoProjetos;
  }
}

module.exports = Desenvolvedor;
