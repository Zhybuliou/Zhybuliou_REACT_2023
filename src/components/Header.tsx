import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink data-testid="link-about" to="/about">
          About Us
        </NavLink>
        <NavLink data-testid="link-form" to="/form">
          Form
        </NavLink>
      </nav>
    </header>
  );
}
