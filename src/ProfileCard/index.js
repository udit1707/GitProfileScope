import { Link } from "react-router-dom";
import style from "./style.module.scss";

const ProfileCard = ({
  avatar,
  name,
  bio,
  followers,
  following,
  repoCount,
  username,
}) => {
  return (
    <div className={style["profile-card"]}>
      <div className={style["avatar"]}>
        <img src={avatar} alt="avatar" className={style["avatar--img"]}/>
      </div>
      <div className={style["name"]}>{name}</div>
      <div className={style["bio"]}>{bio}</div>
      <div className={style["follow-cnt"]}>
        <span className={style["follow-label"]}>Followers: <span className={style["follow-val"]}>{followers}</span></span>
        <span className={style["follow-label"]}>Following: <span className={style["follow-val"]}>{following}</span></span>
      </div>
      <div className={style["repo-cnt"]}>
        <span>Tota Public Repositories: {repoCount}</span>
      </div>
      <Link to={`/${username}/repos`} className={style["view-repos-cta"]}>
          View Repos
        </Link>
    </div>
  );
};

export default ProfileCard;
