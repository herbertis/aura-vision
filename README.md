# AURA — Visão Absoluta

> 🧪 Projeto de estudo desenvolvido para explorar na prática a integração entre **Inteligência Artificial**, **animações com GSAP** e a aplicação de um **Design System** estruturado.

🔗 **[Ver projeto ao vivo →](https://herbertis.github.io/aura-vision/)**

Landing page premium para a marca fictícia **AURA**, uma linha de óculos de sol de design minimalista com precisão óptica, acetato premium e proteção UV400.

O projeto nasceu da curiosidade de entender como IA pode acelerar e potencializar o processo criativo de front-end — da geração de código à aplicação consistente de um Design System, passando por animações fluidas com GSAP e Lenis.

---

## 🎯 Objetivos de Estudo

| Tema | O que foi explorado |
|---|---|
| 🤖 Inteligência Artificial | Uso de IA para geração, revisão e documentação de código front-end |
| 🎞️ GSAP + Lenis | Animações de scroll, parallax, reveal, stagger e smooth scroll |
| 🎨 Design System | Aplicação prática de tipografia, paleta, componentes e motion guidelines |

---

## 📁 Estrutura de Arquivos

```
/
├── index.html   # Estrutura principal da página
├── styles.css   # Estilos customizados
├── main.js      # Lógica de animações e interações
└── video.mp4    # Vídeo do produto exibido na Hero Section
```

---

## 🗂️ Seções da Página

### 🔝 Header / Navegação
- Fixo no topo com efeito de `backdrop-blur`
- Links de navegação: **O Modelo**, **Lentes**, **Design**
- Logotipo **AURA** centralizado
- Botão de **Comprar Agora** com efeito de brilho (`glow`)

### 🎬 Hero Section
- Título em destaque: *"Visão Absoluta"* com animação de revelação de texto
- Subtítulo descritivo do produto
- Botões de ação: **Comprar Agora** e **Explorar**
- Vídeo do produto em loop (`video.mp4`) com reprodução automática
- Indicador de scroll animado

### ✨ Seção 01 — Proteção Polarizada
- Cards de funcionalidades com ícones (Iconify):
  - **Proteção UV400** — bloqueio de 100% dos raios UVA e UVB
  - **Acetato Bio** — material sustentável e durável
  - **Encaixe Perfeito** — design leve com pressão mínima

### 🏷️ Faixa de Marquee (Ticker)
- Faixa animada em loop contínuo com os diferenciais da marca:
  - *Polarized Lenses · Italian Acetate · Absolute Vision · UV400 Protection*

### 👓 Seção 02 — Coleções
- Grid de 2 colunas com as coleções disponíveis:
  - **AURA Classic** — Série Noir, silhueta clássica reinterpretada
  - **AURA Eclipse** — Edição Limitada, construção em titânio com lentes espelhadas
- Cards com efeito hover (escala + desfoque → colorido)

### 📌 Footer
- Logo e tagline da marca
- Links de navegação agrupados em:
  - **Loja**: Masculino, Feminino, Acessórios
  - **Sobre**: Nossa História, Sustentabilidade, Contato
  - **Mídias**: ícones para redes sociais (vídeo, foto, e-mail)
- Rodapé com copyright e links de Privacidade / Termos

---

## 🎨 Design System

Todo o projeto foi desenvolvido com base no **Official Design System v4** — uma biblioteca de padrões premium, escalável e totalmente responsiva, orientada por tipografia moderna, micro-interações fluidas e acabamentos de alto nível.

### 🖋️ Tipografia

Fonte principal: **Inter** (Google Fonts), carregada nos pesos `300`, `400`, `500`, `600` e `700`.

| Estilo | Tamanho | Peso | Uso |
|---|---|---|---|
| H1 Display | `5rem` | 700 | Títulos principais / Hero |
| H2 Section | `3rem` | 600 | Títulos de seção |
| H3 Article | `1.875rem` | 500 | Subtítulos de conteúdo |
| Body LG | `1.125rem` | 300 | Introduções e destaques |
| Body | `1rem` | 400 | Parágrafos gerais |
| Body SM | `0.875rem` | 400 | Legendas e helpers |
| Label / Utility | `0.75rem` | 700 | Tags, badges, labels em uppercase |

### 🎨 Paleta de Cores

Paleta neutra controlada, construída sobre padrões de contraste **AAA** para máxima acessibilidade e sensação premium.

| Token | HEX | Uso |
|---|---|---|
| Primary | `#1C1C1C` | Textos, headers, fundo escuro |
| Secondary | `#78716C` | Corpo de texto, ícones, bordas |
| Surface Base | `#FFFFFF` | Background principal |
| Surface Alt | `#F5F5F4` | Cards, seções alternadas, hover |

> Regra: alternar entre **Surface Base** e **Surface Alt** para criar hierarquia visual. Cores semânticas (verde/vermelho) são usadas apenas para estados de feedback.

### 🧩 Componentes

Todos os componentes seguem especificações rígidas de geometria, espaçamento e estados interativos:

**Botões**
- `.beam-button` — efeito shimmer de luz deslizando ao hover
- `.interactive-scale` — escala sutil no `:active` (`scale(0.95)`)
- `.glow-on-hover` — elevação com `box-shadow` e `translateY(-4px)` ao hover
- Variantes: primário (fundo escuro), fantasma (borda + fundo transparente)

**Cards**
- Borda `border-stone-200`, `border-radius: 0.75rem`, sombra sutil
- Imagem em `grayscale` → colorida ao hover com `scale(1.05)` e `duration-700`
- Badge de categoria posicionado no canto superior direito

**Badges**
- Neutral: fundo `stone-900`, texto branco
- Success: fundo `green-50`, texto `green-700`
- Draft: fundo `stone-100`, texto `stone-600`

**Tooltip**
- Aparece acima do elemento com `opacity-0 → opacity-100` + `translateY` suave

### ✨ Animações e Motion

Curva de easing padrão: `cubic-bezier(0.16, 1, 0.3, 1)` — movimento físico, com aceleração natural.

| Animação | Classe / Técnica | Descrição |
|---|---|---|
| Text Reveal | `.text-reveal-wrapper` + `.text-reveal-content` | Texto sobe de `translateY(110%)` para `0` |
| Transparent Lettering | `.transparent-text` | Contorno com `-webkit-text-stroke`, sem preenchimento |
| Scroll Reveal | `.reveal` + `.reveal.active` | Fade + `translateY` via IntersectionObserver |
| Beam Button | `.beam-button::before` | Shimmer de luz deslizando horizontalmente |
| Glow on Hover | `.glow-on-hover` | Elevação com sombra ao hover |
| Marquee | `.marquee-container` + `@keyframes marquee` | Scroll horizontal infinito |
| Nav Load | `.nav-load` + `.nav-load.loaded` | Header deslizando do topo ao carregar |
| Parallax | `data-speed` + scroll listener | Deslocamento vertical proporcional ao scroll |

### 🔣 Iconografia

Set utilizado: **Solar Icons** (via [Iconify](https://iconify.design/)), em dois estilos:
- `linear` — traçado fino, uso decorativo e navegação
- `bold-duotone` — preenchido com dupla tonalidade, uso em destaques e features

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Finalidade |
|---|---|
| [Tailwind CSS](https://tailwindcss.com/) (via CDN) | Utilitários de layout e estilo |
| [Google Fonts — Inter](https://fonts.google.com/specimen/Inter) | Tipografia |
| [Iconify](https://iconify.design/) | Ícones (Solar icon set) |
| [GSAP 3.12](https://gsap.com/) | Animações avançadas |
| [GSAP ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) | Animações baseadas em scroll |
| [Lenis](https://github.com/darkroomengineering/lenis) | Scroll suave |
| `styles.css` | Estilos customizados da marca |
| `main.js` | Lógica de animações e interações |

---

## 🚀 Como Executar

Por ser uma página estática, basta abrir o `index.html` em um navegador. Para melhor experiência (carregamento do vídeo e fontes), recomenda-se servir via servidor local:

```bash
# Com Python
python -m http.server 3000

# Com Node.js (npx)
npx serve .
```

Acesse em: `http://localhost:3000`

---

## 📋 Observações

- O arquivo `video.mp4` deve estar na raiz do projeto para que o vídeo da Hero Section seja exibido corretamente.
- As imagens das coleções são carregadas via **Unsplash** (URL externa), portanto requerem conexão com a internet.
- O `styles.css` e o `main.js` são dependências locais obrigatórias para o funcionamento completo da página.

---

© 2026 Aura Vision. Todos os direitos reservados.
