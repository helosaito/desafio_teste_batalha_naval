class BatalhaNaval {
    constructor() { this.tamanho = 10; this.navios = []; this.tiros = new Set(); }
    colocarNavio(nome, tamanho, inicio, direcao = 'horizontal') { if (![5, 4, 3, 2].includes(tamanho)) throw new Error('Tamanho de navio inválido.'); const casas = []; for (let i = 0; i < tamanho; i++) { const l = inicio.linha + (direcao === 'vertical' ? i : 0), c = inicio.coluna + (direcao === 'horizontal' ? i : 0); if (l < 0 || l >= 10 || c < 0 || c >= 10) throw new Error('Navio fora do tabuleiro.'); casas.push(`${l},${c}`); } if (casas.some(p => this.navios.some(n => n.casas.includes(p)))) throw new Error('Navios não podem se sobrepor.'); this.navios.push({ nome, tamanho, casas, atingidas: new Set() }); }
    atirar(linha, coluna) { if (linha < 0 || linha >= 10 || coluna < 0 || coluna >= 10) throw new Error('Posição inválida.'); const p = `${linha},${coluna}`; if (this.tiros.has(p)) throw new Error('Essa posição já foi atingida.'); this.tiros.add(p); const n = this.navios.find(n => n.casas.includes(p)); if (!n) return 'agua'; n.atingidas.add(p); return n.atingidas.size === n.tamanho ? 'afundado' : 'acerto'; }
    todosAfundados() { return this.navios.length === 4 && this.navios.every(n => n.atingidas.size === n.tamanho); }
}
module.exports = { BatalhaNaval };
