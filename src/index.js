import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { ProductProvider } from './context/productcontext'
import { FilterProvider } from './context/filter_context'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <ProductProvider>
    <FilterProvider>
      <App />
    </FilterProvider>
  </ProductProvider>
)
