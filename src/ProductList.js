import React from 'react'
import styled from 'styled-components'
import Filter from './components/Filter'
import Sort from './components/Sort'
import MainProductList from './components/MainProductList'

const ProductsList = () => {
  return (
    <Wrapper>
      <div className='container grid grid-filter-column'>
        <div>
          <Filter />
        </div>
        <section className='product-view--sort'>
          <div className='sort-filter'>
            <Sort />
          </div>
          <div className='main-product'>
            <MainProductList />
          </div>
        </section>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`

export default ProductsList
