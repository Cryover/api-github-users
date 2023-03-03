import { createContext, useState } from "react";
import { IProps } from "../types/types";

interface ISearch {
  searchInput?: string | null;
  setSearchInput: (data: string) => void;
  userDetails: string | undefined;
  setUserDetails: (data: string) => void;
}

const SearchInitial: ISearch = {
  searchInput: null,
  setSearchInput: (data) => {},
  userDetails: "",
  setUserDetails: (data) => {},
};

export const SearchContext = createContext<ISearch>(SearchInitial);

export const SearchContextProvider = ({ children }: IProps) => {
  const [searchInput, setSearchInput] = useState<string>();
  const [userDetails, setUserDetails] = useState<string>();

  return (
    <SearchContext.Provider
      value={{
        searchInput,
        setSearchInput,
        userDetails,
        setUserDetails,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
