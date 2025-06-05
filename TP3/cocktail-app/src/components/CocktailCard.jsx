import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeFavorite } from '../store/favoritesSlice';
import './CocktailCard.css';

const CocktailCard = ({ cocktail }) => {
    const location = useLocation();
    const dispatch = useDispatch();

    const handleRemoveFavorite = (e) => {
        e.preventDefault();
        dispatch(removeFavorite(cocktail.idDrink));
    }

    const isFavoritesPage = location.pathname === '/favorites';

    return (
        <div className="cocktail-card-wrapper">
            <Link to={`/cocktail/${cocktail.idDrink}`} className="cocktail-card">
                <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                <h3>{cocktail.strDrink}</h3>
            </Link>

            {isFavoritesPage && (
                <button onClick={handleRemoveFavorite} className="remove-button">
                    Retirer des favoris
                </button>
            )}
        </div>
    );
};
export default CocktailCard;
