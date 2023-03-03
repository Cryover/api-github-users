import { useState, useContext, useEffect } from "react";
import { SearchContext } from "../contexts/searchContext";
import { octokit } from "../services/token";
import { Div, Img, H3, A } from "../styled/UserDetails";
import { RequestError } from "@octokit/request-error";

const ShowUser = () => {
  const { userDetails } = useContext(SearchContext);
  const [login, setLogin] = useState("");
  const [id, setId] = useState(0);
  const [node_id, setNodeId] = useState("");
  const [avatar_url, setAvatar_url] = useState("");
  const [gravatar_id, setGravatar_id] = useState("");
  const [url, setUrl] = useState("");
  const [html_url, setHtml_url] = useState("");
  const [followers_url, setFollower_url] = useState("");
  const [following_url, setFollowing_url] = useState("");
  const [gists_url, setGists_url] = useState("");
  const [starred_url, setStarred_url] = useState("");
  const [subscriptions_url, setSubscriptions_url] = useState("");
  const [organizations_url, setOrganizations_url] = useState("");
  const [repos_url, setRepos_url] = useState("");
  const [events_url, setEvents_url] = useState("");
  const [received_events_url, setReceived_events_url] = useState("");
  const [type, setType] = useState("");
  const [site_admin, setSite_admin] = useState(false);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [blog, setBlog] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [hireable, setHirable] = useState(false);
  const [bio, setBio] = useState("");
  const [twitter_username, setTwitter_username] = useState("");
  const [public_repos, setPublic_repos] = useState(0);
  const [public_gists, setPublic_gists] = useState(0);
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);
  const [created_at, setCreated_at] = useState("");
  const [updated_at, setUpdated_at] = useState("");

  useEffect(() => {
    try {
      octokit
        .request("GET /users/{username}", {
          username: `${userDetails}`,
        })
        .then((response) => {
          setLogin(response.data.login);
          setId(response.data.id);
          setNodeId(response.data.node_id);
          setAvatar_url(response.data.avatar_url);
          setGravatar_id(response.data.gravatar_id as string);
          setHtml_url(response.data.html_url);
          setUrl(response.data.url);
          setFollower_url(response.data.followers_url);
          setFollowing_url(response.data.following_url);
          setGists_url(response.data.gists_url);
          setStarred_url(response.data.starred_url);
          setSubscriptions_url(response.data.subscriptions_url);
          setOrganizations_url(response.data.organizations_url);
          setRepos_url(response.data.url);
          setEvents_url(response.data.events_url);
          setReceived_events_url(response.data.received_events_url);
          setType(response.data.type);
          setSite_admin(response.data.site_admin);
          setName(response.data.name as string);
          setCompany(response.data.company as string);
          setBlog(response.data.blog as string);
          setLocation(response.data.location as string);
          setEmail(response.data.email as string);
          setHirable(response.data.hireable as boolean);
          setBio(response.data.bio as string);
          setTwitter_username(response.data.twitter_username as string);
          setPublic_repos(response.data.public_repos);
          setPublic_gists(response.data.public_gists);
          setFollowers(response.data.followers);
          setFollowing(response.data.following);
          setCreated_at(response.data.created_at);
          setUpdated_at(response.data.updated_at);
        });
    } catch (err) {
      if (err instanceof RequestError) {
        console.log(`Error! Status: ${err.status}. Message: ${err.message}`);
      }
    }
  }),
    [];

  return (
    <Div className="userCardDetails">
      <Img
        className="userCardImg"
        data-testid="imgTest"
        src={avatar_url}
        alt="avatar"
      />
      <H3>Name: {name}</H3>
      <H3>Login: {login}</H3>
      <H3>id: {id}</H3>
      <H3>Node_id: {node_id}</H3>
      <H3>Gravatar_id: {gravatar_id}</H3>
      <H3>
        Url: <a href={url}>{url}</a>
      </H3>
      <H3>
        Html_url: <a href={html_url}>{html_url}</a>
      </H3>
      <H3>
        Followers_url: <a href={followers_url}>{followers_url}</a>
      </H3>
      <H3>
        Following_url: <a href={following_url}>{following_url}</a>
      </H3>
      <H3>
        Gists_url: <a href={gists_url}>{gists_url}</a>
      </H3>
      <H3>
        Starred_url: <a href={starred_url}>{starred_url}</a>
      </H3>
      <H3>
        Subscriptions_url: <a href={subscriptions_url}>{subscriptions_url}</a>
      </H3>
      <H3>
        Organizations_url: <a href={organizations_url}>{organizations_url}</a>
      </H3>
      <H3>
        Repos_url: <a href={repos_url}>{repos_url}</a>
      </H3>
      <H3>
        Events_url: <a href={events_url}>{events_url}</a>
      </H3>
      <H3>
        Received_events_url:{" "}
        <A href={received_events_url}>{received_events_url}</A>
      </H3>
      <H3>Type: {type}</H3>
      <H3>Site_admin: {site_admin}</H3>
      <H3>company: {company}</H3>
      <H3>Blog: {blog}</H3>
      <H3>location: {location}</H3>
      <H3>
        email: <a href={email}></a>
        {email}
      </H3>
      <H3>Hireable: {hireable}</H3>
      <H3>Bio: {bio}</H3>
      <H3>Twitter_username: {twitter_username}</H3>
      <H3>Public_repos: {public_repos}</H3>
      <H3>Public_gists: {public_gists}</H3>
      <H3>Followers: {followers}</H3>
      <H3>Following: {following}</H3>
      <H3>Created_at: {created_at.toString()}</H3>
      <H3>Updated_at: {updated_at.toString()}</H3>
    </Div>
  );
};

export default ShowUser;
