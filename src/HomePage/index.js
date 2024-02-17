import { useState, useEffect } from "react";
import styles from "./style.scss";
import { redirect, useNavigate } from "react-router-dom";

const HomePage = () => {
  const [val, setVal] = useState("");
  let navigate = useNavigate();

  const handleSearch = () => {
    if (val.length > 0) {
      return navigate(`/${val}`);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter github username"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default HomePage;
