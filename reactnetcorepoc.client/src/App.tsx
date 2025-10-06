import React from 'react'
import Layout from './components/Layout'
import { RouteComponent } from './routes'
import { findRoute } from './routes/routeConfig'
import './App.css'

function App() {
  const pathname = window.location.pathname
  const route = findRoute(pathname)
  
  // Default to Home if no route found
  const defaultRoute = {
    path: '/',
    component: React.lazy(() => import('./pages/Home')),
    pageName: 'Home'
  }
  
  const currentRoute = route || defaultRoute
  
  return (
    <Layout>
      <RouteComponent route={currentRoute} />
    </Layout>
  )
}

export default App
