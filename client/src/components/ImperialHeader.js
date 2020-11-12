import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/icons/ImperialLogo.svg';

export default function ImperialHeader() {

    return (
        <header className="imperial-header">
            <nav className="imperial-header__nav">

                <Link to="/" className="imperial-header__nav-link imperial-header__nav-link--logo">
                    <img src={logo} alt="Imperial Logo" className="imperial-header__logo" />
                </Link>
                <ul className="imperial-header__nav-list">
                    <li className="imperial-header__list-item">
                        <NavLink exact to="/" className="imperial-header__nav-link">
                            Find Jobs
                        </NavLink>
                    </li>
                    <li className="imperial-header__list-item">
                        <NavLink to="/reviews" className="imperial-header__nav-link">
                            Emperor's Review
                        </NavLink>
                    </li>
                    <li className="imperial-header__list-item">
                        <NavLink to="/salaries" className="imperial-header__nav-link">
                            Find Salaries
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )

}