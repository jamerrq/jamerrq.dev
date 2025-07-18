import { DoubleLeft, DoubleRight } from './icons'

export const DoubleLeftButton = ({ _f }: { _f: () => void }) => (
  <div class='left-1 absolute bg-slate-900 rounded-[10px] text-cyan-950  fill-current flex flex-wrap items-center justify-center p-1 shadow-md shadow-black/90'>
    <button onClick={_f} title={'iterate over'}>
      <DoubleLeft />
    </button>
  </div>
)

export const DoubleRightButton = ({ _f }: { _f: () => void }) => (
  <div
    class={`right-1 absolute bg-slate-900  rounded-[10px] text-cyan-950  fill-current flex flex-wrap items-center justify-center p-1 shadow-md shadow-black/90`}
  >
    <button onClick={_f} title={'iterate over'}>
      <DoubleRight />
    </button>
  </div>
)
