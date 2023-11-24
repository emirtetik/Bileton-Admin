import ReactDOM from 'react-dom/client'
import './assets/css/tailwind.css'
import {RouterProvider} from 'react-router-dom'
import routes from './router'
import { QueryClient, QueryClientProvider } from 'react-query'
import {Provider} from "react-redux"
import { store } from './store'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
    <RouterProvider router={routes}/>
    </Provider>
    </QueryClientProvider>
)
