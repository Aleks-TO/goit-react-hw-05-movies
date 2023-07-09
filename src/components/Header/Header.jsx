import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

function Header() {
  const ActiveClassName = ({ isActive }) =>
    isActive ? css['active'] : css['navLink'];
  return (
    <nav>
      <div className={css.containerNav}>
        <div className="navbar">
          <NavLink className={ActiveClassName} to="/">
            Home
          </NavLink>
          <NavLink className={ActiveClassName} to="/movies">
            Movies
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Header;
