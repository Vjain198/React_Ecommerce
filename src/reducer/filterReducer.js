const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS": {
      return {
        ...state,
        filterProducts: [...action.payload],
        allProducts: [...action.payload],
      };
    }

    case "SET_GRID_VIEW": {
      return {
        ...state,
        grid_view: true,
      };
    }

    case "LIST_VIEW": {
      return {
        ...state,
        grid_view: false,
      };
    }

    case "GET_SORT_VALUE":
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS":
      let newSortData;
      const { filterProducts, sorting_value } = state;
      let tempSortData = [...filterProducts];
      const sortingData = (a, b) => {
        switch (sorting_value) {
          case "lowest":
            return a.price - b.price;

          case "highest":
            return b.price - a.price;

          case "a-z":
            return a.name.localeCompare(b.name);

          case "z-a":
            return b.name.localeCompare(a.name);

          default:
            return a.price - b.price;
        }
      };
      newSortData = tempSortData.sort(sortingData);
      return {
        ...state,
        filterProducts: newSortData,
      };

    default:
      return state;
  }
};

export default FilterReducer;
