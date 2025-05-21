import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";
const year = new Date().getFullYear();
const month = new Date().getMonth();
const day = new Date().getDate();

function Header() {
  return (
    <header class="king">
      <h1>
        <HighlightIcon />
        Key Note
      </h1>
      <h1>
        Date: {day}/{month}/{year}
      </h1>
    </header>
  );
}

export default Header;
