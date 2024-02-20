import { useParams } from "react-router-dom";
import { GithubUser } from "./GithubUser";

export function ShowGithubUser(){
    const { username } = useParams();

  return (
    <div>
      <h2>Github User Details for {username}</h2>
      <GithubUser username={username} />
    </div>
  );
}