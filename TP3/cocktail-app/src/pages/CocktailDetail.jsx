import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CocktailDetail.css';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/favoritesSlice';


const CocktailDetail = () => {
    const { id } = useParams();
    const [cocktail, setCocktail] = useState(null);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites);


    useEffect(() => {
        const fetchCocktail = async () => {
            try {
                const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
                const data = await res.json();
                setCocktail(data.drinks?.[0] || null);
            } catch (error) {
                console.error("Erreur de chargement :", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCocktail();
    }, [id]);

    if (loading) return <p>Chargement...</p>;
    if (!cocktail) return <p>Cocktail introuvable.</p>;

    const isFavorite = favorites.some(fav => fav.idDrink === cocktail.idDrink);

    const {
        strDrink,
        strDrinkThumb,
        strCategory,
        strGlass,
        strAlcoholic,
        strInstructionsFR,
    } = cocktail;

    const getIngredients = () => {
        const ingredients = [];
        for (let i = 1; i <= 15; i++) {
            const name = cocktail[`strIngredient${i}`];
            const measure = cocktail[`strMeasure${i}`];
            if (name) {
                ingredients.push({ name, measure });
            }
        }
        return ingredients;
    };

    const toggleFavorite = () => {
        if (isFavorite) {
            dispatch(removeFavorite(cocktail.idDrink));
        } else {
            dispatch(addFavorite(cocktail));
        }
    };

    const ingredients = getIngredients();

    return (
        <div className="cocktail-detail">
            <h2>{strDrink}</h2>
            <img src={strDrinkThumb} alt={strDrink} className="main-image" />

            <p><strong>Catégorie :</strong> {strCategory}</p>
            <p><strong>Verre :</strong> {strGlass}</p>
            <p><strong>Type :</strong> {strAlcoholic}</p>
            <button onClick={toggleFavorite} className="cta-button" style={{ margin: '16px 0' }}>
                {isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
            </button>


            <h3>Ingrédients</h3>
            <ul className="ingredients">
                {ingredients.map((ing, index) => (
                    <li key={index}>
                        <img
                            src={`https://www.thecocktaildb.com/images/ingredients/${ing.name}-Small.png`}
                            alt={ing.name}
                            className="ingredient-thumb"
                        />
                        {ing.measure} {ing.name}
                    </li>
                ))}
            </ul>

            <h3>Instructions</h3>
            <p>{strInstructionsFR}</p>
        </div>
    );
};

export default CocktailDetail;
