import React from 'react'

import { cn } from '@/lib/utils'
import { ExternalLink } from '@/components/external-link'

export function FooterText({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      className={cn(
        'px-2 text-center text-xs leading-normal text-zinc-500',
        className
      )}
      {...props}
    >
      Project is made by Bharat and team {' '}
      <ExternalLink href="https://github.com/Shoto-Todoroki007">
        Github
      </ExternalLink> and{' '}For more Information DM me on {' '} 
      <ExternalLink href="https://www.instagram.com/choudhary_ji_2608/">
        Instagram
      </ExternalLink>
      .
    </p>
  )
}
