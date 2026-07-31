# Laboratório Prático: Canvas e SVG na Web

Objeto de aprendizagem para estudantes do **Curso Técnico em Informática**.

O projeto foi organizado para que o estudante:

1. leia um roteiro curto;
2. complete os arquivos da pasta `atividade`;
3. teste o resultado no navegador;
4. use a lista de verificação;
5. somente depois compare seu trabalho com a pasta `solucao`.

> Material-base: **Fundamentos Visuais: Canvas e SVG na Web**, do professor Vinícius da Rocha Motta.

## Objetivo do laboratório

Construir um **painel gráfico para uma aplicação web** contendo:

- um gráfico de barras desenhado com Canvas;
- linhas, retângulos, círculos, texto e gradiente no Canvas;
- um logotipo vetorial criado com SVG;
- formas SVG manipuláveis pelo DOM;
- interação de clique no logotipo;
- uma comparação prática entre Canvas e SVG.

## Estrutura do repositório

```text
objeto-de-aprendizagem/
├── index.html                 # página inicial do laboratório
├── css/
│   └── portal.css             # aparência da página inicial
├── roteiro.md                 # passo a passo completo
├── atividade/                 # arquivos que o aluno deverá completar
│   ├── index.html
│   ├── css/style.css
│   └── js/
│       ├── canvas.js
│       └── svg.js
└── solucao/                   # código completo para conferência
    ├── index.html
    ├── css/style.css
    └── js/
        ├── canvas.js
        └── svg.js
```

## Como realizar

### 1. Baixe o projeto

Use o botão **Code > Download ZIP** ou clone o repositório:

```bash
git clone https://github.com/vmotta/objeto-de-aprendizagem.git
```

### 2. Abra a pasta no editor

Abra a pasta no Visual Studio Code ou em outro editor de sua preferência.

### 3. Leia o roteiro

Abra o arquivo [`roteiro.md`](roteiro.md). Ele contém as etapas e os testes que deverão ser realizados.

### 4. Trabalhe somente na pasta `atividade`

Abra `atividade/index.html` no navegador e complete os pontos marcados com:

```javascript
// TODO
```

Não altere a pasta `solucao` durante a realização da atividade.

### 5. Confira o resultado

Depois de concluir todas as etapas, abra `solucao/index.html` e compare:

- estrutura HTML;
- obtenção do contexto 2D;
- sistema de coordenadas;
- comandos de desenho;
- estrutura SVG;
- manipulação pelo DOM;
- organização dos arquivos.

## Regras da atividade

- Não copie a solução antes de tentar realizar cada etapa.
- Teste o projeto depois de cada alteração.
- Use o console do navegador para localizar erros.
- Mantenha HTML, CSS e JavaScript em arquivos separados.
- Utilize nomes de variáveis claros.
- Mantenha o código indentado.
- Responda às questões de reflexão do roteiro.

## Resultado esperado

Ao final, o estudante deverá conseguir explicar:

- por que o elemento `<canvas>` é apenas um recipiente;
- para que serve `getContext("2d")`;
- como funciona o sistema de coordenadas do Canvas;
- por que o Canvas precisa redesenhar a cena;
- por que cada forma SVG continua existindo no DOM;
- quando escolher Canvas ou SVG.

## Execução

O projeto não utiliza bibliotecas ou servidor. Basta abrir os arquivos HTML no navegador.

Para uma experiência melhor, também é possível usar a extensão **Live Server** do Visual Studio Code.
