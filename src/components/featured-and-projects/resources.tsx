import { data } from '@data/resources.json'

const RESOURCE_STYLES: string = [
  'col-span-2',
  'row-span-4',
  'rounded-sm',
  'shadow-[0_0_0.1rem_rgb(8_51_68)]', // rgb(8, 51, 68)
  'flex',
  'flex-col',
  'gap-2',
  'items-center',
  'justify-center',
  'font-bold',
  'font-rubik-doodle',
  'w-full',
  'h-full',
  'transition-all',
  // 'border-2',
  // 'border-cyan-950',
  // 'dark:border-cyan-500',
  'text-cyan-950',
  'dark:text-cyan-300',
  'bg-slate-300',
  'dark:bg-slate-900',
  'text-base xl:text-2xl',
  'p-2',
  'relative'
].join(' ')

import { signal } from '@preact/signals'
const index = signal(0)

import { Fragment } from 'preact/jsx-runtime'

import Link from './link'

type ResourceProps = {
  n?: number
}

import { DoubleUp, DoubleDown, DoubleLeft, DoubleRight } from './icons'

const BUTTONS_STYLES = [
  'absolute',
  'bg-cyan-300',
  'rounded-md',
  'flex',
  'flex-wrap',
  'items-center',
  'justify-center',
  'py-1',
  'px-0.5',
  'shadow-md shadow-black/90'
].join(' ')

import { shuffle } from '@utils'

const shuffleData = shuffle(data)

const DoubleUpButton = ({ _f }: { _f: () => void }) => (
  <div class={`-left-3 ${BUTTONS_STYLES} xl:hidden`}>
    <button onClick={_f} title={'iterate over'}>
      <DoubleUp />
    </button>
  </div>
)

const DoubleDownButton = ({ _f }: { _f: () => void }) => (
  <div class={`-right-3 ${BUTTONS_STYLES} xl:hidden`}>
    <button onClick={_f} title={'iterate over'}>
      <DoubleDown />
    </button>
  </div>
)

const DoubleLeftButton = ({ _f }: { _f: () => void }) => (
  <div class={`left-1 ${BUTTONS_STYLES} hidden xl:flex`}>
    <button onClick={_f} title={'iterate over'}>
      <DoubleLeft />
    </button>
  </div>
)

const DoubleRightButton = ({ _f }: { _f: () => void }) => (
  <div class={`right-1 ${BUTTONS_STYLES} hidden xl:flex`}>
    <button onClick={_f} title={'iterate over'}>
      <DoubleRight />
    </button>
  </div>
)

export default function Resources({ n = 3 }: ResourceProps) {
  const goRight = () => {
    index.value++
    if (index.value > data.length - 1) index.value = 0
    const lastResource = document.getElementById('last-resource')
    lastResource?.classList.add('animate-fade-in-left')
    lastResource?.addEventListener('animationend', () => {
      lastResource?.classList.remove('animate-fade-in-left')
    })
  }
  const goLeft = () => {
    index.value--
    if (index.value < 0) index.value = data.length - 1
    const firstResource = document.getElementById('first-resource')
    firstResource?.classList.add('animate-fade-in-right')
    firstResource?.addEventListener('animationend', () => {
      firstResource?.classList.remove('animate-fade-in-right')
    })
  }

  return (
    <Fragment>
      {Array.from(Array(n).keys()).map((i) => {
        // Array.from(Array(n).keys())
        const resource = shuffleData.at((i + index.value) % data.length)
        return (
          <article
            class={`${RESOURCE_STYLES} ${i === 1 ? 'px-5' : ''}`}
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
