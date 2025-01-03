import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { store } from './redux/store.ts'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes.tsx'
import { ThemeProvider } from './provider/theme/ThemeProvider.tsx'

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Root element not found.");
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    </ThemeProvider>    
  </StrictMode>,
)
