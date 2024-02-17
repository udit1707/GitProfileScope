import { useState, useEffect } from "react";
import style from "./style.module.scss";
import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import Header from "../Header";
import ProfileCard from "../ProfileCard";
import { ProgressBar } from "react-loader-spinner";

const ProfilePage = () => {
  let { userName } = useParams();
  let navigate = useNavigate();
  const [profileUser, setProfileUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${userName}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setProfileUser(res);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <Header label="Profile"/>
      <div className={style["profile-page"]}>

      {!isLoading && profileUser ? (
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
