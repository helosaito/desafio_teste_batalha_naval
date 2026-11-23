# Batalha Naval — Desafio de Testes

## Desafio

O desafio é elaborar testes automatizados para uma versão simplificada de Batalha Naval. A implementação completa não é obrigatória na atividade; este repositório inclui uma implementação de referência.

O tabuleiro tem 10 linhas e 10 colunas, indexadas de `0` a `9`. A implementação permite posicionar navios de tamanho 5, 4, 3 ou 2 na horizontal ou vertical. Rejeita posições fora do tabuleiro, coordenadas não inteiras, direções desconhecidas e sobreposições. Um tiro em casa vazia retorna `agua`; um tiro em navio retorna `acerto` ou `afundado` quando todas as casas daquele navio são atingidas. Tiros repetidos são rejeitados. `todosAfundados()` retorna verdadeiro quando exatamente quatro navios foram posicionados e todos foram atingidos.

A lista de nomes, a exigência de uma embarcação de cada tamanho e outras regras do jogo precisam ser confirmadas no enunciado original antes de serem tratadas como requisitos oficiais.

## Colaboradores

- Heloísa Sayuri Silva Saito | RA: 24062631-2

- Maria Eduarda de Castro Lachima | RA: 24055202-2

## Arquivos

- `BatalhaNaval.js`: implementação da classe.

- `BatalhaNaval.test.js`: testes com `node:test` e `node:assert/strict`.

## Casos de teste

| Caso | O que verifica |
| --- | --- |
| Posiciona quatro navios de comprimentos permitidos | São aceitos comprimentos 5, 4, 3 e 2 e eles ficam registrados. |
| Retorna agua para uma casa vazia | Um tiro em casa sem navio retorna `agua`. |
| Retorna acerto e depois afundado para o navio atingido | Os primeiros tiros em um navio retornam `acerto`; o que completa suas casas retorna `afundado`. |
| Rejeita sobreposição entre navios | Um navio que ocupa casa já usada por outro é rejeitado. |
| Rejeita navio fora do tabuleiro e tamanho desconhecido | Posição além do limite e tamanho fora dos valores aceitos lançam erro. |
| Aceita orientação vertical e rejeita direção não suportada | Navio vertical ocupa as casas esperadas; direção diagonal é rejeitada. |
| Rejeita coordenadas fracionárias e tiros fora do tabuleiro | Coordenada inicial fracionária e tiros inválidos são recusados. |
| Rejeita repetir um tiro | A segunda tentativa de atirar na mesma casa lança erro. |
| Informa quando os quatro navios foram afundados | Depois de atingir todas as casas dos quatro navios, `todosAfundados()` retorna verdadeiro. |

## Como executar

Requer Node.js 18 ou superior. Não há dependências externas. Na pasta deste projeto, execute:

```bash
node --test
```
