let initialState = {
  session: {
    username: 'bitey'
  },
  categoryCount: 6,
  categories: [],
  loading: true
}


export default function AppReducer (currentState, action) {
  if (currentState === undefined) {
    return initialState;
  }

  switch (action.type) {


    case 'LOAD_CLUES':
      return currentState;


    case 'INITIALIZE_CLUES':
      console.log('INITIALIZING');
      console.log(action);
      console.log(currentState);
      return currentState;


    case 'ADD_CATEGORY':
      // TODO: model for question
      // TODO: array of question value pairs?
      console.log(action);

      let updatedCategories = currentState.categories;
      updatedCategories.push(action.category_info);

      // check length to see if we're done loading all categories!
      var newState = {
        categories: updatedCategories,
        loading: ((updatedCategories.length >= currentState.categoryCount) ? false : true )
      };

      return Object.assign({}, currentState, newState);


    default:
      console.debug(`Unhandled Action: ${action.type}!`);
      return currentState;
  }
}
