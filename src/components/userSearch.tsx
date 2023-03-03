import { ChangeEvent, useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../contexts/searchContext";
import { Header, Button } from "../styled/UserSearch";

const UserSearch = () => {
  const { setSearchInput } = useContext(SearchContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const HandleSubmit = (e: React.SyntheticEvent) => {
    setSearchInput(inputValue);
    e.preventDefault();
    inputRef.current!.value = "";
    navigate("/");
  };

  const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <Header>
      <form onSubmit={HandleSubmit}>
        <input
          ref={inputRef}
          data-testid="searchInputTest"
          className="searchInput"
          type="text"
          name="search"
          onChange={(e: ChangeEvent<HTMLInputElement>) => HandleChange(e)}
          placeholder="Search..."
        />
        <Button data-testid="searchButton" type="submit">
          Search
        </Button>
      </form>
    </Header>
  );
};

export default UserSearch;
