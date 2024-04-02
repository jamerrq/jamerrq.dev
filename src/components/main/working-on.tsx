import { projects } from '@data/working-on.json'
import { signal, effect } from '@preact/signals'

import {
  siAstro,
  siSupabase,
  siNextdotjs,
  siTailwindcss,
  siGitkraken,
  siPython,
  siJavascript,
  siCsharp,
  siDotnet,
  siMicrosoftazure,
  siMicrosoft,
  siFreecodecamp,
  siMarkdown
} from 'simple-icons'

siMicrosoft.hex = siMicrosoftazure.hex

const SVGS_STYLES = [
  'w-7',
  'h-7',
  'xl:w-8',
  'xl:h-8',
  'hover:scale-110',
  'shadow bg-white/80 p-1 rounded'
].join(' ')

interface ProjectCardProps {
  lang?: string
  project: {
    title: {
      en: string
      es: string
    }
    image: string
    technologies: string[]
    preview: string
    time: string
    start: string
  }
}

function getIndexBasedOnDay() {
  const date = new Date().toLocaleString('es-CO', {
    timeZone: 'America/Bogota'
  })
  const day = +(date.replace(/,(.*)/g, '')?.split('/')?.at(0) ?? 0)
  return day % projects.length
}

const index = signal(getIndexBasedOnDay())
const n = projects?.length ?? 0

import { IndexPicker } from '@components/featured-and-projects/projects'

function ProjectCard({ lang = 'en', project }: ProjectCardProps) {
  const date = new Date(project.start)
  // get number of days since the project started
  const days = Math.floor((Date.now() - date.getTime()) / (1000 * 60 * 60 * 24))
  return (
    <li class='grid justify-items-center items-center gap-1 [&>*]:text-center relative [&>*]:rounded-sm [&>span]:text-sm [&>span]:xl:text-base'>
      <div class='absolute bottom-0 right-2 font-averia text-xs dark:bg-emerald-700 bg-emerald-500 dark:text-emerald-100 text-emerald-950 px-1 shadow shadow-black/90'>
        {days}+ {lang === 'en' ? 'days' : 'días'}
      </div>
      <h1 class='text-sm xl:text-base font-rubik-doodle dark:text-emerald-100 text-emerald-950 bg-emerald-500 dark:bg-emerald-900 px-2 py-1 shadow shadow-black/90'>
        {lang === 'en' ? project?.title.en : project?.title.es}
      </h1>
      <section class='bg-transparent w-full flex items-center'>
        <img
          src={project?.image}
          alt={`snap for ${project?.title.en}`}
          width='960'
          height='720'
          loading='lazy'
          class='aspect-[4/3] w-40'
        />
        <aside class='flex flex-col gap-2 items-center'>
          <div class='flex gap-2 items-center justify-center'>
            {project.technologies.map((t) => {
              const a =
                {
                  astro: siAstro,
                  supabase: siSupabase,
                  nextjs: siNextdotjs,
                  tailwindcss: siTailwindcss,
                  python: siPython,
                  javascript: siJavascript,
                  csharp: siCsharp,
                  dotnet: siDotnet,
                  azure: siMicrosoftazure,
                  microsoft: siMicrosoft,
                  freecodecamp: siFreecodecamp,
                  markdown: siMarkdown
                }[t.toLowerCase().replaceAll(' ', '')] || siAstro
              return (
                <svg
                  key={t}
                  class={SVGS_STYLES}
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{ __html: a.svg }}
                  fill={`#${a.hex}`}
                  title={t}
                />
              )
            })}
          </div>
          <span class='font-averia hover:scale-105 ease-in-out transition-transform text-emerald-950 bg-white/50 dark:bg-white/10 px-2 py-1 rounded dark:text-emerald-300'>
            {project?.preview ? (
              <a
                href={project.preview}
                target='_blank'
                rel='noopener noreferrer'
                class=''
                aria-label={`Preview for ${project.title.en}`}
                title={`Preview for ${project.title.en}`}
              >
                {lang === 'en' ? 'Project Preview' : 'Demo del Proyecto'}
              </a>
            ) : null}
          </span>
        </aside>
      </section>
    </li>
  )
}

effect(() => {
  let interval = setInterval(() => {
    index.value++
    if (index.value >= n) {
      index.value = 0
    }
  }, 7000)
  return function () {
    clearInterval(interval)
  }
})

export default function WorkingOn({ lang = 'en' }) {
  return (
    <article className='bg-slate-300/70 dark:bg-slate-900/95 rounded-sm flex items-center justify-center font-bold dark:text-slate-300 font-rubik-doodle w-full h-full flex-col text-base py-3 px-2 relative xl:col-span-2 xl:row-span-4'>
      <header class='text-2xl xl:text-3xl flex gap-2 text-emerald-950 dark:text-emerald-300 items-center'>
        <p>{lang === 'en' ? 'Working on' : 'Trabajando en'}</p>
        <svg
          class='w-8 h-8 inline-flex shadow bg-white/50 p-1 rounded dark:bg-slate-900/80'
          fill={`#${siGitkraken.hex}`}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: siGitkraken.svg }}
        />
      </header>
      <div class='h-full w-full gap-2'>
        <ul class='flex gap-2 text-base flex-col justify-around h-full font-averia font-bold py-2'>
          {Array.from({ length: 2 }, (_, i) => i + index.value).map((i) => (
            <ProjectCard
              lang={lang}
              project={projects[i % n]}
              key={projects[i % n].title.en}
            />
          ))}
        </ul>
        <IndexPicker n={n} reference={index} />
      </div>
    </article>
  )
}
