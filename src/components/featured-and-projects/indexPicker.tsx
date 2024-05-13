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
          className={`w-4 h-3 rounded-full mx-1 ${
            i === reference.value
              ? 'dark:bg-cyan-300 bg-cyan-900'
              : 'dark:bg-cyan-950 bg-cyan-500'
          }`}
        />
      ))}
    </div>
  )
}
