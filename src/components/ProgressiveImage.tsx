import * as React from 'react'
import { useReducedMotion } from 'framer-motion'

export type ProgressiveImageProps = Omit<
  React.ImgHTMLAttributes<HTMLImageElement>,
  'onLoad' | 'onError'
> & {
  wrapperClassName?: string
  shimmerClassName?: string
  imgClassName?: string
  onLoad?: React.ImgHTMLAttributes<HTMLImageElement>['onLoad']
  onError?: React.ImgHTMLAttributes<HTMLImageElement>['onError']
}

export function ProgressiveImage({
  wrapperClassName,
  shimmerClassName,
  imgClassName,
  className,
  onLoad,
  onError,
  ...imgProps
}: ProgressiveImageProps) {
  const reduceMotion = useReducedMotion()
  const [loaded, setLoaded] = React.useState(false)

  const handleLoad: React.ImgHTMLAttributes<HTMLImageElement>['onLoad'] = (e) => {
    setLoaded(true)
    onLoad?.(e)
  }

  const handleError: React.ImgHTMLAttributes<HTMLImageElement>['onError'] = (e) => {
    setLoaded(true)
    onError?.(e)
  }

  return (
    <div className={['relative', wrapperClassName].filter(Boolean).join(' ')}>
      <div
        aria-hidden="true"
        className={[
          'progressive-skeleton absolute inset-0',
          loaded ? 'opacity-0' : 'opacity-100',
          reduceMotion ? '' : 'transition-opacity duration-500',
          shimmerClassName,
        ]
          .filter(Boolean)
          .join(' ')}
      />
      <img
        {...imgProps}
        className={[
          className,
          imgClassName,
          loaded ? 'opacity-100' : 'opacity-0',
          reduceMotion ? '' : 'transition-opacity duration-500',
        ]
          .filter(Boolean)
          .join(' ')}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  )
}

