import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="text-white flex items-center justify-between px-10 py-6 ">
      <Link to="/">
        <h1 className="text-2xl font-medium uppercase">Christss</h1>
      </Link>
      <nav>
        <ul className="flex gap-5 text-xl font-medium">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/project">Projects</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
