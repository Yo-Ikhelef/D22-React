import { configureStore } from '@reduxjs/toolkit';
import cocktailsReducer from './cocktailsSlice';
import favoritesReducer from './favoritesSlice';

const store = configureStore({
    reducer: {
        cocktails: cocktailsReducer,
        favorites: favoritesReducer,
    },
});

export default store;
