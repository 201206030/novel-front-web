<template>
  <div class="friend_link">
    <div class="box_center cf" id="friendLink">
      <span>友情链接：</span>
      <a
        v-for="(item, index) in friendLinks"
        :key="index"
        target="_blank"
        :href="item.linkUrl"
        >{{ item.linkName }}
      </a>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import { listHomeFriendLinks } from "@/api/home";
export default {
  name: "FriendLink",
  setup() {
    const state = reactive({
      friendLinks: [],
    });

    onMounted(async () => {
      const { data } = await listHomeFriendLinks();
      state.friendLinks = data;
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>