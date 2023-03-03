import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SearchContext } from "../contexts/searchContext";
import { IUser } from "../types/types";
import { octokit } from "../services/token";
import { Div, H1, H2, Img } from "../styled/UserList";
import { RequestError } from "@octokit/request-error";

const UserList = () => {
  const { setUserDetails, searchInput } = useContext(SearchContext);

  const [oldSearchInput, setOldSearchInput] = useState<string | null>();
  const [userList, setUserList] = useState<IUser[]>([]);
  const [requestTotalCount, setRequestTotalCount] = useState<Number>();

  const sort: string = "joined";
  const order: string = "desc";
  const per_page: number = 50;
  const page_num: number = 1;

  useEffect(() => {
    if (searchInput !== "" && oldSearchInput !== searchInput) {
      try {
        octokit
          .request(
            `GET /search/users?q=${searchInput}&sort=${sort}&order=${order}&page=${page_num}`
          )
          .then((response) => {
            setUserList(response.data.items);
            setRequestTotalCount(response.data.total_count);
            setOldSearchInput(searchInput);
          });
      } catch (err) {
        if (err instanceof RequestError) {
          console.log(`Error! Status: ${err.status}. Message: ${err.message}`);
        }
      }
    }
  }),
    [];

  const CheckTotalCountResponse = () => {
    if (requestTotalCount === 0) {
      return (
        <H2 data-testid="h2noUsers">No Usernames found with search index</H2>
      );
    } else {
      return (
        <Div className="userCardList">
          {userList.map((user: IUser, index: number) => {
            return (
              <Div className="userCard" key={index}>
                <Link
                  to={`/users/${user.id}`}
                  onClick={() => {
                    setUserDetails(user.login);
                  }}
                >
                  <Img
                    className="userCardImg"
                    src={user.avatar_url}
                    alt="Avatar"
                  ></Img>
                </Link>
                <br></br>
                <H2>{user.login}</H2>
              </Div>
            );
          })}
        </Div>
      );
    }
  };

  return (
    <>
      <H1 className="h2UserList">Users</H1>
      {CheckTotalCountResponse()}
    </>
  );
};

export default UserList;
