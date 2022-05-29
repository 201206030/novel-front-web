<template>
  <Header />
  <div class="main box_center cf">
    <div class="nav_sub">
      
    </div>
    <div class="channelWrap channelChapterlist cf mb50">
      <div class="bookMain">
        <div class="bookCover cf">
          <div class="book_info1">
            <div class="tit">
              <h1>{{book.bookName}}</h1>
              <!--<i class="vip_b">VIP</i>-->
            </div>
            <ul class="list">
              <li>
                <span>作者：<a href="javascript:void(0)">{{book.authorName}}</a></span>
                <span
                  >类别：{{book.categoryName}}</span
                >
                <span>状态：<em class="black3">{{
                  book.bookStatus == 0 ? "连载中" : "已完结"
                }}</em></span>
                <span>总点击：<em class="black3" id="cTotal">{{book.visitCount}}</em></span>
                <span>总字数：<em class="black3">{{book.wordCount}}</em></span>
              </li>
            </ul>
          </div>
        </div>
        <div class="dirWrap cf">
          <h3>正文({{chapterList.length}})</h3>
          <div class="dirList">
            <ul v-for="(item,index) in chapterList" :key="index">
              <li>
                <a @click="bookContent(book.id,item.id)" href="javascript:void(0)">
                  <span>{{item.chapterName}}</span><i class="red"> [{{item.isVip == 1 ? '收费' : '免费'}}]</i>
                </a>
              </li>
            </ul>
            
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import "@/assets/styles/book.css";
import { reactive, toRefs, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getBookById, listChapters } from "@/api/book";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
export default {
  name: "chapterList",
  components: {
    Header,
    Footer,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();

    const state = reactive({
      book: {},
      chapterList: [],
      imgBaseUrl: process.env.VUE_APP_BASE_IMG_URL,
    });
    onMounted(() => {
      const bookId = route.params.bookId;
      loadBook(bookId);
      loadChapterList(bookId);
    });

    const loadBook = async (bookId) => {
      const { data } = await getBookById(bookId);
      state.book = data;
    };

    const loadChapterList = async (bookId) => {
      const { data } = await listChapters({ bookId: bookId });
      state.chapterList = data;
    };

    const bookContent = (bookId, chapterId) => {
      router.push({ path: `/book/${bookId}/${chapterId}` });
    };

    const bookDetail = (bookId) => {
      router.push({ path: `/book/${bookId}` });
    };

    return {
      ...toRefs(state),
      bookContent,
      bookDetail,
    };
  },
};
</script>
