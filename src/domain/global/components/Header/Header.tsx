import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </nav>
    </header>
  );
};

export default Header;
