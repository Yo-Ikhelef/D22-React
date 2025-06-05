import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCocktails = createAsyncThunk('cocktails/fetch', async () => {
    const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
    const data = await res.json();
    return data.drinks || [];
});

const cocktailsSlice = createSlice({
    name: 'cocktails',
    initialState: {
        list: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCocktails.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCocktails.fulfilled, (state, action) => {
                state.list = action.payload;
                state.loading = false;
            })
            .addCase(fetchCocktails.rejected, (state, action) => {
                state.loading = false;
                state.error = 'Erreur lors du chargement';
            });
    },
});

export default cocktailsSlice.reducer;
