const ANCHOR_STYLES = [
  'font-thin',
  'responsive-text',
  'dark:text-amber-300',
  'text-amber-950',
  'flex',
  'w-6 h-6',
  'xl:w-8 xl:h-8'
].join(' ')

type LinkProps = {
  href: string
  title: string
}

import {
  WebIcon,
  YoutubeColorLogo,
  TwitchColorLogo,
  DiscordColorLogo,
  FirefoxIcon,
  GithubColorLogo,
  TwitterColorLogo
} from './icons'

export default function Link({ href, title }: LinkProps) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      class={ANCHOR_STYLES}
      title={title}
      aria-label={title}
    >
      {title === 'Website' ? (
        <FirefoxIcon />
      ) : title === 'Repository' ? (
        <GithubColorLogo />
      ) : title === 'Twitter Account' ? (
        <TwitterColorLogo />
      ) : title === 'Twitch Channel' ? (
        <TwitchColorLogo />
      ) : title === 'Youtube Channel' ? (
        <YoutubeColorLogo />
      ) : title === 'Discord Server' ? (
        <DiscordColorLogo />
      ) : (
        <WebIcon />
      )}
    </a>
  )
}
