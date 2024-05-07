import { projects } from '@data/working-on.json'
import { signal, effect } from '@preact/signals'

import {
  siAstro,
  siSupabase,
  siNextdotjs,
  siTailwindcss,
  siPython,
  siJavascript,
  siCsharp,
  siDotnet,
  siMicrosoftazure,
  siMicrosoft,
  siFreecodecamp,
  siMarkdown,
  siAmazondocumentdb
} from 'simple-icons'

// to have a better contrast with the background
siMicrosoft.hex = siMicrosoftazure.hex

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
    start: string
  }
}

const n = projects?.length ?? 0
const index = signal(Math.floor(Math.random() * n))

import IndexPicker from '@components/featured-and-projects/indexPicker'

function ProjectCard({ lang = 'en', project }: ProjectCardProps) {
  const date = new Date(project.start)
  // get number of days since the project started
  const days = Math.floor((Date.now() - date.getTime()) / (1000 * 60 * 60 * 24))
  return (
    <li class='grid justify-items-center items-center gap-1 [&>*]:text-center relative [&>span]:text-sm [&>span]:xl:text-base w-full'>
      <div class='absolute bottom-0 right-2 font-secondary font-bold text-xs dark:bg-emerald-700 bg-emerald-500 dark:text-emerald-200 text-emerald-950 px-1 shadow shadow-black/90 py-0.5 rounded'>
        {days}+ {lang === 'en' ? 'days' : 'días'}
      </div>
      <h1 class='text-sm font-primary dark:text-emerald-100 text-emerald-950 bg-emerald-500 dark:bg-emerald-900 px-2 py-1 shadow shadow-black/90 rounded'>
        {lang === 'en' ? project?.title.en : project?.title.es}
      </h1>
      <section class='bg-transparent w-full flex'>
        <img
          src={project?.image}
          alt={`snap for ${project?.title.en}`}
          width='960'
          height='720'
          loading='lazy'
          class='aspect-[4/3] w-32'
        />
        <aside class='flex flex-col xl:flex-row text-sm gap-4 items-center justify-around'>
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
                  markdown: siMarkdown,
                  astrodb: siAmazondocumentdb
                }[t.toLowerCase().replaceAll(' ', '')] || siAstro
              return (
                <div
                  key={t}
                  class='flex flex-col justify-center items-center gap-1'
                >
                  <svg
                    key={t}
                    class='w-7 h-7 xl:w-8 xl:h-8 shadow dark:bg-slate-600/80 bg-slate-200/80 p-1 rounded fill-slate-900 dark:fill-white'
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{ __html: a.svg }}
                    // fill={`#fff`}
                    title={t}
                  />
                  <span class='text-xs lowercase'>
                    {t.toLowerCase().replaceAll(' ', '')}
                  </span>
                </div>
              )
            })}
          </div>
          {project.preview && (
            <span class='font-secondary hover:scale-105 ease-in-out transition-transform text-emerald-950 bg-white/50 dark:bg-white/10 px-2 py-1 rounded dark:text-emerald-300'>
              {project?.preview ? (
                <a
                  href={project.preview}
                  target='_blank'
                  rel='noopener noreferrer'
                  class='text-xs'
                  aria-label={`Preview for ${project.title.en}`}
                  title={`Preview for ${project.title.en}`}
                >
                  {lang === 'en' ? 'Preview' : 'Demo del Proyecto'}
                </a>
              ) : null}
            </span>
          )}
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
    <div class='h-full w-full gap-2' id='working-on-client'>
      <ul class='flex gap-2 text-base flex-col justify-around h-full font-secondary font-bold py-6'>
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
  )
}
