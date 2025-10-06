import React, { Suspense } from 'react'
import LoadingSpinner from '../components/LoadingSpinner'
import type { RouteConfig } from './routeConfig'

// Route component with lazy loading
export const RouteComponent: React.FC<{ route: RouteConfig }> = ({ route }) => {
  const Component = route.component
  
  return (
    <Suspense fallback={<LoadingSpinner pageName={route.pageName} />}>
      <Component />
    </Suspense>
  )
}
