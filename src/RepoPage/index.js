import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Header from "../Header";
import style from "./style.module.scss";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import RepoCard from "../RepoCard";
import { ProgressBar } from "react-loader-spinner";

const PER_PAGE = 10;
const RepoPage = () => {
  const location = useLocation();
  const { userName } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(
    Math.ceil(location.state.repoCount / PER_PAGE)
  );
  const [repoArr, setRepoArr] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.github.com/users/${userName}/repos?page=${currentPage}&per_page=${PER_PAGE}`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setRepoArr((prev) => res);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
      fetch(
        `https://api.github.com/users/${userName}/repos?page=${currentPage}&per_page=${PER_PAGE}`
      )
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          console.log(res);
          setRepoArr((prev) => res);
          setIsLoading(false);
        })
        .catch((e) => {
          console.log(e);
          setIsLoading(false);
        });
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
    setIsLoading(true);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => prev - 1);
    setIsLoading(true);
  };
  return (
    <>
      <Header label="Repositories"/>
      <div className={style["list-cnt"]}>
        {isLoading ? (
          <ProgressBar
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass={style["loader"]}
          />
        ) : (
          repoArr.map((repo) => {
            console.log(repo);
            return (
              <RepoCard
                name={repo.name}
                desc={repo.description}
                topics={repo.topics}
              />
            );
          })
        )}
      </div>
      <div className={style["page-nav-cnt"]}>
       {currentPage!==1 && <div
          onClick={handlePrevPage}
          role="presentation"
          className={[
            style["page-nav-cta"],
            currentPage === 1 && style["page-nav-cta--disabled"],
          ].join(" ")}
        >
          <MdArrowBack />
        </div>}
        <span className={style["current-page"]}>{currentPage}</span>
       {currentPage < totalPage && <div
          onClick={handleNextPage}
          role="presentation"
          className={[
            style["page-nav-cta"],
            currentPage === totalPage && style["page-nav-cta--disabled"],
          ].join(" ")}
        >
          <MdArrowForward />
        </div>}
      </div>
    </>
  );
};

export default RepoPage;
