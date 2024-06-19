# Projeto: Teste técnico para vaga de Desenvolvedor na Cosmobots

## Descrição

Este projeto implementa um sistema de gerenciamento de funcionários utilizando conceitos básicos de SOLID e POO (Programação Orientada a Objetos). O sistema é composto por três classes: `Funcionario`, `Gerente` e `Desenvolvedor`, que representam diferentes tipos de funcionários com atributos e métodos específicos.

## Tecnologias Utilizadas

- **Linguagem**: JavaScript
- **Testes**: Test Runner nativo do Node.js (`node:test`)

## Executando o Projeto

Para executar o projeto, utilize o seguinte comando:

```bash
npm start
```



## Executando os Testes

Esse projeto está 100% coberto por testes automatizados. Para rodar os testes, utilize o seguinte comando:

```bash
npm test
```

Optei por utilizar o Test Runner nativo do Node.js para evitar dependências com ferramentas terceiras, mantendo assim o projeto mais leve e sem necessidade de configurações adicionais.

## Classes e Conceitos de POO Utilizados

### Classe `Funcionario`

- **Atributos**:

  - `nome`: Nome do funcionário (String)
  - `salarioBase`: Salário base do funcionário (Number)
  - `beneficios`: Array de benefícios, inicia vazio

- **Métodos**:
  - `calcularSalario()`: Calcula o salário total somando o salário base e os benefícios
  - `adicionarBeneficio(valor)`: Adiciona um valor de benefício à lista
  - `getNome()`: Retorna o nome do funcionário
  - `setNome(nome)`: Altera o nome do funcionário

### Classe `Gerente`

- **Herança**: Herda de `Funcionario`

- **Atributos**:
  - `bonus`: Bônus do gerente (Number)
  - `cargo`: Cargo do gerente (String, definido como "Gerente")
- **Métodos**:
  - `setBonus(valor)`: Define o valor do bônus do gerente
  - `calcularSalario()`: Sobrescreve o método para incluir o bônus no cálculo do salário total

### Classe `Desenvolvedor`

- **Herança**: Herda de `Funcionario`

- **Atributos**:
  - `projetosConcluidos`: Número de projetos concluídos (Number)
  - `cargo`: Cargo do desenvolvedor (String, definido como "Desenvolvedor")
  
- **Métodos**:
  - `adicionarProjetoConcluido()`: Incrementa o número de projetos concluídos
  - `calcularSalario()`: Sobrescreve o método para incluir um aumento de 10% no salário base para cada projeto concluído

## Conceitos de POO Utilizados

- **Encapsulamento**: Protege os dados dos objetos e expõe somente métodos públicos para manipulação desses dados
    - Ex: `getNome`, `setNome`, `adicionarBeneficio`.

- **Herança**: `Gerente` e `Desenvolvedor` herdam atributos e métodos de `Funcionario`.

- **Polimorfismo**: Sobrescrita do método `calcularSalario` em `Gerente` e `Desenvolvedor` para atender às necessidades específicas de cada tipo de funcionário.

## Passo a Passo do Raciocínio

1. Foi definida a classe base `Funcionario` com os atributos e métodos comuns a todos os funcionários.
2. Criei as classes `Gerente` e `Desenvolvedor` herdando de `Funcionario`, adicionando atributos e métodos específicos.
3. Implementei e sobrescrevi os métodos de cálculo de salário para cada tipo de funcionário, adicionando a regra de negócio solicitada.
4. Utilizei Jest para escrever os testes automatizados de cada classe e método, mas optei por não utilizá-lo no projeto final para manter a simplicidade, evitar dependências externas e facilitar a execução dos testes.
5. Removi as dependências do Jest e adicionei o Test Runner nativo do Node.js para rodar os testes de forma mais simples e direta.

## Exemplo de Uso

```javascript
const Gerente = require('./core/entities/gerente');
const Desenvolvedor = require('./core/entities/desenvolvedor');

const gerente = new Gerente('Talita Pozo', 16000);
gerente.adicionarBeneficio(750);
gerente.adicionarBeneficio(380);
gerente.setBonus(3500);

const desenvolvedor = new Desenvolvedor('Antonny Melo', 11000);
desenvolvedor.adicionarBeneficio(175);
desenvolvedor.adicionarBeneficio(350);
desenvolvedor.adicionarBeneficio(100);
desenvolvedor.adicionarProjetoConcluido();
desenvolvedor.adicionarProjetoConcluido();
desenvolvedor.adicionarProjetoConcluido();
desenvolvedor.adicionarProjetoConcluido();

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

```
