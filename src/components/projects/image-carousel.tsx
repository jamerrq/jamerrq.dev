import { signal, effect } from '@preact/signals'
import IndexPicker from './index-picker'

export function MobileImageCarousel({ images }: { images: string[] }) {
  const imagesIndex = signal(0)
  effect(() => {
    const interval = setInterval(() => {
      imagesIndex.value = (imagesIndex.value + 1) % images.length
    }, 7000)
    return () => clearInterval(interval)
  })
  const currentImage = images[imagesIndex.value]
  return (
    <div className='relative'>
      <div className=''>
        {currentImage && (
          <img
            src={`/img/projects/${images[imagesIndex.value]}`}
            alt='project'
            class='w-1/2 mx-auto rounded-md border-2 shadow shadow-black'
            loading='lazy'
          />
        )}
      </div>
    </div>
  )
}

export function ImageCarousel({ images }: { images: string[] }) {
  const imagesIndex = signal(0)
  //   console.log('there are ' + images.length + ' images')
  effect(() => {
    const interval = setInterval(() => {
      imagesIndex.value = (imagesIndex.value + 1) % images.length
    }, 5000)
    // console.log(imagesIndex.value)
    return () => clearInterval(interval)
  })
  const currentImage = images[imagesIndex.value]
  return (
    <div className='relative w-full h-full'>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        {currentImage && (
          <img
            src={`/img/projects/${images[imagesIndex.value]}`}
            alt='project'
            class='w-full rounded-md border-2 shadow shadow-black'
            loading='lazy'
          />
        )}
      </div>
    </div>
  )
}
