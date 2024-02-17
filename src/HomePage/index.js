import { useState } from "react";
import styles from "./style.module.scss";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [val, setVal] = useState("");
  let navigate = useNavigate();

  const handleSearch = () => {
    if (val.length > 0) {
      return navigate(`/${val}`);
    }
  };

  return (
    <div className={styles["homepage"]}>
      <div className={styles["main-header"]}>GITHUB PROFILE LENS</div>
      <div className={styles["search-cnt"]}>
        <input
          type="text"
          placeholder="Enter github username"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          className={styles["search-inp"]}
        />
        <button onClick={handleSearch} className={styles["search-btn"]}>
          Search
        </button>
      </div>
    </div>
  );
};

export default HomePage;
