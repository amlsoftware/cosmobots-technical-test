class Funcionario {
  constructor(nome, salarioBase) {
    this._nome = nome;
    this._salarioBase = salarioBase;
    this._beneficios = [];
  }

  calcularSalario() {
    const sumValues = (accumulator, currentValue) => accumulator + currentValue;

    const totalBenefits = this._beneficios.reduce(sumValues, 0);

    return this._salarioBase + totalBenefits;
  }

  adicionarBeneficio(valor) {
    this._beneficios.push(valor);
  }

  getNome() {
    return this._nome;
  }

  setNome(nome) {
    this._nome = nome;
  }
}

module.exports = Funcionario;
