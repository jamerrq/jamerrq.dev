import { data } from '@data/resources.json'

const RESOURCE_STYLES: string = [
  'col-span-2',
  'row-span-4',
  'rounded-sm',
  'shadow-[0_0_0.3rem_rgb(8_51_68)]', // rgb(8, 51, 68)
  'flex',
  'flex-row',
  'gap-2',
  'items-center',
  'justify-center',
  'font-bold',
  'font-rubik-doodle',
  'w-full',
  'h-full',
  'transition-all',
  'border-2',
  'border-cyan-950',
  'dark:border-cyan-500',
  'text-cyan-950',
  'dark:text-cyan-300',
  'bg-slate-300',
  'dark:bg-slate-900',
  'text-xl',
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
  'rounded-sm',
  'flex',
  'items-center',
  'justify-center',
  'py-1',
  'px-0.5'
].join(' ')

const DoubleUpButton = ({ _f }: { _f: () => void }) => (
  <div class={`left-1 ${BUTTONS_STYLES} xl:hidden`}>
    <button onClick={_f} title={'iterate over'}>
      <DoubleUp />
    </button>
  </div>
)

const DoubleDownButton = ({ _f }: { _f: () => void }) => (
  <div class={`right-1 ${BUTTONS_STYLES} xl:hidden`}>
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
  }
  const goLeft = () => {
    index.value--
    if (index.value < 0) index.value = data.length - 1
  }

  return (
    <Fragment>
      {Array.from(Array(n).keys()).map((i) => {
        // Array.from(Array(n).keys())
        const resource = data.at((i + index.value) % data.length)
        return (
          <article class={RESOURCE_STYLES} key={i}>
            {i === 0 && <DoubleLeftButton _f={goLeft} />}
            {i === 1 && <DoubleUpButton _f={goLeft} />}
            <span>{resource?.title}</span>
            {resource?.repository && (
              <Link href={resource.repository} text='' />
            )}
            {resource?.website && <Link href={resource.website} text='󰖟' />}
            {i === 1 && <DoubleDownButton _f={goRight} />}
            {i === 2 && <DoubleRightButton _f={goRight} />}
          </article>
        )
      })}
    </Fragment>
  )
}
