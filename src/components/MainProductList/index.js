import React from 'react'
import { useFilterContext } from '../../context/filter_context'
import GridView from '../GridView'
import ListView from '../ListView'

const MainProductList = () => {
  const { filterProducts, grid_view } = useFilterContext()
  if (grid_view) {
    return <GridView products={filterProducts} />
  } else {
    return <ListView products={filterProducts} />
  }
}

export default MainProductList
