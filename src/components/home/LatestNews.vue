<template>
  <dl class="hot_notice" id="indexNews">
    <dd style="text-align: left" v-for="(item, index) in newsList" :key="index">
      <span>[{{ item.categoryName }}]</span>
      <a href="javascript:void(0)" @click="newsInfo(item.id)"> {{ item.title }}</a>
      
    </dd>
  </dl>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { ElMessage, ElLoading } from "element-plus";
import { listLatestNews } from "@/api/news";
export default {
  name: "LatestNews",
  setup() {
    const state = reactive({
      newsList: [],
    });
    const route = useRoute();
    const router = useRouter();
    onMounted(async () => {
      const loadingInstance = ElLoading.service({
        target: "#indexNews",
        text: "加载中。。。",
      });
      const { data } = await listLatestNews();
      loadingInstance.close();

      state.newsList = data;
    });
    const newsInfo = (newsId) => {
      router.push({ path: `/news/${newsId}` });
    };
    return {
      ...toRefs(state),
      newsInfo,
    };
  },
};
</script>