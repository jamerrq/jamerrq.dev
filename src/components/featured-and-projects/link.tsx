const ANCHOR_STYLES = [
  'font-thin',
  'responsive-text',
  'dark:text-amber-300',
  'text-amber-950'
].join(' ')

type LinkProps = {
  href: string
  title: string
}

import {
  WebIcon,
  GithubIcon,
  TwitterIcon,
  TwitchIcon,
  YoutubeIcon,
  DiscordServerIcon
} from './icons'

export default function Link({ href, title }: LinkProps) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      class={ANCHOR_STYLES}
      title={title}
    >
      {title === 'Website' ? (
        <WebIcon />
      ) : title === 'Repository' ? (
        <GithubIcon />
      ) : title === 'Twitter Account' ? (
        <TwitterIcon />
      ) : title === 'Twitch Channel' ? (
        <TwitchIcon />
      ) : title === 'Youtube Channel' ? (
        <YoutubeIcon />
      ) : title === 'Discord Server' ? (
        <DiscordServerIcon />
      ) : (
        <WebIcon />
      )}
    </a>
  )
}
