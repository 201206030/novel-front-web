<template>
  <dl class="hot_notice" id="indexNews">
    <dd style="text-align: left" v-for="(item, index) in newsList" :key="index">
      <span>[{{ item.categoryName }}]</span>
      <router-link :to="{ name: 'newsContent', query: { id: item.id } }">
        {{ item.title }}
      </router-link>
    </dd>
  </dl>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import { ElMessage, ElLoading } from "element-plus";
import {listLatestNews} from "@/api/news";
export default {
  name: "LatestNews",
  setup() {
    const state = reactive({
      newsList: [],
    });

    onMounted(async () => {
      const loadingInstance = ElLoading.service({
        target: "#indexNews",
        text: "加载中。。。",
      });
      const { data } = await listLatestNews();
      loadingInstance.close();

      state.newsList = data;
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>