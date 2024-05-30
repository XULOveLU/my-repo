import {Navigate} from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'

export default[{
    path:"/Register",
    element:<Register/>
  },
  {
    path:"/Login",
    element:<Login/>,
    },
  {
    path:"/",
    element:<Navigate to="/Login"/>
  },
  
  ]