const LAST_ENTRIES_STYLES = [
  'col-span-6',
  'row-span-5',
  'bg-slate-300/90',
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
  'min-h-[25rem]',
  'overflow-y-auto'
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
    <span class='bg-blue-100 text-blue-800 text-xs font-semibold inline-flex items-center px-2.5 py-0.5 rounded border border-blue-400'>
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
          .filter((entry) => entry.date !== 'Coming soon')
          .sort((a, b) => {
            const dateA = new Date(a.date).getTime()
            if (isNaN(dateA)) return 1
            const dateB = new Date(b.date).getTime()
            if (isNaN(dateB)) return -1
            return -dateA + dateB
          })
          .map((entry, index) => {
            const lastUpdate = entry.lastUpdate || entry.date
            const difference =
              new Date().getTime() - new Date(lastUpdate).getTime()
            const days = Math.floor(difference / (1000 * 60 * 60 * 24))
            const isRecent = days < 7
            return (
              <Fragment key={index}>
                <li class='font-secondary uppercase text-sm xl:text-base py-4 px-4 rounded-[10px] cursor-pointer hover:border-slate-400 dark:hover:border-slate-600/70 dark:border-emerald-200 transition-all ease-in-out flex flex-col gap-2 shadow border-2 relative'>
                  <a
                    href={`${lang === 'en' ? entry.href : entry.hrefEs}`}
                    class='h-full'
                  >
                    <div class='flex flex-col xl:flex-row gap-4'>
                      <div>
                        <span class='font-bold'>
                          {lang === 'en' ? entry.title : entry.titleEs}
                        </span>
                        <Badges badges={entry.tags} />
                      </div>
                      <div class='xl:ml-auto flex flex-col gap-1'>
                        <ReadTimeBadge
                          readTime={entry.readTimeMins}
                          lang={lang}
                        />
                        <span class='px-1 py-0.5 dark:bg-emerald-300/60 bg-emerald-800/60 rounded text-emerald-950 dark:text-emerald-950 text-xs text-center flex gap-1 border'>
                          <svg
                            class='w-4 h-4 text-gray-800 dark:text-emerald-200 inline'
                            aria-hidden='true'
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            fill='none'
                            viewBox='0 0 24 24'
                          >
                            <path
                              stroke='currentColor'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              stroke-width='2'
                              d='M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z'
                            />
                          </svg>

                          {entry.date}
                        </span>
                        {
                          <span
                            class={`px-1 py-0.5 dark:bg-orange-300 bg-orange-800 rounded text-orange-50 dark:text-red-950 text-xs text-center border flex gap-1 ${
                              isRecent ? 'block' : 'hidden'
                            }`}
                            title={
                              lang === 'en'
                                ? 'Updated less than a week ago'
                                : 'Actualizado hace menos de una semana'
                            }
                          >
                            <svg
                              class='w-4 h-4 text-orange-800 dark:text-orange-900'
                              aria-hidden='true'
                              xmlns='http://www.w3.org/2000/svg'
                              width='24'
                              height='24'
                              fill='currentColor'
                              viewBox='0 0 24 24'
                            >
                              <path
                                fill-rule='evenodd'
                                d='M11.32 6.176H5c-1.105 0-2 .949-2 2.118v10.588C3 20.052 3.895 21 5 21h11c1.105 0 2-.948 2-2.118v-7.75l-3.914 4.144A2.46 2.46 0 0 1 12.81 16l-2.681.568c-1.75.37-3.292-1.263-2.942-3.115l.536-2.839c.097-.512.335-.983.684-1.352l2.914-3.086Z'
                                clip-rule='evenodd'
                              />
                              <path
                                fill-rule='evenodd'
                                d='M19.846 4.318a2.148 2.148 0 0 0-.437-.692 2.014 2.014 0 0 0-.654-.463 1.92 1.92 0 0 0-1.544 0 2.014 2.014 0 0 0-.654.463l-.546.578 2.852 3.02.546-.579a2.14 2.14 0 0 0 .437-.692 2.244 2.244 0 0 0 0-1.635ZM17.45 8.721 14.597 5.7 9.82 10.76a.54.54 0 0 0-.137.27l-.536 2.84c-.07.37.239.696.588.622l2.682-.567a.492.492 0 0 0 .255-.145l4.778-5.06Z'
                                clip-rule='evenodd'
                              />
                            </svg>

                            {lang === 'en' ? 'Updated' : 'Actualizado'}
                          </span>
                        }
                      </div>
                    </div>
                  </a>
                </li>
              </Fragment>
            )
          })}
      </ul>
    </article>
  )
}
