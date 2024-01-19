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
  'text-black',
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
  'dark:text-slate-300'
].join(' ')

import { entries } from '@data/blog.json'

import { h, Fragment } from 'preact'

export default function LastEntries() {
  return (
    <article class={LAST_ENTRIES_STYLES}>
      <h1 class='dark:text-emerald-300 text-emerald-950'>- Last Entries -</h1>
      <ul class='grid grid-cols-[1fr_7fr] gap-3 w-full p-2 responsive-text-sm'>
        <li class='dark:text-cyan-300 text-cyan-950'>Date</li>
        <li class='dark:text-cyan-300 text-cyan-950'>Title / Título</li>
        {entries.map((entry, index) => {
          return (
            <Fragment key={index}>
              <li class='font-merriweather responsive-text-xxs'>
                {entry.date}
              </li>
              <li class='font-merriweather responsive-text-xxs dark:bg-emerald-900 bg-emerald-300 py-1 px-2 rounded-sm cursor-pointer'>
                <a href={`/blog/${entry.href}`}>
                  {entry.title} / {entry.título}
                </a>
              </li>
            </Fragment>
          )
        })}
      </ul>
    </article>
  )
}
