import React, { cloneElement, ReactElement } from 'react'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/dist/client/router'

interface ActiveLinkProps extends LinkProps {
  children: ReactElement
  shouldMatchExactHref?: boolean
}

export default function ActiveLink({
  children,
  shouldMatchExactHref = false,
  ...rest
}: ActiveLinkProps) {
  let isActive = false
  const { asPath } = useRouter()

  if (shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true
  } else if (
    !shouldMatchExactHref &&
    (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))
  ) {
    isActive = true
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? 'pink.400' : 'gray.50'
      })}
    </Link>
  )
}
