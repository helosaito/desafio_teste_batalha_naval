const test = require('node:test');
const assert = require('node:assert/strict');
const { BatalhaNaval } = require('./BatalhaNaval');

function criarJogoConfigurado() {
    const jogo = new BatalhaNaval();
    jogo.colocarNavio('Navio 1', 5, { linha: 0, coluna: 0 });
    jogo.colocarNavio('Navio 2', 4, { linha: 2, coluna: 0 });
    jogo.colocarNavio('Navio 3', 3, { linha: 4, coluna: 0 });
    jogo.colocarNavio('Navio 4', 2, { linha: 6, coluna: 0 });
    return jogo;
}

test('posiciona quatro navios de comprimentos permitidos', () => {
    const jogo = criarJogoConfigurado();
    assert.deepEqual(jogo.navios.map((navio) => navio.tamanho), [5, 4, 3, 2]);
});

test('retorna agua para uma casa vazia', () => {
    assert.equal(criarJogoConfigurado().atirar(9, 9), 'agua');
});

test('retorna acerto e depois afundado para o navio atingido', () => {
    const jogo = criarJogoConfigurado();
    for (let coluna = 0; coluna < 4; coluna += 1) {
        assert.equal(jogo.atirar(0, coluna), 'acerto');
    }
    assert.equal(jogo.atirar(0, 4), 'afundado');
});

test('rejeita sobreposição entre navios', () => {
    const jogo = new BatalhaNaval();
    jogo.colocarNavio('Navio A', 5, { linha: 0, coluna: 0 });
    assert.throws(
        () => jogo.colocarNavio('Navio B', 2, { linha: 0, coluna: 2 }),
        /sobrepor/
    );
});

test('rejeita navio fora do tabuleiro e tamanho desconhecido', () => {
    const jogo = new BatalhaNaval();
    assert.throws(
        () => jogo.colocarNavio('Navio A', 5, { linha: 9, coluna: 9 }),
        /fora do tabuleiro/
    );
    assert.throws(
        () => jogo.colocarNavio('Navio B', 6, { linha: 0, coluna: 0 }),
        /Tamanho de navio inválido/
    );
});

test('aceita orientação vertical e rejeita direção não suportada', () => {
    const jogo = new BatalhaNaval();
    const navio = jogo.colocarNavio('Navio vertical', 3, { linha: 1, coluna: 2 }, 'vertical');
    assert.deepEqual(navio.casas, ['1,2', '2,2', '3,2']);
    assert.throws(
        () => jogo.colocarNavio('Navio diagonal', 2, { linha: 0, coluna: 0 }, 'diagonal'),
        /Direção inválida/
    );
});

test('rejeita coordenadas fracionárias e tiros fora do tabuleiro', () => {
    const jogo = new BatalhaNaval();
    assert.throws(
        () => jogo.colocarNavio('Navio A', 2, { linha: 0.5, coluna: 0 }),
        /Posição inicial inválida/
    );
    assert.throws(() => jogo.atirar(0.5, 0), /Posição inválida/);
    assert.throws(() => jogo.atirar(10, 0), /Posição inválida/);
});

test('rejeita repetir um tiro', () => {
    const jogo = criarJogoConfigurado();
    assert.equal(jogo.atirar(9, 9), 'agua');
    assert.throws(() => jogo.atirar(9, 9), /já foi atingida/);
});
