import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app/layout/styles.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/routes/Routes'
import { Provider } from 'react-redux'
import { configureTheStore } from './app/store/store'

const store = configureTheStore()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider 
      router={router}
      // future={{v7_startTransition: true}}  
    />
    </Provider>
    
  </StrictMode>,
)
