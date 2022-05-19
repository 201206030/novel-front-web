 <template>
  <div class="mainNav" id="mainNav">
    <div class="box_center cf">
      <ul class="nav" id="navModule">
        <li ><router-link :to="{ name: 'home' }">首页</router-link></li>
        <li> <router-link :to="{ name: 'bookclass' }">
        全部作品
      </router-link></li>
        <li><router-link :to="{ name: 'bookRank' }">排行榜</router-link></li>
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