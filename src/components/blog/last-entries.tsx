const LAST_ENTRIES_STYLES = [
  'col-span-6',
  'row-span-5',
  'bg-slate-300/80',
  'dark:bg-slate-900/90',
  'dark:text-slate-300',
  'rounded-[10px]',
  'flex',
  'flex-col',
  'p-2',
  'font-bold',
  'font-primary',
  'w-full',
  'h-full',
  'transition-all',
  'dark:border-slate-300',
  'border-slate-950',
  'gap-2',
  'text-slate-900',
  'dark:text-slate-300',
  'py-4',
  'px-2',
  'min-h-[25rem]'
].join(' ')

import { entries } from '@data/blog.json'

import { Fragment } from 'preact'

function ReadTimeBadge({
  readTime,
  lang = 'en'
}: {
  readTime: string | undefined
  lang?: string
}) {
  if (!readTime) return null
  return (
    <span class='bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded  border border-blue-400'>
      <svg
        class='w-2.5 h-2.5 me-1.5'
        aria-hidden='true'
        fill='currentColor'
        viewBox='0 0 20 20'
      >
        <path d='M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z' />
      </svg>
      {readTime} {lang === 'en' ? 'min read' : 'min de lectura'}
    </span>
  )
}

function Badges({ badges }: { badges?: string[] }) {
  if (!badges) return null
  return (
    <div class='flex flex-wrap gap-2 mt-2'>
      {badges.map((badge, index) => (
        <GenericBadge key={index} text={badge} />
      ))}
    </div>
  )
}

function GenericBadge({ text }: { text: string }) {
  const COLORS = ['yellow', 'red', 'teal', 'pink']
  const index = Math.floor(Math.random() * COLORS.length)
  return (
    <span
      class={`bg-${COLORS[index]}-100 text-${COLORS[index]}-800 text-xs font-semibold me-2 px-2.5 py-0.5 rounded-full dark:bg-${COLORS[index]}-900 dark:text-${COLORS[index]}-300`}
    >
      {text}
    </span>
  )
}

export default function LastEntries({ lang = 'en' }: { lang?: string }) {
  return (
    <article class={LAST_ENTRIES_STYLES}>
      <h1 class='dark:text-emerald-300 text-emerald-950 text-2xl xl:text-4xl text-center'>
        - {lang === 'en' ? 'Last Entries' : 'Últimas Entradas'} -
      </h1>
      <ul class='flex flex-col gap-5 w-full h-full p-2'>
        {entries
          .filter(
            (entry) => entry.active !== 'false' && entry.date !== 'Coming soon'
          )
          .sort((a, b) => {
            const dateA = new Date(a.date).getTime()
            if (isNaN(dateA)) return 1
            const dateB = new Date(b.date).getTime()
            if (isNaN(dateB)) return -1
            return -dateB + dateA
          })
          .map((entry, index) => {
            return (
              <Fragment key={index}>
                <li class='font-secondary uppercase text-sm xl:text-base py-4 px-4 rounded-[10px] cursor-pointer hover:bg-slate-400 dark:hover:bg-slate-600/70 border-emerald-200 transition-all ease-in-out flex flex-col gap-2 shadow'>
                  <a
                    href={`${lang === 'en' ? entry.href : entry.hrefEs}`}
                    class='h-full'
                  >
                    <div class='flex flex-col xl:flex-row gap-4'>
                      <span class='font-bold'>
                        {lang === 'en' ? entry.title : entry.titleEs}
                      </span>
                      <div class='xl:ml-auto'>
                        <ReadTimeBadge
                          readTime={entry.readTimeMins}
                          lang={lang}
                        />
                      </div>
                    </div>
                    <Badges badges={entry.tags} />
                  </a>
                  <span class='grow dark:bg-emerald-300/60 bg-emerald-800/60 p-2 rounded text-emerald-300 dark:text-emerald-900'>
                    {entry.date}
                  </span>
                </li>
              </Fragment>
            )
          })}
      </ul>
    </article>
  )
}
