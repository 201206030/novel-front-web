<template>
  <Header />
  <div class="main box_center cf">
    <div class="channelWrap channelBanner cf">
      <div class="leftBox">
        <div class="sliderContent">
          <dl class="scBigImg" id="carouseBig">
            <dd
              v-for="(item, index) in sliderContent"
              :key="index"
              :class="{ on: index == 0 }"
            >
              <router-link :to="{ name: 'book', query: { id: item.bookId } }">
                <img
                  :src="`${imgBaseUrl}` + `${item.picUrl}`"
                  :alt="item.bookName"
                  onerror="this.src='https://cdn.jsdelivr.net/gh/201206030/CDN/images/default.gif';this.onerror=null"
                />
              </router-link>
            </dd>
          </dl>
          <div class="scSmallImg" id="carouseSmall">
            <ul>
              <li
                v-for="(item, index) in sliderContent"
                :key="index"
                :class="{ on: index == 0 }"
              >
                <img
                  :src="`${imgBaseUrl}` + `${item.picUrl}`"
                  :alt="item.bookName"
                  onerror="this.src='https://cdn.jsdelivr.net/gh/201206030/CDN/images/default.gif';this.onerror=null"
                />
              </li>
            </ul>
          </div>
        </div>
        <div class="hot_articles">
          <dl class="hot_recommend" id="topBooks1">
            <dt>
              <a href="/book/1334317855886385152.html" v-if="topBooks1[0]">{{
                topBooks1[0].bookName
              }}</a>
            </dt>
            <dd>
              <a href="/book/1334335470709080064.html" v-if="topBooks1[1]">{{
                topBooks1[1].bookName
              }}</a
              ><a href="/book/1334318497132552192.html" v-if="topBooks1[2]">{{
                topBooks1[2].bookName
              }}</a>
            </dd>
            <dd>
              <a href="/book/1334317902627708928.html" v-if="topBooks1[3]">{{
                topBooks1[3].bookName
              }}</a
              ><a href="/book/1334321880899887104.html" v-if="topBooks1[4]">{{
                topBooks1[4].bookName
              }}</a>
            </dd>
          </dl>
          <dl class="hot_recommend" id="topBooks2">
            <dt>
              <a href="/book/1334318654997766144.html" v-if="topBooks1[5]">{{
                topBooks1[5].bookName
              }}</a>
            </dt>
            <dd>
              <a href="/book/1334334734843609088.html" v-if="topBooks1[6]">{{
                topBooks1[6].bookName
              }}</a
              ><a href="/book/1334317856465199104.html" v-if="topBooks1[7]">{{
                topBooks1[7].bookName
              }}</a>
            </dd>
            <dd>
              <a href="/book/1334317855869607936.html" v-if="topBooks1[8]">{{
                topBooks1[8].bookName
              }}</a
              ><a href="/book/1334335471568912384.html" v-if="topBooks1[9]">{{
                topBooks1[9].bookName
              }}</a>
            </dd>
          </dl>

          <LatestNews/>
        </div>
      </div>
      <div class="rightBox">
        <div class="title cf" id="weekcommend">
          <h3>本周强推</h3>
        </div>
        <div class="rightList">
          <ul id="currentWeek">
            <li
              v-for="(item, index) in weekcommend"
              :key="index"
              :class="['num' + (Number(`${index}`) + 1), { on: index == 0 }]"
            >
              <div class="book_name">
                <i>{{ index + 1 }}</i
                ><a class="name" href="/book/1334317855974465536.html">{{
                  item.bookName
                }}</a>
              </div>
              <div class="book_intro">
                <div class="cover">
                  <a href="/book/1334317855974465536.html"
                    ><img
                      :src="`${imgBaseUrl}` + `${item.picUrl}`"
                      :alt="item.bookName"
                      onerror="this.src='https://cdn.jsdelivr.net/gh/201206030/CDN/images/default.gif';this.onerror=null"
                  /></a>
                </div>
                <a class="txt" href="/book/1334317855974465536.html" v-html="item.bookDesc"></a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="channelWrap channelPic cf">
      <div class="leftBox">
        <div class="title">
          <h2 class="on">热门推荐</h2>
        </div>
        <div class="picRecommend cf" id="hotRecBooks">
          <div
            class="itemsList"
            v-for="(item, index) in hotRecommend"
            :key="index"
          >
            <a class="items_img" href="/book/1338432467551432705.html">
              <img
                :src="`${imgBaseUrl}` + `${item.picUrl}`"
                onerror="this.src='https://cdn.jsdelivr.net/gh/201206030/CDN/images/default.gif';this.onerror=null"
                :alt="item.bookName"
              />
            </a>
            <div class="items_txt">
              <h4>
                <a href="/book/1338432467551432705.html">{{ item.bookName }}</a>
              </h4>
              <p class="author">
                <a href="javascript:void(0)">作者：{{ item.authorName }}</a>
              </p>
              <p class="intro">
                <a href="/book/1338432467551432705.html" v-html="item.bookDesc"></a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <BookVisitRank/>
    </div>
    <div class="channelWrap channelPic cf">
      <div class="leftBox">
        <div class="title">
          <h2>精品推荐</h2>
        </div>

        <div class="picRecommend cf" id="classicBooks">
          <div
            class="itemsList"
            v-for="(item, index) in goodRecommend"
            :key="index"
          >
            <a class="items_img" href="/book/1334327477657501696.html">
              <img
                :src="`${imgBaseUrl}` + `${item.picUrl}`"
                onerror="this.src='https://cdn.jsdelivr.net/gh/201206030/CDN/images/default.gif';this.onerror=null"
              />
            </a>
            <div class="items_txt">
              <h4>
                <a href="/book/1334327477657501696.html">{{ item.bookName }}</a>
              </h4>
              <p class="author">
                <a href="javascript:void(0)">作者：{{ item.authorName }}</a>
              </p>
              <p class="intro">
                <a href="/book/1334327477657501696.html" v-html="item.bookDesc"></a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <BookNewestRank/>
      
    </div>

    <BookUpdateRank/>
    
  </div>
  <FriendLink/>

  <div class="footer">
    <div class="box_center cf">
      <div class="copyright">
        <ul>
          <li class="menu">
            <a href="/?to=mobile">手机站</a><i class="line">|</i
            ><a href="/">网站首页</a><i class="line">|</i
            ><a href="/about/default.html">关于我们</a><i class="line">|</i
            ><a href="/about/contact.html">联系我们</a><i class="line">|</i
            ><a href="/user/feedback.html">反馈留言</a><i class="line">|</i
            ><a href="/author/index.html">作家专区</a><i class="line">|</i
            ><a href="/mobile/fiction_house.apk">客户端</a>
          </li>
          <li>
            Copyright (C) xiongxyang.gitee.io All rights
            reserved&nbsp;&nbsp;小说精品屋版权所有
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import { listHomeBooks } from "@/api/home";
import { ElMessage, ElLoading } from "element-plus";
import Header from "@/components/common/Header";
import LatestNews from "@/components/home/LatestNews"
import FriendLink from "@/components/home/FriendLink"
import BookVisitRank from "@/components/home/BookVisitRank"
import BookNewestRank from "@/components/home/BookNewestRank"
import BookUpdateRank from "@/components/home/BookUpdateRank"
export default {
  name: "home",
  components: {
    Header,
    LatestNews,
    FriendLink,
    BookVisitRank,
    BookNewestRank,
    BookUpdateRank
  },
  setup() {
    const state = reactive({
      // 轮播图
      sliderContent: [],
      // 顶部栏
      topBooks1: [],
      //本周强推
      weekcommend: [],
      // 热门推荐
      hotRecommend: [],
      // 精品推荐
      goodRecommend: [],
      imgBaseUrl: process.env.VUE_APP_BASE_IMG_URL,
    });

    onMounted(async () => {
      const loadingInstance = ElLoading.service({
        target: "#topBooks2",
        text: "加载中。。。",
      });
      const { data } = await listHomeBooks();
      loadingInstance.close();

      await data.forEach((book) => {
        if (book.type == 0) {
          // 轮播图
          state.sliderContent[state.sliderContent.length] = book;
        }
        if (book.type == 1) {
          // 顶部栏
          state.topBooks1[state.topBooks1.length] = book;
        }
        if (book.type == 2) {
          //本周强推
          state.weekcommend[state.weekcommend.length] = book;
        }
        if (book.type == 3) {
          //热门推荐
          state.hotRecommend[state.hotRecommend.length] = book;
        }
        if (book.type == 4) {
          //精品推荐
          state.goodRecommend[state.goodRecommend.length] = book;
        }
      });

      var $div = $(".scBigImg dl"); //放置大图容器
      var $nav = $(".scSmallImg li"); //放置缩略图容器
      var num = -1;
      var open;

      function changeKv() {
        if (num >= $nav.length - 1) {
          num = 0;
        } else {
          num++;
        }
        $nav.eq(num).trigger("mouseenter");
        open = setTimeout(changeKv, 3000);
      }

      changeKv();
      $nav.each(function (index) {
        $(this)
          .off("mouseenter")
          .on("mouseenter", function () {
            clearTimeout(open);

            $(this).addClass("on").siblings().removeClass("on");
            $(".scBigImg dd")
              .eq(index)
              .addClass("on")
              .siblings()
              .removeClass("on");
            $(".scSmallImg")
              .off("mouseleave")
              .on("mouseleave", function () {
                num = index;
                setTimeout(function () {
                  changeKv();
                }, 3000);
              });
          });
      });
      $div.each(function () {
        $(this)
          .off("mouseenter")
          .on("mouseenter", function () {
            clearTimeout(open);
          });
      });
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>
