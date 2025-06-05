import { useSelector } from 'react-redux';
import CocktailCard from '../components/CocktailCard';
import './FavoritesPage.css';

const FavoritesPage = () => {
    const favorites = useSelector(state => state.favorites);

    return (
        <div className="favorites-page">
            <h2>Mes Cocktails Favoris</h2>

            {favorites.length === 0 ? (
                <p>Aucun favori pour le moment. Ajoutez-en depuis une fiche cocktail !</p>
            ) : (
                <div className="cocktail-grid">
                    {favorites.map(cocktail => (
                        <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default FavoritesPage;
