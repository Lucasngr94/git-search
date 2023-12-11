import { Link } from 'react-router-dom';
import './Link-style.css'

const Menu = () => {
    return (
        <nav className='header'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/search">Search</Link></li>
            </ul>
        </nav>
    );
}

export default Menu;
