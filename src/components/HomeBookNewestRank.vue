<template>
  <div id="bookrank2_ShowBookRank">
    <div class="rightBox">
      <div class="title cf">
        <h3 class="on">新书榜单</h3>
      </div>
      <div class="rightList">
        <ul id="newRankBooks">
          <li
            v-for="(item, index) in books"
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
          <a href="/book/book_ranking.html?type=1">查看更多&gt;</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import { listNewestRankBooks } from "@/api/book";
export default {
  name: "HomeBookNewestRank",
  setup() {
    const state = reactive({
      books: [],
      imgBaseUrl: process.env.VUE_APP_BASE_IMG_URL,
    });

    onMounted(async () => {
      const { data } = await listNewestRankBooks();

      await data.forEach((book) => {
        if (state.books.length < 10) {
          state.books[state.books.length] = book;
        }
      });
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>