import styles from "@/pages/article/article.module.scss";

const Article = () => {
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
                    我是标题
                  </div>
                  {/* 作者信息区域 */}
                  <div className={styles["article-info-box"]}>
                    作者： | 创建时间:
                  </div>
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
                  <img src="./lv-2.png" alt="" />
                </div>
                <div className="position">{/* {articleDetail.jobTitle} */}</div>
              </div>
            </div>
            <div className="stat-item">
              <div>
                <img src="./userZan.png" alt="" />
              </div>
              <span>获得点赞 {/* {zanObj.number} */}</span>
            </div>
            <div className="stat-item">
              <div>
                <img src="./userEye.png" alt="" />
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
                  <img src="./lv-2.png" alt="" />
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
                  <img src="./lv-2.png" alt="" />
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
                  <img src="./lv-2.png" alt="" />
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
            src="./panelZan__on.png"
            alt=""
            // v-if="zanObj.status"
          />
          <img src="./panelZan__off.png" alt="" v-else />
          <div className="btn-num" /* ref="zanNumBOX" */>
            {/* {zanObj.number} */}
          </div>
        </div>
        <div className={styles["panel-btn"]}>
          <img src="./panelLiu.png" alt="" />
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
};

export default Article;
