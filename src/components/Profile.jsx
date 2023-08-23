import searchIcon from "../assets/search-699.svg";
import { useNavigate, useLoaderData } from "react-router-dom";

export default function Profile() {
  let data = useLoaderData();
  console.log(data.name);
  let navigate = useNavigate();
  function SearchIconHandler(e) {
    if (e) {
      localStorage.clear();
      navigate("/");
    }
  }
  return (
    <div>
      <div className="searchField profileField">
        <img
          className="search"
          src={searchIcon}
          alt="search"
          onClick={SearchIconHandler}
        />

        <div className="prof">
          <div className="name">
            <h2 className="fname">@{data.name}</h2>
          </div>
          <img src={data.avatar_url} alt="" className="profilePic" />
          <div className="biosection">
            <p className="bio">
              <i>{data.location}</i>
            </p>
            <p className="bio">
              <i>{data.created_at.split("T")[0]}</i>
            </p>
          </div>
        </div>
        <div className="stats">
          <div className="repos">
            <h1 className="num">{data.public_repos}</h1>
            <p className="desc">Repositories</p>
          </div>
          <div className="repos">
            <h1 className="num">{data.followers}</h1>
            <p className="desc">Followers</p>
          </div>
          <div className="repos">
            <h1 className="num">{data.following}</h1>
            <p className="desc">Following</p>
          </div>
        </div>
      </div>
    </div>
  );
}
