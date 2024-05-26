import { ReactElement } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/home/Index'
import { Management } from '../pages/management/Index'
import { Setting } from '../pages/setting/Index'

// 定义路由类型，支持嵌套路由
type RouteItem = {
  path: string
  element: ReactElement
  children?: RouteItem[]
}

// 所有路由配置，包括嵌套路由
export const routesConfig: RouteItem[] = [
  { path: '/setting', element: <Setting /> },
  {
    path: '/management',
    element: <Management />,
    children: [
      { path: 'news', element: <>1</> },
      { path: 'tool', element: <>2</> }
    ]
  },
  { path: '/', element: <Home /> }
]

// 递归渲染路由和子路由
const renderRoute = (routes: RouteItem[]): ReactElement => {
  return (
    <>
      {routes.map(({ path, element, children }) => (
        <Route key={path} path={path} element={element}>
          {children && renderRoute(children)} {/* 递归渲染子路由 */}
        </Route>
      ))}
    </>
  )
}
export const renderRoutes = (routes: RouteItem[]): ReactElement => {
  return <Routes>{renderRoute(routes)}</Routes>
}
