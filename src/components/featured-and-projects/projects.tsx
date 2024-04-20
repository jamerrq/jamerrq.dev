import { data } from '@data/projects.json'

import { shuffle } from '@utils'

const shuffledData = import.meta.env.DEV ? data : shuffle([...data])

// featured projects go first
const featured = shuffledData.filter((project) => project.featured)
const notFeatured = shuffledData.filter((project) => !project.featured)
const concatedData = featured.concat(notFeatured)

const screenWidth = window.innerWidth
const isScreenWidthEnough = screenWidth >= 1024

const PROJECT_STYLES: string = [
  'col-span-6',
  'row-span-4',
  'bg-emerald-300/80',
  'rounded-[10px]',
  'flex',
  'xl:flex-row ',
  'gap-3',
  'items-center',
  'justify-center',
  'font-bold',
  'font-primary',
  'w-full',
  'h-72',
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

import { signal, effect } from '@preact/signals'

const index = signal(0)
const imagesIndex = signal(0)

type ResourcesProps = {
  n?: number
  lang?: string
}

// import { SimpleLeft, SimpleRight } from './icons'

import simpleIcons, { type toExportType } from '@components/icons/simple-icon'

import { h } from 'preact'

function SimpleIcon(key: string) {
  if (key === 'javascript') {
    console.log('key', key)
  }
  const Icon = simpleIcons[key as keyof toExportType]
  if (typeof Icon === 'function') {
    // return icon with title
    return (
      <div className='flex flex-col items-center gap-1 mx-2'>
        <Icon />
        <span className='text-xs font-secondary font-bold lowercase'>
          {key.split(' ').at(0)}
        </span>
      </div>
    )
  }
  return h('fragment', {})
}

// const BUTTONS_STYLES = [
//   'absolute',
//   'bg-cyan-300',
//   'rounded-full',
//   'hidden xl:flex',
//   'items-center',
//   'px-2',
//   'py-1',
//   'shadow-md shadow-black/90'
// ].join(' ')

function IndexPicker({ n, reference }: { n: number; reference: any }) {
  function goToIndex(i: number) {
    reference.value = i
    cooldown.value = COOLDOWN_TIME
    imagesIndex.value = 0
  }
  return (
    <div className='absolute flex bottom-3 left-1/2 transform -translate-x-1/2'>
      {Array.from(Array(n).keys()).map((i) => (
        <button
          key={i}
          onClick={() => goToIndex(i)}
          aria-label={`subpage ${i}`}
          className={`w-3 h-3 rounded-full mx-1 ${
            i === reference.value ? 'bg-cyan-300' : 'bg-cyan-950'
          }`}
        />
      ))}
    </div>
  )
}

function ImageCarousel({ images }: { images: string[] }) {
  const currentImage = images[imagesIndex.value]
  return (
    <div className='relative w-full h-full'>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        {currentImage && (
          <img
            src={`/img/projects/${images[imagesIndex.value]}`}
            alt='project'
            class='w-full rounded-md border-2 shadow shadow-black'
            loading='lazy'
          />
        )}
      </div>
      <IndexPicker n={images?.length ?? 0} reference={imagesIndex} />
    </div>
  )
}

// const DoubleLeftButton = ({ _f }: { _f: () => void }) => (
//   <div className={`bottom-1 left-1 ${BUTTONS_STYLES}`}>
//     <button onClick={_f} title={'iterate over'}>
//       <SimpleLeft />
//     </button>
//   </div>
// )

// const DoubleRightButton = ({ _f }: { _f: () => void }) => (
//   <div className={`bottom-1 right-1 ${BUTTONS_STYLES}`}>
//     <button onClick={_f} title={'iterate over'}>
//       <SimpleRight />
//     </button>
//   </div>
// )

function ResourceCard({
  project,
  lang,
  i
}: {
  project: (typeof data)[number] | undefined
  lang: string
  i: number
}) {
  // const goRight = () => {
  //   index.value++
  //   if (index.value > data.length - 1) index.value = 0
  //   // insert the 'xl:animate-fade-in-left' class
  //   const el = document.querySelector('#project-card')
  //   el?.classList.add('xl:animate-fade-in-left')
  //   el?.addEventListener('animationend', () => {
  //     el?.classList.remove('xl:animate-fade-in-left')
  //   })
  //   imagesIndex.value = 0
  //   cooldown.value = COOLDOWN_TIME
  // }
  // const goLeft = () => {
  //   index.value--
  //   if (index.value < 0) index.value = data.length - 1
  //   // insert the 'xl:animate-fade-in-left' class
  //   const el = document.querySelector('#project-card')
  //   el?.classList.add('xl:animate-fade-in-left')
  //   el?.addEventListener('animationend', () => {
  //     el?.classList.remove('xl:animate-fade-in-left')
  //   })
  //   imagesIndex.value = 0
  //   cooldown.value = COOLDOWN_TIME
  // }
  return (
    <article className={PROJECT_STYLES} key={i} id='project-card'>
      {/* {i === 0 && <DoubleLeftButton _f={goLeft} />} */}
      <div className='lg:w-1/2 xl:w-1/2 h-full grid place-content-center justify-items-center gap-4'>
        <div
          className='absolute top-2 left-2'
          onClick={() => {
            paused.value = !paused.value
          }}
        >
          <span>{cooldown.value}</span>
          <PauseIndicator />
        </div>
        <h1 className='xl:text-3xl text-xl max-w-md'>{project?.title}</h1>
        {project?.featured && (
          <span className='xl:absolute top-1 right-2 dark:text-amber-300 text-amber-800 underline bg-amber-300/30 px-2 py-1 rounded border dark:border-amber-200 border-amber-800 badge'>
            {lang === 'es' ? 'Destacado' : 'Featured'}
          </span>
        )}
        <p className='font-bold font-secondary dark:text-slate-200 text-xs xl:text-base max-w-[400px] text-balance'>
          {project?.description[lang as 'es' | 'en']}
        </p>
        <ul className='flex gap-1 [&>li]:font-thin [&>li>a>img]:border-2 [&>li>a>img]:dark:border-amber-300 [&>li>a>img]:border-amber-950 [&>li>a>img]:rounded-[10px] flex-wrap'>
          {project?.stack?.map((tech, index) => (
            <li key={index}>{SimpleIcon(tech)}</li>
          ))}
        </ul>
        <div className='flex gap-2'>
          {project?.repository && (
            <a
              href={project.repository}
              className='border-b-2 font-secondary text-sm xl:text-base'
              target='_blank'
              rel='noopener noreferrer'
            >
              {lang === 'es' ? 'Repositorio' : 'Repository'}
            </a>
          )}
          {project?.demo && (
            <a
              href={project.demo}
              className='border-b-2 font-secondary text-sm xl:text-base'
              target='_blank'
              rel='noopener noreferrer'
            >
              {lang === 'es' ? 'Demo' : 'Preview'}
            </a>
          )}
        </div>
      </div>
      {isScreenWidthEnough && (
        <div className='w-1/2 h-full hidden lg:block xl:block'>
          {/* <h1>Images</h1> */}
          {project?.images && <ImageCarousel images={project.images} />}
        </div>
      )}
      {/* {i === n - 1 && <DoubleRightButton _f={goRight} />} */}
      <IndexPicker n={concatedData.length} reference={index} />
    </article>
  )
}

function PauseIndicator() {
  return !paused.value ? (
    <svg
      id='Layer_1'
      style='enable-background:new 0 0 512 512;'
      version='1.1'
      viewBox='0 0 512 512'
      fill='currentColor'
      width='20'
      height='20'
    >
      <g>
        <path d='M224,435.8V76.1c0-6.7-5.4-12.1-12.2-12.1h-71.6c-6.8,0-12.2,5.4-12.2,12.1v359.7c0,6.7,5.4,12.2,12.2,12.2h71.6   C218.6,448,224,442.6,224,435.8z' />
        <path d='M371.8,64h-71.6c-6.7,0-12.2,5.4-12.2,12.1v359.7c0,6.7,5.4,12.2,12.2,12.2h71.6c6.7,0,12.2-5.4,12.2-12.2V76.1   C384,69.4,378.6,64,371.8,64z' />
      </g>
    </svg>
  ) : (
    <svg fill='none' height='20' viewBox='0 0 15 15' width='20'>
      <path
        clip-rule='evenodd'
        d='M3.04995 2.74995C3.04995 2.44619 2.80371 2.19995 2.49995 2.19995C2.19619 2.19995 1.94995 2.44619 1.94995 2.74995V12.25C1.94995 12.5537 2.19619 12.8 2.49995 12.8C2.80371 12.8 3.04995 12.5537 3.04995 12.25V2.74995ZM5.73333 2.30776C5.57835 2.22596 5.39185 2.23127 5.24177 2.32176C5.0917 2.41225 4.99995 2.57471 4.99995 2.74995V12.25C4.99995 12.4252 5.0917 12.5877 5.24177 12.6781C5.39185 12.7686 5.57835 12.7739 5.73333 12.6921L14.7333 7.94214C14.8973 7.85559 15 7.68539 15 7.49995C15 7.31452 14.8973 7.14431 14.7333 7.05776L5.73333 2.30776ZM5.99995 11.4207V3.5792L13.4287 7.49995L5.99995 11.4207Z'
        fill='currentColor'
        fill-rule='evenodd'
      />
    </svg>
  )
}

const n = concatedData.length
const COOLDOWN_TIME = 15
const cooldown = signal<number>(COOLDOWN_TIME)
const paused = signal(false)

effect(() => {
  let mainInterval = setInterval(() => {
    if (paused.value) return
    cooldown.value--
    if (cooldown.value <= 0) {
      cooldown.value = COOLDOWN_TIME
      index.value++
      imagesIndex.value = 0
      if (index.value >= n) {
        index.value = 0
      }
    }
  }, 1000)
  let imagesInterval = setInterval(() => {
    imagesIndex.value++
    if (imagesIndex.value >= concatedData[index.value].images.length) {
      imagesIndex.value = 0
    }
  }, 7000)
  return function () {
    clearInterval(mainInterval)
    clearInterval(imagesInterval)
  }
})

export default function Resources({ n = 1, lang = 'en' }: ResourcesProps) {
  return (
    <>
      {Array.from(Array(n).keys()).map((i) => {
        const project = concatedData.at((i + index.value) % data.length)
        return <ResourceCard project={project} lang={lang} i={i} key={i} />
      })}
    </>
  )
}
