<template>
  <div class="header">
    <Top @eventSerch="searchByK" />
    <Navbar />
  </div>

  <div class="main box_center cf">
    <!--<div class="channelWrap classTable cf">
      <div class="so_tag">
        <ul class="list">
          <li class="so_pd" id="workDirection">
            <span class="tit">作品频道：</span>
            <a
              filter-value="0"
              href="javascript:listBookCategory();search(1,20)"
              class="on"
              >男频</a
            >
            <a
              filter-value="1"
              href="javascript:listBookCategory();search(1,20)"
              >女频</a
            >
          </li>
          <li id="idGirl" class="so_class">
            <span class="tit">作品分类：</span>
            <span class="so_girl" id="girlCategoryList" style="display: none">
              <a href="javascript:search(1,20)" class="on">不限</a>
              <a filter-value="7" href="javascript:search(1,20)"
                >女生频道</a
              ></span
            >
            <span class="so_boy" id="boyCategoryList">
              <a href="javascript:search(1,20)" class="on">不限</a>
              <a filter-value="1" href="javascript:search(1,20)">玄幻奇幻</a>
              <a filter-value="2" href="javascript:search(1,20)">武侠仙侠</a>
              <a filter-value="3" href="javascript:search(1,20)">都市言情</a>
              <a filter-value="4" href="javascript:search(1,20)">历史军事</a>
              <a filter-value="5" href="javascript:search(1,20)">科幻灵异</a>
              <a filter-value="6" href="javascript:search(1,20)"
                >网游竞技</a
              ></span
            >
          </li>
          <li class="so_free">
                    <span class="tit">是否免费：</span>
                    <a href="?b=0&s=0&wb=0&wd=0&up=0&fr=0&so=0&ms=2" class="on">不限</a>
                    <a href="?b=0&s=0&wb=0&wd=0&up=0&fr=1&so=0&ms=2" class="">免费作品</a>
                    <a href="?b=0&s=0&wb=0&wd=0&up=0&fr=2&so=0&ms=2" class="">收费作品</a>
                </li>
          <li class="so_progress">
            <span class="tit">是否完结：</span>
            <a href="javascript:search(1,20)" class="on">不限</a>
            <a filter-value="0" href="javascript:search(1,20)" class=""
              >连载中</a
            >
            <a filter-value="1" href="javascript:search(1,20)" class=""
              >已完结</a
            >
          </li>
          <li class="so_words">
            <span class="tit">作品字数：</span>
            <a href="javascript:search(1,20)" class="on">不限</a>
            <a filter-value-max="300000" href="javascript:search(1,20)" class=""
              >30万字以下</a
            >
            <a
              filter-value-min="300000"
              filter-value-max="500000"
              href="javascript:search(1,20)"
              class=""
              >30-50万字</a
            >
            <a
              filter-value-min="500000"
              filter-value-max="1000000"
              href="javascript:search(1,20)"
              class=""
              >50-100万字</a
            >
            <a
              filter-value-min="1000000"
              href="javascript:search(1,20)"
              class=""
              >100万字以上</a
            >
          </li>
          <li class="so_update">
            <span class="tit">更新时间：</span>
            <a href="javascript:search(1,20)" class="on">不限</a>
            <a filter-value="3" href="javascript:search(1,20)" class=""
              >三日内</a
            >
            <a filter-value="7" href="javascript:search(1,20)" class=""
              >七日内</a
            >
            <a filter-value="15" href="javascript:search(1,20)" class=""
              >半月内</a
            >
            <a filter-value="30" href="javascript:search(1,20)" class=""
              >一月内</a
            >
          </li>
          <li class="so_sort">
            <span class="tit">排序方式：</span>
            <a href="javascript:search(1,20)" class="on">不限</a>
            <a
              filter-value="last_index_update_time"
              href="javascript:search(1,20)"
              class=""
              >更新时间</a
            >
            <a filter-value="word_count" href="javascript:search(1,20)" class=""
              >总字数</a
            >
            <a
              filter-value="visit_count"
              href="javascript:search(1,20)"
              class=""
              >点击量</a
            >
          </li>
        </ul>
      </div>
    </div>
-->
    <div class="channelWrap channelClassContent cf">
      <div class="updateTable rankTable">
        <table cellpadding="0" cellspacing="0">
          <thead>
            <tr>
              <th class="rank">序号</th>
              <th class="style">类别</th>
              <th class="name">书名</th>
              <th class="chapter">最新章节</th>
              <th class="author">作者</th>
              <th class="word">字数</th>
            </tr>
          </thead>
          <tbody id="bookList">
            <tr v-for="(item, index) in books" :key="index">
              <td class="rank">
                <i>{{ index + 1 }}</i>
              </td>
              <td class="style">
                <a href="/book/bookclass.html?c=2" cls="13"
                  >[{{ item.categoryName }}]</a
                >
              </td>
              <td class="name">
                <a href="javascript:void(0)" @click="bookDetail(item.id)">{{
                  item.bookName
                }}</a>
              </td>
              <td class="chapter">
                <a href="javascript:void(0)" @click="bookDetail(item.id)">{{
                  item.lastChapterName
                }}</a>
              </td>
              <td class="author">
                <a href="javascript:void(0)">{{ item.authorName }}</a>
              </td>
              <td class="word">{{ wordCountFormat(item.wordCount) }}</td>
            </tr>
          </tbody>
        </table>

        <el-pagination
          small
          layout="prev, pager, next"
          :background="backgroud"
          :page-size="pageSize"
          :total="total"
          class="mt-4"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import "@/assets/styles/book.css";
import { reactive, toRefs, onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { searchBooks } from "@/api/book";
import Top from "@/components/common/Top";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
export default {
  name: "bookClass",
  components: {
    Top,
    Navbar,
    Footer,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();

    const state = reactive({
      books: [],
      searchCondition: {},
      backgroud: true,
      total: 0,
      pageSize: 10,
      imgBaseUrl: process.env.VUE_APP_BASE_IMG_URL,
    });
    onMounted(() => {
      const key = route.query.key;
      state.searchCondition.keyword = key;
      state.searchCondition.pageSize = 10;
      search();
    });

    const search = async () => {
      const { data } = await searchBooks(state.searchCondition);
      state.books = data.list;
      state.searchCondition.pageNum = data.pageNum;
      state.searchCondition.pageSize = data.pageSize;
      state.total = Number(data.total);
    };

    const searchByK = (key) => {
      state.searchCondition = { keyword: key };
      search();
    };
    const bookDetail = (bookId) => {
      router.push({ path: `/book/${bookId}` });
    };

    const handleCurrentChange = (pageNum) => {
      state.searchCondition.pageNum = pageNum;
      search();
    };

    return {
      ...toRefs(state),
      bookDetail,
      searchByK,
      search,
      handleCurrentChange,
    };
  },
  computed: {
    wordCountFormat(wordCount) {
      return (wordCount) => {
        if (wordCount.length > 5) {
          return parseInt(wordCount / 10000) + "万";
        }
        if (wordCount.length > 4) {
          return parseInt(wordCount / 1000) + "千";
        }
        return wordCount;
      };
    },
  },
};
</script>

<style>
.el-pagination {
  justify-content: center;
}
.el-pagination.is-background .el-pager li:not(.is-disabled).is-active {
  background-color: #f80 !important;
}
.el-pagination {
  --el-pagination-hover-color: #f80 !important;
}
</style>
