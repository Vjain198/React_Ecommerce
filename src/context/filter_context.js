import { createContext, useContext, useEffect, useReducer } from 'react'
import { useGlobalContext } from './productcontext'
import reducer from '../reducer/filterReducer'

export const FilterContext = createContext()

const initialState = {
  filterProducts: [],
  allProducts: [],
  grid_view: true,
  sorting_value: 'lowest',
}

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const { products } = useGlobalContext()

  const setGridView = () => {
    dispatch({ type: 'SET_GRID_VIEW' })
  }

  const setListView = () => {
    dispatch({ type: 'LIST_VIEW' })
  }

  const sorting = (event) => {
    let userValue = event.target.value
    dispatch({ type: 'GET_SORT_VALUE', payload: userValue })
  }

  useEffect(() => {
    dispatch({ type: 'SORTING_PRODUCTS' })
  }, [state.sorting_value])

  useEffect(() => {
    dispatch({ type: 'LOAD_FILTER_PRODUCTS', payload: products })
  }, [products])

  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, sorting }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export const useFilterContext = () => {
  return useContext(FilterContext)
}
