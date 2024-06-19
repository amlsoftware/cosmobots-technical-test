const { test, describe } = require('node:test');
const assert = require('node:assert');
const Desenvolvedor = require('../../../src/core/entities/desenvolvedor');

describe('Desenvolvedor', () => {
  test('Deve calcular o salário corretamente sem projetos concluídos', () => {
    const desenvolvedor = new Desenvolvedor('Antonny', 5000);

    assert.strictEqual(desenvolvedor.calcularSalario(), 5000);
  });

  test('Deve calcular o salário corretamente com projetos concluídos', () => {
    const desenvolvedor = new Desenvolvedor('Antonny', 5000);
    desenvolvedor.adicionarProjetoConcluido();

    assert.strictEqual(desenvolvedor.calcularSalario(), 5500);
  });

  test('Deve calcular o salário corretamente com benefícios e projetos concluídos', () => {
    const desenvolvedor = new Desenvolvedor('Antonny', 5000);
    desenvolvedor.adicionarBeneficio(300);
    desenvolvedor.adicionarProjetoConcluido();

    assert.strictEqual(desenvolvedor.calcularSalario(), 5800);
  });

  test('Deve incrementar o número de projetos concluídos corretamente', () => {
    const desenvolvedor = new Desenvolvedor('Antonny', 5000);
    desenvolvedor.adicionarProjetoConcluido();

    assert.strictEqual(desenvolvedor._projetosConcluidos, 1);
  });
});
