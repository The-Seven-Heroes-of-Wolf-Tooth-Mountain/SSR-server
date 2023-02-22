import { createRef, useEffect, useRef } from "react";
import TocHelper from "toc-helper";

export default function App() {
  useEffect(() => {
    new TocHelper(".toc");
    const toc = document.querySelector(".toc");
    console.log(toc);
  });
  return (
    <div className="toc">
      {" "}
      目录标题
      <div>目录1</div>
      <div>目录2</div>
      <div>目录3</div>
    </div>
  );
}
