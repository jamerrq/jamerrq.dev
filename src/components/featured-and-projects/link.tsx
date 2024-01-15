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

export default function Link({ href, text }: LinkProps) {
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
