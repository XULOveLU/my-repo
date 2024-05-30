import React from 'react'
import {NavLink,useRoutes} from 'react-router-dom'
import routes from './routes'
import Header from './Component/Header'
export default function App() {
 
//根据路由表生成对于的路由规则
  const element = useRoutes(routes)
  return (
    <div>
    <div className="row">
      <Header/>
    </div>
    <div className="row">
      <div className="col-xs-2 col-xs-offset-2">
        <div className="list-group">
          {/*在react中靠路由链接实现切换组件--编写路由链接 */}
          <NavLink   className='list-group-item' to="/Login">Login</NavLink>
          <NavLink className='list-group-item' to="/Register">Register</NavLink>
        </div>
      </div>
      <div className="col-xs-6">
        <div className="panel">
          <div className="panel-body">
            {/* 注册路由*/}
            {element}
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
