import { Link } from "react-router-dom";

const Navbar = () => (
    <nav>
        <Link to="/">Home</Link> | <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link>
    </nav>
);

export default Navbar;
