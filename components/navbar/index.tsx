import { FC, useEffect, useRef } from "react";
export interface INavBarProps {}
import juejinLogo from "@/img/juejin-logo.png";
import vip from "@/img/juejinVip.png";
import user from "@/img//user.png";
import Image from "next/image";
import useReactive from "../Ifinitlist/useReactive";

export const NavBar: FC<INavBarProps> = ({}) => {
  return (
    <div className="page__header">
      <div className="page__header__box activeBox" /* ref="headerBox" */>
        {/* <!-- 导航内容 --> */}
        <div className="page__header__nav">
          <div className="nav__sign">
            <a href="/" className="logo">
              <Image
                className="logo__img"
                src={juejinLogo}
                alt="juejinLogo"
              ></Image>
            </a>
          </div>
          <div className="nav__main">
            <ul className="nav__main-list">
              <li
                className="list-left"
                style={{ width: "100%" }} /* ref="listLeftBox" */
              >
                <div className="list-left-list">
                  {/* <!-- 下端列表 --> */}
                  <ul className="list__contents" /* ref="listBox" */>
                    <li>
                      <a
                        href="javascript:scroll(0,0)"
                        style={{ color: "#1e80ff" }}
                      >
                        首页
                      </a>
                    </li>
                    <li>
                      <a href="#">沸点</a>
                    </li>
                    <li>
                      <a href="#">课程</a>
                    </li>
                    <li>
                      <a href="#">直播</a>
                    </li>
                    <li>
                      <a href="#">资讯</a>
                    </li>
                    <li>
                      <a href="#">活动</a>
                    </li>
                    <li className="com">
                      <a href="#" className="community">
                        开放社区
                      </a>
                      <ul className="community__list">
                        <li className="item">
                          <span>青训营社区</span>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">商城</a>
                    </li>
                    <li>
                      <a href="#">APP</a>
                    </li>
                    <li>
                      <a href="#">插件</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-right">
                <div className="list-right-list">
                  <ul className="list__contents">
                    <li>
                      <div className="input__frame" tabIndex={0}>
                        <input
                          className="input"
                          type="text"
                          placeholder="搜索稀土掘金"
                          /* ref="inputBox" */
                        />
                        <div className="input__sign">
                          <div className="input__img"></div>
                        </div>
                        <div className="input__typehead">
                          <div className="title">
                            <span>搜索历史</span>
                            <span
                              className="clear"
                              style={{ color: "#1e80ff" }}
                            >
                              清空
                            </span>
                          </div>
                          <div className="list">
                            <ul>
                              <li className="list-item">HTML基础</li>
                              <li className="list-item">CSS样式</li>
                              <li className="list-item">JavaScript入门</li>
                              <li className="list-item">node</li>
                              <li className="list-item">vue 3</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="creator">
                        <button className="crea-btn">创作者中心</button>
                        <input type="checkbox" id="dianj" />
                        {/* <!-- 利用input单选框的单点‘开关’的特性 --> */}
                        <label htmlFor="dianj">
                          <div className="more">
                            <div className="more__tri"></div>
                          </div>
                        </label>
                        <ul className="more__list">
                          <li className="item">
                            <span>写文章</span>
                          </li>
                          <li className="item">
                            <span>发沸点</span>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div className="vip__title">
                        <Image className="vip__img" src={vip} alt=""></Image>
                        <div className="vip__words">会员</div>
                      </div>
                    </li>
                    <li>
                      <div className="inform">
                        <div className="inform__img"></div>
                        {/* <img
                          className="inform__img"
                          src=".//img/inform-logo.png"
                          alt=""
                        /> */}
                      </div>
                    </li>
                    <li>
                      <div className="user">
                        {/* <img
                          src="../img//user.png"
                          alt=""
                          className="user__img"
                        /> */}
                        <Image src={user} alt="" className="user__img"></Image>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- 导航标签 --> */}
        <div className="page__header__tag" v-if="headeTag">
          <div className="tag__contents" /* ref="tagContent" */>
            <div className="tag__list">
              <ul className="list__contents">
                <li>
                  <a href="#" style={{ color: "#1e80ff" }}>
                    综合
                  </a>
                </li>
                <li>
                  <a href="#">关注</a>
                </li>
                <li>
                  <a href="#">后端</a>
                </li>
                <li>
                  <a href="#">前端</a>
                </li>
                <li>
                  <a href="#">Android</a>
                </li>
                <li>
                  <a href="#">iOS</a>
                </li>
                <li>
                  <a href="#">人工智能</a>
                </li>
                <li>
                  <a href="#">开发工具</a>
                </li>
                <li>
                  <a href="#">代码人生</a>
                </li>
                <li>
                  <a href="#">阅读</a>
                </li>
              </ul>
            </div>
            <div className="tag__manage" /* ref="tagManage" */>
              <span>
                <a href="#">标签管理</a>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- 一键回到顶部 --> */}
      <div className="page__header__side" v-show="headerSide">
        <a href="javascript:scroll(0,0)">
          <div className="backTop">
            <img src="/top.png" alt="" />
          </div>
        </a>
      </div>
    </div>
  );
};
