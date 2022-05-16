<template>
  <Header />

  <div class="main box_center cf">
    <div class="newsMain cf">
        <div class="nav_sub">
            当前位置：<a href="/"> 首页 </a> &gt; <span> 新闻公告 </span> &gt; <span>{{news.title}}</span>
        </div>
        <div class="channelWrap channelNews cf">
            <div class="news_title">
                <h2>{{news.title}}</h2>
                <!--while ... corresponds to th:text (i.e. result will be HTML-escaped), ... corresponds to th:utext-->
                <p class="from">来源：{{news.sourceName}} <span class="time">时间：{{news.updateTime}}</span> </p>
            </div>
            <div class="news_info" v-html="news.content"></div>
        </div>
    </div>
</div>
  <Footer />
</template>

<script>
import "@/assets/styles/about.css";
import { reactive, toRefs, onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import {getNewsById} from "@/api/news"
import {
  listVisitRankBooks,
  listUpdateRankBooks,
  listNewestRankBooks,
} from "@/api/book";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
export default {
  name: "news",
  components: {
    Header,
    Footer,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();

    const state = reactive({
      news: {}
    });
    onMounted(async () => {
      const { data } = await getNewsById(route.params.id);
      state.news = data
    });


    return {
      ...toRefs(state)
      
    };
  }
  
};
</script>

