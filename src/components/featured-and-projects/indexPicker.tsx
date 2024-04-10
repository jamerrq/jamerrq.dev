export default function IndexPicker({
  n,
  reference
}: {
  n: number
  reference: any
}) {
  function goToIndex(i: number) {
    reference.value = i
  }
  return (
    <div className='absolute flex bottom-3 left-1/2 transform -translate-x-1/2'>
      {Array.from(Array(n).keys()).map((i) => (
        <button
          key={i}
          onClick={() => goToIndex(i)}
          aria-label={`subpage ${i}`}
          className={`w-3 h-3 rounded-full mx-1 ${
            i === reference.value ? 'bg-cyan-300' : 'bg-cyan-950'
          }`}
        />
      ))}
    </div>
  )
}
