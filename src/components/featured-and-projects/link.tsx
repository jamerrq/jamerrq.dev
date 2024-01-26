const ANCHOR_STYLES = [
  'font-thin',
  'responsive-text',
  'dark:text-amber-300',
  'text-amber-950',
  'flex'
].join(' ')

type LinkProps = {
  href: string
  title: string
}

import {
  WebIcon,
  // GithubIcon,
  // TwitterIcon,
  // TwitchIcon,
  // YoutubeIcon,
  YoutubeColorLogo,
  TwitchColorLogo,
  // DiscordServerIcon,
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
