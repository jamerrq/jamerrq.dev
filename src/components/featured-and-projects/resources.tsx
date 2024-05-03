import { data } from '@data/resources.json'

import { signal, effect } from '@preact/signals'
const index = signal(0)

import { Fragment } from 'preact/jsx-runtime'

import Link from './link'

type ResourceProps = {
  n?: number
}

import { DoubleUp, DoubleDown, DoubleLeft, DoubleRight } from './icons'

import { shuffle } from '@utils'

const shuffleData = shuffle(data)

const DoubleUpButton = ({ _f }: { _f: () => void }) => (
  <div
    class={`-left-3 absolute bg-slate-900 dark:bg-slate-300 rounded-[10px] text-cyan-950 dark:text-cyan-300 fill-current flex flex-wrap items-center justify-center p-1 shadow-md shadow-black/90 xl:hidden`}
  >
    <button onClick={_f} title={'iterate over'}>
      <DoubleUp />
    </button>
  </div>
)

const DoubleDownButton = ({ _f }: { _f: () => void }) => (
  <div
    class={`-right-3 absolute bg-slate-900 dark:bg-slate-300 rounded-[10px] text-cyan-950 dark:text-cyan-300 fill-current flex flex-wrap items-center justify-center p-1 shadow-md shadow-black/90 xl:hidden`}
  >
    <button onClick={_f} title={'iterate over'}>
      <DoubleDown />
    </button>
  </div>
)

const DoubleLeftButton = ({ _f }: { _f: () => void }) => (
  <div class='left-1 absolute bg-slate-900 dark:bg-slate-300 rounded-[10px] text-cyan-950 dark:text-cyan-300 fill-current hidden xl:flex flex-wrap items-center justify-center p-1 shadow-md shadow-black/90'>
    <button onClick={_f} title={'iterate over'}>
      <DoubleLeft />
    </button>
  </div>
)

const DoubleRightButton = ({ _f }: { _f: () => void }) => (
  <div
    class={`right-1 absolute bg-slate-900 dark:bg-slate-300 rounded-[10px] text-cyan-950 dark:text-cyan-300 fill-current hidden xl:flex flex-wrap items-center justify-center p-1 shadow-md shadow-black/90`}
  >
    <button onClick={_f} title={'iterate over'}>
      <DoubleRight />
    </button>
  </div>
)

const n = data.length

effect(() => {
  let interval = setInterval(() => {
    index.value++
    if (index.value >= n) {
      index.value = 0
    }
  }, 14000)
  return function () {
    clearInterval(interval)
  }
})

export default function Resources({ n = 3 }: ResourceProps) {
  const goRight = () => {
    index.value++
    if (index.value > data.length - 1) index.value = 0
  }
  const goLeft = () => {
    index.value--
    if (index.value < 0) index.value = data.length - 1
  }

  return (
    <Fragment>
      {Array.from(Array(n).keys()).map((i) => {
        const resource = shuffleData.at((i + index.value) % data.length)
        return (
          <article
            class={`col-span-2 row-span-4 rounded-[10px] shadow-[0_0_0.1rem_rgb(8_51_68)] flex xl:flex-col gap-5 items-center justify-center font-bold font-primary w-full xl:h-full h-16 transition-all text-cyan-950 dark:text-cyan-300 bg-slate-300/70 dark:bg-slate-900/90 text-base xl:text-2xl px-2 py-1 relative ${i === 1 ? 'px-5' : ''}`}
            key={i}
            id={
              i == 2
                ? 'last-resource'
                : i == 1
                  ? 'middle-resource'
                  : i == 0
                    ? 'first-resource'
                    : ''
            }
          >
            {i === 0 && <DoubleLeftButton _f={goLeft} />}
            {i === 1 && <DoubleUpButton _f={goLeft} />}
            <span>{resource?.title}</span>
            <div class='flex gap-2 items-center justify-center'>
              {resource?.repository && (
                <Link href={resource.repository} title='Repository' />
              )}
              {resource?.website && (
                <Link href={resource.website} title='Website' />
              )}
              {resource?.links?.map((link, _i) => (
                <Link href={link.url} title={link.site} key={_i} />
              ))}
            </div>
            {i === 1 && <DoubleDownButton _f={goRight} />}
            {i === 2 && <DoubleRightButton _f={goRight} />}
          </article>
        )
      })}
    </Fragment>
  )
}
