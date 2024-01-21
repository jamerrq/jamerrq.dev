const LAST_ENTRIES_STYLES = [
  'col-span-6',
  'row-span-5',
  'bg-slate-300',
  'dark:bg-slate-900',
  'dark:text-slate-300',
  'rounded-sm',
  'flex',
  'flex-col',
  'p-2',
  'font-bold',
  'font-rubik-doodle',
  'w-full',
  'h-full',
  'transition-all',
  'border-2',
  'dark:border-slate-300',
  'border-slate-950',
  'responsive-text-xs',
  'gap-2',
  'text-slate-900',
  'dark:text-slate-300',
  'py-4',
  'px-2',
].join(' ')

import { entries } from '@data/blog.json'

import { Fragment } from 'preact'

export default function LastEntries({ lang = 'en' }: { lang?: string }) {
  return (
    <article class={LAST_ENTRIES_STYLES}>
      <h1 class='dark:text-emerald-300 text-emerald-950 text-2xl xl:text-4xl text-center'>
        - {lang === 'en' ? 'Last Entries' : 'Últimas Entradas'} -
      </h1>
      <ul class='grid grid-cols-[1fr_5fr] gap-3 w-full p-2 responsive-text-sm'>
        <li />
        <li class='dark:text-cyan-300 text-cyan-950 text-xl' />
        {entries.map((entry, index) => {
          return (
            <Fragment key={index}>
              <li class='font-merriweather text-sm xl:text-base text-center'>
                {entry.date}
              </li>
              <li class='font-merriweather text-sm xl:text-base dark:bg-emerald-900 bg-emerald-300 py-1 px-2 rounded-sm cursor-pointer hover:scale-[1.02] transition-all ease-in-out'>
                <a href={`/blog/${lang === 'en' ? entry.href : entry.hrefEs}`}>
                  {lang === 'en' ? entry.title : entry.titleEs}
                </a>
              </li>
            </Fragment>
          )
        })}
      </ul>
    </article>
  )
}
