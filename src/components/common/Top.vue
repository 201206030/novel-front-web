 <template>

    <div class="topMain">
      <div class="box_center cf">
        <a href="/" class="logo fl"><img :src="logo" alt="小说精品屋" /></a>
        <div class="searchBar fl">
          <div class="search cf">
            <input
              type="text"
              placeholder="书名、作者、关键字"
              class="s_int"
              name="searchKey"
              id="searchKey"
            />
            <label class="search_btn" id="btnSearch" onclick="searchByK()"
              ><i class="icon"></i
            ></label>
          </div>
        </div>
        <div class="bookShelf fr" id="headerUserInfo">
          <a class="sj_link" href="/user/favorites.html">我的书架</a>
          <span class="user_link"
            ><i class="line mr20">|</i
            ><a href="/user/login.html" class="mr15">登录</a
            ><a href="/user/register.html">注册</a></span
          >
        </div>
      </div>
    </div>
 
  
</template>

<script>
import logo from "@/assets/images/logo.png";
export default {
  name: "Top",
  setup() {
    return {
      logo
    };
  },
};
</script>