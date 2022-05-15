<template>
  <div class="header">
    <Top />
  </div>
  <div id="showDetail">
    <div class="readBody cf">
      <div class="readMain cf">
        <div class="read_menu">
          <div class="menu_left" style="background-color: rgba(255, 255, 255,.45);">
            <ul>
              <li>
                <a
                  class="ico_catalog"
                  href="/book/indexList-1334332598936240128.html"
                  title="目录"
                >
                  <b>目录</b></a
                >
              </li>
             
              <li>
                <a
                  class="ico_page"
                  href="/book/1334332598936240128.html"
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
          <div class="bookNav">
            <a href="/">首页 </a>&gt;
            <a href="/book/bookclass.html?c=6" v-if="data.bookInfo">{{data.bookInfo.categoryName}}</a>&gt;
            <a href="javascript:void(0)" v-if="data.bookInfo" @click="bookDetail(data.chapterInfo.bookId)">{{data.bookInfo.bookName}}</a>
          </div>
          <div id="readcontent">
            <div class="textbox cf" style="background-color: rgba(255, 255, 255,.45);">
              <div class="book_title">
                <h1 v-if="data.chapterInfo">{{data.chapterInfo.chapterName}}</h1>
                <div class="textinfo">
                  类别：<a href="/book/bookclass.html?c=6" v-if="data.bookInfo">{{data.bookInfo.categoryName}}</a> 作者：<a
                    href="javascript:searchByK('最终马甲')"
                    v-if="data.bookInfo">{{data.bookInfo.authorName}}</a
                  ><span v-if="data.chapterInfo">字数：{{data.chapterInfo.chapterWordCount}}</span
                  ><span v-if="data.chapterInfo">更新时间：{{data.chapterInfo.chapterUpdateTime}}</span>
                </div>
              </div>

              <div class="txtwrap">
                <div
                  id="showReading"
                  class="readBox"
                  style="font-size: 16px; font-family: microsoft yahei"
                v-html="data.bookContent">
                </div>
              </div>
            </div>
          </div>
          <div class="nextPageBox">
            <a style="background-color: rgba(255, 255, 255,.45);"
              class="prev"
              href="javascript:enterPreIndexPage('1334332598936240128','0');"
              >上一章</a
            >
            <a style="background-color: rgba(255, 255, 255,.45);" class="dir" href="/book/indexList-1334332598936240128.html"
              >目录</a
            >
            <a style="background-color: rgba(255, 255, 255,.45);"
              class="next"
              href="javascript:enterNextIndexPage('1334332598936240128','1334332601092112384');"
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
import "@/assets/styles/read.css"
import { reactive, toRefs, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import {getBookContent } from "@/api/book";
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

    const chapterId = route.params.chapterId;
    const state = reactive({
      data: {},
      imgBaseUrl: process.env.VUE_APP_BASE_IMG_URL,
    });
    onMounted(async () => {

      const {data} =  await getBookContent(chapterId);
      state.data = data;
      
    });

     const bookDetail = (bookId) => {
      router.push({ path: `/book/${bookId}` });
    };

    return {
      ...toRefs(state),
      bookDetail
      
    };
  },
  mounted() {
    
  }
};
</script>
