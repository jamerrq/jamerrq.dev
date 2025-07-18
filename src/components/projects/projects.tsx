import { data } from '@data/projects.json'
import { shuffle } from '@utils'
import { signal, effect } from '@preact/signals'
import { DoubleLeftButton, DoubleRightButton } from './buttons'
import { SimpleIcon } from './icons'
import { ImageCarousel, MobileImageCarousel } from './image-carousel'
import IndexPicker from './index-picker'
import { PauseIndicator } from './icons'
import { ExternalLinkBadge } from './icons'

const shuffledData = import.meta.env.DEV ? data : shuffle([...data])

// featured projects go first
const featured = shuffledData.filter((project) => project.featured)
const notFeatured = shuffledData.filter((project) => !project.featured)
const concatedData = featured.concat(notFeatured)

const screenWidth = window.innerWidth
const isScreenWidthEnough = screenWidth >= 1024

const index = signal(0)

type ResourcesProps = {
  n?: number
  lang?: string
}

function goRight() {
  index.value++
  if (index.value >= n) {
    index.value = 0
  }
  cooldown.value = COOLDOWN_TIME
}

function goLeft() {
  index.value--
  if (index.value < 0) {
    index.value = n - 1
  }
  cooldown.value = COOLDOWN_TIME
}

function ProjectCard({
  project,
  lang,
  i
}: {
  project: (typeof data)[number] | undefined
  lang: string
  i: number
}) {
  return (
    <article
      className='xl:col-span-6 xs:col-span-2 bg-emerald-300/80 rounded-[10px] flex xl:flex-row gap-3 items-center justify-center font-bold font-primary w-full h-full xl:h-[30rem] overflow-hidden transition-all text-emerald-950 dark:text-emerald-300 dark:bg-emerald-900/95 responsive-text-xs p-2 pb-4 relative text-center'
      key={i}
      id='project-card'
    >
      <DoubleLeftButton _f={goLeft} />
      <div className='lg:w-1/2 xl:w-1/2 h-full grid place-content-center justify-items-center gap-4'>
        <div
          className='absolute bottom-2 left-2'
          onClick={() => {
            paused.value = !paused.value
          }}
        >
          <span>{cooldown.value}</span>
          <PauseIndicator paused={paused.value} />
        </div>
        <h1 className='xl:text-3xl text-xl max-w-md'>{project?.title}</h1>
        {project?.featured && (
          <span className='absolute top-1 right-2 dark:text-amber-300 text-amber-800 underline bg-amber-300/30 px-2 py-1 rounded border dark:border-amber-200 border-amber-800 badge'>
            {lang === 'es' ? 'Destacado' : 'Featured'}
          </span>
        )}
        <p className='font-bold font-secondary dark:text-slate-200 text-xs xl:text-base max-w-[400px] text-balance'>
          {project?.description[lang as 'es' | 'en']}
        </p>
        {isScreenWidthEnough && (
          <ul className='flex gap-1 [&>li]:font-thin [&>li>a>img]:border-2 [&>li>a>img]:dark:border-amber-300 [&>li>a>img]:border-amber-950 [&>li>a>img]:rounded-[10px] flex-wrap w-4/5 items-center justify-center'>
            {project?.stack?.map((tech, index) => (
              <li key={index}>{SimpleIcon(tech)}</li>
            ))}
          </ul>
        )}
        {!isScreenWidthEnough && project?.images && (
          <MobileImageCarousel images={project.images} />
        )}
        <div className='flex gap-2'>
          {project?.repository && (
            <ExternalLinkBadge type='repository' href={project.repository} />
          )}
          {project?.demo && (
            <ExternalLinkBadge type='demo' href={project.demo} />
          )}
          {project?.website && (
            <ExternalLinkBadge type='official' href={project.website} />
          )}
        </div>
      </div>
      {isScreenWidthEnough && (
        <div className='w-1/2 h-full hidden lg:block xl:block'>
          {project?.images && <ImageCarousel images={project.images} />}
        </div>
      )}
      <DoubleRightButton _f={goRight} />
      <IndexPicker n={concatedData.length} reference={index} />
    </article>
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
      if (index.value >= n) {
        index.value = 0
      }
    }
  }, 1000)
  return function () {
    clearInterval(mainInterval)
  }
})

export default function Resources({ n = 1, lang = 'en' }: ResourcesProps) {
  return (
    <>
      {Array.from(Array(n).keys()).map((i) => {
        const project = concatedData.at((i + index.value) % data.length)
        return <ProjectCard project={project} lang={lang} i={i} key={i} />
      })}
    </>
  )
}
