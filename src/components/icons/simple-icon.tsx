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
  siCss3,
  siVisualstudiocode,
  siDeno,
  siNodedotjs
} from 'simple-icons'

export const ICONS_SAFE_LIST_TAILWIND = [
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
  siCss3,
  siNodedotjs
].map((icon) => `fill-[#${icon.hex}]`)

export interface SimpleIconProps {
  class?: string
  __html: string
  fill?: string
}

const TECH_ICON_STYLES = [
  'w-8',
  'h-8',
  'xl:w-10',
  'xl:h-10',
  'hover:scale-110',
  'transition-all',
  'p-1',
  'rounded-md',
  'shadow-md',
  'shadow-black/90',
  'bg-emerald-100'
].join(' ')

function SimpleIcon({ __html, fill }: SimpleIconProps) {
  return h('div', {
    dangerouslySetInnerHTML: { __html },
    class: TECH_ICON_STYLES + (fill ? ` fill-[${fill}]` : '')
  })
}

function AstroLogo() {
  return SimpleIcon({ __html: siAstro.svg, fill: `#${siAstro.hex}` })
}

function SupabaseLogo() {
  return SimpleIcon({ __html: siSupabase.svg, fill: `#${siSupabase.hex}` })
}

function NextLogo() {
  return SimpleIcon({ __html: siNextdotjs.svg, fill: `#${siNextdotjs.hex}` })
}

function TailwindLogo() {
  return SimpleIcon({
    __html: siTailwindcss.svg,
    fill: `#${siTailwindcss.hex}`
  })
}

function TypeScriptLogo() {
  return SimpleIcon({ __html: siTypescript.svg, fill: `#${siTypescript.hex}` })
}

function CSharpLogo() {
  return SimpleIcon({
    __html: siCsharp.svg,
    fill: `#${siAstro.hex}`
  })
}

function DotnetLogo() {
  return SimpleIcon({
    __html: siDotnet.svg,
    fill: `#${siAstro.hex}`
  })
}

function ExpressLogo() {
  return SimpleIcon({ __html: siExpress.svg, fill: `#${siExpress.hex}` })
}

function SequelizeLogo() {
  return SimpleIcon({ __html: siSequelize.svg, fill: `#${siSequelize.hex}` })
}

function PostgreSQLLogo() {
  return SimpleIcon({ __html: siPostgresql.svg, fill: `#${siPostgresql.hex}` })
}

function ReactLogo() {
  return SimpleIcon({
    __html: siReact.svg,
    fill: `#${siTypescript.hex}] dark:fill-[#${siReact.hex}`
  })
}

function PythonLogo() {
  return SimpleIcon({ __html: siPython.svg, fill: `#${siPython.hex}` })
}

function JupyterLogo() {
  return SimpleIcon({ __html: siJupyter.svg, fill: `#${siJupyter.hex}` })
}

function LatexLogo() {
  return SimpleIcon({ __html: siLatex.svg, fill: `#${siLatex.hex}` })
}

function HtmlLogo() {
  return SimpleIcon({ __html: siHtml5.svg, fill: `#${siHtml5.hex}` })
}

function JavaScriptLogo() {
  return SimpleIcon({ __html: siJavascript.svg, fill: `#${siJavascript.hex}` })
}

function CssLogo() {
  return SimpleIcon({ __html: siCss3.svg, fill: `#${siCss3.hex}` })
}

function PhpLogo() {
  return SimpleIcon({ __html: siPhp.svg, fill: `#${siPhp.hex}` })
}

function VisualStudioCodeLogo() {
  return SimpleIcon({
    __html: siVisualstudiocode.svg,
    fill: `#${siTypescript.hex}`
  })
}

function DenoLogo() {
  return SimpleIcon({ __html: siDeno.svg, fill: `#${siDeno.hex}` })
}

function NodeLogo() {
  return SimpleIcon({ __html: siNodedotjs.svg, fill: `#${siNodedotjs.hex}` })
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
  JavaScript: JavaScriptLogo,
  Php: PhpLogo,
  'Visual Studio Code': VisualStudioCodeLogo,
  Deno: DenoLogo,
  NodeJS: NodeLogo
}

export type toExportType = typeof toExport

export default toExport
