import {
  siGithub,
  siGmail,
  siLichess,
  siLinkedin,
  siAdobeacrobatreader
} from 'simple-icons'

export default function getSocialIcons(lang = 'en') {
  return [
    {
      title: 'Github',
      href: 'https://github.com/jamerrq',
      svg: siGithub.svg,
      hex: siGithub.hex
    },
    {
      title: 'Linkedin',
      href: 'https://www.linkedin.com/in/jamerrq/',
      svg: siLinkedin.svg,
      hex: siLinkedin.hex
    },
    {
      title: 'Email',
      href: 'mailto:jamerrq@gmail.com',
      svg: siGmail.svg,
      hex: siGmail.hex
    },
    {
      title: 'Curriculum Vitae',
      href:
        lang === 'en'
          ? '/docs/cv_Jamer_Rebolledo_en.pdf'
          : '/docs/cv_Jamer_Rebolledo_es.pdf',
      svg: siAdobeacrobatreader.svg,
      hex: siAdobeacrobatreader.hex
    },
    {
      title: 'Lichess',
      href: 'https://lichess.org/@/jamerrq',
      svg: siLichess.svg,
      hex: siLichess.hex
    }
  ]
}
