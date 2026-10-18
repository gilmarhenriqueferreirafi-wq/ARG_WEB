# ARG_WEB

Jogo web narrativo com estética de ficção e elementos de investigação.
O projeto apresenta uma experiência de ARG (Alternate Reality Game), com
capítulos, mensagens, enigmas e efeitos sonoros para o jogador descobrir.

## Jogar na web

A versão publicada pode ser acessada pelo GitHub Pages:

```text
https://gilmarhenriqueferreirafi-wq.github.io/ARG_WEB/
```

O projeto foi feito para ser jogado no navegador. Não é necessário instalar
um servidor para a versão publicada.

## Como testar uma cópia

Para criar sua própria versão web, faça um fork ou clone o repositório e
publique os arquivos em um serviço de hospedagem estática, como o GitHub
Pages. Para uma prévia local, também é possível iniciar um servidor simples:

```bash
git clone https://github.com/gilmarhenriqueferreirafi-wq/ARG_WEB.git
cd ARG_WEB
python -m http.server 8000
```

Abra `http://localhost:8000` no navegador.

Também é possível publicar os arquivos diretamente em um serviço de hospedagem
estática, como o GitHub Pages.

## Estrutura do jogo

- `index.html`: página principal.
- `app.js`: jogo e interações.
- `fases-pages/`: conteúdos dos capítulos e mensagens.
- `assents/audio/`: efeitos sonoros e trilhas.
- `bekup/`: arquivos de apoio e versões anteriores.

As respostas dos enigmas ficam no JavaScript do navegador de propósito: este
é um jogo client-side, e não um sistema de autenticação. Elas não devem ser
tratadas como senhas reais ou informações confidenciais.

## Tecnologias

- HTML, CSS e JavaScript.
- React 18 carregado por CDN.
- Áudio e narrativa interativa.

## Estado

Projeto experimental em desenvolvimento.

## Conteúdo incorporado

O antigo projeto `fnaf` foi incorporado em `fnaf/` como uma experiência
relacionada dentro deste mesmo universo. O repositório separado foi arquivado
para evitar duplicação.
