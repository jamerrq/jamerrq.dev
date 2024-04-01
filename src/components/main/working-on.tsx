import { projects } from '@data/working-on.json'
import { signal } from '@preact/signals'

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
  siMicrosoft
} from 'simple-icons'

const SVGS_STYLES = [
  'w-5',
  'h-5',
  'xl:w-8',
  'xl:h-8',
  'hover:scale-110',
  'shadow bg-white/50 p-1 rounded dark:bg-slate-900/80'
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
  }
}

const index = signal(0)

import { IndexPicker } from '@components/featured-and-projects/projects'

function ProjectCard({ lang = 'en', project }: ProjectCardProps) {
  return (
    <li class='grid justify-items-center items-center gap-1 [&>*]:text-center relative [&>*]:rounded-sm [&>span]:text-sm [&>span]:xl:text-base'>
      <div class='absolute bottom-0 right-2 font-averia text-xs dark:bg-emerald-700 bg-emerald-500 dark:text-emerald-100 text-emerald-950 px-1 shadow shadow-black/90'>
        {project?.time}+ {lang === 'en' ? 'months' : 'meses'}
      </div>
      <h1 class='text-sm xl:text-base font-rubik-doodle dark:text-emerald-100 text-emerald-950 bg-emerald-400 dark:bg-emerald-900 px-2 py-1 shadow shadow-black/90'>
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
        <aside class='flex flex-col items'>
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
                  microsoft: siMicrosoft
                }[t.toLowerCase().replaceAll(' ', '')] || siAstro
              return (
                <svg
                  key={t}
                  class={SVGS_STYLES}
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{ __html: a.svg }}
                  fill={`#${a.hex}`}
                />
              )
            })}
          </div>
          <span class='font-averia'>
            {lang === 'en' ? 'Preview' : 'Vista previa'}:{' '}
            {project?.preview ? (
              <a
                href={project.preview}
                target='_blank'
                rel='noopener noreferrer'
                class='text-emerald-950 dark:text-emerald-300'
              >
                {lang === 'en' ? 'here' : 'aquí'}
              </a>
            ) : lang === 'en' ? (
              'soon'
            ) : (
              'próximamente'
            )}
          </span>
        </aside>
      </section>
    </li>
  )
}

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
          {/* Show only two in loop, use index to get the right items */}
          {Array.from(Array(2).keys()).map((i) => {
            const project = projects[(i + index.value) % projects.length]
            return <ProjectCard key={i} lang={lang} project={project} />
          })}
        </ul>
        <IndexPicker n={projects.length} reference={index} />
      </div>
    </article>
  )
}
