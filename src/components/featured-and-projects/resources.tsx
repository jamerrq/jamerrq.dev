import { data } from '@data/resources.json'
const RESOURCE_STYLES: string = [
  'col-span-2',
  'row-span-4',
  'bg-cyan-300',
  'rounded-sm',
  'shadow-[0_0_0.3rem_rgb(8_51_68)]', // rgb(8, 51, 68)
  // 'dark:shadow-[0_0_0.3rem_rgb(103_232_249)]', // rgb(103, 232, 249)
  'flex',
  'flex-row',
  'gap-2',
  'items-center',
  'justify-center',
  'font-bold',
  'font-rubik-doodle',
  'w-full',
  'h-full',
  'transition-all',
  'border-2',
  'border-cyan-950',
  'dark:border-cyan-500',
  'text-cyan-950',
  'dark:text-cyan-300',
  'dark:bg-cyan-900',
  'hover:scale-[1.02]',
  'hover:transition-all',
  'responsive-text-sm'
].join(' ')
const ANCHOR_STYLES = [
  'font-thin',
  'responsive-text',
  'dark:text-amber-300',
  'text-amber-950'
].join(' ')

import { signal } from '@preact/signals'
const index = signal(0)

type LinkProps = {
  href: string
  text: string
}

export function Link({ href, text }: LinkProps) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      class={ANCHOR_STYLES}
    >
      {text}
    </a>
  )
}

type ResourceProps = {
  n?: number
}

export default function Resources({ n = 3 }: ResourceProps) {
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
      <div class='absolute font-fira responsive-text bg-cyan-300 bottom-16 left-1 rounded-sm'>
        <button onClick={goLeft}></button>
      </div>
      {Array.from(Array(n).keys()).map((i) => {
        // Array.from(Array(n).keys())
        const resource = data.at((i + index.value) % data.length)
        return (
          <article class={RESOURCE_STYLES} key={i}>
            <span>{resource?.title}</span>
            {resource?.repository && (
              <Link href={resource.repository} text='' />
            )}
            {resource?.website && <Link href={resource.website} text='󰖟' />}
            {resource?.links &&
              resource.links?.map((link, index) => (
                <Link href={link.url} text={link.icon} key={index} />
              ))}
          </article>
        )
      })}
      <div class='absolute font-fira responsive-text bg-cyan-300 bottom-16 right-1 rounded-sm'>
        <button onClick={goRight}></button>
      </div>
    </>
  )
}
