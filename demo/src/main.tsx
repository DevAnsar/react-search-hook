import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { SearchProvider } from 'react-search-hook'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SearchProvider stores={['books']}>
      <App />
    </SearchProvider>
  </React.StrictMode>,
)
