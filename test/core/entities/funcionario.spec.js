const { test, describe } = require('node:test');
const assert = require('node:assert');
const Funcionario = require('../../../src/core/entities/funcionario');

describe('Funcionario', () => {
  test('Deve calcular o salário corretamente sem benefícios', () => {
    const funcionario = new Funcionario('Fulano', 5000);

    assert.strictEqual(funcionario.calcularSalario(), 5000);
  });

  test('Deve calcular o salário corretamente com benefícios', () => {
    const funcionario = new Funcionario('Fulano', 5000);
    funcionario.adicionarBeneficio(200);
    funcionario.adicionarBeneficio(300);

    assert.strictEqual(funcionario.calcularSalario(), 5500);
  });

  test('Deve adicionar benefícios corretamente', () => {
    const funcionario = new Funcionario('Fulano', 5000);
    funcionario.adicionarBeneficio(200);

    assert.ok(funcionario._beneficios.includes(200));
  });

  test('Deve alterar e retornar o nome corretamente', () => {
    const funcionario = new Funcionario('Fulano', 5000);
    funcionario.setNome('Antonny');

    assert.strictEqual(funcionario.getNome(), 'Antonny');
  });
});
