const ANCHOR_STYLES = [
  'font-thin',
  'responsive-text',
  'dark:text-amber-300',
  'text-amber-950'
].join(' ')

type LinkProps = {
  href: string
  text: string
}

import { WebIcon, GithubIcon } from './icons'

export default function Link({ href, text }: LinkProps) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      class={ANCHOR_STYLES}
      title={
        text === '' ? 'Github Repository' : text === '󰖟' ? 'Website' : 'Link'
      }
    >
      {text === '' ? <GithubIcon /> : <WebIcon />}
    </a>
  )
}
