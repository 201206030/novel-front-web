<template>
  <div class="header">
    <Top />
  </div>
  <div id="showDetail">
    <div class="readBody cf">
      <div class="readMain cf">
        <div class="read_menu">
          <div
            class="menu_left"
            style="background-color: rgba(255, 255, 255, 0.45)"
          >
            <ul>
              <li>
                <a
                  class="ico_catalog"
                  @click="chapterList(data.chapterInfo.bookId)"
                  href="javascript:void(0)"
                  title="目录"
                >
                  <b>目录</b></a
                >
              </li>

              <li>
                <a
                  class="ico_page"
                  @click="bookDetail(data.chapterInfo.bookId)"
                  href="javascript:void(0)"
                  title="返回书页"
                  ><b>书页</b></a
                >
              </li>
              <!--
              <li class="li_shelf" id="cFavs">
                <a
                  class="ico_shelf"
                  href="javascript:void(0);"
                  title="加入书架"
                  onclick="javascript:BookDetail.AddFavorites(37,1959973,1);"
                  ><b>加书架</b></a
                >
              </li>
              <li class="li_shelfed" style="display: none">
                <a class="ico_shelfed" href="javascript:void(0);" title="已收藏"
                  ><b>已收藏</b></a
                >
              </li>

              <li>
                <a
                  class="ico_comment"
                  href="/book/comment-1334332598936240128.html"
                  title="评论"
                >
                  <b>评论</b></a
                >
              </li>
              <li>
                <a class="ico_setup" href="javascript:void(0);" title="设置"
                  ><b>设置</b></a
                >
              </li>
              -->
            </ul>
          </div>
          <div class="menu_right" style="position: fixed; bottom: 0">
            <ul>
              <li>
                <a
                  class="ico_pagePrev"
                  href="javascript:enterPreIndexPage('1334332598936240128','0');"
                  title="上一章"
                  ><i>上一章</i></a
                >
              </li>
              <li>
                <a
                  class="ico_pageNext"
                  href="javascript:enterNextIndexPage('1334332598936240128','1334332601092112384');"
                  title="下一章"
                  ><i>下一章</i></a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="readWrap">
          <div class="bookNav"></div>
          <div id="readcontent">
            <div
              class="textbox cf"
              style="background-color: rgba(255, 255, 255, 0.45)"
            >
              <div class="book_title">
                <h1 v-if="data.chapterInfo">
                  {{ data.chapterInfo.chapterName }}
                </h1>
                <div class="textinfo" v-if="data.chapterInfo">
                  类别：{{ data.bookInfo.categoryName }} 作者：<a
                    href="javascript:searchByK('最终马甲')"
                    v-if="data.bookInfo"
                    >{{ data.bookInfo.authorName }}</a
                  ><span v-if="data.chapterInfo"
                    >字数：{{ data.chapterInfo.chapterWordCount }}</span
                  ><span v-if="data.chapterInfo"
                    >更新时间：{{ data.chapterInfo.chapterUpdateTime }}</span
                  >
                </div>
              </div>

              <div class="txtwrap">
                <div
                  id="showReading"
                  class="readBox"
                  style="font-size: 16px; font-family: microsoft yahei;white-space:break-spaces"
                  v-html="data.bookContent"
                ></div>
              </div>
            </div>
          </div>
          <div class="nextPageBox">
            <a
              style="background-color: rgba(255, 255, 255, 0.45)"
              class="prev"
              href="javascript:void(0)"
              @click="preChapter(data.chapterInfo.bookId)"
              >上一章</a
            >
            <a
              style="background-color: rgba(255, 255, 255, 0.45)"
              class="dir"
              @click="chapterList(data.chapterInfo.bookId)"
              href="javascript:void(0)"
              >目录</a
            >
            <a
              style="background-color: rgba(255, 255, 255, 0.45)"
              class="next"
              @click="nextChapter(data.chapterInfo.bookId)"
              href="javascript:void(0)"
              >下一章</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="readPopup qrBox" style="display: none">
      <a
        class="closePopup"
        href="javascript:void(0);"
        onclick="javascript:$('.maskBox,.qrBox').hide();"
      ></a>
      <div class="popupTit">
        <h3>手机阅读</h3>
      </div>
      <div class="qrList">
        <ul></ul>
      </div>
    </div>
    <div class="readPopup setupBox" style="display: none">
      <a
        class="closePopup"
        href="javascript:void(0);"
        onclick="javascript:$('.maskBox,.setupBox').hide();"
      ></a>
      <div class="popupTit">
        <h3>设置</h3>
      </div>
      <div class="setupList">
        <ul>
          <li class="readTheme">
            <em class="tit">阅读主题：</em>
            <a
              id="setup_color_white"
              class="white current"
              href="javascript:void(0);"
              title="白色"
              onclick="javascript:BookDetail.SetBackUpColor(1);"
            ></a
            ><a
              id="setup_color_green"
              class="green"
              href="javascript:void(0);"
              title="绿色"
              onclick="javascript:BookDetail.SetBackUpColor(2);"
            ></a
            ><a
              id="setup_color_pink"
              class="pink"
              href="javascript:void(0);"
              title="粉色"
              onclick="javascript:BookDetail.SetBackUpColor(3);"
            ></a
            ><a
              id="setup_color_yellow"
              class="yellow"
              href="javascript:void(0);"
              title="黄色"
              onclick="javascript:BookDetail.SetBackUpColor(4);"
            ></a
            ><a
              id="setup_color_gray"
              class="gray"
              href="javascript:void(0);"
              title="灰色"
              onclick="javascript:BookDetail.SetBackUpColor(5);"
            ></a
            ><a
              id="setup_color_night"
              class="night"
              href="javascript:void(0);"
              title="夜间"
              onclick="javascript:BookDetail.SetBackUpColor(6);"
            ></a>
          </li>
          <li class="setFont setBtn">
            <em class="tit">正文字体：</em>
            <a
              id="setup_font_yahei"
              class="setYahei current"
              href="javascript:void(0);"
              onclick="javascript:BookDetail.SetReadFontFamily(0);"
              >雅黑</a
            >
            <a
              id="setup_font_simsun"
              class="setSimsun"
              href="javascript:void(0);"
              onclick="javascript:BookDetail.SetReadFontFamily(1);"
              >宋体</a
            >
            <a
              id="setup_font_ks"
              class="setKs"
              href="javascript:void(0);"
              onclick="javascript:BookDetail.SetReadFontFamily(2);"
              >楷书</a
            >
          </li>
          <li class="fontSize setBtn">
            <em class="tit">字体大小：</em>
            <a
              class="small"
              href="javascript:void(0);"
              onclick="javascript:BookDetail.SetReadFont(-2);"
              >A-</a
            ><span class="current_font" id="cFonts"> 16</span
            ><a
              class="big"
              href="javascript:void(0);"
              onclick="javascript:BookDetail.SetReadFont(2);"
              >A+</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/styles/book.css";
import "@/assets/styles/read.css";
import { reactive, toRefs, onMounted, onBeforeUnmount, onUnmounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getBookContent, getPreChapterId, getNextChapterId } from "@/api/book";
import { ElMessage } from "element-plus";
import Top from "@/components/common/Top";
import Footer from "@/components/common/Footer";
export default {
  name: "bookContent",
  components: {
    Top,
    Footer,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const state = reactive({
      data: {},
      imgBaseUrl: process.env.VUE_APP_BASE_IMG_URL,
    });
    onMounted(() => {
      init(route.params.chapterId);
      console.log("route.params.chapterId:", route.params.chapterId);
      keyDown();
    });

    onBeforeUnmount(async () => {
      console.log("onBeforeUnmount............");

      document.onkeydown = (e) => {
        //事件对象兼容
        let e1 =
          e || event || window.event || arguments.callee.caller.arguments[0];
        //键盘按键判断:左箭头-37;上箭头-38；右箭头-39;下箭头-40
        const bookId = state.data.chapterInfo.bookId;
        //左
        if (e1 && e1.keyCode == 37) {
          // 按下左箭头
          return;
        } else if (e1 && e1.keyCode == 39) {
          // 按下右箭头
          return;
        }
      };
    });

    const bookDetail = (bookId) => {
      router.push({ path: `/book/${bookId}` });
    };

    const chapterList = (bookId) => {
      router.push({ path: `/chapter_list/${bookId}` });
    };

    const preChapter = async (bookId) => {
      const { data } = await getPreChapterId(route.params.chapterId);
      if (data) {
        router.push({ path: `/book/${bookId}/${data}` });
        init(data);
      } else {
        ElMessage.warning("已经是第一章了！");
      }
    };

    const nextChapter = async (bookId) => {
      const { data } = await getNextChapterId(route.params.chapterId);
      if (data) {
        router.push({ path: `/book/${bookId}/${data}` });
        init(data);
      } else {
        ElMessage.warning("已经是最后一章了！");
      }
    };

    const init = async (chapterId) => {
      const { data } = await getBookContent(chapterId);
      state.data = data;
    };

    // 监听键盘
    const keyDown = () => {
      document.onkeydown = (e) => {
        //事件对象兼容
        let e1 =
          e || event || window.event || arguments.callee.caller.arguments[0];
        //键盘按键判断:左箭头-37;上箭头-38；右箭头-39;下箭头-40
        const bookId = state.data.chapterInfo.bookId;
        //左
        if (e1 && e1.keyCode == 37) {
          // 按下左箭头
          preChapter(bookId);
        } else if (e1 && e1.keyCode == 39) {
          // 按下右箭头
          nextChapter(bookId);
        }
      };
    };

    return {
      ...toRefs(state),
      bookDetail,
      chapterList,
      preChapter,
      nextChapter,
    };
  },
  mounted() {},
};
</script>

<style scoped>
@charset "utf-8";
a {
  color: #333;
}
a:hover,
.redFont,
.current,
.bookNav a:hover,
.textinfo a:hover {
  color: #f70;
}
/* 阅读页背景 */
body {
  /*background-color: #4a4a4a;*/
  color: #333;
  font-family: "Microsoft YaHei";
}
.topMain {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#66ffffff,endColorstr=#66ffffff);
  background: none;
  background: rgba(255, 255, 255, 0.4);
}
.read_style_6 .topMain {
  border-bottom: 1px solid #444;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#0cffffff,endColorstr=#0cffffff);
  background: rgba(255, 255, 255, 0.05);
}
/*颜色：浅黄白、护眼绿、粉色、浅黄、浅灰、夜间黑*/
body,
.read_style_1 {
  background-color: #ebe5d8;
}
.read_style_2 {
  background-color: #cbdec9;
}
.read_style_3 {
  background-color: #edd4d4;
}
.read_style_4 {
  background-color: #e0cfa3;
}
.read_style_5 {
  background-color: #d3d3d3;
}
.read_style_6 {
  background-color: #0e0f0f;
}
.read_style_1 .textbox,
.read_style_1 .read_menu li a,
.read_style_1 .haveRead,
.read_style_1 .nextPageBox a {
  background-color: rgb(244, 241, 234);
} /*浅黄白*/
.read_style_2 .textbox,
.read_style_2 .read_menu li a,
.read_style_2 .haveRead,
.read_style_2 .nextPageBox a {
  background-color: rgb(224, 235, 223);
} /*护眼绿*/
.read_style_3 .textbox,
.read_style_3 .read_menu li a,
.read_style_3 .haveRead,
.read_style_3 .nextPageBox a {
  background-color: rgb(244, 229, 229);
} /*粉色*/
.read_style_4 .textbox,
.read_style_4 .read_menu li a,
.read_style_4 .haveRead,
.read_style_4 .nextPageBox a {
  background-color: rgb(236, 226, 200);
} /*浅黄*/
.read_style_5 .textbox,
.read_style_5 .read_menu li a,
.read_style_5 .haveRead,
.read_style_5 .nextPageBox a {
  background-color: rgb(229, 229, 229);
} /*浅灰*/
.read_style_6 .textbox,
.read_style_6 .read_menu li a,
.read_style_6 .haveRead,
.read_style_6 .nextPageBox a {
  background-color: rgb(39, 39, 39);
} /*夜间黑*/
.read_style_1 .textbox,
.read_style_1 .read_menu li a,
.read_style_1 .haveRead,
.read_style_1 .nextPageBox a {
  background-color: rgba(255, 255, 255, 0.45);
}
.read_style_2 .textbox,
.read_style_2 .read_menu li a,
.read_style_2 .haveRead,
.read_style_2 .nextPageBox a,
.read_style_3 .textbox,
.read_style_3 .read_menu li a,
.read_style_3 .haveRead,
.read_style_3 .nextPageBox a,
.read_style_4 .textbox,
.read_style_4 .read_menu li a,
.read_style_4 .haveRead,
.read_style_4 .nextPageBox a,
.read_style_5 .textbox,
.read_style_5 .read_menu li a,
.read_style_5 .haveRead,
.read_style_5 .nextPageBox a {
  background-color: rgba(255, 255, 255, 0.4);
}
.read_style_6 .textbox,
.read_style_6 .read_menu li a,
.read_style_6 .haveRead,
.read_style_6 .nextPageBox a {
  background-color: rgba(255, 255, 255, 0.1);
}
.read_style_1 .author_say,
.read_style_1 .orderBox,
.read_style_2 .author_say,
.read_style_2 .orderBox,
.read_style_3 .author_say,
.read_style_3 .orderBox,
.read_style_4 .author_say,
.read_style_4 .orderBox,
.read_style_5 .author_say,
.read_style_5 .orderBox {
  background-color: #fcfbfa;
  background-color: rgba(255, 255, 255, 0.75);
}
/*.read_style_1 .nextPageBox a { border-color: #e0e0e0 }
.read_style_2 .nextPageBox a { border-color: #bad7b7 }
.read_style_3 .nextPageBox a { border-color: #e5d3d3 }
.read_style_4 .nextPageBox a { border-color: #e0dcd0 }
.read_style_5 .nextPageBox a { border-color: #d3d3d3 }
.read_style_6 .nextPageBox a { border-color: #555 }*/
.read_style_6 .author_say,
.read_style_6 .orderBox,
.read_style_6 .textbox,
.read_style_6 .book_title h1,
.read_style_6 .read_menu li,
.read_style_6 .haveRead,
.read_style_6 .haveRead a,
.read_style_6 .topMain a,
.read_style_6 .searchBar .s_int,
.read_style_6 .bookNav,
.read_style_6 .bookNav a,
.read_style_6 .textinfo,
.read_style_6 .textinfo a,
.read_style_6 .textinfo span,
.read_style_6 .read_menu li a b {
  color: #999;
  box-shadow: none;
}
.read_style_6 .bookNav,
.read_style_6 .author_say,
.read_style_6 .orderBox,
.read_style_6 .payFoot {
  border-color: #444 !important;
}
.readBody {
  height: 100%;
}
.readMain {
  margin: 0 auto;
  position: relative;
  z-index: 3;
  width: 900px;
}
/* 左右菜单栏 */
.menu_left {
  width: 60px;
  z-index: 20;
  position: absolute;
  top: 60px;
  left: 50%;
  margin-left: -511px;
}
.menu_right {
  width: 60px;
  z-index: 20;
  position: absolute;
  bottom: 81px;
  right: 50%;
  margin-right: -511px;
  display: none;
}
.read_menu li {
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.05);
  margin-bottom: 1px;
  width: 60px;
  position: relative;
}
.read_menu li a {
  display: block;
  width: 60px;
  height: 60px;
  position: relative; /*background-color: #fff;*/
  opacity: 0.95;
}
.read_menu li a i {
  display: none;
  width: 60px;
  text-align: center;
  color: #999;
  font-size: 13px;
  line-height: 1.5;
  padding-top: 20px;
}
.read_menu li a b {
  font-weight: 400;
  display: block;
  height: 60px;
  width: 60px;
  text-align: center;
  line-height: 90px;
  color: rgba(0, 0, 0, 0.5);
}
.menu_left li a:hover,
.menu_right li a:hover {
  opacity: 1;
}
.menu_left li a span,
.menu_right li a span {
  background-position: -1px -126px;
  width: 6px;
  height: 6px;
  top: 13px;
  right: 13px;
  position: absolute;
}
.menu_left li a.ico_catalog {
  background-position: -60px -10px;
}
.menu_left li a.ico_page {
  background-position: 2px -10px;
}
.menu_left li a.ico_comment {
  background-position: -122px -65px;
}
.menu_left li a.ico_phone {
  background-position: -304px -10px;
}
.menu_left li a.ico_shelf,
.menu_left li a.ico_shelfed {
  background-position: -182px -10px;
}
.menu_left li a.ico_setup {
  background-position: -122px -10px;
}
.menu_left li a.ico_pc {
  background-position: 1px -62px;
}
.menu_left li a.ico_flower {
  background-position: -62px -64px;
}
.menu_right li a.ico_pagePrev {
  background-position: -184px -60px;
}
.menu_right li a.ico_pageNext {
  background-position: -243px -60px;
}
.menu_right li a.ico_goTop {
  background-position: -304px -56px;
}
.menu_right li a.ico_pagePrev:hover,
.menu_right li a.ico_pageNext:hover,
.menu_right li a.ico_goTop:hover {
  background-image: none;
}
.menu_right li a:hover i {
  display: block;
}
/* 正文栏 */
.textbox {
  border-radius: 2px;
  width: 98%;
  margin: 0 auto 20px;
  padding-bottom: 40px;
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.25);
  color: #111;
}
.bookNav {
  width: 99%;
  margin: 0 auto;
  padding: 18px 0 12px;
  line-height: 2.5; /*border-bottom: 1px dotted rgba(0,0,0,.1)*/
}
.bookNav a {
  font: 12px/1 "Microsoft YaHei";
  margin: 0 5px;
}
.readWrap {
  margin: 0 auto;
  width: 100%;
}
.book_title {
  width: 90%;
  margin: 0 auto;
  padding-bottom: 15px;
  position: relative;
}
.book_title h1 {
  padding: 60px 0 30px;
  font: 26px/1 "Microsoft YaHei";
  color: #000;
  text-align: center;
}
.textinfo {
  color: rgba(0, 0, 0, 0.5);
  font: 12px/1.8 "Microsoft YaHei";
  text-align: center;
  position: relative;
}
.textinfo a,
.textinfo span {
  color: rgba(0, 0, 0, 0.5);
  margin-right: 15px;
  display: inline-block;
  vertical-align: middle;
  margin-top: -3px;
  *margin-top: -1px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.readBox {
  width: 90%;
  margin: 0 auto;
  line-height: 2;
  font-size: 16px;
  padding: 10px 0 60px; /*min-height: 469px;*/
  word-wrap: break-word;
  word-break: break-word;
}
.readBox p {
  line-height: 2;
  margin-top: 1em;
  text-indent: 2em;
}
.orderBox {
  width: 90%;
  margin: 0 auto 10px;
  padding: 40px 0;
  font-size: 14px;
  min-height: 330px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 2px;
}
.orderBox h3 {
  padding: 0 50px;
  font: 18px/1 "Microsoft YaHei";
  margin: 25px 0;
}
.order_list {
  padding: 0 50px;
  line-height: 2.6;
}
.order_list .btns {
  padding: 20px 0;
}
/* 作者的话 */
.say_bar {
  padding: 14px 14px 14px 74px;
  font-size: 14px;
}
/* 翻页 */
.nextPageBox {
  margin: 30px auto;
  text-align: center;
  width: 98%;
}
.nextPageBox a {
  width: 26%;
  height: 58px;
  line-height: 58px;
  font-size: 18px;
  display: inline-block;
  border-radius: 3px;
  text-align: center; /*background: rgba(255,255,255,0.5);*/
  opacity: 0.95;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.nextPageBox a.prev,
.nextPageBox a.dir {
  margin-right: 40px;
}
.nextPageBox a:hover {
  /*background: rgba(255,255,255,.8);*/
  opacity: 1;
  color: #333;
}
.read_style_6 .nextPageBox a {
  color: #999;
  border: none;
}
/*固定悬浮图层*/
.readPopup {
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  background: #fff;
  box-shadow: 0 1px 2px #999;
  overflow: hidden;
  padding-bottom: 20px;
  z-index: 9999;
  position: fixed;
  left: 50%;
  top: 50%;
}
.icon_check {
  position: absolute;
  width: 29px;
  height: 25px;
  right: -1px;
  top: -1px;
  z-index: 2;
  background-position: 0 -142px;
}
.closePopup {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 16px;
  height: 15px;
  background-posion: -43px -126px;
}
.chapterBox {
  width: 600px;
  margin-left: -300px;
  margin-top: -260px;
}
.chapterBox .scrollWrap {
  height: 540px;
}
/*弹窗内容*/
.popupTit h2 {
  text-align: center;
  letter-spacing: 15px;
  color: #333;
  font: 700 20px/30px "Microsoft Yahei";
  margin: 30px 0;
}
.popupTit h3 {
  font-size: 16px;
  margin: 15px 20px;
}
.scrollWrap {
  overflow-y: scroll;
  position: relative;
}
.dirWrap {
  padding: 0 40px;
}
.scrollWrap h3 {
  padding-left: 26px;
  font-size: 14px;
  background: #e6e6e6;
  height: 30px;
  line-height: 30px;
  font-weight: normal;
  position: relative;
  cursor: pointer;
  margin: 0 0 15px;
  border-radius: 3px;
}
.readPopup .tc .btn_gray {
  margin-left: 30px;
}
/* 目录 */
.dirList {
  overflow: hidden;
  *zoom: 1;
}
.dirList li {
  float: left;
  width: 40%;
  padding-left: 26px;
  height: 40px;
  line-height: 40px;
  overflow: hidden;
  margin-right: 20px;
  *zoom: 1;
}
.dirList li a {
  float: left;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 220px;
}
/* 加书架 */
.readTipBox {
  width: 400px;
  padding-bottom: 30px;
  margin-left: -200px;
  margin-top: -105px;
}
.tipWrap {
  padding: 30px;
}
/* 设置 */
.setupBox {
  width: 480px;
  margin-left: -240px;
  margin-top: -130px;
}
.setupList {
  padding: 5px 40px;
}
.setupList li {
  font-size: 14px;
  padding: 15px 0;
}
.setupList li a {
  display: inline-block;
  vertical-align: middle;
  margin: 0 6px;
  text-align: center;
}
.readTheme a {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.readTheme .white {
  background-color: #faf6ed;
  margin-left: 15px;
}
.readTheme .green {
  background-color: #e2efe2;
}
/*.readTheme .blue { background-color: #E8FDFE }*/
.readTheme .pink {
  background-color: #fdd9d9;
}
.readTheme .yellow {
  background-color: #f1debd;
}
.readTheme .gray {
  background-color: #eee;
}
.readTheme .night {
  background-color: #666;
}
/*.readTheme a.current, .readTheme a:hover { box-shadow: 1px 3px 5px #aaa }*/
.read_style_1 .readTheme .white,
.read_style_2 .readTheme .green,
.read_style_3 .readTheme .pink,
.read_style_4 .readTheme .yellow,
.read_style_5 .readTheme .gray,
.read_style_6 .readTheme .night {
  border-color: #f80;
}
.setBtn a {
  border: 1px solid #d9d9d9;
  width: 53px;
  height: 28px;
  line-height: 28px;
  box-shadow: 0 1px 1px #ececec;
  border-radius: 3px;
}
.setBtn .act {
  color: #cc2931;
}
.setFont .setSimsun {
  font-family: Simsun;
  font-size: 13px;
}
.setFont .setKs {
  font-family: kaiti;
  font-size: 15px;
}
.setupList li.fontSize a {
  text-align: center;
  margin: 0;
  font-size: 16px;
  width: 70px;
  box-shadow: 0 1px 0 #ececec;
}
.setupList li.fontSize a.small {
  margin-left: 8px;
  border-right: none;
  border-radius: 3px 0 0 3px;
}
.setupList li.fontSize a.big {
  border-left: none;
  border-radius: 0 3px 3px 0;
}
.setupList li.fontSize .current_font {
  display: inline-block;
  padding: 0 22px;
  border: 1px solid #d9d9d9;
  height: 28px;
  line-height: 28px;
  box-shadow: 0 1px 1px #ececec;
  vertical-align: middle;
}
/* 手机阅读 */
.qrBox {
  width: 280px;
  margin-left: -140px;
  margin-top: -120px;
}
.qrList {
  text-align: center;
  width: 166px;
  margin: 30px auto 15px;
}
.qr_img {
  width: 160px;
  height: 160px;
  margin: 0 auto 10px;
  display: block;
}
.qrCodeBox p {
  color: #999;
}
/*遮罩层*/
.maskBox {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 995;
  width: 100%;
  height: 100%;
  background: black;
  filter: alpha(opacity=20);
  opacity: 0.2;
  animation: mask 2s ease-out 0s 1 normal;
}
@keyframes mask {
  0% {
    filter: alpha(opacity=0);
    opacity: 0;
  }
  100% {
    filter: alpha(opacity=20);
    opacity: 0.2;
  }
}
.pc_bar {
  padding: 30px 0 10px;
  text-align: center;
  position: relative;
}
.icon_pc {
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
  padding: 3px;
  display: inline-block;
  border-radius: 50%;
}
.icon_pc span {
  width: 96px;
  height: 96px;
  line-height: 1;
  border-radius: 50%;
  display: inline-block;
  background-color: #f80;
  color: #fefefe;
  font-size: 22px;
  letter-spacing: 0px;
  text-align: center;
}
.icon_pc:hover span {
  background: #ed4259;
}
.icon_yb {
  width: 37px;
  height: 27px;
  display: block;
  background-position: 0 -173px;
  margin: 19px auto 7px;
}
.icon_pc em {
  filter: alpha(opacity=90);
  -moz-opacity: 0.9;
  opacity: 0.9;
}
.read_dz {
  height: 40px;
  line-height: 40px;
  border-radius: 40px;
  padding: 0 22px;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#0c000000,endColorstr=#0c000000);
  background: rgba(0, 0, 0, 0.07);
  display: block;
  position: absolute;
  bottom: 35px;
  right: 50px;
  color: #444;
  font-size: 18px;
}
.read_dz:hover {
  color: #444;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#19000000,endColorstr=#19000000);
  background: rgba(0, 0, 0, 0.1);
}
.read_style_6 .read_dz {
  color: #aaa;
}
.read_dz.on {
  color: #f70;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#0cff8800,endColorstr=#0cff8800);
  background: rgba(255, 136, 0, 0.05);
}
.read_dz.on i {
  background-position: -30px 0;
}
.haveRead {
  border-radius: 2px; /*background: #fff;*/
  width: 98%;
  margin: 0 auto 20px;
}
.haveRead h4 {
  padding: 25px 40px 0;
  font-weight: normal;
}
.haveRead ul {
  padding: 0 15px 10px;
}
.haveRead li {
  float: left;
  width: 124px;
  margin: 15px 23px;
}
.haveRead .items_img {
  display: block;
}
.haveRead .items_img img {
  width: 120px;
  height: 150px;
  background: #f6f6f6;
  border: 1px solid #ebebeb;
  padding: 1px;
}
.haveRead .items_img:hover img {
  border-color: #ccc;
}
.haveRead .items_link {
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 124px;
  overflow: hidden;
  height: 30px;
  line-height: 30px;
  display: block;
}
.payFoot {
  line-height: 2.4;
  padding: 30px 0 20px;
  margin: 10px 50px 0;
  font-size: 13px;
  color: #808080;
  border-top: 1px solid #eee;
}
.readBanner {
  width: 98%;
  padding-top: 25px;
}
.readBanner img {
  max-width: 100%;
}
.read_style_6 .readBanner img,
.read_style_6 .haveRead .items_img img {
  filter: alpha(opacity=80);
  opacity: 0.8;
}
:root .topMain {
  filter: none;
}

/*全本订阅*/
.order_bar {
  text-align: center;
  padding-bottom: 30px;
}
.order_zj {
  width: 178px;
  padding: 15px 0;
  margin: 0 14px;
  display: inline-block;
  transition: width 0.3s;
  border: 1px solid #d8d8d8;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 4px;
}
.order_zj:hover {
  color: #333;
  background: rgba(255, 255, 255, 0.2);
  border-color: #d1d1d1;
}
.order_zj h4 {
  font-size: 18px;
  font-weight: normal;
}
.order_zj .price {
  font-size: 12px;
  padding-top: 6px;
}
.order_zj .price .red {
  margin-left: 5px;
}
.order_allzj {
  background: #f80;
  color: #fff;
  border-color: #f80;
}
.order_allzj .red {
  color: #fff;
}
.order_allzj:hover {
  color: #fff;
  background: #f70;
  border-color: #f70;
}
.order_tip {
  padding: 25px 0 10px;
  color: #999;
  font-size: 13px;
}
.dqye {
  font-size: 15px;
}
</style>