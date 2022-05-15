 <template>
  <div class="header">
   
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
    <div class="mainNav" id="mainNav">
      <div class="box_center cf">
        <ul class="nav" id="navModule">
          <li class="on"><a href="/">首页</a></li>
          <li><a href="/book/bookclass.html">全部作品</a></li>
          <li><a href="/book/book_ranking.html">排行榜</a></li>
          <li class=""><a href="/pay/index.html">充值</a></li>
          <li><a href="/author/index.html" target="_blank">作家专区</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "@/assets/images/logo.png";
export default {
  name: "Header",
  setup() {
    return {
      logo
    };
  },
};
</script>