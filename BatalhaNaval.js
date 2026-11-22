class BatalhaNaval {
    constructor() {
        this.tamanho = 10;
        this.navios = [];
        this.tiros = new Set();
    }

    colocarNavio(nome, tamanho, inicio, direcao = 'horizontal') {
        if (![5, 4, 3, 2].includes(tamanho)) {
            throw new Error('Tamanho de navio inválido.');
        }
        if (direcao !== 'horizontal' && direcao !== 'vertical') {
            throw new Error('Direção inválida.');
        }
        if (
            !inicio ||
            !Number.isInteger(inicio.linha) ||
            !Number.isInteger(inicio.coluna)
        ) {
            throw new Error('Posição inicial inválida.');
        }

        const casas = [];
        for (let indice = 0; indice < tamanho; indice += 1) {
            const linha = inicio.linha + (direcao === 'vertical' ? indice : 0);
            const coluna = inicio.coluna + (direcao === 'horizontal' ? indice : 0);
            if (
                linha < 0 || linha >= this.tamanho ||
                coluna < 0 || coluna >= this.tamanho
            ) {
                throw new Error('Navio fora do tabuleiro.');
            }
            casas.push(`${linha},${coluna}`);
        }

        const sobrepoe = casas.some((posicao) =>
            this.navios.some((navio) => navio.casas.includes(posicao))
        );
        if (sobrepoe) {
            throw new Error('Navios não podem se sobrepor.');
        }

        this.navios.push({ nome, tamanho, casas, atingidas: new Set() });
        return this.navios[this.navios.length - 1];
    }

    atirar(linha, coluna) {
        if (
            !Number.isInteger(linha) ||
            !Number.isInteger(coluna) ||
            linha < 0 || linha >= this.tamanho ||
            coluna < 0 || coluna >= this.tamanho
        ) {
            throw new Error('Posição inválida.');
        }

        const posicao = `${linha},${coluna}`;
        if (this.tiros.has(posicao)) {
            throw new Error('Essa posição já foi atingida.');
        }
        this.tiros.add(posicao);

        const navio = this.navios.find((item) => item.casas.includes(posicao));
        if (!navio) {
            return 'agua';
        }

        navio.atingidas.add(posicao);
        return navio.atingidas.size === navio.tamanho ? 'afundado' : 'acerto';
    }

    todosAfundados() {
        return this.navios.length === 4 &&
            this.navios.every((navio) => navio.atingidas.size === navio.tamanho);
    }
}

module.exports = { BatalhaNaval };
