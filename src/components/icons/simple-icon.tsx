import { h } from 'preact'
import {
  siAstro,
  siSupabase,
  siNextdotjs,
  siTailwindcss,
  siTypescript,
  siCsharp,
  siDotnet,
  siExpress,
  siSequelize,
  siPostgresql,
  siReact,
  siPython,
  siJupyter,
  siLatex,
  siHtml5,
  siJavascript,
  siPhp,
  siCss3
} from 'simple-icons'

export interface SimpleIconProps {
  class?: string
  __html: string
}

const TECH_ICON_STYLES = [
  'w-8',
  'h-8',
  'xl:w-10',
  'xl:h-10',
  'hover:scale-110',
  'transition-all',
  'dark:bg-emerald-300',
  'bg-emerald-900',
  'p-1',
  'rounded-md',
  `fill-[#fff] dark:fill-[#000]`
].join(' ')

function SimpleIcon({ __html }: SimpleIconProps) {
  return h('div', {
    dangerouslySetInnerHTML: { __html },
    class: TECH_ICON_STYLES
  })
}

function AstroLogo() {
  return SimpleIcon({ __html: siAstro.svg })
}

function SupabaseLogo() {
  return SimpleIcon({ __html: siSupabase.svg })
}

function NextLogo() {
  return SimpleIcon({ __html: siNextdotjs.svg })
}

function TailwindLogo() {
  return SimpleIcon({
    __html: siTailwindcss.svg
  })
}

function TypeScriptLogo() {
  return SimpleIcon({ __html: siTypescript.svg })
}

function CSharpLogo() {
  return SimpleIcon({ __html: siCsharp.svg })
}

function DotnetLogo() {
  return SimpleIcon({ __html: siDotnet.svg })
}

function ExpressLogo() {
  return SimpleIcon({ __html: siExpress.svg })
}

function SequelizeLogo() {
  return SimpleIcon({ __html: siSequelize.svg })
}

function PostgreSQLLogo() {
  return SimpleIcon({ __html: siPostgresql.svg })
}

function ReactLogo() {
  return SimpleIcon({ __html: siReact.svg })
}

function PythonLogo() {
  return SimpleIcon({ __html: siPython.svg })
}

function JupyterLogo() {
  return SimpleIcon({ __html: siJupyter.svg })
}

function LatexLogo() {
  return SimpleIcon({ __html: siLatex.svg })
}

function HtmlLogo() {
  return SimpleIcon({ __html: siHtml5.svg })
}

function JavaScriptLogo() {
  return SimpleIcon({ __html: siJavascript.svg })
}

function CssLogo() {
  return SimpleIcon({ __html: siCss3.svg })
}

function PhpLogo() {
  return SimpleIcon({ __html: siPhp.svg })
}

const toExport = {
  Astro: AstroLogo,
  Supabase: SupabaseLogo,
  'Next JS': NextLogo,
  'Tailwind CSS': TailwindLogo,
  TypeScript: TypeScriptLogo,
  'C#': CSharpLogo,
  '.NET': DotnetLogo,
  Express: ExpressLogo,
  Sequelize: SequelizeLogo,
  PostgresSql: PostgreSQLLogo,
  Python: PythonLogo,
  'Jupyter Notebook': JupyterLogo,
  LaTeX: LatexLogo,
  React: ReactLogo,
  Html: HtmlLogo,
  Css: CssLogo,
  Javascript: JavaScriptLogo,
  Php: PhpLogo
}

export type toExportType = typeof toExport

export default toExport
