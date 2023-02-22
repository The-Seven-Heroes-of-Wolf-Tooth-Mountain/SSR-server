/* 根据文章内容动态生成目录 */

import Index from "@/pages/list";
import { useEffect, useState } from "react";

export default function Sidebar() {
  //   var arr: object[] = [];
  const [list, setList] = useState();
  useEffect(() => {
    let arr = [];
    const body = document.querySelector("#articlebody");
    const title = document.querySelector("#title")!;

    arr.push(title);

    const childrenNodes = body?.children!;
    console.log(typeof childrenNodes);
    // const arr = Object.values(childrenNodes)
    // const arr = Array.from(childrenNodes);
    for (let key of childrenNodes) {
      if (key.nodeName === "H2") arr.push(key);
    }
    // setList(arr);
  });
  return (
    <div>
      {/* {list?.map((item, index) => {
        return <div>{item.HTML}</div>;
      })} */}
    </div>
  );
}
