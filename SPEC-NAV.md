# Spec de Implementação — Componente Nav
**Projeto:** LP P3X / Charles Mendlowicz  
**Status:** Aprovado  
**Data:** 2026-05-16  
**Responsável:** Antigravity

---

## Visão Geral

Ajustes cosméticos e funcionais no Nav. Nenhuma mudança estrutural — os dois arquivos
afetados são `Nav.tsx` e `Nav.module.css`.

**Resumo das mudanças:**
1. Logo maior (48px → 56px)
2. Links de navegação trocam de fonte e cor
3. Indicador de seção ativa via `IntersectionObserver`
4. CTA vira estilo outline (borda verde, fundo transparente)

---

## Arquivos a alterar

```
src/components/Nav/Nav.tsx
src/components/Nav/Nav.module.css
```

---

## 1. Nav.tsx — mudanças completas

### 1a. Adicionar estado de link ativo + IntersectionObserver

Substituir o componente inteiro pelo código abaixo:

```tsx
'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './Nav.module.css'

interface NavProps {
  logo: string
  logoAlt?: string
  ctaText: string
  ctaUrl: string
}

// IDs das seções que os links de âncora apontam
const NAV_SECTIONS = ['solucao', 'autoridade', 'oferta', 'faq']

export default function Nav({ logo, logoAlt = 'P3X', ctaText, ctaUrl }: NavProps) {
  const [hidden, setHidden] = useState(false)
  const [solid, setSolid] = useState(false)
  const [lastY, setLastY] = useState(0)
  const [activeSection, setActiveSection] = useState<string | null>(null)

  // Comportamento de scroll — hide/show + sólido após 32px (mantido sem alteração)
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setSolid(y > 32)
      if (y < 120) {
        setHidden(false)
      } else {
        setHidden(y > lastY)
      }
      setLastY(y)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [lastY])

  // IntersectionObserver — detecta qual seção está na viewport
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    NAV_SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        {
          // Considera a seção "ativa" quando ocupa pelo menos 30% da viewport
          threshold: 0.3,
          // Margem negativa no topo para compensar a altura do nav fixo
          rootMargin: '-72px 0px 0px 0px',
        }
      )

      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((obs) => obs.disconnect())
  }, [])

  return (
    <header
      className={[
        styles.nav,
        solid ? styles.navSolid : '',
        hidden ? styles.navHidden : '',
      ]
        .filter(Boolean)
        .join(' ')}
      role="banner"
    >
      <div className={styles.inner}>
        {/* Logo — height aumentado de 48px para 56px */}
        <a href="/" className={styles.logoLink} aria-label="P3X — Página inicial">
          <Image
            src={logo}
            alt={logoAlt}
            width={140}
            height={60}
            priority
            style={{ height: '56px', width: 'auto' }}
          />
        </a>

        {/* Links de navegação — recebem classe .linkActive quando a seção está visível */}
        <nav className={styles.links} aria-label="Navegação principal">
          <a
            href="#solucao"
            className={`${styles.link}${activeSection === 'solucao' ? ` ${styles.linkActive}` : ''}`}
          >
            O ecossistema
          </a>
          <a
            href="#autoridade"
            className={`${styles.link}${activeSection === 'autoridade' ? ` ${styles.linkActive}` : ''}`}
          >
            Charles
          </a>
          <a
            href="#oferta"
            className={`${styles.link}${activeSection === 'oferta' ? ` ${styles.linkActive}` : ''}`}
          >
            Preço
          </a>
          <a
            href="#faq"
            className={`${styles.link}${activeSection === 'faq' ? ` ${styles.linkActive}` : ''}`}
          >
            Dúvidas
          </a>
        </nav>

        {/* CTA — estilo outline */}
        <a href={ctaUrl} className={styles.cta}>
          {ctaText}
          <svg
            className={styles.ctaArrow}
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M2 7h10M8 3l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </header>
  )
}
```

---

## 2. Nav.module.css — mudanças linha a linha

### 2a. Links — fonte, cor e indicador ativo

**Substituir** o bloco `.link` e `.link::after` existente por:

```css
/* ANTES */
.link {
  font-family: var(--font-headline);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #FFFFFF;
  transition: color 0.2s ease;
  position: relative;
}

.link::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -6px;
  height: 1px;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 0.3s var(--ease-out-expo);
}

.link:hover {
  color: var(--brand-light);
}

.link:hover::after {
  transform: scaleX(1);
}
```

```css
/* DEPOIS */
.link {
  font-family: var(--font-body);       /* Proxima Nova em vez de TuskerGrotesk */
  font-size: 14px;
  font-weight: 400;                    /* Regular — sem peso excessivo */
  letter-spacing: 0;                   /* Sem espaçamento forçado */
  text-transform: none;                /* Sem uppercase */
  color: #ffffff;                      /* Branco puro — máximo contraste */
  transition: color 0.2s ease;
  position: relative;
  padding-bottom: 4px;                 /* Espaço para a barra abaixo */
}

/* Barra indicadora — aparece no hover E no estado ativo */
.link::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 2px;                         /* 2px sólido — mais visível que 1px */
  background: var(--accent);           /* Verde P3X */
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 0.25s ease;
}

.link:hover {
  color: #ffffff;
}

.link:hover::after {
  transform: scaleX(1);
}

/* Estado ativo — seção visível na viewport */
.linkActive {
  font-weight: 500;                    /* Leve reforço de peso no item ativo */
  color: #ffffff;
}

.linkActive::after {
  transform: scaleX(1);               /* Barra sempre visível */
}
```

### 2b. CTA — trocar de sólido para outline

**Substituir** o bloco `.cta` existente por:

```css
/* ANTES */
.cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--cta-bg);           /* Verde sólido */
  color: var(--cta-text);
  font-family: var(--font-headline);
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.6875rem 1.375rem;
  border-radius: var(--radius-pill);
  cursor: pointer;
  white-space: nowrap;
  position: relative;
  isolation: isolate;
  transition: background 0.25s var(--ease-out-expo),
              transform 0.2s var(--ease-out-expo),
              box-shadow 0.25s var(--ease-out-expo);
}

.cta::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: inherit;
  background: radial-gradient(circle, rgba(42,147,69,0.55) 0%, transparent 70%);
  opacity: 0;
  z-index: -1;
  transition: opacity 0.25s var(--ease-out-expo);
}

.cta:hover {
  background: var(--cta-hover);
  transform: translateY(-1px);
  box-shadow: 0 8px 24px rgba(42, 147, 69, 0.32);
}

.cta:hover::before {
  opacity: 1;
}
```

```css
/* DEPOIS */
.cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;                        /* Sem preenchimento */
  color: var(--brand-primary);                    /* Texto verde */
  border: 1px solid rgba(42, 147, 69, 0.65);     /* Borda verde semitransparente */
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 13px;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  padding: 0.5rem 1.25rem;
  border-radius: var(--radius-pill);
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.2s ease,
              color 0.2s ease,
              border-color 0.2s ease,
              transform 0.15s ease;
}

.cta:hover {
  background: var(--brand-primary);              /* Preenche com verde no hover */
  color: #ffffff;
  border-color: var(--brand-primary);
  transform: translateY(-1px);
}

.cta:active {
  transform: translateY(0);
}

/* Remover o ::before — não é mais necessário */
```

**Remover** completamente o bloco `.cta::before` que existia antes.

---

## 3. Checklist de QA

Após implementar, verificar:

- [ ] Logo aparece em 56px de altura em desktop e mobile
- [ ] Links de nav usam Proxima Nova (inspecionar no DevTools — font-family)
- [ ] Links são brancos (#ffffff) sem uppercase
- [ ] Hover num link mostra a barra verde de baixo com animação scaleX
- [ ] Ao rolar até a seção "O ecossistema" → link "O ecossistema" ganha barra ativa
- [ ] Ao rolar até "Preço" → barra muda para "Preço" (a anterior some)
- [ ] CTA do nav está sem preenchimento verde, com borda e texto verdes
- [ ] Hover no CTA preenche com verde sólido
- [ ] Comportamento de hide/show ao rolar continua funcionando
- [ ] Nav fica sólido (fundo mais opaco) após 32px de scroll
- [ ] Sem regressões em mobile (links de nav ocultos abaixo de 900px)

---

## 4. O que NÃO mudar

- Comportamento de scroll (hide/show/solid) — mantido sem toque
- Altura do nav (72px) — mantida
- Backdrop filter blur — mantido
- Transições de background/border ao scrollar — mantidas
- Links ocultos em mobile (abaixo de 900px) — mantido

---

*Spec gerado em 2026-05-16. Dúvidas → Adriana.*
