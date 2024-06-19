const Funcionario = require('./funcionario');

class Gerente extends Funcionario {
  constructor(nome, salarioBase) {
    super(nome, salarioBase);
    this._bonus = 0;
    this.cargo = 'Gerente';
  }

  setBonus(valor) {
    this._bonus = valor;
  }

  calcularSalario() {
    const salarioBaseMaisBeneficios = super.calcularSalario();

    return salarioBaseMaisBeneficios + this._bonus;
  }
}

module.exports = Gerente;
