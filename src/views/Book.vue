<template>
  <Header />
  <div class="main box_center cf mb50">
    <div class="nav_sub">
      <a href="/">小说精品屋</a>&gt;<a href="/book/bookclass.html?c=7">{{
        book.categoryName
      }}</a>&gt; <span>{{ book.bookName }}</span>
    </div>
    <div class="channelWrap channelBookInfo cf">
      <div class="bookCover cf">
        <a class="book_cover">
       <img
            class="cover"
            :src="`${imgBaseUrl}` + `${book.picUrl}`"
                onerror="this.src='https://cdn.jsdelivr.net/gh/201206030/CDN/images/default.gif';this.onerror=null"
                :alt="book.bookName"
        /></a>
        <div class="book_info">
          <div class="tit">
            <h1>{{book.bookName}}</h1>
            <!--<i class="vip_b">VIP</i>--><a class="author">{{book.authorName}}</a>
          </div>
          <ul class="list">
            <li>
              <span class="item">类别：<em>{{book.categoryName}}</em></span>
              <span class="item">状态：<em>{{book.bookStatus == 0 ? '连载中' : '已完结'}}</em></span>
              <span class="item">总点击：<em id="cTotal">{{book.visitCount}}</em></span>
              <span class="item">总字数：<em>{{book.wordCount}}</em></span>
            </li>
          </ul>
          <div class="intro_txt">
            <p v-html="book.bookDesc">
              
            </p>
            <a class="icon_hide" href="javascript:void(0)" onclick=""
              ><i></i>收起</a
            >
            <a class="icon_show" href="javascript:void(0)" onclick=""
              ><i></i>展开</a
            >
          </div>
          <div class="btns" id="optBtn">
            
            <a href="javascript:void(0)" @click="bookContent(book.id,book.firstChapterId)"
              
              class="btn_ora"
              >点击阅读</a
            >
            <span id="cFavs"
              ><a
                href="javascript:void(0);"
                class="btn_ora_white btn_addsj"
                onclick="javascript:BookDetail.AddFavorites(37,0,0);"
                >加入书架</a
              >
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="channelBookContent cf">
      <!--left start-->
      <div class="wrap_left fl">
        <div class="wrap_bg">
          <!--章节目录 start-->
          <div class="pad20_nobt">
            <div class="bookChapter">
              <div class="book_tit">
                <div class="fl">
                  <h3>最新章节</h3>
                  <span id="bookIndexCount">(430章)</span>
                </div>
                <a class="fr" href="/book/indexList-1431636283466297344.html"
                  >全部目录</a
                >
              </div>
              <ul class="list cf">
                <li>
                  <span class="fl font16">
                    <a href="/book/1431636283466297344/1460619921151021056.html"
                      >章一百三十四 【一更】</a
                    ></span
                  >
                  <span class="black9 fr">更新时间：21/11/16 00:00:00</span>
                </li>
                <li class="zj_yl" id="lastBookContent">
                  <!--go-->
                  　　只见一只拥有四条尾巴的火狐，正在不远处龇牙...
                </li>
                <!--此处是该章节预览，截取最前面的42个字-->
              </ul>
            </div>
          </div>
          <!--章节目录 end-->

          <!--作品评论区 start-->
          <div class="pad20">
            <div class="bookComment">
              <div class="book_tit">
                <div class="fl">
                  <h3>作品评论区</h3>
                  <span id="bookCommentTotal">(0条)</span>
                </div>
                <a class="fr" href="#txtComment">发表评论</a>
              </div>
              <div class="no_comment" id="noCommentPanel">
                <img :src="no_comment" alt="" />
                <span class="block">暂无评论</span>
              </div>
              <div
                class="commentBar"
                id="commentPanel"
                style="display: none"
              ></div>

              <!--无评论时此处隐藏-->
              <div class="more_bar" id="moreCommentPanel" style="display: none">
                <a href="/book/comment-1431636283466297344.html"
                  >查看全部评论&gt;</a
                >
              </div>

              <div class="reply_bar" id="reply_bar">
                <div class="tit">
                  <span class="fl font16">发表评论</span>
                  <!--未登录状态下不可发表评论，显示以下链接-->
                  <span class="fr black9" style="display: none"
                    >请先 <a class="orange" href="/user/login.html">登录</a
                    ><em class="ml10 mr10">|</em
                    ><a class="orange" href="/user/register.html">注册</a></span
                  >
                </div>
                <textarea
                  name="txtComment"
                  rows="2"
                  cols="20"
                  id="txtComment"
                  class="replay_text"
                  placeholder="我来说两句..."
                ></textarea>
                <div class="reply_btn">
                  <span class="fl black9"
                    ><em class="ml5" id="emCommentNum">0/1000</em> 字</span
                  >
                  <span class="fr"
                    ><a
                      class="btn_ora"
                      href="javascript:void(0);"
                      onclick="javascript:BookDetail.SaveComment(37,0,$('#txtComment').val());"
                      >发表</a
                    ></span
                  >
                </div>
              </div>
            </div>
          </div>
          <!--作品评论区 end-->
        </div>
      </div>
      <!--left end-->

      <!--right start-->
      <div class="wrap_right fr">
        <!--作者专栏s-->
        <div class="wrap_inner author_info mb20">
          <div class="author_head cf">
            <a href="javascript:void(0);" class="head"
              ><img :src="author_head" alt="作者头像" id="authorLogoImg"
            /></a>
            <div class="msg">
              <span class="icon_qyzz">签约作家</span>
              <h4>
                <a href="javascript:searchByK('冷漠的天蝎')">冷漠的天蝎</a>
              </h4>
            </div>
          </div>
          <div class="author_intro cf">
            <h4>作者有话说</h4>
            <div class="intro_txt" id="authorNote">
              亲亲们，你们的支持是我最大的动力！求点击、求推荐、求书评哦！
            </div>
          </div>
        </div>

        <div id="RelateBookOther" class="wrap_inner wrap_right_cont mb20">
          <div class="title cf">
            <h3 class="on">同类推荐</h3>
          </div>
          <div class="tj_bar">
            <ul id="recBookList">
              <li>
                <div class="book_intro">
                  <div class="cover">
                    <a href="/book/1338066517509591040.html"
                      ><img
                        src="/localPic/2020/12/13/04f7e86f8a964705b9d0149c5aaf773f.jpg"
                        alt="庆荣华"
                    /></a>
                  </div>
                  <div class="dec">
                    <a class="book_name" href="/book/1338066517509591040.html"
                      >庆荣华</a
                    >
                    <a class="txt" href="/book/1338066517509591040.html"
                      >　　睁开眼后，和姐姐互换了身体的曾华心里只有两件事，报仇和报恩，可报着报着，她却渐渐迷失了自己。</a
                    >
                  </div>
                </div>
              </li>
              <li>
                <div class="book_intro">
                  <div class="cover">
                    <a href="/book/1337999139673264128.html"
                      ><img
                        src="/localPic/2020/12/13/430277d60be6492c9580cbcbfa8332c7.jpg"
                        alt="戏精娘子总想毒死我"
                    /></a>
                  </div>
                  <div class="dec">
                    <a class="book_name" href="/book/1337999139673264128.html"
                      >戏精娘子总想毒死我</a
                    >
                    <a class="txt" href="/book/1337999139673264128.html"
                      >　　上辈子抢个压寨夫君，助他得天下坐龙庭，本想白头到老，举案齐眉，渣男却朝她举起了刀……再世为人，夏文锦防火防盗防美男，誓要活出个别样人生。夏家老爹愁白了头，女儿戏精、贪财、嘴毒、无赖、不要脸……整个南夏无人能及。这以后怎么嫁得出去？后来夏文锦拐走了南夏最俊的皇孙，每天在京城大街招摇过市。南夏众臣见识了她的粗鲁不要脸，在被怼得怀疑人生后，一致觉得她玷污了他们殿下这朵高岭之花，每日奏请废黜。直到，敌国来袭，太子亲征，太子妃跟去了，一出口怼退百万雄师……</a
                    >
                  </div>
                </div>
              </li>
              <li>
                <div class="book_intro">
                  <div class="cover">
                    <a href="/book/1357673757073805312.html"
                      ><img src="/images/default.gif" alt="锦衣春"
                    /></a>
                  </div>
                  <div class="dec">
                    <a class="book_name" href="/book/1357673757073805312.html"
                      >锦衣春</a
                    >
                    <a class="txt" href="/book/1357673757073805312.html"
                      >　　韩绮只不过是不想卫武再入岐途，一心想导他向善，凭他的聪明不入奸党，也能做个富甲一方大富豪，只一不小心用力过猛，把自己搭进去不说，还让夫君与奸党成了死敌！这下子可如何是好？让夫君抱条大粗腿如何？</a
                    >
                  </div>
                </div>
              </li>
              <li>
                <div class="book_intro">
                  <div class="cover">
                    <a href="/book/1357666748404404224.html"
                      ><img src="/images/default.gif" alt="太子有点冷"
                    /></a>
                  </div>
                  <div class="dec">
                    <a class="book_name" href="/book/1357666748404404224.html"
                      >太子有点冷</a
                    >
                    <a class="txt" href="/book/1357666748404404224.html"
                      >　　一个在宗门里修炼得高深武功、习得卓绝剑法的人人称道大弟子被师妹抛弃，他回家当太子。才上位不久，各种刀光剑影明枪暗箭纷沓而来，都怕他太闲似的，恨不得把他扎成只刺猬，然后将人拖下宝座。然而他不动声色解决掉一干人等。这简直比坐上的皇帝还要威风。所以：被师妹抛弃怎么办？回家当太子！然后呢？她来给你当太监！之后呢，宠她上天！</a
                    >
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--right end-->
    </div>
  </div>

  <Footer />
</template>

<script>
import "@/assets/styles/book.css";
import { reactive, toRefs, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getBookById } from "@/api/book";
import { ElMessage, ElLoading } from "element-plus";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import author_head from "@/assets/images/author_head.png";
import no_comment from "@/assets/images/no_comment.png";
export default {
  name: "book",
  components: {
    Header,
    Footer,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();

    const state = reactive({
      book: {},
      imgBaseUrl: process.env.VUE_APP_BASE_IMG_URL,
    });
    const bookId = route.params.id;
    onMounted(async () => {
      const { data } = await getBookById(bookId)
      state.book = data
    });

    const bookContent = (bookId,chapterId) => {
      router.push({ path: `/book/${bookId}/${chapterId}` });
    };

    return {
      ...toRefs(state),
      author_head,
      no_comment,
      bookContent
    };
  },
  mounted() {
    $(".icon_show").click(function () {
      $(this).hide();
      $(".icon_hide").show();
      $(".intro_txt").innerHeight("auto");
    });
    $(".icon_hide").click(function () {
      $(this).hide();
      $(".icon_show").show();
      $(".intro_txt").innerHeight("");
    });

    $("#AuthorOtherNovel li").unbind("mouseover");

    $("#txtComment").on("input propertychange", function () {
      var count = $(this).val().length;
      $("#emCommentNum").html(count + "/1000");
      if (count > 1000) {
        $("#txtComment").val($("#txtComment").val().substring(0, 1000));
      }
    });
  },
};
</script>
