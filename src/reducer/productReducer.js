const productReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING_STATE':
      return {
        ...state,
        isLoading: true,
      }

    case 'GET_PRODUCT_LIST':
      const featuredProducts = action.payload.filter((currEle) => {
        return currEle.featured === true
      })

      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featuredProducts: featuredProducts,
      }

    case 'DATA_ERROR':
      return {
        ...state,
        isLoading: false,
        isError: true,
      }

    case 'SINGLE_LOADING_STATE':
      return {
        ...state,
        isSingleLoading: true,
      }

    case 'GET_SINGLE_PRODUCT':
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
      }

    case 'SINGLE_DATA_ERROR':
      return {
        ...state,
        isSingleLoading: false,
        isError: true,
      }

    default:
      return state
  }
}

export default productReducer
