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

import IndexPicker from '@components/projects/index-picker'

function ProjectCard({ lang = 'en', project }: ProjectCardProps) {
  const date = new Date(project.start)
  // get number of days since the project started
  const days = Math.floor((Date.now() - date.getTime()) / (1000 * 60 * 60 * 24))
  return (
    <li class='grid justify-items-center items-center gap-1 [&>*]:text-center relative [&>span]:text-sm [&>span]:xl:text-base w-full'>
      <div class='absolute bottom-0 right-2 font-secondary font-bold text-xs dark:bg-emerald-700 bg-emerald-500 dark:text-slate-50 text-slate-950 px-1.5 shadow shadow-black/90 py-0.5 rounded-full'>
        {days}+ {lang === 'en' ? 'days' : 'días'}
      </div>
      <h1 class='text-sm font-primary dark:text-emerald-100 text-slate-950 bg-emerald-500 dark:bg-emerald-900 px-2 py-1 shadow shadow-black/90 rounded'>
        {lang === 'en' ? project?.title.en : project?.title.es}
      </h1>
      <section class='bg-transparent w-full flex'>
        <img
          src={project?.image}
          alt={`snap for ${project?.title.en}`}
          width='960'
          height='720'
          loading='eager'
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
            <span class='font-secondary hover:scale-105 ease-in-out transition-transform text-slate-950 bg-white/50 dark:bg-white/10 px-2 py-1 rounded-full dark:text-emerald-300 flex items-center justify-center shadow-lg -mt-2'>
              {project?.preview ? (
                <a
                  href={project.preview}
                  target='_blank'
                  rel='noopener noreferrer'
                  class='text-xs flex gap-1 items-center justify-center'
                  aria-label={`Preview for ${project.title.en}`}
                  title={`Preview for ${project.title.en}`}
                >
                  <svg
                    class='w-5 h-5'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M4.76,10.59a1,1,0,0,0,.26-2L3.26,8.15a1,1,0,1,0-.52,1.93l1.76.47A.78.78,0,0,0,4.76,10.59ZM8.62,5a1,1,0,0,0,1,.74.82.82,0,0,0,.26,0,1,1,0,0,0,.7-1.22l-.47-1.76a1,1,0,1,0-1.93.52Zm4.83,10A1,1,0,0,0,12,15L8.5,18.56a2.21,2.21,0,0,1-3.06,0,2.15,2.15,0,0,1,0-3.06L9,12a1,1,0,1,0-1.41-1.41L4,14.08A4.17,4.17,0,1,0,9.92,20l3.53-3.53A1,1,0,0,0,13.45,15ZM5.18,6.59a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41L5.3,3.89A1,1,0,0,0,3.89,5.3Zm16.08,7.33-1.76-.47A1,1,0,1,0,19,15.38l1.76.47.26,0a1,1,0,0,0,.26-2ZM15.38,19a1,1,0,0,0-1.23-.7,1,1,0,0,0-.7,1.22l.47,1.76a1,1,0,0,0,1,.74,1.15,1.15,0,0,0,.26,0,1,1,0,0,0,.71-1.23Zm3.44-1.57a1,1,0,0,0-1.41,1.41l1.29,1.29a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM21.2,7A4.16,4.16,0,0,0,14.08,4L10.55,7.56A1,1,0,1,0,12,9L15.5,5.44a2.21,2.21,0,0,1,3.06,0,2.15,2.15,0,0,1,0,3.06L15,12a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0L20,9.92A4.19,4.19,0,0,0,21.2,7Z'
                      fill='currentColor'
                    />
                  </svg>
                  <span>demo</span>
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
