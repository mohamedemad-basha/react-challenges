import { useState } from "react";
export default function Item({ index, title, text }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li
      className={`item ${isOpen ? "open" : ""}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <p className="number">{index < 9 ? `0${index + 1}` : index + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </li>
  );
}
