---
layout: '@layouts/blog-layout.astro'
title: About this awesome website
hrefLang: ../es/blog/acerca-de-esta-web/
---

![jamerrq.dev](https://jamerrq.deno.dev/og-image.png)

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

Any developer who has faced the task of building a website should know that
there are many options available. Just in the JavaScript ecosystem, there are
many tools that help you accomplish this task. For example, you can use a
framework like React, Vue or Svelte. Or a framework of a framework like Gatsby,
Next.js or Nuxt.js. It's up to you and the task you want to accomplish.

## Astro

I decided to use <a href="https://astro.build" target="_blank" rel="noopener
noreferrer" title="Astro">Astro</a>. Astro is a framework that allows you to
build websites using components. That is, you can create reusable components and
combine them to build your website. In addition, Astro is framework-agnostic.
This means that you can use almost any JavaScript framework to build your
components in case you need interactivity. It's very easy to use and has very
complete documentation.

<a href="https://astro.build" target="_blank" rel="noopener noreferrer"
title="Astro">

<div align="center" class="m-4">
<svg width="160" viewBox="0 0 460 160" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M65.7846 121.175C61.2669 117.045 59.9481 108.368 61.8303 102.082C65.0939 106.045 69.6158 107.301 74.2997 108.009C81.5305 109.103 88.6318 108.694 95.349 105.389C96.1174 105.011 96.8275 104.507 97.6672 103.998C98.2974 105.826 98.4615 107.672 98.2413 109.551C97.706 114.127 95.4288 117.662 91.8069 120.341C90.3586 121.413 88.8261 122.371 87.3303 123.382C82.7349 126.487 81.4917 130.129 83.2184 135.427C83.2594 135.556 83.2961 135.685 83.389 136C81.0427 134.95 79.3289 133.421 78.023 131.411C76.6438 129.289 75.9876 126.942 75.9531 124.403C75.9358 123.167 75.9358 121.92 75.7696 120.702C75.3638 117.732 73.9694 116.402 71.3426 116.325C68.6467 116.247 66.5141 117.913 65.9486 120.538C65.9054 120.739 65.8428 120.938 65.7803 121.172L65.7846 121.175Z" fill="white"/>
<path d="M65.7846 121.175C61.2669 117.045 59.9481 108.368 61.8303 102.082C65.0939 106.045 69.6158 107.301 74.2997 108.009C81.5305 109.103 88.6318 108.694 95.349 105.389C96.1174 105.011 96.8275 104.507 97.6672 103.998C98.2974 105.826 98.4615 107.672 98.2413 109.551C97.706 114.127 95.4288 117.662 91.8069 120.341C90.3586 121.413 88.8261 122.371 87.3303 123.382C82.7349 126.487 81.4917 130.129 83.2184 135.427C83.2594 135.556 83.2961 135.685 83.389 136C81.0427 134.95 79.3289 133.421 78.023 131.411C76.6438 129.289 75.9876 126.942 75.9531 124.403C75.9358 123.167 75.9358 121.92 75.7696 120.702C75.3638 117.732 73.9694 116.402 71.3426 116.325C68.6467 116.247 66.5141 117.913 65.9486 120.538C65.9054 120.739 65.8428 120.938 65.7803 121.172L65.7846 121.175Z" fill="url(#paint0_linear_1_33)"/>
<path d="M40 101.034C40 101.034 53.3775 94.5177 66.7924 94.5177L76.9068 63.2155C77.2855 61.7017 78.3911 60.6729 79.6393 60.6729C80.8875 60.6729 81.9932 61.7017 82.3719 63.2155L92.4862 94.5177C108.374 94.5177 119.279 101.034 119.279 101.034C119.279 101.034 96.5558 39.133 96.5114 39.0088C95.8592 37.1787 94.7583 36 93.274 36H66.007C64.5227 36 63.4662 37.1787 62.7696 39.0088C62.7205 39.1307 40 101.034 40 101.034Z" fill="white"/>
<path d="M181.043 81.1227C181.043 86.6079 174.22 89.8838 164.773 89.8838C158.624 89.8838 156.45 88.3601 156.45 85.1604C156.45 81.8083 159.149 80.2085 165.297 80.2085C170.846 80.2085 175.569 80.2846 181.043 80.9703V81.1227ZM181.118 74.3423C177.744 73.5805 172.645 73.1234 166.572 73.1234C148.877 73.1234 140.555 77.3135 140.555 87.065C140.555 97.1975 146.253 101.083 159.449 101.083C170.621 101.083 178.193 98.2641 180.968 91.3313H181.417C181.342 93.0074 181.268 94.6834 181.268 95.9785C181.268 99.5592 181.867 99.8639 184.791 99.8639H198.587C197.837 97.7308 197.388 91.7122 197.388 86.5317C197.388 80.9703 197.612 76.7802 197.612 71.1426C197.612 59.6388 190.715 52.3251 169.121 52.3251C159.824 52.3251 149.477 53.925 141.605 56.2867C142.354 59.4102 143.404 65.7335 143.929 69.8474C150.752 66.6477 160.424 65.2764 167.922 65.2764C178.268 65.2764 181.118 67.6381 181.118 72.4377V74.3423Z" fill="white"/>
<path d="M218.971 84.3224C217.097 84.5509 214.547 84.5509 211.923 84.5509C209.149 84.5509 206.6 84.4748 204.875 84.2462C204.875 84.8557 204.8 85.5413 204.8 86.1508C204.8 95.6738 211.024 101.235 232.917 101.235C253.535 101.235 260.208 95.75 260.208 86.0746C260.208 76.9325 255.785 72.4377 236.216 71.4473C220.995 70.7616 219.646 69.0856 219.646 67.181C219.646 64.9717 221.595 63.8289 231.792 63.8289C242.364 63.8289 245.213 65.2764 245.213 68.3238V69.0094C246.713 68.9332 249.412 68.8571 252.186 68.8571C254.81 68.8571 257.659 68.9332 259.309 69.0856C259.309 68.3999 259.384 67.7905 259.384 67.2572C259.384 56.0581 250.086 52.4013 232.092 52.4013C211.848 52.4013 205.025 57.3533 205.025 67.0286C205.025 75.7136 210.499 81.1227 229.918 81.9607C244.238 82.4178 245.813 84.0177 245.813 86.227C245.813 88.5887 243.489 89.6553 233.442 89.6553C221.895 89.6553 218.971 88.0554 218.971 84.7795V84.3224Z" fill="white"/>
<path d="M284.955 44.1734C279.482 49.2778 269.66 54.3821 264.187 55.7534C264.262 58.5722 264.262 63.7527 264.262 66.5715L269.285 66.6477C269.21 72.0568 269.135 78.6086 269.135 82.9511C269.135 93.0835 274.458 100.702 291.028 100.702C298.001 100.702 302.65 99.9401 308.423 98.7212C307.823 94.9881 307.148 89.2743 306.923 84.9319C303.475 86.0746 299.126 86.6841 294.327 86.6841C287.654 86.6841 284.955 84.8557 284.955 79.599C284.955 75.028 284.955 70.7616 285.03 66.8001C293.578 66.8763 302.125 67.0286 307.148 67.181C307.073 63.2194 307.223 57.5056 307.448 53.6964C300.176 53.8488 292.003 53.925 285.255 53.925C285.33 50.5729 285.405 47.3732 285.48 44.1734H284.955Z" fill="white"/>
<path d="M329.736 64.286C329.811 60.3244 329.886 56.9724 329.961 53.6964H314.89C315.115 60.2483 315.115 66.9525 315.115 76.7802C315.115 86.6079 315.04 93.3883 314.89 99.8639H332.135C331.835 95.2929 331.76 87.5983 331.76 81.0465C331.76 70.6855 335.959 67.7143 345.481 67.7143C349.905 67.7143 353.054 68.2476 355.828 69.238C355.903 65.3526 356.653 57.8104 357.102 54.4583C354.253 53.6203 351.104 53.087 347.28 53.087C339.108 53.0108 333.11 56.3629 330.336 64.3622L329.736 64.286Z" fill="white"/>
<path d="M404.808 76.4754C404.808 84.7795 398.81 88.6649 389.363 88.6649C379.991 88.6649 373.993 85.008 373.993 76.4754C373.993 67.9428 380.066 64.7431 389.363 64.7431C398.735 64.7431 404.808 68.1714 404.808 76.4754ZM420.478 76.0945C420.478 59.5626 407.582 52.1728 389.363 52.1728C371.069 52.1728 358.623 59.5626 358.623 76.0945C358.623 92.5503 370.244 101.388 389.288 101.388C408.482 101.388 420.478 92.5503 420.478 76.0945Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_1_33" x1="61.0003" y1="136" x2="104.622" y2="115.39" gradientUnits="userSpaceOnUse">
<stop stop-color="#D83333"/>
<stop offset="1" stop-color="#F041FF"/>
</linearGradient>
</defs>
</svg>
</div>
</a>

There are many reasons why I decided to use Astro. This list summarizes them
very well but I will give more details throughout the article.

- Server-side rendering (SSR)
- Integrations with development tools (Tailwind, Prettier, ESLint, etc.)
- Component reusability
- Framework-agnostic
- Really easy to learn and use specially if you are familiar with HTML, CSS,
  and/or JavaScript frameworks like React, Vue, or Svelte.

# The Design

Once the decision to use Astro was made, the next step was to define the design
of the website. For this, I decided to get inspired by a Bento design thinking
also that this would make it easy for me to adapt it to mobile devices. In
addition, I decided to use Tailwind CSS to style the website.

This article about Bento boxes talks in more detail about this type of design.
<a href="https://bootcamp.uxdesign.cc/web-design-trend-bento-box-95814d99ac62"
target="_blank" rel="noopener noreferrer" title="Web design trend: bento
box">Web design trend: bento box</a>

# The Development

## Package Manager: Bun

Once the design was defined, it was time to get to start the job. The first
thing you usually do when you start a project is to create the project structure
using your favorite package manager. Since a while ago I have been using <a
href="https://pnpm.io" rel="noopener noreferrer" target="_blank"
title="Pnpm.io">pnpm</a> and I really like it. It's very fast and efficient, it
has a very good caching system, and it's very easy to use.

Indeed it is my preferred package manager for all my TS/JS projects. However,
since this is a personal project, I felt free to continue exploring the new JS
runtime tool <a href="https://bun.sh" rel="noopener noreferrer" target="_blank"
title="Bun.sh">Bun</a>. Bun is a new package manager that is still in its early
stages. It's very fast and efficient, it has a very good caching system, and
it's easy to use and setup.

<a href="https://bun.sh" rel="noopener noreferrer" target="_blank"
title="Bun.sh">

<div class="flex items-center justify-center gap-2 m-4">
<img src="data:image/svg+xml;base64, PHN2ZyBpZD0iQnVuIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MCA3MCI+PHRpdGxlPkJ1biBMb2dvPC90aXRsZT48cGF0aCBpZD0iU2hhZG93IiBkPSJNNzEuMDksMjAuNzRjLS4xNi0uMTctLjMzLS4zNC0uNS0uNXMtLjMzLS4zNC0uNS0uNS0uMzMtLjM0LS41LS41LS4zMy0uMzQtLjUtLjUtLjMzLS4zNC0uNS0uNS0uMzMtLjM0LS41LS41LS4zMy0uMzQtLjUtLjVBMjYuNDYsMjYuNDYsMCwwLDEsNzUuNSwzNS43YzAsMTYuNTctMTYuODIsMzAuMDUtMzcuNSwzMC4wNS0xMS41OCwwLTIxLjk0LTQuMjMtMjguODMtMTAuODZsLjUuNS41LjUuNS41LjUuNS41LjUuNS41LjUuNUMxOS41NSw2NS4zLDMwLjE0LDY5Ljc1LDQyLDY5Ljc1YzIwLjY4LDAsMzcuNS0xMy40OCwzNy41LTMwQzc5LjUsMzIuNjksNzYuNDYsMjYsNzEuMDksMjAuNzRaIi8+PGcgaWQ9IkJvZHkiPjxwYXRoIGlkPSJCYWNrZ3JvdW5kIiBkPSJNNzMsMzUuN2MwLDE1LjIxLTE1LjY3LDI3LjU0LTM1LDI3LjU0UzMsNTAuOTEsMywzNS43QzMsMjYuMjcsOSwxNy45NCwxOC4yMiwxM1MzMy4xOCwzLDM4LDNzOC45NCw0LjEzLDE5Ljc4LDEwQzY3LDE3Ljk0LDczLDI2LjI3LDczLDM1LjdaIiBzdHlsZT0iZmlsbDojZmJmMGRmIi8+PHBhdGggaWQ9IkJvdHRvbV9TaGFkb3ciIGRhdGEtbmFtZT0iQm90dG9tIFNoYWRvdyIgZD0iTTczLDM1LjdhMjEuNjcsMjEuNjcsMCwwLDAtLjgtNS43OGMtMi43MywzMy4zLTQzLjM1LDM0LjktNTkuMzIsMjQuOTRBNDAsNDAsMCwwLDAsMzgsNjMuMjRDNTcuMyw2My4yNCw3Myw1MC44OSw3MywzNS43WiIgc3R5bGU9ImZpbGw6I2Y2ZGVjZSIvPjxwYXRoIGlkPSJMaWdodF9TaGluZSIgZGF0YS1uYW1lPSJMaWdodCBTaGluZSIgZD0iTTI0LjUzLDExLjE3QzI5LDguNDksMzQuOTQsMy40Niw0MC43OCwzLjQ1QTkuMjksOS4yOSwwLDAsMCwzOCwzYy0yLjQyLDAtNSwxLjI1LTguMjUsMy4xMy0xLjEzLjY2LTIuMywxLjM5LTMuNTQsMi4xNS0yLjMzLDEuNDQtNSwzLjA3LTgsNC43QzguNjksMTguMTMsMywyNi42MiwzLDM1LjdjMCwuNCwwLC44LDAsMS4xOUM5LjA2LDE1LjQ4LDIwLjA3LDEzLjg1LDI0LjUzLDExLjE3WiIgc3R5bGU9ImZpbGw6I2ZmZmVmYyIvPjxwYXRoIGlkPSJUb3AiIGQ9Ik0zNS4xMiw1LjUzQTE2LjQxLDE2LjQxLDAsMCwxLDI5LjQ5LDE4Yy0uMjguMjUtLjA2LjczLjMuNTksMy4zNy0xLjMxLDcuOTItNS4yMyw2LTEzLjE0QzM1LjcxLDUsMzUuMTIsNS4xMiwzNS4xMiw1LjUzWm0yLjI3LDBBMTYuMjQsMTYuMjQsMCwwLDEsMzksMTljLS4xMi4zNS4zMS42NS41NS4zNkM0MS43NCwxNi41Niw0My42NSwxMSwzNy45Myw1LDM3LjY0LDQuNzQsMzcuMTksNS4xNCwzNy4zOSw1LjQ5Wm0yLjc2LS4xN0ExNi40MiwxNi40MiwwLDAsMSw0NywxNy4xMmEuMzMuMzMsMCwwLDAsLjY1LjExYy45Mi0zLjQ5LjQtOS40NC03LjE3LTEyLjUzQzQwLjA4LDQuNTQsMzkuODIsNS4wOCw0MC4xNSw1LjMyWk0yMS42OSwxNS43NmExNi45NCwxNi45NCwwLDAsMCwxMC40Ny05Yy4xOC0uMzYuNzUtLjIyLjY2LjE4LTEuNzMsOC03LjUyLDkuNjctMTEuMTIsOS40NUMyMS4zMiwxNi40LDIxLjMzLDE1Ljg3LDIxLjY5LDE1Ljc2WiIgc3R5bGU9ImZpbGw6I2NjYmVhNztmaWxsLXJ1bGU6ZXZlbm9kZCIvPjxwYXRoIGlkPSJPdXRsaW5lIiBkPSJNMzgsNjUuNzVDMTcuMzIsNjUuNzUuNSw1Mi4yNy41LDM1LjdjMC0xMCw2LjE4LTE5LjMzLDE2LjUzLTI0LjkyLDMtMS42LDUuNTctMy4yMSw3Ljg2LTQuNjIsMS4yNi0uNzgsMi40NS0xLjUxLDMuNi0yLjE5QzMyLDEuODksMzUsLjUsMzgsLjVzNS42MiwxLjIsOC45LDMuMTRjMSwuNTcsMiwxLjE5LDMuMDcsMS44NywyLjQ5LDEuNTQsNS4zLDMuMjgsOSw1LjI3QzY5LjMyLDE2LjM3LDc1LjUsMjUuNjksNzUuNSwzNS43LDc1LjUsNTIuMjcsNTguNjgsNjUuNzUsMzgsNjUuNzVaTTM4LDNjLTIuNDIsMC01LDEuMjUtOC4yNSwzLjEzLTEuMTMuNjYtMi4zLDEuMzktMy41NCwyLjE1LTIuMzMsMS40NC01LDMuMDctOCw0LjdDOC42OSwxOC4xMywzLDI2LjYyLDMsMzUuNywzLDUwLjg5LDE4LjcsNjMuMjUsMzgsNjMuMjVTNzMsNTAuODksNzMsMzUuN0M3MywyNi42Miw2Ny4zMSwxOC4xMyw1Ny43OCwxMyw1NCwxMSw1MS4wNSw5LjEyLDQ4LjY2LDcuNjRjLTEuMDktLjY3LTIuMDktMS4yOS0zLTEuODRDNDIuNjMsNCw0MC40MiwzLDM4LDNaIi8+PC9nPjxnIGlkPSJNb3V0aCI+PGcgaWQ9IkJhY2tncm91bmQtMiIgZGF0YS1uYW1lPSJCYWNrZ3JvdW5kIj48cGF0aCBkPSJNNDUuMDUsNDNhOC45Myw4LjkzLDAsMCwxLTIuOTIsNC43MSw2LjgxLDYuODEsMCwwLDEtNCwxLjg4QTYuODQsNi44NCwwLDAsMSwzNCw0Ny43MSw4LjkzLDguOTMsMCwwLDEsMzEuMTIsNDNhLjcyLjcyLDAsMCwxLC44LS44MUg0NC4yNkEuNzIuNzIsMCwwLDEsNDUuMDUsNDNaIiBzdHlsZT0iZmlsbDojYjcxNDIyIi8+PC9nPjxnIGlkPSJUb25ndWUiPjxwYXRoIGlkPSJCYWNrZ3JvdW5kLTMiIGRhdGEtbmFtZT0iQmFja2dyb3VuZCIgZD0iTTM0LDQ3Ljc5YTYuOTEsNi45MSwwLDAsMCw0LjEyLDEuOSw2LjkxLDYuOTEsMCwwLDAsNC4xMS0xLjksMTAuNjMsMTAuNjMsMCwwLDAsMS0xLjA3LDYuODMsNi44MywwLDAsMC00LjktMi4zMSw2LjE1LDYuMTUsMCwwLDAtNSwyLjc4QzMzLjU2LDQ3LjQsMzMuNzYsNDcuNiwzNCw0Ny43OVoiIHN0eWxlPSJmaWxsOiNmZjYxNjQiLz48cGF0aCBpZD0iT3V0bGluZS0yIiBkYXRhLW5hbWU9Ik91dGxpbmUiIGQ9Ik0zNC4xNiw0N2E1LjM2LDUuMzYsMCwwLDEsNC4xOS0yLjA4LDYsNiwwLDAsMSw0LDEuNjljLjIzLS4yNS40NS0uNTEuNjYtLjc3YTcsNywwLDAsMC00LjcxLTEuOTMsNi4zNiw2LjM2LDAsMCwwLTQuODksMi4zNkE5LjUzLDkuNTMsMCwwLDAsMzQuMTYsNDdaIi8+PC9nPjxwYXRoIGlkPSJPdXRsaW5lLTMiIGRhdGEtbmFtZT0iT3V0bGluZSIgZD0iTTM4LjA5LDUwLjE5YTcuNDIsNy40MiwwLDAsMS00LjQ1LTIsOS41Miw5LjUyLDAsMCwxLTMuMTEtNS4wNSwxLjIsMS4yLDAsMCwxLC4yNi0xLDEuNDEsMS40MSwwLDAsMSwxLjEzLS41MUg0NC4yNmExLjQ0LDEuNDQsMCwwLDEsMS4xMy41MSwxLjE5LDEuMTksMCwwLDEsLjI1LDFoMGE5LjUyLDkuNTIsMCwwLDEtMy4xMSw1LjA1QTcuNDIsNy40MiwwLDAsMSwzOC4wOSw1MC4xOVptLTYuMTctNy40Yy0uMTYsMC0uMi4wNy0uMjEuMDlhOC4yOSw4LjI5LDAsMCwwLDIuNzMsNC4zN0E2LjIzLDYuMjMsMCwwLDAsMzguMDksNDlhNi4yOCw2LjI4LDAsMCwwLDMuNjUtMS43Myw4LjMsOC4zLDAsMCwwLDIuNzItNC4zNy4yMS4yMSwwLDAsMC0uMi0uMDlaIi8+PC9nPjxnIGlkPSJGYWNlIj48ZWxsaXBzZSBpZD0iUmlnaHRfQmx1c2giIGRhdGEtbmFtZT0iUmlnaHQgQmx1c2giIGN4PSI1My4yMiIgY3k9IjQwLjE4IiByeD0iNS44NSIgcnk9IjMuNDQiIHN0eWxlPSJmaWxsOiNmZWJiZDAiLz48ZWxsaXBzZSBpZD0iTGVmdF9CbHVjaCIgZGF0YS1uYW1lPSJMZWZ0IEJsdWNoIiBjeD0iMjIuOTUiIGN5PSI0MC4xOCIgcng9IjUuODUiIHJ5PSIzLjQ0IiBzdHlsZT0iZmlsbDojZmViYmQwIi8+PHBhdGggaWQ9IkV5ZXMiIGQ9Ik0yNS43LDM4LjhhNS41MSw1LjUxLDAsMSwwLTUuNS01LjUxQTUuNTEsNS41MSwwLDAsMCwyNS43LDM4LjhabTI0Ljc3LDBBNS41MSw1LjUxLDAsMSwwLDQ1LDMzLjI5LDUuNSw1LjUsMCwwLDAsNTAuNDcsMzguOFoiIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZCIvPjxwYXRoIGlkPSJJcmlzIiBkPSJNMjQsMzMuNjRhMi4wNywyLjA3LDAsMSwwLTIuMDYtMi4wN0EyLjA3LDIuMDcsMCwwLDAsMjQsMzMuNjRabTI0Ljc3LDBhMi4wNywyLjA3LDAsMSwwLTIuMDYtMi4wN0EyLjA3LDIuMDcsMCwwLDAsNDguNzUsMzMuNjRaIiBzdHlsZT0iZmlsbDojZmZmO2ZpbGwtcnVsZTpldmVub2RkIi8+PC9nPjwvc3ZnPg==" alt="Bun logo" id="logo" class="h-12">
<img alt="Bun" class="block h-7 dark:hidden" src="data:image/png;base64, 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" width="120"><img alt="Bun" class="hidden h-7 dark:block" src="data:image/png;base64, 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" >
</div>
</a>

<a href="https://bun.sh" rel="noopener noreferrer" target="_blank"
title="Bun.sh">Bun</a> is an all-in-one JavaScript runtime & toolkit designed
for speed, complete with a bundler, test runner, and Node.js-compatible
package manager.

## Development tools

### Rules and Syntax: ESLint

<a href="https://eslint.org/" rel="noopener noreferrer" target="_blank"
title="Eslint">ESLint</a> is a tool for identifying and reporting on patterns
found in ECMAScript/JavaScript code, with the goal of making code more
consistent and avoiding bugs.

<div align="center" class="m-4">
<a href="https://eslint.org/" rel="noopener noreferrer" target="_blank" title="Eslint">
<svg class="brand-logo" width="130" viewBox="0 0 203 58" fill="currentColor" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ESLint logo">
    <path d="M46.5572 21.1093L34.0167 13.8691C33.7029 13.6879 33.3161 13.6879 33.0023 13.8691L20.4616 21.1093C20.148 21.2905 19.9543 21.6253 19.9543 21.9878V36.4681C19.9543 36.8304 20.148 37.1654 20.4616 37.347L33.0023 44.5871C33.3161 44.7684 33.7029 44.7684 34.0167 44.5871L46.5572 37.347C46.871 37.1657 47.0644 36.8306 47.0644 36.4681V21.9878C47.0641 21.6253 46.8707 21.2905 46.5572 21.1093Z" fill="#8080F2" id="logo-center" class="logo-component"></path>
    <path d="M0.904381 27.7046L15.8878 1.63772C16.4321 0.695223 17.4375 0 18.5258 0H48.4931C49.5817 0 50.5873 0.695223 51.1316 1.63772L66.115 27.6471C66.6593 28.5899 66.6593 29.7796 66.115 30.7224L51.1316 56.5756C50.5873 57.5181 49.5817 58 48.4931 58H18.526C17.4377 58 16.4321 57.5326 15.8881 56.5899L0.90464 30.6944C0.359854 29.7522 0.359854 28.6471 0.904381 27.7046ZM13.3115 40.2393C13.3115 40.6225 13.5422 40.977 13.8744 41.1689L32.96 52.1803C33.2919 52.3719 33.7078 52.3719 34.0397 52.1803L53.1401 41.1689C53.4721 40.977 53.7043 40.6228 53.7043 40.2393V18.2161C53.7043 17.8327 53.4754 17.4785 53.1432 17.2866L34.0584 6.27513C33.7264 6.08327 33.3111 6.08327 32.9792 6.27513L13.8775 17.2866C13.5453 17.4785 13.3115 17.8327 13.3115 18.2161V40.2393V40.2393Z" fill="#4B32C3" class="logo-component"></path>
    <path d="M86.6971 43.7102V14.2899H105.442V18.871H91.7826V26.6044H104.265V31.1855H91.7826V39.129H105.652V43.7102H86.6971Z" class="logo-component"></path>
    <path d="M118.919 44.2986C116.678 44.2986 114.688 43.9063 112.951 43.1218C111.242 42.3092 109.897 41.1464 108.916 39.6334C107.936 38.1203 107.445 36.271 107.445 34.0855V32.9928H112.447V34.0855C112.447 36.0189 113.035 37.4619 114.212 38.4145C115.389 39.3672 116.958 39.8435 118.919 39.8435C120.909 39.8435 122.408 39.4372 123.416 38.6247C124.425 37.8121 124.929 36.7614 124.929 35.4725C124.929 34.6039 124.691 33.9034 124.215 33.371C123.739 32.8107 123.038 32.3623 122.113 32.0261C121.217 31.6899 120.124 31.3677 118.835 31.0594L117.574 30.8073C115.641 30.359 113.96 29.7986 112.531 29.1261C111.13 28.4256 110.051 27.529 109.295 26.4363C108.538 25.3435 108.16 23.9145 108.16 22.1493C108.16 20.3841 108.58 18.871 109.421 17.6102C110.261 16.3493 111.452 15.3826 112.993 14.7102C114.534 14.0377 116.341 13.7015 118.415 13.7015C120.488 13.7015 122.338 14.0517 123.963 14.7522C125.588 15.4527 126.863 16.5034 127.787 17.9044C128.74 19.3053 129.216 21.0566 129.216 23.158V24.545H124.215V23.158C124.215 21.9532 123.977 20.9865 123.5 20.258C123.024 19.5295 122.352 18.9971 121.483 18.6609C120.614 18.3247 119.592 18.1566 118.415 18.1566C116.678 18.1566 115.361 18.4928 114.464 19.1652C113.568 19.8377 113.119 20.7904 113.119 22.0232C113.119 22.8078 113.315 23.4802 113.708 24.0406C114.128 24.573 114.73 25.0213 115.515 25.3855C116.327 25.7218 117.336 26.016 118.541 26.2681L119.802 26.5623C121.819 27.0107 123.584 27.5851 125.098 28.2855C126.611 28.958 127.787 29.8546 128.628 30.9754C129.497 32.0962 129.931 33.5532 129.931 35.3464C129.931 37.1116 129.469 38.6667 128.544 40.0116C127.647 41.3566 126.372 42.4073 124.719 43.1638C123.094 43.9203 121.161 44.2986 118.919 44.2986Z"  class="logo-component"></path>
    <path d="M133.1 43.7102V14.2899H138.185V39.129H151.971V43.7102H133.1Z" class="logo-component"></path>
    <path d="M154.827 43.7102V22.9479H159.661V43.7102H154.827ZM157.223 20.3C156.354 20.3 155.598 20.0198 154.954 19.4595C154.337 18.871 154.029 18.1005 154.029 17.1479C154.029 16.1952 154.337 15.4387 154.954 14.8783C155.598 14.2899 156.354 13.9957 157.223 13.9957C158.148 13.9957 158.904 14.2899 159.493 14.8783C160.109 15.4387 160.417 16.1952 160.417 17.1479C160.417 18.1005 160.109 18.871 159.493 19.4595C158.904 20.0198 158.148 20.3 157.223 20.3Z" class="logo-component"></path>
    <path d="M164.525 43.7102V22.9479H169.275V25.8479H169.989C170.353 25.0633 171.012 24.3208 171.964 23.6203C172.917 22.9198 174.36 22.5696 176.293 22.5696C177.891 22.5696 179.305 22.9338 180.538 23.6623C181.771 24.3909 182.724 25.3995 183.396 26.6884C184.097 27.9773 184.447 29.5044 184.447 31.2696V43.7102H179.614V31.6479C179.614 29.9667 179.193 28.7198 178.353 27.9073C177.54 27.0667 176.377 26.6464 174.864 26.6464C173.155 26.6464 171.81 27.2208 170.83 28.3696C169.849 29.4904 169.359 31.1015 169.359 33.2029V43.7102H164.525Z" class="logo-component"></path>
    <path d="M196.449 43.7102C195.104 43.7102 194.025 43.3179 193.213 42.5334C192.428 41.7208 192.036 40.6281 192.036 39.2551V26.9406H186.614V22.9479H192.036V16.2652H196.869V22.9479H202.837V26.9406H196.869V38.4566C196.869 39.2971 197.262 39.7174 198.046 39.7174H202.207V43.7102H196.449Z" class="logo-component"></path>
</svg>
</a>
</div>

<!--
Eslint es parte de mis herramientas infaltables a la hora de desarrollar casi cualquier proyecto de JS, tener tu código formateado no sólo te ayuda a hacerlo más mantenible y legible, sino que también te ayuda a evitar errores y a escribir código más limpio. Lo cuál también es muy útil cuando trabajas en equipo.
-->

EsLint is part of my infallible tools when developing almost any JS project,
having your code formatted not only helps you make it more maintainable and
readable, but it also helps you avoid errors and write cleaner code. Which is
also very useful when working as a team.

### Formatting: Prettier

<a href="https://prettier.io" target="_blank" rel="noopener noreferrer"
title="Prettier.io">Prettier</a> is an opinionated code formatter. It enforces a
consistent style by parsing your code and re-printing it with its own rules that
take the maximum line length into account, wrapping code when necessary.

If you use the Astro VsCode extension, it will automatically format your code
with Prettier.

### Styles: Tailwind CSS

<a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer"
title="Tailwind CSS">Tailwind CSS</a> is a CSS framework that allows you to
create styles quickly and easily. It's very easy to learn and use. In addition,
it's very flexible and allows you to create custom styles. For example, you can
create your own colors, sizes, spacings, etc.

<a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer"
title="Tailwind CSS">

<div align="center" class="m-4">
<svg viewBox="0 0 248 31" class="w-auto h-5"><path d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z" fill="#38bdf8"></path><path d="M76.546 12.825h-4.453v8.567c0 2.285 1.508 2.249 4.453 2.106v3.463c-5.962.714-8.332-.928-8.332-5.569v-8.567H64.91V9.112h3.304V4.318l3.879-1.143v5.937h4.453v3.713zM93.52 9.112h3.878v17.849h-3.878v-2.57c-1.365 1.891-3.484 3.034-6.285 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.285 2.999V9.112zm-5.674 14.636c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm16.016-17.313c-1.364 0-2.477-1.142-2.477-2.463a2.475 2.475 0 012.477-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.879v17.849h-3.879zm8.368 0V.9h3.878v26.06h-3.878zm29.053-17.849h4.094l-5.638 17.849h-3.807l-3.735-12.03-3.771 12.03h-3.806l-5.639-17.849h4.094l3.484 12.315 3.771-12.315h3.699l3.734 12.315 3.52-12.315zm8.906-2.677c-1.365 0-2.478-1.142-2.478-2.463a2.475 2.475 0 012.478-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.878v17.849h-3.878zm17.812-18.313c4.022 0 6.895 2.713 6.895 7.354V26.96h-3.878V16.394c0-2.713-1.58-4.14-4.022-4.14-2.55 0-4.561 1.499-4.561 5.14v9.567h-3.879V9.112h3.879v2.285c1.185-1.856 3.124-2.749 5.566-2.749zm25.282-6.675h3.879V26.96h-3.879v-2.57c-1.364 1.892-3.483 3.034-6.284 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.284 2.999V1.973zm-5.674 21.775c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm22.553 3.677c-5.423 0-9.481-4.105-9.481-9.389 0-5.318 4.058-9.388 9.481-9.388 3.519 0 6.572 1.82 8.008 4.605l-3.34 1.928c-.79-1.678-2.549-2.749-4.704-2.749-3.16 0-5.566 2.392-5.566 5.604 0 3.213 2.406 5.605 5.566 5.605 2.155 0 3.914-1.107 4.776-2.749l3.34 1.892c-1.508 2.82-4.561 4.64-8.08 4.64zm14.472-13.387c0 3.249 9.661 1.285 9.661 7.89 0 3.57-3.125 5.497-7.003 5.497-3.591 0-6.177-1.607-7.326-4.177l3.34-1.927c.574 1.606 2.011 2.57 3.986 2.57 1.724 0 3.052-.571 3.052-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.909-5.462 6.572-5.462 2.945 0 5.387 1.357 6.644 3.713l-3.268 1.82c-.647-1.392-1.904-2.035-3.376-2.035-1.401 0-2.622.607-2.622 1.892zm16.556 0c0 3.249 9.66 1.285 9.66 7.89 0 3.57-3.124 5.497-7.003 5.497-3.591 0-6.176-1.607-7.326-4.177l3.34-1.927c.575 1.606 2.011 2.57 3.986 2.57 1.724 0 3.053-.571 3.053-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.908-5.462 6.572-5.462 2.944 0 5.386 1.357 6.643 3.713l-3.268 1.82c-.646-1.392-1.903-2.035-3.375-2.035-1.401 0-2.622.607-2.622 1.892z" fill="currentColor"></path></svg>
</div>
</a>

The truth about Tailwind CSS could write a whole article. It's just fascinating.
If you want to know more about Tailwind CSS, I recommend the following article
with 7 benefits that the framework offers: <a
href="https://medium.com/@ccsstudios/embracing-the-utility-first-paradigm-benefits-of-tailwind-css-47f7922cf3fa"
target="_blank" rel="noopener noreferrer" title="Embracing the Utility-First
Paradigm: Benefits of Tailwind CSS">Embracing the Utility-First Paradigm:
Benefits of Tailwind CSS</a>

By my side, I can say that I love Tailwind CSS. Overall, it's very practical and
fast to integrate into any project. The optimizations it offers are just the
icing on the cake.

### Husky

<a href="https://typicode.github.io/husky/#/" target="_blank" rel="noopener
noreferrer" title="Husky">Husky</a> is a tool that allows you to run scripts
when you commit or push code to your repository. This is very useful to run
tests, linting, or any other pre-commit/pre-push task.

Check out the <a href="https://typicode.github.io/husky/#/" target="_blank"
rel="noopener noreferrer" title="Husky docs">Husky documentation</a> for more
information.

### Fonts: Fontsource

<a href="https://fontsource.org/" target="_blank" rel="noopener noreferrer"
title="Fontsource">Fontsource</a> is a collection of open-source fonts that are
packaged into individual NPM packages for self-hosting in your web applications.
Check out the <a href="https://fontsource.org/docs/getting-started/introduction"
target="_blank" rel="noopener noreferrer" title="Fontsource docs">Fontsource
documentation</a> for more information about the benefits and advantages of
using this tool.

### Client Components: Preact

<!--
En un principio no me planteaba la idea de usar componentes en el cliente,
ya que asumía que no iba a necesitarlos dada la naturaleza estática de la web.
Sin embargo, era menester poder presentar mis proyectos de una forma más
dinámica y me vi en la necesidad de usar componentes interactivos.

Una manera de hacerlo era usando React, el cuál es un framework que me gusta
y me sienta cómodo, pero que no es muy ligero y para efectos de este proyecto
me podía basta con algo más liviano. Es por eso que decidí usar Preact, que
es una alternativa a React que pesa sólo 3kB y que tiene la misma API moderna.

Preact viene también con una implementación de las modernas signals que
permiten crear componentes con estado muy fácilmente.

Para ser más específico, necesitaba un componente que renderizara mis proyectos mediante una sección que se pudiera iterar, y poder cargar los datos de manera dinámica con facilidad.
-->

At first, I didn't consider the idea of using client-side components, since I
assumed that I wouldn't need them given the static nature of the web. However,
it was necessary to be able to present my projects in a more dynamic way and I
found myself in the need to use interactive components.

One way to do this was to use React, which is a framework that I like and feel
comfortable with, but which is not very light and for the purposes of this
project I could do with something lighter. That's why I decided to use Preact,
which is an alternative to React that weighs only 3kB and has the same modern
API.

<a href="https://preactjs.com/" target="_blank" rel="noopener noreferrer"
title="Preactjs">Preact</a> also comes with an implementation of the modern
signals that allow you to create stateful components very easily.

To be more specific, I needed a component that would render my projects through
a section that could be iterated, and to be able to load the data dynamically
with ease.

<a href="https://preactjs.com/" target="_blank" rel="noopener noreferrer"
title="Preactjs">Preact</a> is a fast 3kB alternative to React with the same
modern API. It provides the thinnest possible Virtual DOM abstraction on top of
the DOM. The web is a stable platform, it's time we stopped reimplementing it in
the name of portability. Preact is also a first-class citizen of the web
platform. It differs from other frameworks in that it's meant to be included in
your other assets and deployed as part of your site instead of being used to
create a single-page application (SPA).

<a href="https://preactjs.com/" target="_blank" rel="noopener noreferrer"
title="Preactjs">

<div align="center" class="m-4">
<svg class="logo" height="2em" viewBox="-256 -256 1800 512" style="display:inline-block; margin:-.25em 0 0; vertical-align:middle;" title="Preact"><path d="M0,-256 221.7025033688164,-128 221.7025033688164,128 0,256 -221.7025033688164,128 -221.7025033688164,-128z" fill="white"></path><ellipse cx="0" cy="0" rx="75px" ry="196px" stroke-width="16px" stroke-dasharray="385.68095645046407 61.31904354953595" stroke-dashoffset="113.62864827930852" fill="none" stroke="#673ab8" transform="rotate(52)"></ellipse><ellipse cx="0" cy="0" rx="75px" ry="196px" stroke-width="16px" stroke-dasharray="387.9234823327729 59.07651766722712" stroke-dashoffset="-79.66615674739211" fill="none" stroke="#673ab8" transform="rotate(-52)"></ellipse><circle cx="0" cy="0" r="34" fill="#673ab8"></circle><path fill="white" d="M289.85 25.25L289.85 125L272 125L272-122.63L335.88-122.63Q379.45-122.63 401.59-103.55Q423.73-84.48 423.73-49.13Q423.73-32.85 417.69-19.20Q411.65-5.55 400.27 4.34Q388.90 14.22 372.63 19.74Q356.35 25.25 335.88 25.25L289.85 25.25M289.85 10.90L335.88 10.90Q352.33 10.90 365.27 6.35Q378.23 1.80 387.24-6.25Q396.25-14.30 401.06-25.24Q405.88-36.18 405.88-49.13Q405.88-77.65 388.29-93.05Q370.70-108.45 335.88-108.45L289.85-108.45L289.85 10.90ZM497.58 13.00L497.58 125L479.73 125L479.73-122.63L542.90-122.63Q585.78-122.63 606.95-106.09Q628.13-89.55 628.13-57.53Q628.13-43.35 623.23-31.63Q618.33-19.90 609.14-11.06Q599.95-2.23 587 3.46Q574.05 9.15 557.78 10.90Q561.98 13.52 565.30 17.90L650.53 125L634.95 125Q632.15 125 630.14 123.95Q628.13 122.90 626.20 120.45L546.93 20.00Q543.95 16.15 540.54 14.57Q537.13 13.00 529.95 13.00L497.58 13.00M497.58-0.30L540.63-0.30Q557.08-0.30 570.11-4.24Q583.15-8.18 592.16-15.53Q601.18-22.88 605.90-33.20Q610.63-43.53 610.63-56.48Q610.63-82.90 593.30-95.68Q575.98-108.45 542.90-108.45L497.58-108.45L497.58-0.30ZM843.73-122.63L843.73-107.75L713.35-107.75L713.35-7.65L821.85-7.65L821.85 6.87L713.35 6.87L713.35 110.13L843.73 110.13L843.73 125L695.33 125L695.33-122.63L843.73-122.63ZM1088.55 125L1074.73 125Q1072.28 125 1070.70 123.69Q1069.13 122.38 1068.25 120.28L1039.03 48.35L917.40 48.35L888.35 120.28Q887.65 122.20 885.90 123.60Q884.15 125 881.70 125L868.05 125L969.38-122.63L987.23-122.63L1088.55 125M922.83 35.05L1033.78 35.05L983.20-90.08Q981.98-93.05 980.75-96.81Q979.53-100.58 978.30-104.78Q977.08-100.58 975.85-96.81Q974.63-93.05 973.40-89.90L922.83 35.05ZM1302.40 83.35Q1304.15 83.35 1305.38 84.57L1312.38 92.10Q1304.67 100.33 1295.58 106.89Q1286.47 113.45 1275.71 118.09Q1264.95 122.72 1252.09 125.26Q1239.22 127.80 1223.83 127.80Q1198.10 127.80 1176.66 118.79Q1155.22 109.78 1139.91 93.24Q1124.60 76.70 1116.03 53.25Q1107.45 29.80 1107.45 1.10Q1107.45-27.08 1116.29-50.35Q1125.13-73.63 1141.14-90.34Q1157.15-107.05 1179.46-116.24Q1201.78-125.43 1228.72-125.43Q1242.20-125.43 1253.40-123.41Q1264.60-121.40 1274.31-117.64Q1284.03-113.88 1292.60-108.28Q1301.17-102.68 1309.40-95.33L1303.97-87.45Q1302.58-85.35 1299.60-85.35Q1298.03-85.35 1295.58-87.19Q1293.13-89.03 1289.36-91.74Q1285.60-94.45 1280.26-97.69Q1274.92-100.93 1267.58-103.64Q1260.22-106.35 1250.60-108.19Q1240.97-110.03 1228.72-110.03Q1206.15-110.03 1187.25-102.24Q1168.35-94.45 1154.70-80.01Q1141.05-65.58 1133.44-45.01Q1125.83-24.45 1125.83 1.10Q1125.83 27.35 1133.35 48.00Q1140.88 68.65 1154.17 82.91Q1167.47 97.17 1185.59 104.79Q1203.70 112.40 1224.88 112.40Q1238.17 112.40 1248.59 110.65Q1259 108.90 1267.75 105.40Q1276.50 101.90 1284.03 96.82Q1291.55 91.75 1298.90 84.92Q1299.78 84.22 1300.56 83.79Q1301.35 83.35 1302.40 83.35ZM1530.42-122.63L1530.42-107.40L1443.45-107.40L1443.45 125L1425.60 125L1425.60-107.40L1338.10-107.40L1338.10-122.63L1530.42-122.63Z"></path></svg>
</div>
</a>

### Blog: Markdown

For the blog, I decided to use Markdown. It's a very simple and easy to use
language. In addition, it's very easy to read and write and in addition with
Tailwind CSS it's very easy to style.

I haven't felt the need to use MDX for now, but I don't rule out the possibility
of using it in the future.

### Hosting: Deno Deploy

<a href="https://deno.com/deploy" target="_blank" rel="noopener noreferrer"
title="Deno Deploy">Deno Deploy</a> is a globally distributed platform for
serverless JavaScript applications. Your JavaScript, TypeScript, and WebAssembly
code runs on managed servers geographically close to your users, enabling low
latency and faster response times. Deploy applications run on fast, light-weight
V8 isolates rather than virtual machines, powered by the Deno runtime.

<a href="https://deno.com/deploy" target="_blank" rel="noopener noreferrer"
title="Deno Deploy">

<div align="center" class="m-4 text-[#000]">
<svg class="text-default h-10 flex-none dark:text-gray-900" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Deno Logo"><g clip-path="url(#clip0_29_599)"><path d="M15 0C23.2843 0 30 6.71572 30 15C30 23.2843 23.2843 30 15 30C6.71572 30 0 23.2843 0 15C0 6.71572 6.71572 0 15 0Z" fill="currentColor"></path><path d="M14.6635 22.3394C14.2788 22.2357 13.8831 22.4584 13.7705 22.8381L13.7655 22.8558L12.7694 26.5472L12.7649 26.565C12.6711 26.9498 12.9011 27.3414 13.2858 27.4451C13.6704 27.549 14.0661 27.3263 14.1787 26.9465L14.1837 26.9289L15.1797 23.2375L15.1843 23.2196C15.1911 23.1919 15.1962 23.164 15.1997 23.1362L15.2026 23.1084L15.179 22.9888L15.1445 22.8166L15.1227 22.7091C15.076 22.619 15.0111 22.5396 14.932 22.4759C14.853 22.4123 14.7615 22.3658 14.6635 22.3394ZM7.7224 18.5379C7.70424 18.5741 7.68883 18.6123 7.67658 18.6522L7.66967 18.6763L6.67358 22.3677L6.669 22.3856C6.57525 22.7704 6.80524 23.1619 7.1899 23.2657C7.57451 23.3695 7.97026 23.1469 8.08287 22.7671L8.08779 22.7494L8.99096 19.4023C8.51793 19.1518 8.09336 18.8628 7.7224 18.5379ZM5.34707 14.2929C4.9624 14.1891 4.56666 14.4117 4.4541 14.7915L4.44912 14.8092L3.45303 18.5006L3.44846 18.5184C3.35471 18.9032 3.58469 19.2947 3.96936 19.3985C4.35397 19.5023 4.74971 19.2797 4.86232 18.8999L4.86725 18.8822L5.86334 15.1908L5.86791 15.173C5.96166 14.7882 5.73174 14.3967 5.34707 14.2929ZM27.682 13.4546C27.2973 13.3508 26.9015 13.5734 26.789 13.9532L26.784 13.9709L25.7879 17.6623L25.7833 17.6801C25.6896 18.0649 25.9196 18.4564 26.3042 18.5602C26.6889 18.664 27.0846 18.4414 27.1972 18.0616L27.2021 18.0439L28.1982 14.3525L28.2028 14.3347C28.2965 13.9499 28.0666 13.5584 27.682 13.4546ZM3.17781 8.52527C2.34361 10.0444 1.81243 11.7112 1.61377 13.4329C1.7088 13.5412 1.83381 13.619 1.97301 13.6563C2.35768 13.7602 2.75342 13.5375 2.86598 13.1577L2.87096 13.1401L3.86705 9.44865L3.87162 9.43084C3.96537 9.04599 3.73539 8.65447 3.35072 8.5507C3.2943 8.53547 3.23623 8.52694 3.17781 8.52527ZM25.159 8.5507C24.7744 8.44687 24.3786 8.66953 24.266 9.04933L24.2611 9.06697L23.265 12.7584L23.2604 12.7762C23.1667 13.161 23.3966 13.5526 23.7813 13.6563C24.1659 13.7602 24.5617 13.5375 24.6743 13.1577L24.6792 13.1401L25.6753 9.44865L25.6799 9.43084C25.7736 9.04599 25.5436 8.65447 25.159 8.5507Z" fill="white"></path><path d="M7.51285 5.04065C7.12824 4.93682 6.73249 5.15948 6.61988 5.53929L6.61495 5.55692L5.61886 9.24833L5.61429 9.26614C5.52054 9.65098 5.75052 10.0425 6.13519 10.1463C6.5198 10.2501 6.91554 10.0274 7.02816 9.64764L7.03308 9.63001L8.02917 5.9386L8.03374 5.92079C8.12749 5.53595 7.89751 5.14442 7.51285 5.04065ZM20.3116 5.73845C19.9269 5.63462 19.5312 5.85727 19.4186 6.23708L19.4136 6.25471L18.7443 8.73499C19.1779 8.94915 19.5917 9.20126 19.9809 9.48839L20.0453 9.53643L20.8279 6.63639L20.8324 6.61858C20.9262 6.23374 20.6963 5.84221 20.3116 5.73845ZM13.7968 1.57642C13.3296 1.61771 12.8647 1.68338 12.4043 1.77317L12.3066 1.79263L11.3782 5.23419L11.3736 5.252C11.2799 5.63684 11.5099 6.02837 11.8945 6.13214C12.2792 6.23596 12.6749 6.01331 12.7875 5.6335L12.7924 5.61587L13.7885 1.92446L13.7931 1.90665C13.8196 1.79831 13.8209 1.68533 13.7968 1.57642ZM22.9626 4.1263L22.7669 4.85169L22.7623 4.86944C22.6686 5.25429 22.8986 5.64581 23.2832 5.74958C23.6678 5.85341 24.0636 5.63075 24.1762 5.25095L24.1811 5.23331L24.2025 5.15462C23.8362 4.81205 23.4511 4.49009 23.0491 4.19022L22.9626 4.1263ZM17.1672 1.69677L16.8139 3.00593L16.8094 3.02374C16.7156 3.40858 16.9456 3.80011 17.3303 3.90388C17.7149 4.0077 18.1106 3.78505 18.2233 3.40524L18.2282 3.38761L18.6 2.00966C18.1624 1.88867 17.719 1.79001 17.2714 1.71405L17.1672 1.69677Z" fill="white"></path><path d="M9.69085 24.6253C9.80341 24.2455 10.1992 24.0229 10.5838 24.1266C10.9685 24.2303 11.1984 24.6219 11.1047 25.0068L11.1001 25.0246L10.3872 27.6664L10.2876 27.6297C9.85836 27.4694 9.43765 27.2873 9.0271 27.0839L9.68587 24.6429L9.69085 24.6253Z" fill="white"></path><path d="M14.4141 8.49082C10.0522 8.49082 6.65918 11.2368 6.65918 14.6517C6.65918 17.8769 9.78123 19.9362 14.6211 19.8331C15.0327 19.8243 15.1517 20.1008 15.2856 20.4734C15.4196 20.846 15.7796 22.8097 16.0665 24.3117C16.3233 25.656 16.5842 27.0052 16.7834 28.3596C19.9439 27.9418 22.8663 26.3807 25.0076 24.0261L22.7237 15.5088C22.1544 13.4518 21.489 11.5564 19.7283 10.1794C18.3118 9.07166 16.5122 8.49082 14.4141 8.49082Z" fill="white"></path><path d="M15.3516 10.957C15.8694 10.957 16.2891 11.3767 16.2891 11.8945C16.2891 12.4123 15.8694 12.832 15.3516 12.832C14.8338 12.832 14.4141 12.4123 14.4141 11.8945C14.4141 11.3767 14.8338 10.957 15.3516 10.957Z" fill="currentColor"></path></g><defs><clipPath id="clip0_29_599"><rect width="30" height="30" fill="white"></rect></clipPath></defs></svg>
<svg class="text-default h-6 flex-none dark:text-white" viewBox="0 0 111 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-label="Deno Wordmark"><g clip-path="url(#clip0_737_591)"><path d="M0 27.522V0H13.4572C16.6331 0 19.3553 0.510417 21.6076 1.52315C23.8681 2.53588 25.5937 4.06713 26.7928 6.1088C27.9919 8.15046 28.5995 10.6944 28.5995 13.7407C28.5995 16.787 28 19.331 26.7928 21.3727C25.5856 23.4144 23.86 24.9537 21.6076 25.9826C19.3472 27.0116 16.6331 27.522 13.4572 27.522H0ZM7.64815 21.6725H13.1736C14.3484 21.6725 15.4016 21.5104 16.3414 21.1944C17.2731 20.8704 18.0671 20.4086 18.7234 19.7928C19.3796 19.1771 19.8738 18.4155 20.206 17.5081C20.5382 16.6007 20.7083 15.5718 20.7083 14.4213V13.1007C20.7083 11.9259 20.5382 10.8889 20.206 9.99768C19.8738 9.10648 19.3796 8.34491 18.7234 7.71296C18.0671 7.08912 17.2731 6.61111 16.3414 6.28704C15.4097 5.96296 14.3484 5.80903 13.1736 5.80903H7.64815V21.6725Z" fill="currentColor"></path><path d="M43.9849 28C41.3437 28 39.0671 27.603 37.1551 26.8171C35.2431 26.0312 33.7766 24.8241 32.7477 23.1875C31.7187 21.559 31.2083 19.4769 31.2083 16.941C31.2083 14.4051 31.7187 12.4039 32.7315 10.7674C33.7442 9.13889 35.1863 7.92361 37.0579 7.12153C38.9294 6.31945 41.1412 5.92245 43.7095 5.92245C46.2778 5.92245 48.5544 6.31134 50.4016 7.08102C52.2407 7.8588 53.6505 9.04167 54.6065 10.6458C55.5706 12.25 56.0486 14.2917 56.0486 16.7789V18.3426H38.3785C38.4352 19.4606 38.662 20.4005 39.0833 21.1458C39.4965 21.8912 40.1204 22.4583 40.9468 22.831C41.7731 23.2037 42.8021 23.39 44.0336 23.39C44.7303 23.39 45.3704 23.309 45.9537 23.147C46.537 22.985 47.0637 22.7581 47.5174 22.4664C47.9711 22.1748 48.3275 21.8264 48.5787 21.4213C48.8299 21.0243 48.9757 20.5544 49 20.0197H55.9676C55.9676 21.2755 55.684 22.3935 55.125 23.3819C54.566 24.3704 53.7558 25.2049 52.7025 25.8854C51.6493 26.566 50.3854 27.0845 48.919 27.4491C47.4525 27.8056 45.8079 27.9919 43.993 27.9919L43.9849 28ZM38.419 14.5752H48.7164C48.7164 13.9109 48.603 13.3275 48.3762 12.8333C48.1493 12.3391 47.8252 11.9178 47.3958 11.5694C46.9664 11.2211 46.4641 10.9618 45.8727 10.7917C45.2812 10.6215 44.6412 10.5324 43.9525 10.5324C42.8345 10.5324 41.8785 10.6944 41.1088 11.0104C40.331 11.3345 39.7234 11.7882 39.2859 12.3958C38.8484 12.9954 38.5567 13.7245 38.4271 14.5752H38.419Z" fill="currentColor"></path><path d="M59.5162 27.522V6.40857H65.2037L65.6817 9.65741H66.0058C66.6458 8.80671 67.3912 8.10185 68.2257 7.55093C69.0683 7 69.9838 6.59491 70.9722 6.32755C71.9606 6.06019 72.9734 5.93056 74.0185 5.93056C75.809 5.93056 77.3079 6.23033 78.5231 6.82986C79.7384 7.4294 80.662 8.33681 81.2859 9.55208C81.9097 10.7674 82.2257 12.3067 82.2257 14.1782V27.522H75.2176V15.1424C75.2176 14.5023 75.1285 13.9352 74.9583 13.441C74.7882 12.9468 74.537 12.5417 74.2211 12.2176C73.897 11.8935 73.4919 11.6586 72.9977 11.4965C72.5035 11.3345 71.9526 11.2535 71.3368 11.2535C70.4294 11.2535 69.6111 11.456 68.8738 11.853C68.1366 12.25 67.5613 12.7928 67.1319 13.4734C66.7025 14.1539 66.4919 14.9317 66.4919 15.8148V27.5139H59.5243L59.5162 27.522Z" fill="currentColor"></path><path d="M97.7974 28C95.2049 28 92.9687 27.5949 91.0891 26.7766C89.2095 25.9583 87.7593 24.7431 86.7384 23.1146C85.7257 21.4861 85.2153 19.4282 85.2153 16.941C85.2153 14.4537 85.7257 12.4039 86.7384 10.7674C87.7511 9.13889 89.2014 7.92361 91.0891 7.12153C92.9687 6.31945 95.2049 5.92245 97.7974 5.92245C100.39 5.92245 102.626 6.31945 104.506 7.12153C106.385 7.92361 107.836 9.13889 108.856 10.7674C109.869 12.3958 110.38 14.4537 110.38 16.941C110.38 19.4282 109.869 21.478 108.856 23.1146C107.844 24.7431 106.394 25.9664 104.506 26.7766C102.626 27.5949 100.382 28 97.7974 28ZM97.7974 23.1146C99.0289 23.1146 100.05 22.8877 100.86 22.434C101.678 21.9803 102.278 21.3403 102.667 20.5139C103.056 19.6875 103.25 18.6991 103.25 17.5486V16.39C103.25 15.2396 103.056 14.2431 102.667 13.4086C102.278 12.566 101.678 11.9259 100.86 11.4884C100.042 11.0509 99.0208 10.8241 97.7974 10.8241C96.5741 10.8241 95.5127 11.0428 94.7106 11.4884C93.9086 11.9259 93.3171 12.566 92.9282 13.4086C92.5393 14.2512 92.3449 15.2477 92.3449 16.39V17.5486C92.3449 18.6991 92.5393 19.6875 92.9282 20.5139C93.3171 21.3403 93.9086 21.9803 94.7106 22.434C95.5127 22.8877 96.5417 23.1146 97.7974 23.1146Z" fill="currentColor"></path></g><defs><clipPath id="clip0_737_591"><rect width="110.38" height="28" fill="white"></rect></clipPath></defs></svg>
</div>
</a>

I decided to use Deno Deploy because it's very easy to use and it's free. I
don't have to worry about the server, I just have to worry about the code.

Another reason why I decided to use Deno Deploy is because it's the only adapter
(in my knowledge) that allows me to raise a local preview without having to
deploy. This together with the development tools allow me to get a development
experience very similar to the one I would have with a local server once I have
sent the code to production. To tell the truth my experience with both Deno and
Deno Deploy has been very good and I would like to continue using it in the
future. Great work by Ryan Dahl and the entire Deno team.

## What to include?

Once the entire structure of the site was defined, I started to think about what
I wanted to include on the site. It was evident that I should have a space to
show my projects, so it was the first section I added. The sections of contact,
information about me and projects I am working on should also have a place.
Finally after thinking about it a little bit I decided to also include a blog.
Although I don't consider myself a master in the art of writing, I think it's a
good way to share knowledge and learn more about the topics that interest me.

In this article: <a
href="https://www.freecodecamp.org/news/technical-writing-for-developers-why-you-should-have-a-blog-and-how-to-start-one/"
target="_blank" rel="noopener noreferrer" title="Technical Writing for
Developers – Why You Should Have a Blog and How to Start One">Technical Writing
for Developers – Why You Should Have a Blog and How to Start One</a> the
benefits of having a blog and how to start one are explained very well. It was
one of the reasons why I decided to include a blog on my site.

In resume, I decided to include the following sections:

- Home
- About me
- Projects
- Working on
- Blog
- Contact
- 404

## Revision by MoureDev

On January 5th, when I had only been developing this site for about 4 short
days, I was able to participate in a live portfolio review by <a
href="https://moure.dev/" target="_blank" rel="noopener noreferrer"
title="MoureDev">MoureDev</a>. He is an important voice in the Spanish-speaking developer community and has
been cataloged by Microsoft and GitHub as one of the most influential developers
with categories such as `Most Valuable Professional (Microsoft)` and `GitHub Star`. In this review several portfolios were analyzed
and tips were given to improve them. In my case, I think the review was very
positive and it helped me a lot to improve the design and structure of the site.
Below is the video of the review in case anyone wants to see it.

<iframe class="xl:w-[560px] xl:h-[315px] self-center xl:m-2" src="https://www.youtube.com/embed/zFbTXe1yFGA?si=QFmUL3GfvU1C69aK&amp;start=818" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Removals

Not everything I thought of including on the site ended up being included. Here
is a summary of the things I decided not to include and why.

### Fira Code Nerd Font

Fira Code Nerd Font is a font that includes programming icons. The idea was to
use it to show the icons of the technologies I use on the site and at the same
time use it to have any variety of icons that I needed on the site, such as the
icons of the social networks or the menu buttons. However, this made the site
much heavier, even after having optimized it. Therefore, I decided not to use
it, as it went against my goal of having a site as light as possible.

To replace the icons I was using both free license svgs and those of the <a
href="https://www.npmjs.com/package/simple-icons" target="_blank" rel="noopener
noreferrer" title="simple-icons">simple-icons</a> library, which are very easy
to use and are very light.

### CSS Peeps

CSS Peeps is a library that allows you to add animated characters to a website.
The idea was to use it to add an animated character that represented me on the
site. However, as much as I liked the idea, this made it difficult for me to get
an ideal performance score in the Lighthouse tool. However, as it is a project
that I liked a lot, I have used it to create both the open graph images and the
twitter images of this site.

More information about CSS Peeps at: <a href="https://csspeeps.com/"
target="_blank" rel="noopener noreferrer" title="CSS
Peeps">https://csspeeps.com/</a>

### Typed CSS

Typed CSS is a library that allows you to add text animations to a website. I
used it to add text animations to the site, but I finally decided not to use it
because it made the initial CSS load very heavy.

However, it is a library that is worth trying and that can be very useful to add
text animations to a website in case they are needed.

More information about Typed CSS at: <a href="https://typedcss.com/"
target="_blank" rel="noopener noreferrer" title="Typed
CSS">https://typedcss.com/</a>

## The Result

After several days of development, the site was ready to be published. The
final result is what can be seen on the site currently. Although there are
always things that can be improved, I am very happy with the final result,
because I think it meets all the goals I had set for myself at the beginning.

![Lighthouse Preview Report](https://raw.githubusercontent.com/jamerrq/jamerrq.dev/26345c40eb52575aaed3d94b593af4d93fe9cec5/lib/lighthouse/preview-report.png)

## Conclusion

This site is a project that I have really enjoyed developing. It has allowed me
to learn a lot about web development and the technologies I have used to
develop it. It has also allowed me to learn about topics that I had not touched
before, such as SEO. Finally, it has allowed me to have a personal website that
represents me and that allows me to show my projects and share my knowledge
with the world.

Feel free to check the source code of the site on <a
href="https://github.com/jamerrq/jamerrq.dev" target="_blank" rel="noopener
noreferrer" title="Repository">GitHub</a> and contact me if you have any questions or
suggestions.

Happy coding! Have a nice day!

<br>

## Some References

- <a
  href="https://www.freecodecamp.org/news/technical-writing-for-developers-why-you-should-have-a-blog-and-how-to-start-one/"
  target="_blank" rel="noopener noreferrer" title="Technical Writing for Developers – Why You Should Have a Blog and How to Start One">Technical Writing for Developers – Why You Should Have a Blog and How to Start One</a>
