import { LOCALDOMAIN } from "@/utils";
import type { NextPage } from "next";
import styles from "./article.module.scss";
const showdown = require("showdown");
import axios from "axios";
import { useEffect, useState, useRef } from "react";
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
  const [showElem, setShowElem] = useState(true);
  useEffect(() => {
    window.addEventListener("resize", () => {
      let currentWidth = document.querySelector("#navbar")?.clientWidth;
      // let list = document.querySelector(".list-left-list");
      // console.log(list);

      if (currentWidth! >= 1200) {
        setShowElem(true);
      } else setShowElem(false);
    });
  }, []);
  return (
    <>
      <div className={styles.page__main} id={"main"}>
        {/* 文章区域 */}
        <div className={styles["article-main"]}>
          {/* 文章内容和评论区 */}
          <div className={styles["article-area"]}>
            {/* 文章主体区域 */}
            <div className={styles.article}>
              {/* 文章主体内容 */}
              <div className={styles["article-content"]}>
                <div /*  className={styles.article} */>
                  {/* 标题 */}
                  <div className={styles["article-title"]} id={"title"}>
                    {title}
                  </div>
                  {/* 文章图片展示 可能没有*/}
                  <div className={styles["article-img"]}></div>
                  {/* 作者信息区域 */}
                  <div className={styles["article-info-box"]}>
                    作者：{author} | {/* 创建时间: {createTime} */}
                  </div>
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
              <div className={styles["tag-list-box"]}>
                <div className={styles["tag-list"]}>
                  分类：
                  <span>后端</span>
                </div>
                <div className={styles["tag-list"]}>
                  标签：
                  <span>后端</span>
                  <span>程序员</span>
                </div>
              </div>
            </div>
            {/* 评论区 */}
            <div className={styles.comment}>
              {/* 发送评论 */}
              <div className={styles["comment-form"]}>
                <div className={styles["form-header"]}>评论</div>
                <div className={styles["form-content"]}>
                  <div className={styles["form-userimg"]}>
                    <img src="/user.png" alt="" />
                  </div>
                  <div className={styles["form-box"]}>
                    <textarea placeholder="输入评论 (Enter换行，Ctrl + Enter发送)"></textarea>
                    <div className={styles["action-box"]}>
                      <div className="emoji-btn">😀表情</div>
                      <div className="image-btn">图片</div>
                      <div className="submit-box">
                        <span>Ctrl + Enter</span>
                        <button className="submit">发表评论</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 热门评论 */}
              <div>
                <div className={styles.title}>
                  <span>热门评论</span>
                  <img src="/fire.png" alt="" />
                </div>
                <div className={styles.list}>
                  {/* <!-- 一条评论 --> */}
                  <div className={styles["comment-item"]}>
                    <div className={styles["comment-userImg"]}>
                      <a href="" className={styles.userImg}>
                        <img
                          src="https://p9-passport.byteacctimg.com/img/mosaic-legacy/3791/5035712059~300x300.image"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className={styles["comment-content"]}>
                      <div className={styles["comment-main"]}>
                        <div className={styles["user-box"]}>
                          <span className={styles.name}>青山绿水长流</span>
                          <span className={styles.level}>
                            <img src="/lv-2.png" alt="" />
                          </span>
                          <span className={styles["jueyou-level"]}>
                            <img src="/jy.png" alt="" />
                          </span>
                          <span className={styles.position}>前端开发</span>
                          <span className={styles.time}>1个月</span>
                        </div>
                        <div className={styles["content-main"]}>
                          高级程序员的表现形式
                        </div>
                        <div className={styles["comment-action-box"]}>
                          <div className="item-zan">
                            <img src="/zan__off.png" alt="" />
                            211
                          </div>
                          <div className="item-comNum">
                            <img src="/ping.png" alt="" />
                            回复
                          </div>
                        </div>
                      </div>
                      <div className="subcomment-wrapper"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 右侧侧边栏 */}
        <div
          className={styles.sidebar}
          style={{ display: showElem ? "block" : "none" }}
        >
          {/* 作者信息栏 */} {/* fix1 */}
          <div className={styles["author-block"]}>
            <div className={styles["user-item"]}>
              <div className={styles["userimg"]}>
                <img
                  src="https://p3-passport.byteimg.com/img/mosaic-legacy/3791/5035712059~100x100.awebp"
                  alt="用户头像"
                />
              </div>
              <div className={styles["info-box"]}>
                <div className={styles["userName"]}>
                  <span>{/* {articleDetail.userName} */}</span>
                  <img src="/lv-2.png" alt="" />
                </div>
                <div className={styles["position"]}>
                  {/* {articleDetail.jobTitle} */}
                </div>
              </div>
            </div>
            <div className={styles["stat-item"]}>
              <div>
                <img src="/userZan.png" alt="" />
              </div>
              <span>获得点赞 {/* {zanObj.number} */}</span>
            </div>
            <div className={styles["stat-item"]}>
              <div>
                <img src="/userEye.png" alt="" />
              </div>
              <span>文章被阅读 {/* {articleDetail.viewCount} */}</span>
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
          {/*  文章目录 */}
          <div
            // className="sticky-block-box activeBox"
            className={styles["sticky-block-box"]}
            // style={{ marginTop: "60px;" }}
          >
            <div className={styles["sticky-title"]}>
              目录
              {/* <div ref = {elementRef}></div> */}
            </div>
            {/* <!-- 目录主体 --> */}
            <div className={styles["sticky-content"]}>
              <Sidebar />
              {/* <!-- <div class="first" ref="listFirstBox"></div> --> */}
              <ul className="sticky-list">
                <li className="item">
                  <div className="a-container"></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* 左侧功能面板 */}
      <div
        className={styles["article-suspended-panel"]}
        style={{ display: showElem ? "block" : "none" }}
      >
        <div className={styles["panel-btn"]}>
          <img src="/panelZan__on.png" alt="" />
          {/* <img src="/panelZan__off.png" alt="" /> */}
          {/* <div className="btn-num"> */}
          {/* {zanObj.number} */}
          {/* </div> */}
        </div>
        <div className={styles["panel-btn"]}>
          <img src="/panelLiu.png" alt="" />
          {/* <div className={styles["panel-btn"]}> */}
          {/* {articleDetail.commentCount} */}
          {/* </div> */}
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
