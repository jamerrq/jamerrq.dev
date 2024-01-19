import { data } from '@data/resources.json'

const RESOURCE_STYLES: string = [
  'col-span-2',
  'row-span-4',
  'rounded-sm',
  'shadow-[0_0_0.3rem_rgb(8_51_68)]', // rgb(8, 51, 68)
  // 'dark:shadow-[0_0_0.3rem_rgb(103_232_249)]', // rgb(103, 232, 249)
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
  'hover:scale-[1.02]',
  'hover:transition-all',
  'text-xl',
  'p-2'
].join(' ')

import { signal } from '@preact/signals'
const index = signal(0)

import Link from './link'

type ResourceProps = {
  n?: number
}

import { Left, Right } from './icons'

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
    <>
      <div class='absolute bg-cyan-300 bottom-16 left-1 rounded-sm flex items-center py-2'>
        <button onClick={goLeft} title={'iterate over'}>
          <Left />
        </button>
      </div>
      {Array.from(Array(n).keys()).map((i) => {
        // Array.from(Array(n).keys())
        const resource = data.at((i + index.value) % data.length)
        return (
          <article class={RESOURCE_STYLES} key={i}>
            <span>{resource?.title}</span>
            {resource?.repository && (
              <Link href={resource.repository} text='' />
            )}
            {resource?.website && <Link href={resource.website} text='󰖟' />}
          </article>
        )
      })}
      <div class='absolute bg-cyan-300 bottom-16 right-1 rounded-sm flex items-center py-2'>
        <button onClick={goRight} title={'iterate over'}>
          <Right />
        </button>
      </div>
    </>
  )
}
