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
    Math.ceil(location?.state?.repoCount / PER_PAGE)
  );
  const [repoArr, setRepoArr] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.github.com/users/${userName}/repos?page=${currentPage}&per_page=${PER_PAGE}`
    )
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("not found");
        }
        return res.json();
      })
      .then((res) => {
        setRepoArr((prev) => res);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  useEffect(() => {
    fetch(
      `https://api.github.com/users/${userName}/repos?page=${currentPage}&per_page=${PER_PAGE}`
    )
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("not found");
        }
        return res.json();
      })
      .then((res) => {
        setRepoArr((prev) => res);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsError(true);
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
      <Header label="Repositories" />
      <div className={style["list-cnt"]}>
        {isError ? (
          <div className={style["repo-not-found"]}>
            Repositories cannot be loaded!!
          </div>
        ) : isLoading ? (
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
          repoArr?.map((repo) => {
            return (
              <RepoCard
                key={repo.id}
                name={repo.name}
                desc={repo.description}
                topics={repo.topics}
              />
            );
          })
        )}
      </div>
      <div className={style["page-nav-cnt"]}>
        {currentPage !== 1 && (
          <div
            onClick={handlePrevPage}
            role="presentation"
            className={[
              style["page-nav-cta"],
              currentPage === 1 && style["page-nav-cta--disabled"],
            ].join(" ")}
          >
            <MdArrowBack />
          </div>
        )}
        <span className={style["current-page"]}>{currentPage}</span>
        {currentPage < totalPage && (
          <div
            onClick={handleNextPage}
            role="presentation"
            className={[
              style["page-nav-cta"],
              currentPage === totalPage && style["page-nav-cta--disabled"],
            ].join(" ")}
          >
            <MdArrowForward />
          </div>
        )}
      </div>
    </>
  );
};

export default RepoPage;
