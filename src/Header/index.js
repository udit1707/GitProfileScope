import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import GithubIcon from "../assets/images/githubIcon.svg"

const Header = () => {
  return (
    <div className={styles["nav"]}>
      <div className={styles["logo"]}>
      <img src={GithubIcon} alt="icon"/>
      </div>
      <Link className={styles["nav-btn"]} to="/">Search Another User</Link>
    </div>
  );
};

export default Header;
