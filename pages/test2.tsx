import React, { useEffect, useState } from "react";
import { LOCALDOMAIN } from "@/utils";
import { IArticleIntro } from "./api/articleIntro";
import HOC from "@/components/Ifinitlist/HOC";
import Mock from "mockjs";
import axios from "axios";
import { NextPage } from "next";

interface IProps {
  title: string;
  description: string;
  articles: {
    list: {
      label: string;
      info: string;
      link: string;
    }[];
    total: number;
  };
}

// 子组件
const Item: React.FC<{ content: any; index?: number }> = ({
  content,
  index,
}) => {
  return (
    <div
      style={{
        // display: "flex",
        // flexDirection: "column",
        alignItems: "center",
        padding: 5,
        height: "140px",
        backgroundColor: "rgb(255, 255, 255)",
        borderBottom: `1px solid var(--juejin-font-4)`,
      }}
      key={index}
      onClick={(): void => {
        window.open(content.link, "blank", "noopener=yes, noreferrer=yes");
      }}
    >
      {/* <Image src={img} height={60} alt="" />
      列表{id} */}
      <h2>列表{index}</h2>
      <div>{content.info}</div>
      <div></div>
    </div>
  );
};

const ItemHoc = HOC(Item);

const Index: NextPage<IProps> = ({ title, description, articles }) => {
  const [content, setContent] = useState(articles);
  const [list, setList] = useState<Array<number>>([]);

  useEffect(() => {
    let arr: any[] = [];
    for (let i = 0; i < 100; i++) {
      let count = i % 6;
      // console.log(content.list[count]);

      arr.push({
        id: i,
        content: content.list[count],
      });
    }
    setList(arr);
  }, []);

  return (
    <div>
      <ItemHoc list={list} />
    </div>
  );
};

Index.getInitialProps = async (context) => {
  const { data: homeData } = await axios.get(`${LOCALDOMAIN}/api/home`);
  const { data: articleData } = await axios.post(
    `${LOCALDOMAIN}/api/articleIntro`,
    {
      pageNo: 1,
      pageSize: 6,
    }
  );
  return {
    title: homeData.title,
    description: homeData.description,
    articles: {
      list: articleData.list.map((item: IArticleIntro) => {
        return {
          label: item.label,
          info: item.info,
          link: `${LOCALDOMAIN}/article/${item.articleId}`,
        };
      }),
      total: articleData.total,
    },
  };
};
export default Index;
