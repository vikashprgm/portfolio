import { HeadContent, Scripts, createRootRoute, Outlet } from '@tanstack/react-router'

import appCss from '../styles.css?url'
import { LoadingSpinner } from '#/components/LoadingSpinner'
import { useRouterState } from '@tanstack/react-router'

function GlobalLoader() {
  const isLoading = useRouterState({ select: (s) => s.status === 'pending' })
  return isLoading ? <LoadingSpinner /> : null
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TanStack Start Starter',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  component:RootComponent,
  shellComponent: RootDocument,
})

function RootComponent() {
  const isLoading = useRouterState({ select: (s) => s.status === 'pending' })
  
  if (isLoading) return <LoadingSpinner />
  
  return <Outlet />
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
