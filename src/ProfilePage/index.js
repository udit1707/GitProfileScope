import { useState, useEffect } from "react";
import style from "./style.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../Header";
import ProfileCard from "../ProfileCard";
import { ProgressBar } from "react-loader-spinner";

const ProfilePage = () => {
  let { userName } = useParams();
  let navigate = useNavigate();
  const [profileUser, setProfileUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/users/${userName}`)
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("not found");
        } else return res.json();
      })
      .then((res) => {
        setProfileUser(res);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Header label="Profile" />
      <div className={style["profile-page"]}>
        {isError ? (
          <div className={style["profile-not-found"]}>Profile not found!!</div>
        ) : !isLoading && profileUser ? (
          <ProfileCard
            avatar={profileUser.avatar_url}
            bio={profileUser.bio}
            username={userName}
            name={profileUser.name}
            followers={profileUser.followers}
            following={profileUser.following}
            repoCount={profileUser.public_repos}
          />
        ) : (
          <ProgressBar
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        )}
      </div>
    </>
  );
};

export default ProfilePage;
