const { BatalhaNaval } = require('../src/BatalhaNaval');
function jogoConfigurado() { const j = new BatalhaNaval(); j.colocarNavio('Porta-aviões', 5, { linha: 0, coluna: 0 }); j.colocarNavio('Encouraçado', 4, { linha: 2, coluna: 0 }); j.colocarNavio('Submarino', 3, { linha: 4, coluna: 0 }); j.colocarNavio('Destroyer', 2, { linha: 6, coluna: 0 }); return j; }
describe('Batalha Naval 10 x 10', () => {
    test('posiciona os quatro navios exigidos', () => { const j = jogoConfigurado(); expect(j.navios.map(n => n.tamanho)).toEqual([5, 4, 3, 2]); });
    test('retorna água quando não há navio', () => { expect(jogoConfigurado().atirar(9, 9)).toBe('agua'); });
    test('retorna acerto e depois afundado', () => { const j = jogoConfigurado(); expect(j.atirar(0, 0)).toBe('acerto'); expect(j.atirar(0, 1)).toBe('acerto'); expect(j.atirar(0, 2)).toBe('acerto'); expect(j.atirar(0, 3)).toBe('acerto'); expect(j.atirar(0, 4)).toBe('afundado'); });
    test('rejeita sobreposição', () => { const j = new BatalhaNaval(); j.colocarNavio('A', 5, { linha: 0, coluna: 0 }); expect(() => j.colocarNavio('B', 2, { linha: 0, coluna: 2 })).toThrow('sobrepor'); });
    test('rejeita navio fora do tabuleiro', () => { expect(() => new BatalhaNaval().colocarNavio('A', 5, { linha: 9, coluna: 9 })).toThrow('fora'); });
    test('rejeita tiro repetido', () => { const j = jogoConfigurado(); j.atirar(9, 9); expect(() => j.atirar(9, 9)).toThrow('já foi'); });
});
