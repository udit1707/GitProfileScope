import style from "./style.module.scss";

const RepoCard = ({ name = "ABC", topics, desc }) => {
  return (
    <div className={style["repo-card"]}>
      <div className={style["name"]}>{name}</div>
      {desc && <div className={style["desc"]}>{desc}</div>}
      {topics?.length > 0 && (
        <div className={style["topics"]}>
          {topics.map((topic) => {
            return <span className={style["topic-labels"]}>{topic}</span>;
          })}
        </div>
      )}
    </div>
  );
};

export default RepoCard;
