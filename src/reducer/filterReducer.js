const FilterReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_FILTER_PRODUCTS': {
      return {
        ...state,
        filterProducts: [...action.payload],
        allProducts: [...action.payload],
      }
    }

    case 'SET_GRID_VIEW': {
      return {
        ...state,
        grid_view: true,
      }
    }

    case 'LIST_VIEW': {
      return {
        ...state,
        grid_view: false,
      }
    }

    case 'GET_SORT_VALUE':
      let userSortValue = document.getElementById('sort')
      let sort_value = userSortValue.options[userSortValue.selectedIndex].value
      return {
        ...state,
        sorting_value: sort_value,
      }

    default:
      return state
  }
}

export default FilterReducer
