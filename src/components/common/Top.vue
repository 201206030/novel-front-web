 <template>
  <div class="topMain">
    <div class="box_center cf">
      <router-link :to="{ name: 'home' }" class="logo fl"><img :src="logo" alt="小说精品屋" /></router-link>
      <div class="searchBar fl">
        <div class="search cf">
          <input
            v-model="keyword"
            type="text"
            placeholder="书名、作者、关键字"
            class="s_int"
            v-on:keyup.enter="searchByK"
          />
          <label class="search_btn" id="btnSearch" @click="searchByK()"
            ><i class="icon"></i
          ></label>
        </div>
      </div>
      <!--
        <div class="bookShelf fr" id="headerUserInfo">
          <a class="sj_link" href="/user/favorites.html">我的书架</a>
          <span class="user_link"
            ><i class="line mr20">|</i
            ><a href="/user/login.html" class="mr15">登录</a
            ><a href="/user/register.html">注册</a></span
          >
        </div>
        -->
    </div>
  </div>
</template>

<script>
import logo from "@/assets/images/logo.png";
import { reactive, toRefs, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
export default {
  name: "Top",
  setup(props, context) {
    const state = reactive({
      keyword:''
    })
    const route = useRoute();
    const router = useRouter();
    state.keyword = route.query.key;
    const searchByK = () => {
      router.push({ path: '/bookClass',query:{'key':state.keyword}});
      context.emit('eventSerch',state.keyword);
    }
    return {
      ...toRefs(state),
      logo,
      searchByK
    };
  },
};
</script>