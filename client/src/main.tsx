import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app/layout/styles.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/routes/Routes'
import { Provider } from 'react-redux'
import { store } from './app/store/store'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ToastContainer
        position='bottom-right'
        hideProgressBar
        theme='colored'
      />
      <RouterProvider 
        router={router}
        // future={{v7_startTransition: true}}  
      />
    </Provider>  
  </StrictMode>,
)
