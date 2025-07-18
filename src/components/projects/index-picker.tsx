type IndexPickerProps = {
  n: number
  reference: { value: number }
}

export default function IndexPicker({ n, reference }: IndexPickerProps) {
  function goToIndex(i: number) {
    reference.value = i
  }
  return (
    <div className="absolute flex bottom-3 left-1/2 transform -translate-x-1/2">
      {Array.from({ length: n }).map((_, i) => (
        <button
          key={i}
          onClick={() => goToIndex(i)}
          aria-label={`Go to image ${i + 1}`}
          className={`w-3 h-2 rounded-full mx-1 ${
            i === reference.value ? 'bg-cyan-300' : 'bg-cyan-950'
          }`}
        />
      ))}
    </div>
  )
}
