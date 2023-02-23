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
      <div
        className="article__inform"
        style={{
          fontSize: "12px",
          lineHeight: "normal",
          marginBottom: "8px",
        }}
      >
        掘金酱 | 2个月前
      </div>
      <div>
        <h2
          style={{
            fontSize: "16px",
            lineHeight: "24px",
            color: "#1d2129",
            marginBottom: "8px",
          }}
        >
          列表{index}
        </h2>
        <div
          className="article__inform"
          style={{
            fontSize: "13px",
            lineHeight: "22px",
            color: "rgb(134, 144, 156)",
            marginBottom: "20px",
          }}
        >
          {content.info}
        </div>
        <div>
          <ul className="action-list">
            <li className="item">
              <i className="eye"></i>
              <span>15</span>
            </li>
            <li className="item">
              <i className="zan"></i>
              <span>20</span>
            </li>
            <li className="item">
              <i className="cloud"></i>
              <span>6</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const ItemHoc = HOC(Item);

const Index: NextPage<IProps> = ({ title, description, articles }) => {
  const [content, setContent] = useState(articles);
  const [list, setList] = useState<Array<number>>([]);

  useEffect(() => {
    let arr: any[] = [];
    // 用CMS模拟发布的6篇文章
    for (let i = 0; i < 100; i++) {
      let count = i % 6;

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
