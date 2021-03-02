import React, { useState } from "react";
import "./Form.css";
import SearchSong from "./SearchSong/SearchSong";
const Form = () => {
  const [songName, setsongName] = useState("");
  const handleAddsongName = (event) => {
    setsongName(event.target.value);
    setPrint(false);
  };
  const [print, setPrint] = useState(false);

  return (
    <div className="main">
      <div className="form">
        <input
          type="text"
          placeholder="Search song......"
          onChange={handleAddsongName}
        />
        <button onClick={() => setPrint(true)} type="submit">
          Print Value
        </button>
      </div>
      <div className="result">
        {print ? <SearchSong songName={songName}></SearchSong> : null}
      </div>
    </div>
  );
};

export default Form;
