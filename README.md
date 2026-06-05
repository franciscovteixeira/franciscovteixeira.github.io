# franciscovteixeira.github.io

Portfólio pessoal desenvolvido em HTML, CSS e JavaScript puro — sem frameworks, sem dependências externas.

Acessível em: **[franciscovteixeira.github.io](https://franciscovteixeira.github.io)**

---

## Sobre

Site de portfólio criado para apresentar meus projetos e habilidades de forma clara e profissional. Design sóbrio com tema escuro e detalhes em dourado, pensado para uso como vitrine no LinkedIn e em outras redes profissionais.

## Estrutura

```
franciscovteixeira.github.io/
└── index.html   # Página única com todo o conteúdo, estilos e scripts
```

## Seções

- **Hero** — apresentação rápida com foto e links de ação
- **Sobre** — perfil profissional e habilidades com animação de barras
- **Projetos** — cards com filtros por categoria (Python, HTML/JS, Automação)
- **Contato** — links diretos para GitHub e LinkedIn

## Como adicionar um novo projeto

Dentro da `<div class="projects-grid">` no `index.html`, copie um bloco de card existente e ajuste os campos:

```html
<div class="project-card" data-cats="python automacao">
  <div class="project-lang">
    <span class="lang-dot" style="background:#3572A5"></span>Python
  </div>
  <div class="project-name">Nome do Projeto</div>
  <p class="project-desc">Descrição breve do que o projeto faz.</p>
  <div class="project-tags">
    <span class="tag">Python</span>
    <span class="tag">Tag 2</span>
  </div>
  <a class="project-link" href="https://github.com/franciscovteixeira/REPO" target="_blank">
    Ver repositório →
  </a>
</div>
```

**`data-cats`** define quais filtros o card aparece. Valores disponíveis: `python`, `html`, `automacao`. Use múltiplos separados por espaço.

**Cores por linguagem:**

| Linguagem  | Cor hex   |
|------------|-----------|
| Python     | `#3572A5` |
| HTML / JS  | `#f1e05a` |
| CSS        | `#563d7c` |
| Shell      | `#89e051` |

## Tecnologias

- HTML5
- CSS3 (variáveis, grid, animações)
- JavaScript vanilla
- Google Fonts — Playfair Display · DM Mono · DM Sans

## Deploy

O GitHub Pages publica automaticamente qualquer commit na branch `main` deste repositório. Não é necessária nenhuma configuração adicional.

---

*"Veritas lux mea."*
