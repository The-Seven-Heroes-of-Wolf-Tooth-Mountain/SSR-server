/* 根据文章内容动态生成目录 */
import styles from "./styles.module.scss";
import Index from "@/pages/list";
import { useEffect, useState } from "react";

export default function Sidebar() {
  //   var arr: object[] = [];
  const [list, setList] = useState<any[]>([]);
  useEffect(() => {
    interface Props {
      id: string;
      intersectionRatio: number;
    }

    let arr = [];

    const body = document.querySelector("#articlebody");

    const childrenNodes = body?.children!; // 文章主体部分子节点

    for (let key of childrenNodes) {
      if (key.nodeName === "H2") {
        arr.push(key); // 提取子标题
      }
    }

    for (let i = 0; i < arr.length; i++) {
      arr[i].setAttribute("id", `item${i + 1}`);
    }
    setList(arr); //list

    for (let i = 0; i < arr.length; i++) {
      let temp = {
        id: `item${i + 1}`,
        intersectionRatio: 0,
      };
    }
  }, []);

  return (
    <ul className={styles["catalog-list"]}>
      {list?.map((item, index) => {
        return (
          <li className={styles.item} key={index}>
            <div className={styles["a-container"]}>
              <a href={`#item${index + 1}`}>&emsp;{item.innerHTML}</a>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
