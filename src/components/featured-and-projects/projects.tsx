import { data, logos } from '@data/projects.json'

import Link from './link'

import { shuffle } from '@utils'

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
  'h-[300px]',
  'xl:h-full',
  'transition-all',
  'border-2',
  'border-emerald-500',
  'text-emerald-950',
  'dark:text-emerald-300',
  'dark:bg-emerald-900',
  'responsive-text-xs',
  'p-2',
  'pb-5',
  'relative'
].join(' ')

import { signal } from '@preact/signals'
const index = signal(0)

interface ResourceProps {
  tech: string
}

function Tech({ tech }: ResourceProps) {
  const { name, url, ref } = logos.find((logo) => logo.name === tech)!
  return (
    <li>
      <a href={ref} target='_blank' rel='noopener noreferrer'>
        <img src={url} alt={name} />
      </a>
    </li>
  )
}

type ResourcesProps = {
  n?: number
  lang?: string
}

import { DoubleLeft, DoubleRight } from './icons'

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
        const project = shuffle(data).at((i + index.value) % data.length)!
        return (
          <article class={PROJECT_STYLES} key={i}>
            {i === 0 && <DoubleLeftButton _f={goLeft} />}
            <h1 class='text-2xl'>{project.title}</h1>
            <p class='font-bold responsive-text-xxs font-merriweather dark:text-slate-200'>
              {project.description[lang as 'es' | 'en']}
            </p>
            {/* <span class='responsive-text-xs font-semibold'>Stack</span> */}
            <ul class='flex gap-1 [&>li]:font-thin [&>li>a>img]:border-2 [&>li>a>img]:dark:border-amber-300 [&>li>a>img]:border-amber-950 [&>li>a>img]:rounded-sm flex-wrap'>
              {project?.stack?.map((tech, index) => (
                <Tech key={index} tech={tech} />
              ))}
            </ul>
            <div class='flex gap-2'>
              {project?.repository && (
                <Link href={project.repository} text='' />
              )}
              {project?.demo && <Link href={project.demo} text='󰖟' />}
            </div>
            {i === n - 1 && <DoubleRightButton _f={goRight} />}
          </article>
        )
      })}
      {/* <DoubleRightButton _f={goRight} /> */}
    </>
  )
}
