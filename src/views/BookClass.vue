<template>
  <div class="header">
    <Top @eventSerch="searchByK" />
    <Navbar />
  </div>

  <div class="main box_center cf">
    <div class="channelWrap classTable cf">
      <div class="so_tag">
        <ul class="list">
          <li class="so_pd" id="workDirection">
            <span class="tit">作品频道：</span>
            <a
              filter-value="0"
              href="javascript:void(0)"
              @click="loadCategoryList(0)"
              :class="`${workDirectionOn == 0 ? 'on' : ''}`"
              >男频</a
            >
            <a
              filter-value="1"
              href="javascript:void(0)"
              @click="loadCategoryList(1)"
              :class="`${workDirectionOn == 1 ? 'on' : ''}`"
              >女频</a
            >
          </li>
          <li id="idGirl" class="so_class">
            <span class="tit">作品分类：</span>

            <span class="so_boy" id="boyCategoryList">
              <a
                href="javascript:void(0)"
                :class="`${categoryOn == 0 ? 'on' : ''}`"
                @click="changeCategory(0)"
                >不限</a
              >
              <a
                v-for="(item, index) in bookCategorys"
                :key="index"
                href="javascript:void(0)"
                :class="`${categoryOn == item.id ? 'on' : ''}`"
                @click="changeCategory(item.id)"
                >{{ item.name }}</a
              >
            </span>
          </li>
          <li class="so_progress">
            <span class="tit">是否完结：</span>
            <a
              href="javascript:void(0)"
              :class="`${bookStatusOn == null ? 'on' : ''}`"
              @click="changeBookStatus(null)"
              >不限</a
            >
            <a
              filter-value="0"
              href="javascript:void(0)"
              :class="`${bookStatusOn == 0 ? 'on' : ''}`"
              @click="changeBookStatus(0)"
              >连载中</a
            >
            <a
              filter-value="1"
              href="javascript:void(0)"
              :class="`${bookStatusOn == 1 ? 'on' : ''}`"
              @click="changeBookStatus(1)"
              >已完结</a
            >
          </li>
          <li class="so_words">
            <span class="tit">作品字数：</span>
            <a
              href="javascript:void(0)"
              :class="`${wordCountOn == null ? 'on' : ''}`"
              @click="changeWordCount(null, null)"
              >不限</a
            >
            <a
              filter-value-max="300000"
              href="javascript:void(0)"
              :class="`${wordCountOn == 0 ? 'on' : ''}`"
              @click="changeWordCount(0, 300000)"
              >30万字以下</a
            >
            <a
              filter-value-min="300000"
              filter-value-max="500000"
              href="javascript:void(0)"
              :class="`${wordCountOn == 300000 ? 'on' : ''}`"
              @click="changeWordCount(300000, 500000)"
              >30-50万字</a
            >
            <a
              filter-value-min="500000"
              filter-value-max="1000000"
              href="javascript:void(0)"
              :class="`${wordCountOn == 500000 ? 'on' : ''}`"
              @click="changeWordCount(500000, 1000000)"
              >50-100万字</a
            >
            <a
              filter-value-min="1000000"
              href="javascript:void(0)"
              :class="`${wordCountOn == 1000000 ? 'on' : ''}`"
              @click="changeWordCount(1000000, null)"
              >100万字以上</a
            >
          </li>
          <li class="so_update">
            <span class="tit">更新时间：</span>
            <a
              href="javascript:void(0)"
              :class="`${updateTimeOn == null ? 'on' : ''}`"
              @click="changeUpdateTime(null)"
              >不限</a
            >
            <a
              filter-value="3"
              href="javascript:void(0)"
              :class="`${updateTimeOn == 3 ? 'on' : ''}`"
              @click="changeUpdateTime(3)"
              >三日内</a
            >
            <a
              filter-value="7"
              href="javascript:void(0)"
              :class="`${updateTimeOn == 7 ? 'on' : ''}`"
              @click="changeUpdateTime(7)"
              >七日内</a
            >
            <a
              filter-value="15"
              href="javascript:void(0)"
              :class="`${updateTimeOn == 15 ? 'on' : ''}`"
              @click="changeUpdateTime(15)"
              >半月内</a
            >
            <a
              filter-value="30"
              href="javascript:void(0)"
              :class="`${updateTimeOn == 30 ? 'on' : ''}`"
              @click="changeUpdateTime(30)"
              >一月内</a
            >
          </li>
          <li class="so_sort">
            <span class="tit">排序方式：</span>
            <a href="javascript:void(0)"
              :class="`${sortOn == null ? 'on' : ''}`"
              @click="changeSort(null)">不限</a>
            <a
              filter-value="last_index_update_time"
              href="javascript:void(0)"
              :class="`${sortOn == 'last_chapter_update_time' ? 'on' : ''}`"
              @click="changeSort('last_chapter_update_time')"
              >更新时间</a
            >
            <a filter-value="word_count" href="javascript:void(0)"
              :class="`${sortOn == 'word_count' ? 'on' : ''}`"
              @click="changeSort('word_count')"
              >总字数</a
            >
            <a
              filter-value="visit_count"
              href="javascript:void(0)"
              :class="`${sortOn == 'visit_count' ? 'on' : ''}`"
              @click="changeSort('visit_count')"
              >点击量</a
            >
          </li>
        </ul>
      </div>
    </div>

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
                <a href="javascript:void(0)" @click="bookDetail(item.id)" cls="13"
                  >[{{ item.categoryName }}]</a
                >
              </td>
              <td class="name">
                <a href="javascript:void(0)" @click="bookDetail(item.id)" v-html="item.bookName"></a>
              </td>
              <td class="chapter">
                <a href="javascript:void(0)" @click="bookDetail(item.id)">{{
                  item.lastChapterName
                }}</a>
              </td>
              <td class="author">
                <a href="javascript:void(0)" v-html="item.authorName"></a>
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
import { searchBooks, listCategorys } from "@/api/book";
import { addDay, dateFormat } from "@/utils";
import Top from "@/components/common/Top";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
export default {
  name: "bookclass",
  components: {
    Top,
    Navbar,
    Footer,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();

    const state = reactive({
      bookCategorys: [],
      books: [],
      searchCondition: {},
      backgroud: true,
      total: 0,
      pageSize: 10,
      imgBaseUrl: process.env.VUE_APP_BASE_IMG_URL,
      workDirectionOn: 0,
      categoryOn: 0,
      bookStatusOn: null,
      wordCountOn: null,
      updateTimeOn: null,
      sortOn:null
    });
    onMounted(() => {
      const key = route.query.key;
      state.searchCondition.keyword = key;
      state.searchCondition.pageSize = 10;
      loadCategoryList(0);
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

    const loadCategoryList = async (workDirection) => {
      const { data } = await listCategorys({ workDirection: workDirection });
      state.bookCategorys = data;
      state.workDirectionOn = workDirection;
      state.searchCondition.workDirection = workDirection;
      state.categoryOn = 0;
      state.searchCondition.categoryId = null;
      search();
    };

    const changeCategory = async (categoryId) => {
      state.categoryOn = categoryId;
      if (categoryId > 0) {
        state.searchCondition.categoryId = categoryId;
      } else {
        state.searchCondition.categoryId = null;
      }
      search();
    };

    const changeBookStatus = async (bookStatus) => {
      state.bookStatusOn = bookStatus;
      state.searchCondition.bookStatus = bookStatus;
      search();
    };

    const changeWordCount = async (wordCountMin, wordCountMax) => {
      state.wordCountOn = wordCountMin;
      state.searchCondition.wordCountMin = wordCountMin;
      state.searchCondition.wordCountMax = wordCountMax;

      search();
    };

    const changeUpdateTime = async (days) => {
      state.updateTimeOn = days;
      if (days) {
        state.searchCondition.updateTimeMin = dateFormat(
          "YYYY-mm-dd",
          addDay(-days)
        );
      } else {
        state.searchCondition.updateTimeMin = null;
      }
      search();
    };

    const changeSort = async (sort) => {
      state.sortOn = sort;
      state.searchCondition.sort = sort;
      search();
    };

    return {
      ...toRefs(state),
      bookDetail,
      searchByK,
      search,
      handleCurrentChange,
      loadCategoryList,
      changeCategory,
      changeBookStatus,
      changeWordCount,
      changeUpdateTime,
      changeSort
    };
  },
  computed: {
    wordCountFormat(wordCount) {
      return (wordCount) => {
        if (wordCount.length >= 5) {
          return parseInt(wordCount / 10000) + "万";
        }
        if (wordCount.length >= 4) {
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
