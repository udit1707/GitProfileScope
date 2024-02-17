import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import GithubIcon from "../assets/images/githubIcon.svg"
import { RxGithubLogo } from "react-icons/rx";

const Header = ({
  label
}) => {
  return (
    <div className={styles["nav"]}>
      <div className={styles["logo-cnt"]}>
      {/* <img src={GithubIcon} alt="icon"/> */}
      <RxGithubLogo className={styles["logo"]}/>
      </div>
      <div className={styles["label"]}>
        {label}
      </div>
      <Link className={styles["nav-btn"]} to="/">Search Another User</Link>
    </div>
  );
};

export default Header;
