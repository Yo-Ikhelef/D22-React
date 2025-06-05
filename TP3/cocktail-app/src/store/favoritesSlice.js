import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('favorites')) || [];

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            const exists = state.find(drink => drink.idDrink === action.payload.idDrink);
            if (!exists) state.push(action.payload);
        },
        removeFavorite: (state, action) => {
            return state.filter(drink => drink.idDrink !== action.payload);
        },
    },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
