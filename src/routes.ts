import { RouteConfig } from 'react-router-config'
import { lazyLoad } from '~/util'

export const rootRoute = {
  path: '/',
  render: lazyLoad(import('~/BaseLayout')),
  routes: [
    {
      path: '/pageA',
      render: lazyLoad(import('~/pages/pageA')),
    },
    {
      path: '/pageB',
      render: lazyLoad(import('~/pages/pageB')),
    },
  ]
}

const routes: RouteConfig[] = [rootRoute]

export default routes
