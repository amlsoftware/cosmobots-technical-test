const Funcionario = require('./core/entities/funcionario');
const Gerente = require('./core/entities/gerente');
const Desenvolvedor = require('./core/entities/desenvolvedor');

const funcionario = new Funcionario('Fulano', 5000);
funcionario.adicionarBeneficio(200);

const gerente = new Gerente('Talita Pozo', 16000);
gerente.adicionarBeneficio(750);
gerente.adicionarBeneficio(380);
gerente.setBonus(3500);

const desenvolvedor = new Desenvolvedor('Antonny Melo', 11000);
desenvolvedor.adicionarBeneficio(175); // Depois de um mês de trabalho
desenvolvedor.adicionarBeneficio(350); // Após três meses de trabalho
desenvolvedor.adicionarBeneficio(100); // Presente de aniversário ❤
desenvolvedor.adicionarProjetoConcluido();
desenvolvedor.adicionarProjetoConcluido();
desenvolvedor.adicionarProjetoConcluido();
desenvolvedor.adicionarProjetoConcluido();

console.log(
  `${funcionario.getNome()} - Funcionário - salário R$: ${funcionario.calcularSalario()}`
);

console.log(
  `${gerente.getNome()} - ${
    gerente.cargo
  } - salário R$: ${gerente.calcularSalario()}`
);

console.log(
  `${desenvolvedor.getNome()} - ${
    desenvolvedor.cargo
  } - salário R$: ${desenvolvedor.calcularSalario()}`
);
