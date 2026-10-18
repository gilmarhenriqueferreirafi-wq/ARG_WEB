# ARG_WEB

Experiência web interativa com estética de ficção e elementos de investigação.
O projeto apresenta uma página temática de pizzaria, conteúdos por capítulos,
mensagens e efeitos sonoros para criar uma experiência de ARG (Alternate
Reality Game).

## Como executar

O projeto é estático e usa React pelo CDN. Para testar localmente, clone o
repositório e inicie um servidor simples na pasta:

```bash
git clone https://github.com/gilmarhenriqueferreirafi-wq/ARG_WEB.git
cd ARG_WEB
python -m http.server 8000
```

Abra `http://localhost:8000` no navegador.

Também é possível publicar os arquivos diretamente em um serviço de hospedagem
estática, como o GitHub Pages.

## Estrutura

- `index.html`: página principal.
- `app.js`: aplicação e interações.
- `fases-pages/`: conteúdos dos capítulos.
- `assents/audio/`: efeitos sonoros e trilhas.
- `bekup/`: arquivos de apoio e versões anteriores.

## Tecnologias

- HTML, CSS e JavaScript.
- React 18 carregado por CDN.
- Áudio e narrativa interativa.

## Estado

Projeto experimental em desenvolvimento.
