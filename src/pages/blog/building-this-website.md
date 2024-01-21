---
layout: '@layouts/blog-layout.astro'
title: Building this awesome website with Astro (and Tailwind CSS)
---

# Introduction

Every developer needs a website. It's a place to showcase your work, your
skills, and your personality. It's a place to share your thoughts and ideas.
It's a place to connect with others. It's a place to be found.

Indeed, before this one, I «developed» a couple of websites for myself. They
were all made from a template, and I just changed the content. I didn't like
that. I wanted to build my own website from scratch. I wanted to have full
control over it. I wanted to have fun and learn from it.

That's why at the beginning of 2024 I decided to build my own website. There
were specific requirements I wanted to meet:

- It should be fast. I wanted to have a score of 100 on all Lighthouse metrics.
- It should be accessible, so everyone can use it.
- It should be responsive, so it looks good on all devices.
- It should be SEO-friendly, so people can find it.
- It should be easy to maintain, so I can focus on writing content.
- It should be fun to build, so I can learn from it.


# The Framework

<!--
Cualquier desarrollador que se haya enfrentado a la tarea de construir
un sitio web debe saber que hay muchas opciones disponibles. Solamente
en el ecosistema de JavaScript, hay muchas herramientas que te ayudan a
realizar esta tarea. Por ejemplo, puedes usar un framework como React,
Vue o Svelte. O puedes usar un generador de sitios estáticos como
Gatsby, Next.js o Nuxt.js. O puedes usar un generador de sitios
estáticos como Hugo, Jekyll o Eleventy, etc.

Sin entrar a discutir cuál es la mejor opción, yo decidí usar Astro.
Astro es un framework que te permite construir sitios web usando
componentes. Es decir, puedes crear componentes reutilizables y
combinarlos para construir tu sitio web. Además, Astro es agnóstico a
los frameworks de JavaScript. Esto significa que puedes usar casi
cualquier framework de JavaScript para construir tus componentes en caso
que necesites interactividad. Es muy fácil de usar y tiene una
documentación muy completa.
-->

Any developer who has faced the task of building a website should know that
there are many options available. Just in the JavaScript ecosystem, there are
many tools that help you accomplish this task. For example, you can use a
framework like React, Vue or Svelte. Or a framework of a framework like
Gatsby, Next.js or Nuxt.js. It's up to you and the task you want to accomplish.

I decided to use [Astro](https://astro.build).
Astro is a framework that allows you to build websites using components. That
is, you can create reusable components and combine them to build your website.
In addition, Astro is framework-agnostic. This means that you can use almost
any JavaScript framework to build your components in case you need
interactivity. It's very easy to use and has very complete documentation.

<!--
Hay muchas razones por las que decidí usar Astro. Esta lista las resume
muy bien pero ya iré dando más detalles a lo largo del artículo.
- Renderizado del lado del servidor (SSR)
- Integraciones con herramientas de desarrollo (Prettier, ESLint, etc.)
- Reutilización de componentes
- Agnóstico a los frameworks de JavaScript
--->

There are many reasons why I decided to use Astro. This list summarizes them
very well but I will give more details throughout the article.

- Server-side rendering (SSR)
- Integrations with development tools (Tailwind, Prettier, ESLint, etc.)
- Component reusability
- Framework-agnostic
- Really easy to learn and use specially if you are familiar with HTML, CSS,
  and/or JavaScript frameworks like React, Vue, or Svelte.

# The Design

<!--
Una vez tomada la decisión de usar Astro, el siguiente paso fue definir
el diseño del sitio web. Para esto, decidí inspirarme con un diseño tipo
Bento pensando también en que esto me haría fácil la tarea de
adapatarlo a dispositivos móviles. Además, decidí usar Tailwind CSS
para darle estilo al sitio web.

Este artículo sobre las cajas tipo Bento habla más en detalle
sobre este tipo de diseño. [Web design trend: bento box
](https://bootcamp.uxdesign.cc/web-design-trend-bento-box-95814d99ac62)
-->

Once the decision to use Astro was made, the next step was to define the
design of the website. For this, I decided to get inspired by a Bento design
thinking also that this would make it easy for me to adapt it to mobile
devices. In addition, I decided to use Tailwind CSS to style the website.

This article about Bento boxes talks in more detail about this type of design.
[Web design trend: bento box](https://bootcamp.uxdesign.cc/web-design-trend-bento-box-95814d99ac62)

## [Tailwind CSS](https://tailwindcss.com)

<!--
Tailwind CSS es un framework de CSS que te permite crear estilos de
manera rápida y fácil. Es muy fácil de aprender y usar. Además, es muy
flexible y te permite crear estilos personalizados. Por ejemplo, puedes
crear tus propios colores, tamaños, espaciados, etc.

La verdad sobre Tailwind CSS podría escribir un artículo completo. Es
simplemente fascinante. Si quieres saber más sobre Tailwind CSS, te recomiendo
el siguiente artículo con 7 beneficios que ofrece el framework.
[Embracing the Utility-First Paradigm: Benefits of Tailwind CSS](https://medium.com/@ccsstudios/embracing-the-utility-first-paradigm-benefits-of-tailwind-css-47f7922cf3fa)
-->

Tailwind CSS is a CSS framework that allows you to create styles quickly and
easily. It's very easy to learn and use. In addition, it's very flexible and
allows you to create custom styles. For example, you can create your own
colors, sizes, spacings, etc.

The truth about Tailwind CSS could write a whole article. It's just
fascinating. If you want to know more about Tailwind CSS, I recommend the
following article with 7 benefits that the framework offers.
[Embracing the Utility-First Paradigm: Benefits of Tailwind
CSS](https://medium.com/@ccsstudios/embracing-the-utility-first-paradigm-benefits-of-tailwind-css-47f7922cf3fa)
