import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import HOC from "@/components/Ifinitlist/HOC";
import Mock from "mockjs";
// 子组件
const Item: React.FC<{ content: any; index?: number }> = ({
  content,
  index,
}) => {
  return (
    <div
      className={styles.paragraph}
      style={{
        // display: "flex",
        // flexDirection: "column",
        // alignItems: "center",
        padding: 5,
        height: "140px",
        backgroundColor: "rgb(255, 255, 255)",
        borderBottom: `1px solid var(--juejin-font-4)`,
      }}
    >
      {/* <Image src={img} height={60} alt="" />
      列表{id} */}
      <h1>列表{index}</h1>
      <p>{content}</p>
    </div>
  );
};

const ItemHoc = HOC(Item);

const Index: React.FC<any> = (props) => {
  const [list, setList] = useState<Array<number>>([]);

  useEffect(() => {
    let arr: any[] = [];
    for (let i = 0; i < 100; i++) {
      arr.push({
        id: i,
        content: Mock.mock("@csentence(40, 100)"),
      });
    }
    setList(arr);
  }, []);

  if (list.length === 0) return <></>;

  return (
    <div>
      <ItemHoc list={list} />
    </div>
  );
};

export default Index;
