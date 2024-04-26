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
      class='font-thin responsive-text dark:text-amber-300 text-amber-950 grid place-content-center w-4 h-4 xl:w-8 xl:h-8 mx-2'
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
