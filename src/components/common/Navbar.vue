 <template>
  <div class="mainNav" id="mainNav">
    <div class="box_center cf">
      <ul class="nav" id="navModule">
        <li><router-link :to="{ name: 'home' }">首页</router-link></li>
        <li>
          <router-link :to="{ name: 'bookclass' }"> 全部作品 </router-link>
        </li>
        <li><router-link :to="{ name: 'bookRank' }">排行榜</router-link></li>
        <!--<li class=""><a href="/pay/index.html">充值</a></li>-->
        <li><a @click="goAuthor" href="javascript:void(0)">作家专区</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getToken} from "@/utils/auth";
import {getAuthorStatus} from "@/api/author"
export default {
  name: "Navbar",
  setup() {
    const route = useRoute();
    const router = useRouter();
    const goAuthor = async () => {
      if (!getToken()) {
        router.push({
          name: "login",
        });
        return;
      }

      const {data} = await getAuthorStatus();
      if(data === null){
          router.push({
          name: "authorRegister",
        });
        return;
      }

      let routeUrl = router.resolve({
        name: "authorBookList",
      });
      window.open(routeUrl.href, "_blank");
    };
    return {
      goAuthor,
    };
  },
};
</script>