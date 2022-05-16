 <template>
  <div class="mainNav" id="mainNav">
    <div class="box_center cf">
      <ul class="nav" id="navModule">
        <li ><a href="/">首页</a></li>
        <li> <router-link :to="{ name: 'bookClass' }">
        全部作品
      </router-link></li>
        <li><a href="/book/book_ranking.html">排行榜</a></li>
        <!--<li class=""><a href="/pay/index.html">充值</a></li>
        <li><a href="/author/index.html" target="_blank">作家专区</a></li>-->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>