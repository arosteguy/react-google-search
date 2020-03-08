import React, { createContext, useReducer, useContext } from "react";
import {
  SET_CURRENT_BOOK,
  REMOVE_BOOK,
  UPDATE_BOOKS,
  ADD_BOOK,
  ADD_FAVORITE,
  UPDATE_FAVORITES,
  REMOVE_FAVORITE,
  LOADING
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;



// remember, on a reducer, 'state' => initial state and 'action' => the action to be run on the initial 
// 'state' in order to generate the updated state
const reducer = (state, action) => {
  switch (action.type) {
  // Sets the current post in the store. This action will only be dispatched from the detail page.
  case SET_CURRENT_BOOK:
    return {
      ...state,
      currentBook: action.book,
      loading: false
    };

  // Updates the state with the latest posts.
  case UPDATE_BOOKS:
    return {
      ...state,
      books: [...action.books],
      loading: false
    };

  // Adds a post to the posts array.
  case ADD_BOOK:
    return {
      ...state,
      books: [action.book, ...state.books],
      loading: false
    };

  // Removes a specified post from your posts array.
  case REMOVE_BOOK:
    return {
      ...state,
      books: state.books.filter((book) => {
        return book._id !== action._id; 
      })
    };

  // Adds as a favorite in the store (not the db). This action will only be dispatched from the detail page.
  case ADD_FAVORITE:
    return {
      ...state,
      favorites: [action.book, ...state.favorites],
      loading: false
    };

  // Updates the favorites array
  case UPDATE_FAVORITES:
    return {
      ...state,
      favorites: [...state.favorites],
      loading: false
    };

  // Removes a favorite from the store's favorites array
  case REMOVE_FAVORITE:
    return {
      ...state,
      favorites: state.favorites.filter((book) => {
        return book._id !== action._id; 
      })
    };
  // Defines whether or not a post is in the process of being saved to the database.
  case LOADING:
    return {
      ...state,
      loading: true
    };

  default:
    return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  // remember: 'state' here => our updated state and 'dispatch' here is the method we call anytime
  // we want to trigger one of our actions
  const [state, dispatch] = useReducer(reducer, 
  // the second argument inside our 'useReducer' call is always the default values for that state
  {
    books: [],
    currentBook: {
      _id: 0,
      title: "",
      description: "",
      author: ""
    },
    favorites: [],
    loading: false
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };