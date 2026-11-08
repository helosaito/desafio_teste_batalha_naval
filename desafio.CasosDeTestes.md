# desafio_teste_batalha_naval

Projeto de testes automatizados de **Batalha Naval**.

## 1. Colaborador(es)

- Colaborador 1: ____________________________________

- Colaborador 2: ____________________________________

## 2. Especificação do desafio

O desafio consiste em criar casos de teste em JavaScript para tabuleiro 10 x 10 com porta-aviões de 5, encouraçado de 4, submarino de 3 e destroyer de 2 casas.

## 3. Estrutura do projeto

```
.
├── package.json
├── README.md
├── src/
│   └── BatalhaNaval.js
└── tests/
    └── BatalhaNaval.test.js
```

- `src/BatalhaNaval.js`: implementação da classe testada.

- `tests/BatalhaNaval.test.js`: casos de teste automatizados.

## 4. Funcionamento dos casos de teste

Os testes usam Jest e seguem três etapas: preparar o jogo, executar uma ação e verificar o resultado esperado com `expect`.

Casos testados: posicionamento, água, acerto, navio afundado, sobreposição, limites e tiro repetido.

## 5. Instalação e execução

```bash
npm install
npm test
```

Para cobertura:

```bash
npm run test:coverage
```

## 6. Observações do enunciado

- A realização dos desafios é opcional.

- O trabalho pode ser feito em dupla.

- As contribuições dos integrantes devem aparecer no repositório.

- Serão considerados no máximo 5 desafios entregues.

- O repositório segue o padrão de nomenclatura exigido: `desafio_teste_batalha_naval`.