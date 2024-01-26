import {
  siNodedotjs,
  siExpress,
  siPostgresql,
  siMongodb,
  siSqlite,
  siSequelize,
  siDjango,
  siAstro,
  siNextdotjs,
  siReact,
  siRedux,
  siTailwindcss,
  siCss3,
  siHtml5,
  siSupabase,
  siAzuredevops,
  siAmazonaws,
  siGooglecloud,
  siVisualstudiocode,
  siPostman,
  siEslint,
  siGit,
  siBiome,
  siPrettier,
  siMarkdown,
  siLatex,
  siNotion,
  siGnubash,
  siZsh,
  siNeovim,
  siVim,
  siInsomnia,
  siGithub,
  siGithubactions,
  siVitest,
  siMocha,
  siChai,
  siJest
} from 'simple-icons'

export interface IconProps {
  name: string
  __html: string
  href: string
  hex?: string
}

const icons = {
  backend: [
    {
      name: 'Node.js',
      __html: siNodedotjs.svg,
      hex: `#${siNodedotjs.hex}`,
      href: 'https://nodejs.org/en/'
    },
    {
      name: 'Express',
      __html: siExpress.svg,
      href: 'https://expressjs.com/'
    },
    {
      name: 'PostgreSQL',
      __html: siPostgresql.svg,
      hex: `#${siPostgresql.hex}`,
      href: 'https://www.postgresql.org/'
    },
    {
      name: 'MongoDB',
      __html: siMongodb.svg,
      hex: `#${siMongodb.hex}`,
      href: 'https://www.mongodb.com/'
    },
    {
      name: 'SQLite',
      __html: siSqlite.svg,
      hex: `#${siSqlite.hex}`,
      href: 'https://www.sqlite.org/'
    },
    {
      name: 'Sequelize',
      __html: siSequelize.svg,
      href: 'https://sequelize.org/',
      hex: `#${siSequelize.hex}`
    },
    {
      name: 'Django',
      __html: siDjango.svg,
      href: 'https://www.djangoproject.com/',
      hex: `#${siDjango.hex}`
    }
  ],
  frontend: [
    {
      name: 'Astro',
      __html: siAstro.svg,
      href: 'https://astro.build/',
      hex: `#${siAstro.hex}`
    },
    {
      name: 'Next.js',
      __html: siNextdotjs.svg,
      href: 'https://nextjs.org/',
      hex: `#${siNextdotjs.hex}`
    },
    {
      name: 'React',
      __html: siReact.svg,
      href: 'https://reactjs.org/',
      hex: `#${siReact.hex}`
    },
    {
      name: 'Redux',
      __html: siRedux.svg,
      href: 'https://redux.js.org/',
      hex: `#${siRedux.hex}`
    },
    {
      name: 'Tailwind CSS',
      __html: siTailwindcss.svg,
      href: 'https://tailwindcss.com/',
      hex: `#${siTailwindcss.hex}`
    },
    {
      name: 'CSS3',
      __html: siCss3.svg,
      href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      hex: `#${siCss3.hex}`
    },
    {
      name: 'HTML5',
      __html: siHtml5.svg,
      href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      hex: `#${siHtml5.hex}`
    }
  ],
  cloud: [
    {
      name: 'Supabase',
      __html: siSupabase.svg,
      href: 'https://supabase.io/',
      hex: `#${siSupabase.hex}`
    },
    {
      name: 'Azure DevOps',
      __html: siAzuredevops.svg,
      href: 'https://azure.microsoft.com/en-us/services/devops/',
      hex: `#${siAzuredevops.hex}`
    },
    {
      name: 'AWS',
      __html: siAmazonaws.svg,
      href: 'https://aws.amazon.com/',
      hex: `#${siAmazonaws.hex}`
    },
    {
      name: 'Google Cloud',
      __html: siGooglecloud.svg,
      href: 'https://cloud.google.com/',
      hex: `#${siGooglecloud.hex}`
    }
  ],
  ides: [
    {
      name: 'Visual Studio Code',
      __html: siVisualstudiocode.svg,
      href: 'https://code.visualstudio.com/',
      hex: `#${siVisualstudiocode.hex}`
    },
    {
      name: 'Neovim',
      __html: siNeovim.svg,
      href: 'https://neovim.io/',
      hex: `#${siNeovim.hex}`
    },
    {
      name: 'Vim',
      __html: siVim.svg,
      href: 'https://www.vim.org/',
      hex: `#${siVim.hex}`
    }
  ],
  apis: [
    {
      name: 'Postman',
      __html: siPostman.svg,
      href: 'https://www.postman.com/',
      hex: `#${siPostman.hex}`
    },
    {
      name: 'Insomnia',
      __html: siInsomnia.svg,
      href: 'https://insomnia.rest/',
      hex: `#${siInsomnia.hex}`
    }
  ],
  linters: [
    {
      name: 'ESLint',
      __html: siEslint.svg,
      href: 'https://eslint.org/',
      hex: `#${siEslint.hex}`
    },
    {
      name: 'Prettier',
      __html: siPrettier.svg,
      href: 'https://prettier.io/',
      hex: `#${siPrettier.hex}`
    },
    {
      name: 'Biome',
      __html: siBiome.svg,
      href: 'https://biome.sh/',
      hex: `#${siBiome.hex}`
    }
  ],
  dvc: [
    {
      name: 'Git',
      __html: siGit.svg,
      href: 'https://git-scm.com/',
      hex: `#${siGit.hex}`
    },
    {
      name: 'GitHub',
      __html: siGithub.svg,
      href: 'https://github.com/',
      hex: `#${siGithub.hex}`
    },
    {
      name: 'GitHub Actions',
      __html: siGithubactions.svg,
      href: 'https://docs.github.com/en/actions',
      hex: `#${siGithubactions.hex}`
    }
  ],
  others: [
    {
      name: 'Markdown',
      __html: siMarkdown.svg,
      href: 'https://www.markdownguide.org/',
      hex: `#${siMarkdown.hex}`
    },
    {
      name: 'LaTeX',
      __html: siLatex.svg,
      href: 'https://www.latex-project.org/',
      hex: `#${siLatex.hex}`
    },
    {
      name: 'Notion',
      __html: siNotion.svg,
      href: 'https://www.notion.so/',
      hex: `#${siNotion.hex}`
    },
    {
      name: 'GNU Bash',
      __html: siGnubash.svg,
      href: 'https://www.gnu.org/software/bash/',
      hex: `#${siGnubash.hex}`
    },
    {
      name: 'Zsh',
      __html: siZsh.svg,
      href: 'https://www.zsh.org/',
      hex: `#${siZsh.hex}`
    }
  ],
  testing: [
    {
      name: 'Vite',
      __html: siVitest.svg,
      href: 'https://vitejs.dev/',
      hex: `#${siVitest.hex}`
    },
    {
      name: 'Mocha',
      __html: siMocha.svg,
      href: 'https://mochajs.org/',
      hex: `#${siMocha.hex}`
    },
    {
      name: 'Chai',
      __html: siChai.svg,
      href: 'https://www.chaijs.com/',
      hex: `#${siChai.hex}`
    },
    {
      name: 'Jest',
      __html: siJest.svg,
      href: 'https://jestjs.io/',
      hex: `#${siJest.hex}`
    }
  ]
}

export default icons
