import { useState } from "react";
import "./styles.css";

export default function App() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const btnClass = click ? "btn-click" : "btn";
  return (
    <div className="App">
      <button className={`common ${btnClass}`} onClick={handleClick}>
        {" "}
        {!click ? "💘" : "🤍"} Like{" "}
      </button>
    </div>
  );
}
