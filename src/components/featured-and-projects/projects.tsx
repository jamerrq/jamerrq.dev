import { data } from '@data/projects.json'

import { shuffle } from '@utils'

const shuffledData = shuffle([...data])

// featured projects go first
const featured = shuffledData.filter((project) => project.featured)
const notFeatured = shuffledData.filter((project) => !project.featured)
const concatedData = featured.concat(notFeatured)

const PROJECT_STYLES: string = [
  'col-span-6',
  'row-span-4',
  'bg-emerald-300/80',
  'rounded-sm',
  'flex',
  'xl:flex-row ',
  'gap-3',
  'items-center',
  'justify-center',
  'font-bold',
  'font-rubik-doodle',
  'w-full',
  'h-80',
  'xl:h-full',
  'transition-all',
  'text-emerald-950',
  'dark:text-emerald-300',
  'dark:bg-emerald-900/95',
  'responsive-text-xs',
  'p-2',
  'pb-4',
  'relative',
  'text-center'
].join(' ')

import { signal } from '@preact/signals'
const index = signal(0)
const imagesIndex = signal(0)

type ResourcesProps = {
  n?: number
  lang?: string
}

import { DoubleLeft, DoubleRight } from './icons'

import simpleIcons, { type toExportType } from '@components/icons/simple-icon'

import { h } from 'preact'

function SimpleIcon(key: string) {
  if (key === 'javascript') {
    console.log('key', key)
  }
  const Icon = simpleIcons[key as keyof toExportType]
  if (typeof Icon === 'function') {
    return <Icon />
  }
  return h('fragment', {})
}

const BUTTONS_STYLES = [
  'absolute',
  'bg-cyan-300',
  'rounded-md',
  'flex',
  'items-center',
  'p-1',
  'shadow-md shadow-black/90'
].join(' ')

export function IndexPicker({
  n,
  reference
}: {
  n: number
  reference: typeof index
}) {
  function goToIndex(i: number) {
    reference.value = i
  }
  return (
    <div className='absolute flex bottom-3 left-1/2 transform -translate-x-1/2'>
      {Array.from(Array(n).keys()).map((i) => (
        <button
          key={i}
          onClick={() => goToIndex(i)}
          className={`w-3 h-3 rounded-full mx-1 ${
            i === reference.value ? 'bg-cyan-300' : 'bg-cyan-950'
          }`}
        />
      ))}
    </div>
  )
}

function ImageCarousel({ images }: { images: string[] }) {
  return (
    <div className='relative w-full h-full'>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <img
          src={`/img/projects/${images[imagesIndex.value]}`}
          alt='project'
          class='w-full rounded-md border-2 shadow shadow-black'
          loading='lazy'
        />
      </div>
      <IndexPicker n={images?.length ?? 0} reference={imagesIndex} />
    </div>
  )
}

const DoubleLeftButton = ({ _f }: { _f: () => void }) => (
  <div className={`bottom-1 left-1 ${BUTTONS_STYLES}`}>
    <button onClick={_f} title={'iterate over'}>
      <DoubleLeft />
    </button>
  </div>
)

const DoubleRightButton = ({ _f }: { _f: () => void }) => (
  <div className={`bottom-1 right-1 ${BUTTONS_STYLES}`}>
    <button onClick={_f} title={'iterate over'}>
      <DoubleRight />
    </button>
  </div>
)

function ResourceCard({
  project,
  lang,
  i,
  n
}: {
  project: (typeof data)[number] | undefined
  lang: string
  i: number
  n: number
}) {
  const goRight = () => {
    index.value++
    if (index.value > data.length - 1) index.value = 0
    // insert the 'xl:animate-fade-in-left' class
    const el = document.querySelector('#project-card')
    el?.classList.add('xl:animate-fade-in-left')
    el?.addEventListener('animationend', () => {
      el?.classList.remove('xl:animate-fade-in-left')
    })
    imagesIndex.value = 0
  }
  const goLeft = () => {
    index.value--
    if (index.value < 0) index.value = data.length - 1
    // insert the 'xl:animate-fade-in-left' class
    const el = document.querySelector('#project-card')
    el?.classList.add('xl:animate-fade-in-left')
    el?.addEventListener('animationend', () => {
      el?.classList.remove('xl:animate-fade-in-left')
    })
    imagesIndex.value = 0
  }
  return (
    <article className={PROJECT_STYLES} key={i} id='project-card'>
      {i === 0 && <DoubleLeftButton _f={goLeft} />}
      <div className='lg:w-1/2 xl:w-1/2 h-full grid place-content-center justify-items-center gap-4'>
        <h1 className='xl:text-3xl text-xl max-w-md'>{project?.title}</h1>
        {project?.featured && (
          <span className='xl:absolute top-1 right-2 dark:text-amber-300 text-amber-800 underline bg-amber-300/30 px-2 py-1 rounded border dark:border-amber-200 border-amber-800 badge'>
            {lang === 'es' ? 'Destacado' : 'Featured'}
          </span>
        )}
        <p className='font-bold font-averia dark:text-slate-200 text-xs xl:text-base max-w-[400px] text-balance'>
          {project?.description[lang as 'es' | 'en']}
        </p>
        <ul className='flex gap-1 [&>li]:font-thin [&>li>a>img]:border-2 [&>li>a>img]:dark:border-amber-300 [&>li>a>img]:border-amber-950 [&>li>a>img]:rounded-sm flex-wrap'>
          {project?.stack?.map((tech, index) => (
            <li key={index}>{SimpleIcon(tech)}</li>
          ))}
        </ul>
        <div className='flex gap-2'>
          {project?.repository && (
            <a
              href={project.repository}
              className='border-b-2 font-averia text-sm xl:text-base'
              target='_blank'
              rel='noopener noreferrer'
            >
              {lang === 'es' ? 'Repositorio' : 'Repository'}
            </a>
          )}
          {project?.demo && (
            <a
              href={project.demo}
              className='border-b-2 font-averia text-sm xl:text-base'
              target='_blank'
              rel='noopener noreferrer'
            >
              {lang === 'es' ? 'Demo' : 'Preview'}
            </a>
          )}
        </div>
      </div>
      <div className='w-1/2 h-full hidden lg:block xl:block'>
        {/* <h1>Images</h1> */}
        {project?.images && <ImageCarousel images={project.images} />}
      </div>
      {i === n - 1 && <DoubleRightButton _f={goRight} />}
      <IndexPicker n={concatedData.length} reference={index} />
    </article>
  )
}

export default function Resources({ n = 1, lang = 'en' }: ResourcesProps) {
  return (
    <>
      {Array.from(Array(n).keys()).map((i) => {
        const project = concatedData.at((i + index.value) % data.length)
        return (
          <ResourceCard project={project} lang={lang} i={i} n={n} key={i} />
        )
      })}
    </>
  )
}
