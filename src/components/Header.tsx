import { useState } from "react";

const Header = () => {
  const [title, setTitle] = useState("Test");

  return (
    <div>
      <h1>{title}</h1>
      <input
        aria-label="title-input"
        onChange={(event) => setTitle(event.target.value)}
      />
    </div>
  );
};

export default Header;
