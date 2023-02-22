import { LOCALDOMAIN } from "@/utils";
import type { NextPage } from "next";
import styles from "./article.module.scss";
const showdown = require("showdown");
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import TocHelper from "toc-helper";
import sidebar from "@/components/sidebar";
import Sidebar from "@/components/sidebar";

export interface IArticleProps {
  title: string;
  author: string;
  description: string;
  createTime: string;
  content: string;
}

const Article: NextPage<IArticleProps> = ({
  title,
  author,
  description,
  createTime,
  content,
}) => {
  const converter = new showdown.Converter();
  const elementRef = useRef();
  useEffect(() => {
    const main = document.querySelector("#main");
    // new TocHelper("#main");
  });
  return (
    <>
      <div className={styles.page__main} id={"main"}>
        {/* 文章区域 */}
        <div className={styles["article-main"]}>
          {/* 文章内容和评论区 */}
          <div className={styles["article-area"]}>
            {/* 文章主体区域 */}
            <div className={styles.article}>
              {/* 文章图片展示 可能没有*/}
              <div className={styles["article-img"]}>图片</div>
              {/* 文章主体内容 */}
              <div className={styles["article-content"]}>
                <div /*  className={styles.article} */>
                  {/* 标题 */}
                  <div className={styles["article-title"]} id={"title"}>
                    {title}
                  </div>
                  {/* 作者信息区域 */}
                  <div className={styles["article-info-box"]}>
                    作者：{author} | 创建时间: {createTime}
                  </div>
                  <div /* className={styles.description} */>{description}</div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: converter.makeHtml(content),
                    }}
                    className={styles.content}
                    id={"articlebody"}
                  />
                  {/* 透传Markdown文本 */}
                </div>
              </div>
              {/* 文章标签区域 */}
              <div className={styles["tag-list-box"]}>文章标签</div>
            </div>
            {/* 评论区 */}
            <div className={styles.comment}>评论区</div>
          </div>
        </div>

        {/* 右侧侧边栏 */}
        <div className={styles.sidebar}>
          {/* 作者信息栏 */} {/* fix1 */}
          <div className="author-block">
            <div className="user-item">
              <div className="userimg">
                <img alt="用户头像" />
              </div>
              <div className="info-box">
                <div className="userName">
                  <span>{/* {articleDetail.userName} */}</span>
                  <img src="../assets/img/lv-2.png" alt="" />
                </div>
                <div className="position">{/* {articleDetail.jobTitle} */}</div>
              </div>
            </div>
            <div className="stat-item">
              <div>
                <img src="../assets/img/userZan.png" alt="" />
              </div>
              <span>获得点赞 {/* {zanObj.number} */}</span>
            </div>
            <div className="stat-item">
              <div>
                <img src="../assets/img/userEye.png" alt="" />
              </div>
              <span>文章被阅读 {/* {articleDetail.viewCount} */}</span>
            </div>
          </div>
          {/*  文章目录 */}
          <div
            className="sticky-block-box activeBox"
            style={{ marginTop: "60px;" }}
          >
            <div className="sticky-title">
              目录
              {/* <div ref = {elementRef}></div> */}
            </div>
            {/* <!-- 目录主体 --> */}
            <div className="sticky-content">
              <Sidebar />
              {/* <!-- <div class="first" ref="listFirstBox"></div> --> */}
              <ul className="sticky-list">
                <li className="item">
                  <div className="a-container"></div>
                </li>
              </ul>
            </div>
          </div>
          {/* 掘金官网链接 */}
          <div className="block-body">
            <img
              src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/home.59780ae.png"
              alt=""
            />
            <div className="block-body-text">
              <div>下载稀土掘金APP</div>
              <div>一个帮助开发者成长的社区</div>
            </div>
          </div>
          {/* 作者榜 */}
          <div className="user-body user-top">
            <div className="header-block">🎖️作者榜</div>
            <div className="user-list">
              <div className="item">
                <div className="item__img-box">
                  <img
                    src="https://p3-passport.byteacctimg.com/img/mosaic-legacy/3792/5112637127~300x300.image"
                    alt=""
                  />
                </div>
                <div className="item__user-info">
                  小明同学
                  <img src="../assets/img/lv-2.png" alt="" />
                </div>
              </div>
              <div className="item">
                <div className="item__img-box">
                  <img
                    src="https://p9-passport.byteacctimg.com/img/mosaic-legacy/3793/3131589739~300x300.image"
                    alt=""
                  />
                </div>
                <div className="item__user-info">
                  工匠若水
                  <img src="../assets/img/lv-2.png" alt="" />
                </div>
              </div>
              <div className="item">
                <div className="item__img-box">
                  <img
                    src="https://p9-passport.byteacctimg.com/img/mosaic-legacy/3796/2975850990~300x300.image"
                    alt=""
                  />
                </div>
                <div className="item__user-info">
                  固体物质搬运工
                  <img src="../assets/img/lv-2.png" alt="" />
                </div>
              </div>
            </div>
            <div className="author-list">完整榜单&nbsp;&nbsp;&gt;</div>
          </div>
        </div>
      </div>
      {/* 左侧功能面板 */}
      <div className={styles["article-suspended-panel"]}>
        <div className="panel-btn">
          <img
            src="../assets/img/panelZan__on.png"
            alt=""
            v-if="zanObj.status"
          />
          <img src="../assets/img/panelZan__off.png" alt="" v-else />
          <div className="btn-num" /* ref="zanNumBOX" */>
            {/* {zanObj.number} */}
          </div>
        </div>
        <div className={styles["panel-btn"]}>
          <img src="/panelLiu.png" alt="" />
          <div className={styles["panel-btn"]}>
            {/* {articleDetail.commentCount} */}
          </div>
        </div>
        <div className={styles["panel-btn"]}>
          <img src="/panelStar.png" alt="" />
        </div>
        <div className={styles["panel-btn"]}>
          <img src="/panelFa.png" alt="" />
        </div>
        <div className={styles["panel-btn"]}>
          <img src="/paneljing.png" alt="" />
        </div>
        <div className={styles["panel-btn"]}>
          <img src="/panelQuan.png" alt="" />
        </div>
      </div>
    </>
  );

  // <div className={styles.article}>
  //   <h1 /* className={styles.title} */>{title}</h1>

  //   <div /* className={styles.info} */>
  //     作者：{author} | 创建时间: {createTime}
  //   </div>
  //   <div /* className={styles.description} */>{description}</div>
  //   <div
  //     dangerouslySetInnerHTML={{ __html: converter.makeHtml(content) }}
  //     className={styles.content}
  //   />
  //   {/* 透传Markdown文本 */}
  // </div>
};

Article.getInitialProps = async (context) => {
  const { articleId } = context.query; // 对组件自身getInitialProps 取出请求道德context
  const { data } = await axios.get(`${LOCALDOMAIN}/api/articleInfo`, {
    params: {
      articleId,
    },
  });
  return data;
};

export default Article;
