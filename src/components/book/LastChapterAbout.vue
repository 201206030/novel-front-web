<template>
  <!--章节目录 start-->
  <div class="pad20_nobt">
    <div class="bookChapter">
      <div class="book_tit">
        <div class="fl">
          <h3>最新章节</h3>
          <span id="bookIndexCount">({{chapterAbout.chapterTotal}}章)</span>
        </div>
        <a class="fr" href="/book/indexList-1431636283466297344.html"
          >全部目录</a
        >
      </div>
      <ul class="list cf">
        <li>
          <span class="fl font16">
            <a @click="bookContent(chapterAbout.chapterInfo.bookId,chapterAbout.chapterInfo.id)" href="javascript:void(0)" v-if="chapterAbout.chapterInfo"
              >{{chapterAbout.chapterInfo.chapterName}}】</a
            ></span
          >
          <span class="black9 fr" v-if="chapterAbout.chapterInfo">更新时间：{{chapterAbout.chapterInfo.chapterUpdateTime}}</span>
        </li>
        <li class="zj_yl" id="lastBookContent">
          <!--go-->
          　　<span v-html="`${chapterAbout.contentSummary}` + '...'"></span>
        </li>
        <!--此处是该章节预览，截取最前面的42个字-->
      </ul>
    </div>
  </div>
  <!--章节目录 end-->
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getLastChapterAbout } from "@/api/book";
export default {
  name: "LastChapterAbout",
  setup() {
    const route = useRoute();
    const router = useRouter();

    const state = reactive({
      chapterAbout: {},
      imgBaseUrl: process.env.VUE_APP_BASE_IMG_URL,
    });
    const bookId = route.params.id;
    onMounted(async () => {
      const { data } = await getLastChapterAbout({ bookId: bookId });
      state.chapterAbout = data;
    });

    const bookContent = (bookId, chapterId) => {
      router.push({ path: `/book/${bookId}/${chapterId}` });
    };

    return {
      ...toRefs(state),
      bookContent
    };
  },
};
</script>