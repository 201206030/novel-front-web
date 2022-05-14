<template>
  <div class="channelWrap channelTable cf">
    <div class="leftBox">
      <div class="title">
        <h2>最新更新</h2>
      </div>
      <div class="updateTable">
        <table cellpadding="0" cellspacing="0">
          <thead>
            <tr>
              <th class="style">类别</th>
              <th class="name">书名</th>
              <th class="chapter">最新章节</th>
              <th class="author">作者</th>
              <th class="time">更新时间</th>
            </tr>
          </thead>
          <tbody id="newRankBooks2">
            <tr v-for="(item, index) in booksList" :key="index">
              <td class="style">
                <a href="book/bookclass.html?c=1">[{{ item.categoryName }}]</a>
              </td>
              <td class="name">
                <a href="/book/1334337530296893441.html">{{ item.bookName }}</a>
              </td>
              <td class="chapter">
                <a href="/book/1334337530296893441.html">{{
                  item.lastChapterName
                }}</a>
                <i class=""></i>
              </td>
              <td class="author">
                <a href="javascript:void(0)">{{ item.authorName }}</a>
              </td>
              <td class="time">{{ item.lastChapterUpdateTime }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div id="bookrank5_ShowBookRank">
      <div class="rightBox mb20">
        <div class="title cf">
          <h3 class="on">更新榜单</h3>
        </div>
        <div class="rightList">
          <ul id="updateRankBooks">
            <li
              v-for="(item, index) in booksRank"
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
                <a
                  class="txt"
                  href="/book/1334317855974465536.html"
                  v-html="item.bookDesc"
                ></a>
              </div>
            </li>
          </ul>
          <div class="more">
            <a href="/book/book_ranking.html?type=2">查看更多&gt;</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import { listUpdateRankBooks } from "@/api/book";
export default {
  name: "BookUpdateRank",
  setup() {
    const state = reactive({
      booksRank: [],
      booksList: [],
      imgBaseUrl: process.env.VUE_APP_BASE_IMG_URL,
    });

    onMounted(async () => {
      const { data } = await listUpdateRankBooks();
      state.booksList = data;
      await data.forEach((book) => {
        if (state.booksRank.length < 10) {
          state.booksRank[state.booksRank.length] = book;
        }
      });
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>