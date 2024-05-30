import { data } from '@data/projects.json'
import { shuffle } from '@utils'
import simpleIcons, { type toExportType } from '@components/icons/simple-icon'
import { DoubleLeft, DoubleRight } from './icons'
import { signal, effect } from '@preact/signals'
import { h } from 'preact'

const shuffledData = import.meta.env.DEV ? data : shuffle([...data])

// featured projects go first
const featured = shuffledData.filter((project) => project.featured)
const notFeatured = shuffledData.filter((project) => !project.featured)
const concatedData = featured.concat(notFeatured)

const screenWidth = window.innerWidth
const isScreenWidthEnough = screenWidth >= 1024

const index = signal(0)
const imagesIndex = signal(0)

type ResourcesProps = {
  n?: number
  lang?: string
}

export const DoubleLeftButton = ({ _f }: { _f: () => void }) => (
  <div class='left-1 absolute bg-slate-900 rounded-[10px] text-cyan-950  fill-current flex flex-wrap items-center justify-center p-1 shadow-md shadow-black/90'>
    <button onClick={_f} title={'iterate over'}>
      <DoubleLeft />
    </button>
  </div>
)

export const DoubleRightButton = ({ _f }: { _f: () => void }) => (
  <div
    class={`right-1 absolute bg-slate-900  rounded-[10px] text-cyan-950  fill-current flex flex-wrap items-center justify-center p-1 shadow-md shadow-black/90`}
  >
    <button onClick={_f} title={'iterate over'}>
      <DoubleRight />
    </button>
  </div>
)

function SimpleIcon(key: string) {
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

function IndexPicker({ n, reference }: { n: number; reference: any }) {
  function goToIndex(i: number) {
    reference.value = i
    cooldown.value = COOLDOWN_TIME
    imagesIndex.value = 0
  }
  return (
    <div className='absolute hidden xl:flex bottom-3 left-1/2 transform -translate-x-1/2'>
      {Array.from(Array(n).keys()).map((i) => (
        <button
          key={i}
          onClick={() => goToIndex(i)}
          aria-label={`subpage ${i}`}
          className={`w-3 h-2 rounded-full mx-1 ${
            i === reference.value ? 'bg-cyan-300' : 'bg-cyan-950'
          }`}
        />
      ))}
    </div>
  )
}

function MobileImageCarousel({ images }: { images: string[] }) {
  const currentImage = images[imagesIndex.value]
  return (
    <div className='relative'>
      <div className=''>
        {currentImage && (
          <img
            src={`/img/projects/${images[imagesIndex.value]}`}
            alt='project'
            class='w-1/2 mx-auto rounded-md border-2 shadow shadow-black'
            loading='lazy'
          />
        )}
      </div>
      <IndexPicker n={images?.length ?? 0} reference={imagesIndex} />
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

function goRight() {
  index.value++
  imagesIndex.value = 0
  if (index.value >= n) {
    index.value = 0
  }
  cooldown.value = COOLDOWN_TIME
}

function goLeft() {
  index.value--
  imagesIndex.value = 0
  if (index.value < 0) {
    index.value = n - 1
  }
  cooldown.value = COOLDOWN_TIME
}

function GitHubIcon() {
  return (
    <svg
      height='20'
      id='Layer_1'
      style='enable-background:new 0 0 512 512;'
      version='1.1'
      viewBox='0 0 512 512'
      width='20'
      class='dark:fill-white'
    >
      <g>
        <path
          class='st0'
          d='M256,32C132.3,32,32,134.8,32,261.7c0,101.5,64.2,187.5,153.2,217.9c11.2,2.1,15.3-5,15.3-11.1   c0-5.5-0.2-19.9-0.3-39.1c-62.3,13.9-75.5-30.8-75.5-30.8c-10.2-26.5-24.9-33.6-24.9-33.6c-20.3-14.3,1.5-14,1.5-14   c22.5,1.6,34.3,23.7,34.3,23.7c20,35.1,52.4,25,65.2,19.1c2-14.8,7.8-25,14.2-30.7c-49.7-5.8-102-25.5-102-113.5   c0-25.1,8.7-45.6,23-61.6c-2.3-5.8-10-29.2,2.2-60.8c0,0,18.8-6.2,61.6,23.5c17.9-5.1,37-7.6,56.1-7.7c19,0.1,38.2,2.6,56.1,7.7   c42.8-29.7,61.5-23.5,61.5-23.5c12.2,31.6,4.5,55,2.2,60.8c14.3,16.1,23,36.6,23,61.6c0,88.2-52.4,107.6-102.3,113.3   c8,7.1,15.2,21.1,15.2,42.5c0,30.7-0.3,55.5-0.3,63c0,6.1,4,13.3,15.4,11C415.9,449.1,480,363.1,480,261.7   C480,134.8,379.7,32,256,32z'
        />
      </g>
    </svg>
  )
}

function DemoIcon() {
  return (
    <svg
      enable-background='new 0 0 24 24'
      id='Layer_1'
      version='1.1'
      viewBox='0 0 24 24'
      width='20'
      height='20'
    >
      <path
        d='M22.7587891,5.0722656c-0.0148926-0.0089722-10.5439453-5.0239258-10.5439453-5.0239258  c-0.1367188-0.0644531-0.2929688-0.0644531-0.4296875,0c0,0-10.5291138,5.0149536-10.5439453,5.0239258  C1.0917969,5.1625977,1,5.3251953,1,5.5v12c0,0.1791992,0.0957031,0.3452148,0.2519531,0.434082l10.496582,5.9980469  c0,0,0.0003052,0.0003662,0.0004883,0.0004883l0.0006714,0.0001831l0.0022583,0.0012817l0.0003662-0.0006104  C11.8287964,23.9772339,11.9142456,24,12,24c0.0859375,0,0.1708984-0.0219727,0.2480469-0.065918l10.5-6  C22.9042969,17.8452148,23,17.6791992,23,17.5v-12C23,5.3251953,22.9082031,5.1625977,22.7587891,5.0722656z M6,19.4956665  l-4-2.2857056v-4.8834229l4,2.0952148V19.4956665z M2.6185303,5.5213013L6.874939,3.4943848l3.961731,1.8864746L6.3914795,7.4976196  L2.6185303,5.5213013z M11.5,16.173645L7,13.8164063V8.9453735l4.5,2.3572998V16.173645z M12.5,17.3027344l4.5-2.3571777v5.1213379  l-4.5,2.5712891V17.3027344z M13.1633301,5.3808594l3.961731-1.8864746l4.2564087,2.0269165l-3.7729492,1.9763184  L13.1633301,5.3808594z M22,11.1972656l-4,2.0953369V8.4215698l4-2.0953979V11.1972656z'
        fill='#303C42'
      />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
    </svg>
  )
}

function OfficialWebsiteIcon() {
  return (
    <svg
      height='20'
      viewBox='0 0 24 24'
      width='20'
      class='fill-current'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M4.22182541,19.7781746 C3.29761276,18.8539619 3.03246659,17.4441845 3.32230899,15.5944173 C1.80937652,14.4913839 1,13.3070341 1,12 C1,10.6929659 1.80937652,9.50861611 3.32230899,8.40558269 C3.03246659,6.55581547 3.29761276,5.14603806 4.22182541,4.22182541 C5.14603806,3.29761276 6.55581547,3.03246659 8.40558269,3.32230899 C9.50861611,1.80937652 10.6929659,1 12,1 C13.3070341,1 14.4913839,1.80937652 15.5944173,3.32230899 C17.4441845,3.03246659 18.8539619,3.29761276 19.7781746,4.22182541 C20.7023872,5.14603806 20.9675334,6.55581547 20.677691,8.40558269 C22.1906235,9.50861611 23,10.6929659 23,12 C23,13.3070341 22.1906235,14.4913839 20.677691,15.5944173 C20.9675334,17.4441845 20.7023872,18.8539619 19.7781746,19.7781746 C18.8539619,20.7023872 17.4441845,20.9675334 15.5944173,20.677691 C14.4913839,22.1906235 13.3070341,23 12,23 C10.6929659,23 9.50861611,22.1906235 8.40558269,20.677691 C6.55581547,20.9675334 5.14603806,20.7023872 4.22182541,19.7781746 Z M8.65258332,18.5979847 C9.05851175,18.5110507 9.47593822,18.6839544 9.70150129,19.0324608 C10.582262,20.3932808 11.3676332,21 12,21 C12.6323668,21 13.417738,20.3932808 14.2984987,19.0324608 C14.5240618,18.6839544 14.9414883,18.5110507 15.3474167,18.5979847 C16.9324536,18.9374379 17.9168102,18.8111119 18.363961,18.363961 C18.8111119,17.9168102 18.9374379,16.9324536 18.5979847,15.3474167 C18.5110507,14.9414883 18.6839544,14.5240618 19.0324608,14.2984987 C20.3932808,13.417738 21,12.6323668 21,12 C21,11.3676332 20.3932808,10.582262 19.0324608,9.70150129 C18.6839544,9.47593822 18.5110507,9.05851175 18.5979847,8.65258332 C18.9374379,7.06754643 18.8111119,6.08318982 18.363961,5.63603897 C17.9168102,5.18888812 16.9324536,5.06256208 15.3474167,5.40201528 C14.9414883,5.48894934 14.5240618,5.31604564 14.2984987,4.96753923 C13.417738,3.60671924 12.6323668,3 12,3 C11.3676332,3 10.582262,3.60671924 9.70150129,4.96753923 C9.47593822,5.31604564 9.05851175,5.48894934 8.65258332,5.40201528 C7.06754643,5.06256208 6.08318982,5.18888812 5.63603897,5.63603897 C5.18888812,6.08318982 5.06256208,7.06754643 5.40201528,8.65258332 C5.48894934,9.05851175 5.31604564,9.47593822 4.96753923,9.70150129 C3.60671924,10.582262 3,11.3676332 3,12 C3,12.6323668 3.60671924,13.417738 4.96753923,14.2984987 C5.31604564,14.5240618 5.48894934,14.9414883 5.40201528,15.3474167 C5.06256208,16.9324536 5.18888812,17.9168102 5.63603897,18.363961 C6.08318982,18.8111119 7.06754643,18.9374379 8.65258332,18.5979847 Z M11,12.5857864 L15.2928932,8.29289322 L16.7071068,9.70710678 L11,15.4142136 L7.29289322,11.7071068 L8.70710678,10.2928932 L11,12.5857864 Z'
        fill-rule='evenodd'
      />
    </svg>
  )
}

function ExternalLinkBadge({
  type = 'demo',
  href,
  lang = 'en'
}: {
  type: 'demo' | 'official' | 'repository'
  href: string
  lang?: 'en' | 'es'
}) {
  let displayedText
  if (type === 'demo') {
    displayedText = 'Preview'
  } else if (type === 'official') {
    if (lang === 'en') displayedText = 'Website'
    else displayedText = 'Sitio Web'
  } else if (lang === 'en') displayedText = 'Repository'
  else displayedText = 'Repositorio'
  const Icon =
    type === 'demo'
      ? DemoIcon
      : type === 'official'
        ? OfficialWebsiteIcon
        : GitHubIcon
  return (
    <a
      href={href}
      className='font-secondary text-sm xl:text-base flex gap-1 items-center justify-center border px-2 py-1 rounded dark:bg-slate-950 bg-slate-300 hover:scale-105 transition-transform ease-in-out duration-300 '
      target='_blank'
      rel='noopener noreferrer'
    >
      <Icon />
      <span>{displayedText}</span>
    </a>
  )
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
      className='col-span-6 row-span-4 bg-emerald-300/80 rounded-[10px] flex xl:flex-row gap-3 items-center justify-center font-bold font-primary w-full h-96 xl:h-full transition-all text-emerald-950 dark:text-emerald-300 dark:bg-emerald-900/95 responsive-text-xs p-2 pb-4 relative text-center'
      key={i}
      id='project-card'
    >
      <DoubleLeftButton _f={goLeft} />
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
        return <ProjectCard project={project} lang={lang} i={i} key={i} />
      })}
    </>
  )
}
