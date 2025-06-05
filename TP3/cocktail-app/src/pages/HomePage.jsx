import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCocktails } from '../store/cocktailsSlice';
import CocktailCard from '../components/CocktailCard';
import './HomePage.css';

const HomePage = () => {
    const dispatch = useDispatch();
    const { list: cocktails, loading, error } = useSelector(state => state.cocktails);

    console.log(cocktails);
    useEffect(() => {
        dispatch(fetchCocktails());
    }, [dispatch]);

    console.log('cocktails state from redux:', cocktails);

    return (
        <div className="homepage">
            <h2>Découvrez nos cocktails</h2>

            {loading && <p>Chargement...</p>}
            {error && <p>{error}</p>}

            <div className="cocktail-grid">
                {Array.isArray(cocktails) && cocktails.map(cocktail => (
                    <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
                ))}

            </div>
        </div>
    );
};

export default HomePage;
