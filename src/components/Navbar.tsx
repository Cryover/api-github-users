import { Link } from "react-router-dom";
import { useContext } from "react";
import UserSearch from "./userSearch";
import { SearchContext } from "../contexts/searchContext";
import { Nav, Ul, Li } from "../styled/NavBar";

const Navbar = () => {
  const { setSearchInput } = useContext(SearchContext);

  const HandleSearchReset = () => {
    setSearchInput("");
  };

  return (
    <Nav id="navbar">
      <Ul>
        <Li>
          <Link to="/" onClick={HandleSearchReset}>
            Home
          </Link>
        </Li>
      </Ul>
      <UserSearch />
    </Nav>
  );
};

export default Navbar;
