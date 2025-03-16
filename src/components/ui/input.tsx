import type { SvgProps } from '../icons/svgProps.types'

import * as React from 'react'

import { cn } from '@/components/utils'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  LeadingIcon?: (props: SvgProps) => JSX.Element
  fullWidth?: boolean
  isError?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, LeadingIcon, isError, fullWidth, ...props }, ref) => {
    return (
      <div
        className={cn('relative', {
          'w-full': fullWidth,
        })}
      >
        {!!LeadingIcon && (
          <LeadingIcon className="absolute top-1/2 left-2 h-4 w-4 -translate-y-1/2 text-slate-500" />
        )}

        <input
          type={type}
          className={cn(
            'focus-visible:ring-slate-950 dark:bg-slate-950 dark:ring-offset-slate-950 flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300',
            {
              'pl-8': !!LeadingIcon,
              'border-red-500': isError,
              'w-full': fullWidth,
            },
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
