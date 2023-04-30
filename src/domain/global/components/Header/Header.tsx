import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/react-query">React Query</NavLink>
      </nav>
    </header>
  );
};

export default Header;
