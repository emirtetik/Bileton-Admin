import ReactDOM from 'react-dom/client'
import './assets/css/tailwind.css'
import {RouterProvider} from 'react-router-dom'
import routes from './router'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={routes}/>
)
