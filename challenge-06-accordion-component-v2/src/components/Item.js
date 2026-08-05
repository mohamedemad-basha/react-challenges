export default function Item({ index, title, curOpen, setCurOpen, children }) {
  const isOpen = curOpen === index;
  return (
    <li
      className={`item ${isOpen ? "open" : ""}`}
      onClick={() => setCurOpen(isOpen ? false : index)}
    >
      <p className="number">{index < 9 ? `0${index + 1}` : index + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </li>
  );
}
