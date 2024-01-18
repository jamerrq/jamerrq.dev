import { data, logos } from '@data/projects.json'

import Link from './link'

const PROJECT_STYLES: string = [
  'col-span-2',
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
  // 'text-2xl',
  'font-bold',
  // 'text-slate-950',
  'font-rubik-doodle',
  'w-full',
  'h-full',
  'transition-all',
  'border-2',
  'border-emerald-500',
  // 'dark:border-emerald-500',
  'text-emerald-950',
  'dark:text-emerald-300',
  'dark:bg-emerald-900',
  'hover:scale-[1.02]',
  'hover:transition-all',
  'responsive-text-xs',
  'px-4'
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

import { Left, Right } from './icons'

export default function Resources({ n = 3, lang = 'en' }: ResourcesProps) {
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
      <div class='absolute font-merriweather responsive-text bg-emerald-200 left-1 rounded-sm flex items-center py-2'>
        <button onClick={goLeft} title={'iterate over'}>
          <Left />
        </button>
      </div>
      {Array.from(Array(n).keys()).map((i) => {
        const project = data.at((i + index.value) % data.length)!
        return (
          <article class={PROJECT_STYLES} key={i}>
            <h1>{project.title}</h1>
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
          </article>
        )
      })}
      <div class='absolute responsive-text bg-emerald-200 right-1 rounded-sm flex items-center py-2'>
        <button onClick={goRight} title={'iterate over'}>
          <Right />
        </button>
      </div>
    </>
  )
}
