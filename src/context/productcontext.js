import axios from 'axios'

import { createContext, useContext, useEffect, useReducer } from 'react'

import reducer from '../reducer/productReducer'

const ProductContext = createContext()

const API = 'https://api.pujakaitem.com/api/products'

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featuredProducts: [],
  isSingleLoading: false,
  singleProduct: {},
}

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const getProducts = async (url, id) => {
    dispatch({ type: 'LOADING_STATE' })
    try {
      const res = await axios.get(url)
      const products = res.data
      dispatch({ type: 'GET_PRODUCT_LIST', payload: products })
    } catch (error) {
      dispatch({ type: 'DATA_ERROR' })
    }
  }

  const getSingleProduct = async (url) => {
    dispatch({ type: 'SINGLE_LOADING_STATE' })
    try {
      const res = await axios.get(url)
      const singleProduct = res.data
      dispatch({ type: 'GET_SINGLE_PRODUCT', payload: singleProduct })
    } catch (error) {
      dispatch({ type: 'SINGLE_DATA_ERROR' })
    }
  }

  useEffect(() => {
    getProducts(API)
  }, [])

  return (
    <ProductContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </ProductContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(ProductContext)
}

export { ProductContext, ProductProvider, useGlobalContext }
