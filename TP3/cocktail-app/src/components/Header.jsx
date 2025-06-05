import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-section header-left">
                <img src="/cocktail.png" alt="Logo" className="logo" />
                <span className="brand">CocktailApp</span>
            </div>
            <nav className="header-section nav-links">
                <Link to="/" className="nav-link active">Nos Cocktails</Link>
                    <Link to="/favorites" className="nav-link">Favoris</Link>
            </nav>
            <div className="header-section header-right">
            </div>
        </header>
    );
}


export default Header;