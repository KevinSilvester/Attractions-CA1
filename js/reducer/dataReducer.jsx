const initialState = {
   data: [],
   displayData: [],
   error: null,
   loaded: false
}

const dataReducer = (state, action) => {
   switch (action.type) {
      case 'FETCH_SUCCESS': {
         return {
            ...state,
            data: [...action.data],
            displayData: [...action.data],
            loaded: true
         }
      }

      case 'FETCH_FAIL': {
         return {
            ...state,
            loaded: true,
            error: action.error
         }
      }

      case 'SEARCH_QUERY': {
         return {
            ...state,
            displayData: [...state.data.filter(e => e.name.toLowerCase().match(new RegExp(action.query.toLowerCase())))]
         }
      }

      case 'SEARCH_CLEAR': {
         return {
            ...state,
            displayData: [...state.data]
         }
      }

      case 'ADD': {
         return {
            ...state,
            data: [...state.data, action.attraction],
            displayData: [...state.data, action.attraction]
         }
      }

      case 'EDIT': {
         return {
            ...state,
            data: [...state.data.splice(state.data.findIndex(e => e.id === action.attraction.id), 1, action.attraction)],
            displayData: [...state.data.splice(state.data.findIndex(e => e.id === action.attraction.id), 1, action.attraction)]
         }
      }

      default:
         break;
   }
   return state
}