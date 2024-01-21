import { data } from '@data/projects.json'

import { shuffle } from '@utils'

const shuffledData = shuffle(data)

const PROJECT_STYLES: string = [
  'col-span-6',
  'row-span-4',
  'bg-emerald-300',
  'rounded-sm',
  'shadow-[0_0_0.3rem_rgb(0_0_0)]', // rgb(69, 26, 3)
  'dark:shadow-[0_0_0.1rem_rgb(255_255_255)]', // rgb(253, 230, 138)
  'flex',
  'flex-col',
  'gap-3',
  'items-center',
  'justify-center',
  'font-bold',
  'font-rubik-doodle',
  'w-full',
  'xl:h-[400px] h-[300px]',
  'xl:h-full',
  'transition-all',
  'border-2',
  'border-emerald-500',
  'text-emerald-950',
  'dark:text-emerald-300',
  'dark:bg-emerald-900',
  'responsive-text-xs',
  'p-2',
  'pb-4',
  'relative'
].join(' ')

import { signal } from '@preact/signals'
const index = signal(0)

type ResourcesProps = {
  n?: number
  lang?: string
}

import { DoubleLeft, DoubleRight } from './icons'

import simpleIcons, { type toExportType } from '@components/icons/simple-icon'

import { h } from 'preact'

function SimpleIcon(key: string) {
  const Icon = simpleIcons[key as keyof toExportType]
  if (typeof Icon === 'function') {
    return <Icon />
  }
  return h('fragment', {})
}

const BUTTONS_STYLES = [
  'absolute',
  'bg-cyan-300',
  'rounded-sm',
  'flex',
  'items-center',
  'p-1'
].join(' ')

const DoubleLeftButton = ({ _f }: { _f: () => void }) => (
  <div class={`bottom-1 left-1 ${BUTTONS_STYLES}`}>
    <button onClick={_f} title={'iterate over'}>
      <DoubleLeft />
    </button>
  </div>
)

const DoubleRightButton = ({ _f }: { _f: () => void }) => (
  <div class={`bottom-1 right-1 ${BUTTONS_STYLES}`}>
    <button onClick={_f} title={'iterate over'}>
      <DoubleRight />
    </button>
  </div>
)

export default function Resources({ n = 1, lang = 'en' }: ResourcesProps) {
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
      {/* <DoubleLeftButton _f={goLeft} /> */}
      {Array.from(Array(n).keys()).map((i) => {
        const project = shuffledData.at((i + index.value) % data.length)!
        return (
          <article class={PROJECT_STYLES} key={i}>
            {i === 0 && <DoubleLeftButton _f={goLeft} />}
            <h1 class='xl:text-3xl text-xl'>{project.title}</h1>
            <p class='font-bold font-merriweather dark:text-slate-200 text-xs xl:text-base max-w-[400px] text-balance'>
              {project.description[lang as 'es' | 'en']}
            </p>
            {/* <span class='responsive-text-xs font-semibold'>Stack</span> */}
            <ul class='flex gap-1 [&>li]:font-thin [&>li>a>img]:border-2 [&>li>a>img]:dark:border-amber-300 [&>li>a>img]:border-amber-950 [&>li>a>img]:rounded-sm flex-wrap'>
              {project?.stack?.map((tech, index) => (
                <li key={index}>{SimpleIcon(tech)}</li>
              ))}
            </ul>
            <div class='flex gap-2'>
              {project?.repository && (
                <a
                  href={project.repository}
                  class='border-b-2 font-merriweather text-sm xl:text-base'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {lang === 'es' ? 'Repositorio' : 'Repository'}
                </a>
              )}
              {project?.demo && (
                <a
                  href={project.demo}
                  class='border-b-2 font-merriweather text-sm xl:text-base'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {lang === 'es' ? 'Demo' : 'Preview'}
                </a>
              )}
            </div>
            {i === n - 1 && <DoubleRightButton _f={goRight} />}
          </article>
        )
      })}
      {/* <DoubleRightButton _f={goRight} /> */}
    </>
  )
}
