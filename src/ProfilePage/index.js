import { useState, useEffect } from "react";
import styles from "./style.scss";
import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import Header from "../Header";

const ProfilePage = () => {
  let { userName } = useParams();
  let navigate = useNavigate();

  useEffect(()=>{
    fetch(`https://api.github.com/users/${userName}`).then(res=>{
        return res.json();
    }).then(res=>{
        console.log(res);
    }).catch(e=>{
        console.log(e);
    })
  },[]);

  const showAllRepos = ()=>{
    return navigate(`/${userName}/repos`);
  }

  return (
    <div>
     <Header/>
      {userName}
      <button
        onClick={() => {
          return navigate("/");
        }}
      >
        back
      </button>
      <button onClick={showAllRepos}>
        All repos
      </button>
    </div>
  );
};

export default ProfilePage;
