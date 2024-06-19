const { test, describe } = require('node:test');
const assert = require('node:assert');
const Gerente = require('../../../src/core/entities/gerente');

describe('Gerente', () => {
  test('Deve calcular o salário corretamente sem bônus', () => {
    const gerente = new Gerente('Talita Pozo', 8000);

    assert.strictEqual(gerente.calcularSalario(), 8000);
  });

  test('Deve calcular o salário corretamente com bônus', () => {
    const gerente = new Gerente('Talita Pozo', 8000);
    gerente.setBonus(2000);

    assert.strictEqual(gerente.calcularSalario(), 10000);
  });

  test('Deve calcular o salário corretamente com benefícios e bônus', () => {
    const gerente = new Gerente('Talita Pozo', 8000);
    gerente.adicionarBeneficio(500);
    gerente.setBonus(2000);

    assert.strictEqual(gerente.calcularSalario(), 10500);
  });
});
