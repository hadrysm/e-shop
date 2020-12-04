// import { useContext, useEffect, useState } from 'react';

// import { FiltersContext } from 'providers/FiltersProvider/FiltersProvider';

// import { sortProductBy } from 'helpers';

// import { SORT_BY } from 'providers/FiltersProvider/reducer/types';

// export const useFilterProducts = products => {
//   const [sortedProducts, setSortedProducts] = useState(products);

//   // const [filtersState, dispatch] = useContext(FiltersContext);

//   const sortBy = option =>
//     dispatch({
//       type: SORT_BY,
//       payload: {
//         option,
//       },
//     });

//   const applyFilters = () => {
//     if (!products.length) return;

//     // setSortedProducts(sortProductBy(products, filtersState.sortBy));

//     setSortedProducts(sortProductBy(products, filtersState.sortBy));
//   };

//   useEffect(() => {
//     applyFilters();
//   }, [filtersState]);

//   const methods = {
//     sortBy,
//   };

//   return [methods, sortedProducts];
// };
