import React, { useEffect, useState } from "react";
import img from "@/img/fire.png";
import Image from "next/image";
import HOC from "@/components/Ifinitlist/HOC";
import Mock from "mockjs";
// 子组件
const Item: React.FC<{ id: any; index?: number }> = ({ id, index }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: 5,
        margin: "0 auto",
      }}
    >
      {/* <Image src={img} height={60} alt="" />
      列表{id} */}
      列表{index}: {id}
    </div>
  );
};

const ItemHoc = HOC(Item);

const Index: React.FC<any> = (props) => {
  const [list, setList] = useState<any>([]);

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
