import { useState } from "react";
import Item from "./Item";
const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function Accordion() {
  const [curOpen, setCurOpen] = useState(false);
  return (
    <ul className="accordion">
      {faqs.map((faq, index) => (
        <Item
          key={index}
          index={index}
          title={faq.title}
          curOpen={curOpen}
          setCurOpen={setCurOpen}
        >
          {faq.text}
        </Item>
      ))}
    </ul>
  );
}
