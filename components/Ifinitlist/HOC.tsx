import { useEffect, useRef } from "react";
import useReactive from "./useReactive";
import useEventListener from "./useEventListener";
import useCreation from "./useCreation";

const HOC =
  (Component: any) =>
  ({ list, ...props }: any) => {
    const state = useReactive({
      data: [],
      scrollAllHeight: "100vh",
      listHeight: 0,
      itemHeight: 0,
      renderCount: 0,
      bufferCount: 0,
      start: 0,
      end: 0,
      currentOffset: 0,
    });

    const allRef = useRef<any>(null);
    const scrollRef = useRef<any>(null);

    useEffect(() => {
      const ItemHeight = 140;

      const scrollAllHeight = allRef.current.offsetHeight;
      const listHeight = ItemHeight * list.length;

      const renderCount = Math.ceil(scrollAllHeight / ItemHeight);

      state.renderCount = renderCount;
      state.end = renderCount + 1;
      state.listHeight = listHeight;
      state.itemHeight = ItemHeight;
      state.data = list.slice(state.start, state.end);
    }, [allRef]);

    useCreation(() => {
      state.data = list.slice(state.start, state.end); // 侦听state.start的变化
    }, [state.start]);

    useEventListener(
      "scroll",
      () => {
        // 顶部高度
        const { scrollTop } = scrollRef.current;
        state.start = Math.floor(scrollTop / state.itemHeight);
        state.end = Math.floor(
          scrollTop / state.itemHeight + state.renderCount + 1
        );
        state.currentOffset = scrollTop - (scrollTop % state.itemHeight);
        // state.data = list.slice(state.start, state.end)
      },
      scrollRef
    );

    return (
      <div ref={allRef}>
        <div
          style={{
            height: state.scrollAllHeight,
            overflowY: "scroll",
            position: "relative",
            display: "flex",
          }}
          ref={scrollRef}
        >
          {/* 占位， 列表总高度，用于生成滚动条 */}
          <div
            style={{
              height: state.listHeight,
              position: "absolute",
              left: 0,
              top: 0,
              right: 0,
            }}
          >
            <div className="page__main">
              {/* <!-- 文章列表 --> */}
              <div className="page__main__contents">
                {/* <!-- 文章列表主体 --> */}
                <div className="contents__list" /* ref="scrollBar" */>
                  <div className="list__header">
                    <div className="nav__list">
                      <ul>
                        <li>
                          <a href="" style={{ color: "#1e80ff" }}>
                            推荐
                          </a>
                        </li>
                        <li>
                          <a href="">最新</a>
                        </li>
                        <li>
                          <a href="">热榜</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    style={{
                      transform: `translate3d(0, ${state.currentOffset}px, 0)`,
                      position: "relative",
                      // left: 0,
                      // top: 0,
                      // right: 0,
                      margin: "0 auto",
                      // display: "flex",
                    }}
                  >
                    {/* 渲染区域 */}
                    {state.data.map((item: any) => (
                      <div key={item}>
                        {/* 子组件 */}
                        <Component
                          id={item.content}
                          {...props}
                          index={item.id}
                        />
                      </div>
                    ))}
                  </div>
                  {/* 标记1 */}
                </div>

                {/* <!-- 右侧信息栏 --> */}
                <div className="sidebar">
                  {/* <!-- 签到信息 --> */}
                  <div className="signin__top">
                    <div className="first__line">
                      <div className="icon__text">
                        <img src="../assets/img/day.png" alt="" />
                        {/* {{ showTimeStage }} */}
                      </div>
                      <button className="signedin__btn">已签到</button>
                    </div>
                    <div className="second__line">
                      你已经连续签到
                      <span /* style={{color: '#1e80ff',font-size: '16px'}}  */>
                        100
                      </span>
                      天
                    </div>
                  </div>
                  {/* <!-- 广告 --> */}
                  <div className="sidebar__block">
                    <img
                      src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0b6a58397c77485495a051142f1d863d~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?"
                      alt=""
                    />
                  </div>
                  {/* <!-- 广告 --> */}
                  <div className="sidebar__block">
                    <img
                      src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a88a1ea956734105a5b002dfb48840cb~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?"
                      alt=""
                    />
                  </div>
                  {/* <!-- 掘金官网链接 --> */}
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
                  {/* <!-- 作者榜 --> */}
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

                  {/* <!-- 悬浮信息栏 --> */}
                </div>
              </div>
            </div>
          </div>
          {/* 内容区域 */}
        </div>
      </div>
    );
  };

export default HOC;
