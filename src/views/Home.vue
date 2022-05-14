<template>
  <Header />
  <div class="main box_center cf">
    <div class="channelWrap channelBanner cf">
      <div class="leftBox">
        <div class="sliderContent">
          <dl class="scBigImg" id="carouseBig">
            <dd
              v-for="(item, index) in sliderContent"
              :key="index"
              :class="{ on: index == 0 }"
            >
              <router-link :to="{ name: 'book', query: { id: item.bookId } }">
                <img
                  :src="`${imgBaseUrl}` + `${item.picUrl}`"
                  :alt="item.bookName"
                  onerror="this.src='https://cdn.jsdelivr.net/gh/201206030/CDN/images/default.gif';this.onerror=null"
                />
              </router-link>
            </dd>
          </dl>
          <div class="scSmallImg" id="carouseSmall">
            <ul>
              <li
                v-for="(item, index) in sliderContent"
                :key="index"
                :class="{ on: index == 0 }"
              >
                <img
                  :src="`${imgBaseUrl}` + `${item.picUrl}`"
                  :alt="item.bookName"
                  onerror="this.src='https://cdn.jsdelivr.net/gh/201206030/CDN/images/default.gif';this.onerror=null"
                />
              </li>
            </ul>
          </div>
        </div>
        <div class="hot_articles">
          <dl class="hot_recommend" id="topBooks1">
            <dt>
              <a href="/book/1334317855886385152.html" v-if="topBooks1[0]">{{
                topBooks1[0].bookName
              }}</a>
            </dt>
            <dd>
              <a href="/book/1334335470709080064.html" v-if="topBooks1[1]">{{
                topBooks1[1].bookName
              }}</a
              ><a href="/book/1334318497132552192.html" v-if="topBooks1[2]">{{
                topBooks1[2].bookName
              }}</a>
            </dd>
            <dd>
              <a href="/book/1334317902627708928.html" v-if="topBooks1[3]">{{
                topBooks1[3].bookName
              }}</a
              ><a href="/book/1334321880899887104.html" v-if="topBooks1[4]">{{
                topBooks1[4].bookName
              }}</a>
            </dd>
          </dl>
          <dl class="hot_recommend" id="topBooks2">
            <dt>
              <a href="/book/1334318654997766144.html" v-if="topBooks1[5]">{{
                topBooks1[5].bookName
              }}</a>
            </dt>
            <dd>
              <a href="/book/1334334734843609088.html" v-if="topBooks1[6]">{{
                topBooks1[6].bookName
              }}</a
              ><a href="/book/1334317856465199104.html" v-if="topBooks1[7]">{{
                topBooks1[7].bookName
              }}</a>
            </dd>
            <dd>
              <a href="/book/1334317855869607936.html" v-if="topBooks1[8]">{{
                topBooks1[8].bookName
              }}</a
              ><a href="/book/1334335471568912384.html" v-if="topBooks1[9]">{{
                topBooks1[9].bookName
              }}</a>
            </dd>
          </dl>

          <LatestNews/>
        </div>
      </div>
      <div class="rightBox">
        <div class="title cf" id="weekcommend">
          <h3>本周强推</h3>
        </div>
        <div class="rightList">
          <ul id="currentWeek">
            <li
              v-for="(item, index) in weekcommend"
              :key="index"
              :class="['num' + (Number(`${index}`) + 1), { on: index == 0 }]"
            >
              <div class="book_name">
                <i>{{ index + 1 }}</i
                ><a class="name" href="/book/1334317855974465536.html">{{
                  item.bookName
                }}</a>
              </div>
              <div class="book_intro">
                <div class="cover">
                  <a href="/book/1334317855974465536.html"
                    ><img
                      :src="`${imgBaseUrl}` + `${item.picUrl}`"
                      :alt="item.bookName"
                      onerror="this.src='https://cdn.jsdelivr.net/gh/201206030/CDN/images/default.gif';this.onerror=null"
                  /></a>
                </div>
                <a class="txt" href="/book/1334317855974465536.html">{{
                  item.bookDesc
                }}</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="channelWrap channelPic cf">
      <div class="leftBox">
        <div class="title">
          <h2 class="on">热门推荐</h2>
        </div>
        <div class="picRecommend cf" id="hotRecBooks">
          <div
            class="itemsList"
            v-for="(item, index) in hotRecommend"
            :key="index"
          >
            <a class="items_img" href="/book/1338432467551432705.html">
              <img
                :src="`${imgBaseUrl}` + `${item.picUrl}`"
                onerror="this.src='https://cdn.jsdelivr.net/gh/201206030/CDN/images/default.gif';this.onerror=null"
                :alt="item.bookName"
              />
            </a>
            <div class="items_txt">
              <h4>
                <a href="/book/1338432467551432705.html">{{ item.bookName }}</a>
              </h4>
              <p class="author">
                <a href="javascript:void(0)">作者：{{ item.authorName }}</a>
              </p>
              <p class="intro">
                <a href="/book/1338432467551432705.html">{{ item.bookDesc }}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="bookrank1_ShowBookRank">
        <div class="rightBox">
          <div class="title cf">
            <h3 class="on">点击榜单</h3>
          </div>
          <div class="rightList">
            <ul id="clickRankBooks">
              <li class="on num1">
                <div class="book_name">
                  <i>1</i
                  ><a class="name" href="/book/1338077136300331008.html"
                    >美女总裁的神级侍卫</a
                  >
                </div>
                <div class="book_intro">
                  <div class="cover">
                    <a href="book/1338077136300331008.html"
                      ><img
                        src="/localPic/2020/12/13/3c93f909546441f0ae3295a4acc0eab5.jpg"
                        alt="美女总裁的神级侍卫"
                    /></a>
                  </div>
                  <a class="txt" href="/book/1338077136300331008.html"
                    >雇佣兵王陈扬回归都市，只为暗中保护战友的女神妹妹。从此上班调戏美女白领，下班偷看隔壁美少妇洗澡，逍遥自在……然而，是龙终要翱翔于天，且看一代兵王如何用铁拳与智慧打造下铁血帝国。</a
                  >
                </div>
              </li>
              <li class="num2">
                <div class="book_name">
                  <i>2</i
                  ><a class="name" href="/book/1431613998042820608.html"
                    >唐悠悠季枭寒</a
                  >
                </div>
                <div class="book_intro">
                  <div class="cover">
                    <a href="book/1431613998042820608.html"></a>
                  </div>
                  <a class="txt" href="/book/1431613998042820608.html"
                    >&nbsp;&nbsp;&nbsp;&nbsp;唐悠悠季枭寒小说全集包括：《总裁爹地宠上天》、《月光如水照心扉》、《总裁独宠亲亲我的小宝贝》、《名门蜜恋总裁不好惹》、《总裁追妻爹地你好菜耶》、《摇曳花瓣爱落泪》等，是由贝小爱最新创作的言情小说。到了庄园看到灰蓝色建筑群的唐悠悠甚是惊讶，她从未想过那个男人原来这样富有，季家别墅内，季枭寒向两个小家伙介绍自己爸爸的身份，可是没想到他们竟然要他拿出证据，季枭寒哭笑不得<br
                  /></a>
                </div>
              </li>
              <li class="num3">
                <div class="book_name">
                  <i>3</i
                  ><a class="name" href="/book/1334331577161842688.html"
                    >大奉打更人</a
                  >
                </div>
                <div class="book_intro">
                  <div class="cover">
                    <a href="book/1334331577161842688.html"></a>
                  </div>
                  <a class="txt" href="/book/1334331577161842688.html"
                    >&nbsp;&nbsp;&nbsp;&nbsp;这个世界，有儒；有道；有佛；有妖；有术士。<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;警校毕业的许七安幽幽醒来，发现自己身处牢狱之中，三日后流放边陲.....<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;他起初的目的只是自保，顺便在这个没有人权的社会里当个富家翁悠闲度日。<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;......<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;多年后，许七安回首前尘，身后是早已逝去的敌人和朋友，以及累累白骨。<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;滚滚长江东逝水，浪花淘尽英雄，是非成败转头空。<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;青山依旧在，几度夕阳红。<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;PS：本书不悲剧！</a
                  >
                </div>
              </li>
              <li class="">
                <div class="book_name">
                  <i>4</i
                  ><a class="name" href="/book/1334332598932045824.html"
                    >白雅顾凌擎</a
                  >
                </div>
                <div class="book_intro">
                  <div class="cover">
                    <a href="book/1334332598932045824.html"></a>
                  </div>
                  <a class="txt" href="/book/1334332598932045824.html"></a>
                </div>
              </li>
              <li class="">
                <div class="book_name">
                  <i>5</i
                  ><a class="name" href="/book/1334317855949299712.html"
                    >网游野蛮与文明</a
                  >
                </div>
                <div class="book_intro">
                  <div class="cover">
                    <a href="book/1334317855949299712.html"></a>
                  </div>
                  <a class="txt" href="/book/1334317855949299712.html"
                    >从茹毛饮血到飞入太空，人类的科技发展可以说是日新月异，科技不仅改变了人类的现实生活，同样也可以让人类返回到茹毛饮血的原始时代。虚拟游戏野蛮与文明的诞生，让玩家们重新回到了野蛮、落后的远古时代。在游戏里，玩家们纷纷化身为原始部落的首领，带领原始人类踏上了新的文明之路。人类、兽人、精灵、矮人等不同的文明纷纷登场，文明与文明的碰撞，不同种族的融合给这场盛宴带来了未知的变数。书友群：245070977PS：在此声明，本故事纯属虚构，与特定人物、机关、团体、案件无关，如有雷同，纯属巧合，请勿对号入座。</a
                  >
                </div>
              </li>
              <li class="">
                <div class="book_name">
                  <i>6</i
                  ><a class="name" href="/book/1338432467551432705.html"
                    >魔女之旅</a
                  >
                </div>
                <div class="book_intro">
                  <div class="cover">
                    <a href="book/1338432467551432705.html"></a>
                  </div>
                  <a class="txt" href="/book/1338432467551432705.html"
                    >「请别在意。我是旅人，得继续旅行才行。」<br />某个地方有个正在旅行的魔女，她的名字是伊蕾娜。<br />身为旅人，在很长很长的旅途中，她与形形色色的国家与人们邂逅。<br />只允许魔法师入境的国家、最喜欢肌肉的壮汉、在死亡深渊等待恋人归来的青年、独自留守国家早已灭亡的公主，最后，还有她身为魔女的至今为止与从今以后。<br />和莫名其妙、滑稽可笑的人们相遇，接触某人美丽的日常生活，魔女日复一日编制出相逢与离别的故事。</a
                  >
                </div>
              </li>
              <li class="">
                <div class="book_name">
                  <i>7</i
                  ><a class="name" href="/book/1431620640880832512.html"
                    >我能看到准确率</a
                  >
                </div>
                <div class="book_intro">
                  <div class="cover">
                    <a href="book/1431620640880832512.html"></a>
                  </div>
                  <a class="txt" href="/book/1431620640880832512.html"
                    >&nbsp;&nbsp;&nbsp;&nbsp;有一天，陈靖忽然发现自己能猜到彩票号码！可以猜到股票涨跌！可以猜到漂亮小姐姐有没有男朋友……</a
                  >
                </div>
              </li>
              <li class="">
                <div class="book_name">
                  <i>8</i
                  ><a class="name" href="/book/1427172060153585664.html"
                    >打造完美女神从吃鸡开始</a
                  >
                </div>
                <div class="book_intro">
                  <div class="cover">
                    <a href="book/1427172060153585664.html"></a>
                  </div>
                  <a class="txt" href="/book/1427172060153585664.html"
                    >&nbsp;&nbsp;&nbsp;&nbsp;不戴帽子时，他叫沈柯。戴上帽子时，她变身为女人……不，是女神，无所不能的完美女神。<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;*************************************************************书友讨论群：193604165</a
                  >
                </div>
              </li>
              <li class="">
                <div class="book_name">
                  <i>9</i
                  ><a class="name" href="/book/1431612822069030912.html"
                    >洪荒之永恒天帝</a
                  >
                </div>
                <div class="book_intro">
                  <div class="cover">
                    <a href="book/1431612822069030912.html"></a>
                  </div>
                  <a class="txt" href="/book/1431612822069030912.html"
                    >&nbsp;&nbsp;&nbsp;&nbsp;盘古大神开天辟地，鸿钧道祖布道诸天，六圣君临，群英荟萃，诸天万界，神性不朽，降临人世，证道永恒天帝！</a
                  >
                </div>
              </li>
              <li class="">
                <div class="book_name">
                  <i>10</i
                  ><a class="name" href="/book/1431614030368321536.html"
                    >万古第一神</a
                  >
                </div>
                <div class="book_intro">
                  <div class="cover">
                    <a href="book/1431614030368321536.html"></a>
                  </div>
                  <a class="txt" href="/book/1431614030368321536.html"
                    >&nbsp;&nbsp;&nbsp;&nbsp;【年度火爆热血玄幻】<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;李天命做梦都要笑醒了。<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;他家的宠物，竟然都是传说中的太古混沌巨兽。<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;他的家鸡，是以太阳为食的‘永恒炼狱凤凰’。<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;他的黑猫，是以雷霆炼化万界的‘太初混沌雷魔’。<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;连他家的小强，都是拥有万亿不死分身的‘万界永生兽’……<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;从此，他驾驭十头太古混沌巨兽，化身万古第一混沌神灵，周游诸天万界，踏平无尽神域。万物生灵，诸天神魔，连爬带滚，哀呼颤抖！</a
                  >
                </div>
              </li>
            </ul>
            <div class="more">
              <a href="/book/book_ranking.html">查看更多&gt;</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="channelWrap channelPic cf">
      <div class="leftBox">
        <div class="title">
          <h2>精品推荐</h2>
        </div>

        <div class="picRecommend cf" id="classicBooks">
          <div
            class="itemsList"
            v-for="(item, index) in goodRecommend"
            :key="index"
          >
            <a class="items_img" href="/book/1334327477657501696.html">
              <img
                :src="`${imgBaseUrl}` + `${item.picUrl}`"
                onerror="this.src='https://cdn.jsdelivr.net/gh/201206030/CDN/images/default.gif';this.onerror=null"
              />
            </a>
            <div class="items_txt">
              <h4>
                <a href="/book/1334327477657501696.html">{{ item.bookName }}</a>
              </h4>
              <p class="author">
                <a href="javascript:void(0)">作者：{{ item.authorName }}</a>
              </p>
              <p class="intro">
                <a href="/book/1334327477657501696.html">{{ item.bookDesc }}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="bookrank2_ShowBookRank">
        <div class="rightBox">
          <div class="title cf">
            <h3 class="on">新书榜单</h3>
          </div>
          <div class="rightList">
            <ul id="newRankBooks">
              <li class="on num1">
                <div class="book_name">
                  <i>1</i
                  ><a class="name" href="/book/1431636515973345291.html"
                    >梦还是人生</a
                  >
                </div>
                <div class="book_intro">
                  <div class="cover">
                    <a href="book/1431636515973345291.html"
                      ><img src="/images/default.gif" alt="梦还是人生"
                    /></a>
                  </div>
                  <a class="txt" href="/book/1431636515973345291.html"
                    >武朝末年，岁月峥嵘，天下纷乱，金辽相抗，局势动荡，百年屈辱，终于望见结束的第一缕曙光，天祚帝、完颜阿骨打、吴乞买，成吉思汗铁木真、札木合、赤老温、木华黎、博尔忽、博尔术、秦桧、岳飞、李纲、种师道、唐恪、吴敏、耿南仲、张邦昌，忠臣与奸臣的较量，英雄与枭雄的博弈，胡虏南下，百万铁骑叩雁门，江山沦陷，生灵涂炭，一个国家与民族百年的屈辱与抗争，先行者的哭泣、呐喊与悲怆……<br />而在这之前一点点，江宁城中，暗流涌动，一个商贾家毫不起眼的小小赘婿，正在很没责任感地过着他那只想吃东西、看表演的悠闲人生……</a
                  >
                </div>
              </li>
              <li class="num2">
                <div class="book_name">
                  <i>2</i
                  ><a class="name" href="/book/1431636445404180480.html"
                    >异种骑士团</a
                  >
                </div>
                <div class="book_intro">
                  <div class="cover">
                    <a href="book/1431636445404180480.html"></a>
                  </div>
                  <a class="txt" href="/book/1431636445404180480.html"
                    >&gt;
                    生命工程专业的副教授，穿越至中世纪欧洲的异世界，利用现代生物化学技术，发现人类历史上早已灭绝的病毒、细菌、寄生虫，居然是异能力的来源。他挽救并整合了被俗世称为“异种”的人群，建立起横扫千军的异种骑士团，在中世纪里掀起了一场革命的狂潮。架空世界、奇幻背景、称霸主线、剧情稍稍严肃、略微涉及生化知识。前面的章节有些沉闷，越往后越精彩。</a
                  >
                </div>
              </li>
              <li class="num3">
                <div class="book_name">
                  <i>3</i
                  ><a class="name" href="/book/1431636489977049088.html"
                    >穿越到灵气复苏三国的我无敌了</a
                  >
                </div>
                <div class="book_intro">
                  <div class="cover">
                    <a href="book/1431636489977049088.html"></a>
                  </div>
                  <a class="txt" href="/book/1431636489977049088.html"
                    >&gt;
                    穿越者吕布一直很奇怪，为什么人家穿越的吕布战斗力被猛削，我穿越的吕布就直接无敌了？</a
                  >
                </div>
              </li>
              <li class="">
                <div class="book_name">
                  <i>4</i
                  ><a class="name" href="/book/1431636404866232321.html"
                    >我能升级避难所</a
                  >
                </div>
                <div class="book_intro">
                  <div class="cover">
                    <a href="book/1431636404866232321.html"></a>
                  </div>
                  <a class="txt" href="/book/1431636404866232321.html"
                    >&gt;
                    直径十公里的陨石撞击地球撞击所掀起的尘埃遮蔽了天空，地球将进入长达上百年的漫漫长夜不见天日的地表因为缺少了阳光的照耀而陷入了零下几十度的极寒在这样的末日之下，只有一个自己挖的避难所，该如何渡过末日的危机，让自己活下来？</a
                  >
                </div>
              </li>
              <li class="">
                <div class="book_name">
                  <i>5</i
                  ><a class="name" href="/book/1431636515973345280.html"
                    >最强魔锋</a
                  >
                </div>
                <div class="book_intro">
                  <div class="cover">
                    <a href="book/1431636515973345280.html"></a>
                  </div>
                  <a class="txt" href="/book/1431636515973345280.html"
                    >&gt;
                    他是世界足坛人人闻风丧胆的大魔王，他是红魔历史上最强前锋！</a
                  >
                </div>
              </li>
              <li class="">
                <div class="book_name">
                  <i>6</i
                  ><a class="name" href="/book/1431636413590384640.html"
                    >大国体育</a
                  >
                </div>
                <div class="book_intro">
                  <div class="cover">
                    <a href="book/1431636413590384640.html"></a>
                  </div>
                  <a class="txt" href="/book/1431636413590384640.html"
                    >&gt;
                    体育的本质就是和平年代的战争！但这是更加文明进步，合理且合法的战争。很多人否认这一点，但他们无法否认竞技体育蕴含着国与国竞争的特殊含义。</a
                  >
                </div>
              </li>
              <li class="">
                <div class="book_name">
                  <i>7</i
                  ><a class="name" href="/book/1431636308460154880.html"
                    >我在影视剧里抗敌爆装</a
                  >
                </div>
                <div class="book_intro">
                  <div class="cover">
                    <a href="book/1431636308460154880.html"></a>
                  </div>
                  <a class="txt" href="/book/1431636308460154880.html"
                    >&gt;
                    正在家里边吃零食，边看最新的抗日神剧的刘飞洋莫名其妙魂穿淞沪抗日战场，并获抽奖系统。击杀鬼子可以获得抽奖机会,还可以爆出各种武器装备。叮，恭喜宿主击杀鬼子士兵一名，爆出捷克式轻机枪一把。“叮~！恭喜宿主成功击杀鬼子兵一名，奖励金钱1000元，爆出1级军靴一双。”“叮~！恭喜宿主击杀鬼子兵一名，奖励金钱1000元，爆出勃朗宁手枪一把。”“叮~！恭喜宿主成功击杀倭国兵一名，奖励金钱1000元，爆出一箱牛肉罐头。”“……，爆出压缩饼干一箱。”“……，爆出急救包5包。”......</a
                  >
                </div>
              </li>
              <li class="">
                <div class="book_name">
                  <i>8</i
                  ><a class="name" href="/book/1431636284854611968.html"
                    >孤城重启</a
                  >
                </div>
                <div class="book_intro">
                  <div class="cover">
                    <a href="book/1431636284854611968.html"></a>
                  </div>
                  <a class="txt" href="/book/1431636284854611968.html"
                    >&gt;
                    不过是偷个懒中午小憩了一下，结果美梦没做上，反而被拉进了另一个世界，这个世界，他拥有了一座城……只是你告诉我，这玩意特么是城？！</a
                  >
                </div>
              </li>
              <li class="">
                <div class="book_name">
                  <i>9</i
                  ><a class="name" href="/book/1431636355373445120.html"
                    >我从战斗余波中提取属性</a
                  >
                </div>
                <div class="book_intro">
                  <div class="cover">
                    <a href="book/1431636355373445120.html"></a>
                  </div>
                  <a class="txt" href="/book/1431636355373445120.html"
                    >&gt;
                    二十一世纪好青年陈沐穿越到了仙侠世界，顺便带了个能从战斗余波中提取属性的小辅助。凡人村落里，村民打架。“肉体力量＋1”修仙门派内，弟子比斗。“火灵根＋1”“修为＋1”“火弹术＋1”……有小辅助的一丢丢帮助，再加上个人努力，陈沐原本想静静发育，争取在这修真界中安身立命，以求长生。然而，他没想到的是，他稳住了，修真界却突然乱了起来……</a
                  >
                </div>
              </li>
              <li class="">
                <div class="book_name">
                  <i>10</i
                  ><a class="name" href="/book/1431636331684016128.html"
                    >主神空间幸存者</a
                  >
                </div>
                <div class="book_intro">
                  <div class="cover">
                    <a href="book/1431636331684016128.html"></a>
                  </div>
                  <a class="txt" href="/book/1431636331684016128.html"
                    >&gt;
                    主神空间炸了。我成了幸存者。流落在诸天万界。带着所有的主神碎片。或许……以后的我也会成为主神？</a
                  >
                </div>
              </li>
            </ul>
            <div class="more">
              <a href="/book/book_ranking.html?type=1">查看更多&gt;</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="channelWrap channelTable cf">
      <div class="leftBox">
        <div class="title">
          <h2>最新更新</h2>
        </div>
        <div class="updateTable">
          <table cellpadding="0" cellspacing="0">
            <thead>
              <tr>
                <th class="style">类别</th>
                <th class="name">书名</th>
                <th class="chapter">最新章节</th>
                <th class="author">作者</th>
                <th class="time">更新时间</th>
              </tr>
            </thead>
            <tbody id="newRankBooks2">
              <tr>
                <td class="style">
                  <a href="book/bookclass.html?c=1">[玄幻奇幻]</a>
                </td>
                <td class="name">
                  <a href="/book/1334337530296893441.html">帝霸</a>
                </td>
                <td class="chapter">
                  <a href="/book/1334337530296893441.html">驱蚊器翁群</a>
                  <i class=""></i>
                </td>
                <td class="author">
                  <a href="javascript:void(0)">梦入神机</a>
                </td>
                <td class="time">03/02 14:52</td>
              </tr>
              <tr>
                <td class="style">
                  <a href="book/bookclass.html?c=1">[玄幻奇幻]</a>
                </td>
                <td class="name">
                  <a href="/book/1431636515973345291.html">梦还是人生</a>
                </td>
                <td class="chapter">
                  <a href="/book/1431636515973345291.html">第二章 诗与棋</a>
                  <i class=""></i>
                </td>
                <td class="author">
                  <a href="javascript:void(0)">梦入神机</a>
                </td>
                <td class="time">02/11 21:49</td>
              </tr>
              <tr>
                <td class="style">
                  <a href="book/bookclass.html?c=3">[都市言情]</a>
                </td>
                <td class="name">
                  <a href="/book/1427168511608823808.html"
                    >鉴宝从文物修复开始</a
                  >
                </td>
                <td class="chapter">
                  <a href="/book/1427168511608823808.html">第六百三十八章</a>
                  <i class=""></i>
                </td>
                <td class="author">
                  <a href="javascript:void(0)">听潮落子</a>
                </td>
                <td class="time">11/17 10:40</td>
              </tr>
              <tr>
                <td class="style">
                  <a href="book/bookclass.html?c=1">[玄幻奇幻]</a>
                </td>
                <td class="name">
                  <a href="/book/1431613421112111104.html">这个猎人有点猛</a>
                </td>
                <td class="chapter">
                  <a href="/book/1431613421112111104.html">第247章 洞中仙府</a>
                  <i class=""></i>
                </td>
                <td class="author">
                  <a href="javascript:void(0)">地磷水蟒</a>
                </td>
                <td class="time">11/17 10:29</td>
              </tr>
              <tr>
                <td class="style">
                  <a href="book/bookclass.html?c=1">[玄幻奇幻]</a>
                </td>
                <td class="name">
                  <a href="/book/1431614030368321536.html">万古第一神</a>
                </td>
                <td class="chapter">
                  <a href="/book/1431614030368321536.html"
                    >第2869章 果断出击！</a
                  >
                  <i class=""></i>
                </td>
                <td class="author"><a href="javascript:void(0)">风青阳</a></td>
                <td class="time">11/17 08:17</td>
              </tr>
              <tr>
                <td class="style">
                  <a href="book/bookclass.html?c=7">[女生频道]</a>
                </td>
                <td class="name">
                  <a href="/book/1427170642365587456.html"
                    >神医娘亲她是团宠大佬</a
                  >
                </td>
                <td class="chapter">
                  <a href="/book/1427170642365587456.html"
                    >第567章 彻底的决裂</a
                  >
                  <i class=""></i>
                </td>
                <td class="author"><a href="javascript:void(0)">MS芙子</a></td>
                <td class="time">11/17 01:24</td>
              </tr>
              <tr>
                <td class="style">
                  <a href="book/bookclass.html?c=5">[科幻灵异]</a>
                </td>
                <td class="name">
                  <a href="/book/1431613087719469056.html"
                    >钻石王牌之强棒驾到</a
                  >
                </td>
                <td class="chapter">
                  <a href="/book/1431613087719469056.html"
                    >第九十一章：波动球？</a
                  >
                  <i class=""></i>
                </td>
                <td class="author">
                  <a href="javascript:void(0)">飞熊骑士</a>
                </td>
                <td class="time">11/17 00:18</td>
              </tr>
              <tr>
                <td class="style">
                  <a href="book/bookclass.html?c=5">[科幻灵异]</a>
                </td>
                <td class="name">
                  <a href="/book/1431636283462103041.html">仙界归来的黑科技</a>
                </td>
                <td class="chapter">
                  <a href="/book/1431636283462103041.html">一九一 东方红一号</a>
                  <i class=""></i>
                </td>
                <td class="author"><a href="javascript:void(0)">缘若水</a></td>
                <td class="time">11/17 00:00</td>
              </tr>
              <tr>
                <td class="style">
                  <a href="book/bookclass.html?c=1">[玄幻奇幻]</a>
                </td>
                <td class="name">
                  <a href="/book/1427169069933600768.html"
                    >玄幻：开局系统自动疯狂升级</a
                  >
                </td>
                <td class="chapter">
                  <a href="/book/1427169069933600768.html"
                    >第四百九十四章 铁血卫么？一眼瞪死便是！</a
                  >
                  <i class=""></i>
                </td>
                <td class="author"><a href="javascript:void(0)">林1987</a></td>
                <td class="time">11/16 23:42</td>
              </tr>
              <tr>
                <td class="style">
                  <a href="book/bookclass.html?c=2">[武侠仙侠]</a>
                </td>
                <td class="name">
                  <a href="/book/1431612822069030912.html">洪荒之永恒天帝</a>
                </td>
                <td class="chapter">
                  <a href="/book/1431612822069030912.html"
                    >第1480章，禁忌对禁忌</a
                  >
                  <i class=""></i>
                </td>
                <td class="author">
                  <a href="javascript:void(0)">弥罗龙少</a>
                </td>
                <td class="time">11/16 20:25</td>
              </tr>
              <tr>
                <td class="style">
                  <a href="book/bookclass.html?c=1">[玄幻奇幻]</a>
                </td>
                <td class="name">
                  <a href="/book/1427170701358473216.html">植灵女王升级记</a>
                </td>
                <td class="chapter">
                  <a href="/book/1427170701358473216.html"
                    >第五百二十章 委托（二更）</a
                  >
                  <i class=""></i>
                </td>
                <td class="author"><a href="javascript:void(0)">彩虹鱼</a></td>
                <td class="time">11/16 15:14</td>
              </tr>
              <tr>
                <td class="style">
                  <a href="book/bookclass.html?c=3">[都市言情]</a>
                </td>
                <td class="name">
                  <a href="/book/1431612843455787008.html">漫维游记</a>
                </td>
                <td class="chapter">
                  <a href="/book/1431612843455787008.html"
                    >衍生&nbsp; 平行宇宙源起（漫维前传）</a
                  >
                  <i class=""></i>
                </td>
                <td class="author">
                  <a href="javascript:void(0)">大宗师高人一筹</a>
                </td>
                <td class="time">11/16 14:50</td>
              </tr>
              <tr>
                <td class="style">
                  <a href="book/bookclass.html?c=3">[都市言情]</a>
                </td>
                <td class="name">
                  <a href="/book/1431613351595716608.html"
                    >海岛开局签到女神姐姐</a
                  >
                </td>
                <td class="chapter">
                  <a href="/book/1431613351595716608.html"
                    >第五百三十三章 臭不要脸的棒槌</a
                  >
                  <i class=""></i>
                </td>
                <td class="author">
                  <a href="javascript:void(0)">会飞的归</a>
                </td>
                <td class="time">11/16 14:38</td>
              </tr>
              <tr>
                <td class="style">
                  <a href="book/bookclass.html?c=7">[女生频道]</a>
                </td>
                <td class="name">
                  <a href="/book/1431613026172252160.html"
                    >总裁爹地：妈咪她又美又飒</a
                  >
                </td>
                <td class="chapter">
                  <a href="/book/1431613026172252160.html"
                    >第一千二百七十三章 外面有动静</a
                  >
                  <i class=""></i>
                </td>
                <td class="author"><a href="javascript:void(0)">顾兮兮</a></td>
                <td class="time">11/16 13:30</td>
              </tr>
              <tr>
                <td class="style">
                  <a href="book/bookclass.html?c=1">[玄幻奇幻]</a>
                </td>
                <td class="name">
                  <a href="/book/1431636445404180480.html">异种骑士团</a>
                </td>
                <td class="chapter">
                  <a href="/book/1431636445404180480.html">完本感言</a>
                  <i class=""></i>
                </td>
                <td class="author"><a href="javascript:void(0)">夜尽长</a></td>
                <td class="time">11/16 00:00</td>
              </tr>
              <tr>
                <td class="style">
                  <a href="book/bookclass.html?c=5">[科幻灵异]</a>
                </td>
                <td class="name">
                  <a href="/book/1431636331684016128.html">主神空间幸存者</a>
                </td>
                <td class="chapter">
                  <a href="/book/1431636331684016128.html">第378章 顾念彤</a>
                  <i class=""></i>
                </td>
                <td class="author">
                  <a href="javascript:void(0)">五庄观大师兄</a>
                </td>
                <td class="time">11/16 00:00</td>
              </tr>
              <tr>
                <td class="style">
                  <a href="book/bookclass.html?c=2">[武侠仙侠]</a>
                </td>
                <td class="name">
                  <a href="/book/1431636314952937472.html"
                    >长生志异，开局菜市口被斩首</a
                  >
                </td>
                <td class="chapter">
                  <a href="/book/1431636314952937472.html"
                    >第两百八十章 突至第三劫，秘魔子得宝</a
                  >
                  <i class=""></i>
                </td>
                <td class="author">
                  <a href="javascript:void(0)">真愚老人</a>
                </td>
                <td class="time">11/16 00:00</td>
              </tr>
              <tr>
                <td class="style">
                  <a href="book/bookclass.html?c=4">[历史军事]</a>
                </td>
                <td class="name">
                  <a href="/book/1431636308460154880.html"
                    >我在影视剧里抗敌爆装</a
                  >
                </td>
                <td class="chapter">
                  <a href="/book/1431636308460154880.html"
                    >第八百九十九章 师长的催促 （第一章）</a
                  >
                  <i class=""></i>
                </td>
                <td class="author">
                  <a href="javascript:void(0)">盗侠冬雪</a>
                </td>
                <td class="time">11/16 00:00</td>
              </tr>
              <tr>
                <td class="style">
                  <a href="book/bookclass.html?c=4">[历史军事]</a>
                </td>
                <td class="name">
                  <a href="/book/1431636283625680896.html">大国将相</a>
                </td>
                <td class="chapter">
                  <a href="/book/1431636283625680896.html"
                    >第二百四十四章：汇合</a
                  >
                  <i class=""></i>
                </td>
                <td class="author">
                  <a href="javascript:void(0)">贱宗首席弟子</a>
                </td>
                <td class="time">11/16 00:00</td>
              </tr>
              <tr>
                <td class="style">
                  <a href="book/bookclass.html?c=7">[女生频道]</a>
                </td>
                <td class="name">
                  <a href="/book/1431636283466297344.html">我有五个大佬师兄</a>
                </td>
                <td class="chapter">
                  <a href="/book/1431636283466297344.html"
                    >章一百三十四 【一更】</a
                  >
                  <i class=""></i>
                </td>
                <td class="author">
                  <a href="javascript:void(0)">冷漠的天蝎</a>
                </td>
                <td class="time">11/16 00:00</td>
              </tr>
              <tr>
                <td class="style">
                  <a href="book/bookclass.html?c=2">[武侠仙侠]</a>
                </td>
                <td class="name">
                  <a href="/book/1431636283462103040.html"
                    >刚成皇子，就被诸子百家朝贺称帝</a
                  >
                </td>
                <td class="chapter">
                  <a href="/book/1431636283462103040.html"
                    >第二百一十六章 投靠人族了？</a
                  >
                  <i class=""></i>
                </td>
                <td class="author"><a href="javascript:void(0)">秋霜落</a></td>
                <td class="time">11/16 00:00</td>
              </tr>
              <tr>
                <td class="style">
                  <a href="book/bookclass.html?c=6">[网游竞技]</a>
                </td>
                <td class="name">
                  <a href="/book/1431613108816818176.html">血夜国度</a>
                </td>
                <td class="chapter">
                  <a href="/book/1431613108816818176.html"
                    >第三百九十八章:神魂契约</a
                  >
                  <i class=""></i>
                </td>
                <td class="author">
                  <a href="javascript:void(0)">秋寒冥月</a>
                </td>
                <td class="time">11/15 16:47</td>
              </tr>
              <tr>
                <td class="style">
                  <a href="book/bookclass.html?c=3">[都市言情]</a>
                </td>
                <td class="name">
                  <a href="/book/1427170650791944192.html">路人甲的穿书日常</a>
                </td>
                <td class="chapter">
                  <a href="/book/1427170650791944192.html">第383章骄傲和后盾</a>
                  <i class=""></i>
                </td>
                <td class="author">
                  <a href="javascript:void(0)">古月笔芯</a>
                </td>
                <td class="time">11/15 01:11</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div id="bookrank5_ShowBookRank">
        <div class="rightBox mb20">
          <div class="title cf">
            <h3 class="on">更新榜单</h3>
          </div>
          <div class="rightList">
            <ul id="updateRankBooks">
              <li class="on num1">
                <div class="book_name">
                  <i>1</i
                  ><a class="name" href="/book/1334337530296893441.html"
                    >帝霸</a
                  >
                </div>
                <div class="book_intro">
                  <div class="cover">
                    <a href="book/1334337530296893441.html"
                      ><img
                        src="/localPic/2020/12/12/457b82c58eb04a00a5f3cb82372697b9.jpg"
                        alt="帝霸"
                    /></a>
                  </div>
                  <a class="txt" href="/book/1334337530296893441.html"
                    >千万年前，李七夜栽下一株翠竹。<br /><br />八百万年前，李七夜养了一条鲤鱼。<br /><br />五百万年前，李七夜收养一个小女孩。<br /><br />…………………………<br /><br />今天，李七夜一觉醒来，翠竹修练成神灵，鲤鱼化作金龙，小女孩成为九界女帝。<br /><br />这是一个养成的故事，一个不死的人族小子养成了妖神、养成了仙兽、养成了女帝的故事</a
                  >
                </div>
              </li>
              <li class="num2">
                <div class="book_name">
                  <i>2</i
                  ><a class="name" href="/book/1431636515973345291.html"
                    >梦还是人生</a
                  >
                </div>
                <div class="book_intro">
                  <div class="cover">
                    <a href="book/1431636515973345291.html"></a>
                  </div>
                  <a class="txt" href="/book/1431636515973345291.html"
                    >武朝末年，岁月峥嵘，天下纷乱，金辽相抗，局势动荡，百年屈辱，终于望见结束的第一缕曙光，天祚帝、完颜阿骨打、吴乞买，成吉思汗铁木真、札木合、赤老温、木华黎、博尔忽、博尔术、秦桧、岳飞、李纲、种师道、唐恪、吴敏、耿南仲、张邦昌，忠臣与奸臣的较量，英雄与枭雄的博弈，胡虏南下，百万铁骑叩雁门，江山沦陷，生灵涂炭，一个国家与民族百年的屈辱与抗争，先行者的哭泣、呐喊与悲怆……<br />而在这之前一点点，江宁城中，暗流涌动，一个商贾家毫不起眼的小小赘婿，正在很没责任感地过着他那只想吃东西、看表演的悠闲人生……</a
                  >
                </div>
              </li>
              <li class="num3">
                <div class="book_name">
                  <i>3</i
                  ><a class="name" href="/book/1427168511608823808.html"
                    >鉴宝从文物修复开始</a
                  >
                </div>
                <div class="book_intro">
                  <div class="cover">
                    <a href="book/1427168511608823808.html"></a>
                  </div>
                  <a class="txt" href="/book/1427168511608823808.html"
                    >&nbsp;&nbsp;&nbsp;&nbsp;一场意外，让赵御觉醒了掌中神目。掌中神目，回溯过往，不论是任何古玩，在他的手中都能看出真假。<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;哪怕是已经碎裂的古玩，在他的手上也能恢复如初。赌石捡漏，文物修复……且看赵御一步步走上人生巅峰。<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;“美女你别来啊，我能修文物，修不了你啊！”</a
                  >
                </div>
              </li>
              <li class="">
                <div class="book_name">
                  <i>4</i
                  ><a class="name" href="/book/1431613421112111104.html"
                    >这个猎人有点猛</a
                  >
                </div>
                <div class="book_intro">
                  <div class="cover">
                    <a href="book/1431613421112111104.html"></a>
                  </div>
                  <a class="txt" href="/book/1431613421112111104.html"
                    >&nbsp;&nbsp;&nbsp;&nbsp;万年前，九洲通往上界的仙路被斩断，从此无人可以飞升。万年后，一个出自山村的少年猎人，意外获得了一卷可吞噬天地诸法的神秘道术。</a
                  >
                </div>
              </li>
              <li class="">
                <div class="book_name">
                  <i>5</i
                  ><a class="name" href="/book/1431614030368321536.html"
                    >万古第一神</a
                  >
                </div>
                <div class="book_intro">
                  <div class="cover">
                    <a href="book/1431614030368321536.html"></a>
                  </div>
                  <a class="txt" href="/book/1431614030368321536.html"
                    >&nbsp;&nbsp;&nbsp;&nbsp;【年度火爆热血玄幻】<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;李天命做梦都要笑醒了。<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;他家的宠物，竟然都是传说中的太古混沌巨兽。<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;他的家鸡，是以太阳为食的‘永恒炼狱凤凰’。<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;他的黑猫，是以雷霆炼化万界的‘太初混沌雷魔’。<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;连他家的小强，都是拥有万亿不死分身的‘万界永生兽’……<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;从此，他驾驭十头太古混沌巨兽，化身万古第一混沌神灵，周游诸天万界，踏平无尽神域。万物生灵，诸天神魔，连爬带滚，哀呼颤抖！</a
                  >
                </div>
              </li>
              <li class="">
                <div class="book_name">
                  <i>6</i
                  ><a class="name" href="/book/1427170642365587456.html"
                    >神医娘亲她是团宠大佬</a
                  >
                </div>
                <div class="book_intro">
                  <div class="cover">
                    <a href="book/1427170642365587456.html"></a>
                  </div>
                  <a class="txt" href="/book/1427170642365587456.html"
                    >&nbsp;&nbsp;&nbsp;&nbsp;九千岁独孤鹜因疾被迫娶退婚女凤白泠，满朝轰动。<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;皇子们纷纷前来“恭贺”：&nbsp;凤白泠虽貌丑无能又家道中落，可她不惧你克妻不举之名，还顺带让你当了便宜爹，&nbsp;可喜可贺。<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;独孤鹜想想无才无貌无德的某女，冷冷一句：一年之后，必休妻。<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;一年后，独孤鹜包下天下最大的酒楼，呼朋唤友，准备和离。<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;哪知酒楼老板直接免费三天，说是要欢庆离婚，&nbsp;正和各路豪强称兄道弟的第一美女打了个酒嗝：“你们以为我图他的身子，我是馋他的帝王气运。”<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;九千岁被休后，<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;第一月，满城疫病横行，医佛现世，竟是凤白泠。<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;第二月，&nbsp;全国饥荒遍地，首富赈灾，又是凤白泠。<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;第三月，九朝联军围城，万兽御敌，还是凤白泠。<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;第某个月，九千岁追妻踏遍九州八荒：祖宗，求入赘。<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;两小萌神齐声：父王，你得排号！</a
                  >
                </div>
              </li>
              <li class="">
                <div class="book_name">
                  <i>7</i
                  ><a class="name" href="/book/1431613087719469056.html"
                    >钻石王牌之强棒驾到</a
                  >
                </div>
                <div class="book_intro">
                  <div class="cover">
                    <a href="book/1431613087719469056.html"></a>
                  </div>
                  <a class="txt" href="/book/1431613087719469056.html"
                    >&nbsp;&nbsp;&nbsp;&nbsp;白色的小球，好像利箭，飞射而至。打击区上，男孩高高举起自己手中的球棒，迎着飞来的棒球，呼啸而出。<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;这是一个棒球男孩，逐梦甲子园的故事！这也是一个替补投手，在高中迎来新生的故事！<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;……</a
                  >
                </div>
              </li>
              <li class="">
                <div class="book_name">
                  <i>8</i
                  ><a class="name" href="/book/1431636283462103041.html"
                    >仙界归来的黑科技</a
                  >
                </div>
                <div class="book_intro">
                  <div class="cover">
                    <a href="book/1431636283462103041.html"></a>
                  </div>
                  <a class="txt" href="/book/1431636283462103041.html"
                    >&gt;
                    杨青万万没有想到，他竟然会穿越到了仙界，更没想到的是，他还有机会穿越回来。只不过回来以后才发现，这个世界对于修炼并不友好，完全是一个末法世界，那还能怎么办？打工是不能打工的，就只能依靠仙界的符文技术，开发一点黑科技过过日子的样子，所以他的目光就直接盯向了头顶的月亮，那里才是他梦想的开始！</a
                  >
                </div>
              </li>
              <li class="">
                <div class="book_name">
                  <i>9</i
                  ><a class="name" href="/book/1427169069933600768.html"
                    >玄幻：开局系统自动疯狂升级</a
                  >
                </div>
                <div class="book_intro">
                  <div class="cover">
                    <a href="book/1427169069933600768.html"></a>
                  </div>
                  <a class="txt" href="/book/1427169069933600768.html"
                    >&nbsp;&nbsp;&nbsp;&nbsp;穿越异界三年的林锋，成为了神剑宗宗主！<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;“叮！看到宿主作为一个堂堂炎黄子孙，穿越后一事无成，垃圾到没谱！”<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;系统愤怒了！<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;“叮！资源填补升级开始……”<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;“叮！宿主的宗门获得主峰逆天峰，一百零八侧峰！”<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;“叮！宿主的宗门获得气运金龙一条！获得神级功法！”<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;不知不觉中，神剑宗俨然已名动天下，登临巅峰。<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;林锋：唉，我真没努力啊，奈何系统太给力了……</a
                  >
                </div>
              </li>
              <li class="">
                <div class="book_name">
                  <i>10</i
                  ><a class="name" href="/book/1431612822069030912.html"
                    >洪荒之永恒天帝</a
                  >
                </div>
                <div class="book_intro">
                  <div class="cover">
                    <a href="book/1431612822069030912.html"></a>
                  </div>
                  <a class="txt" href="/book/1431612822069030912.html"
                    >&nbsp;&nbsp;&nbsp;&nbsp;盘古大神开天辟地，鸿钧道祖布道诸天，六圣君临，群英荟萃，诸天万界，神性不朽，降临人世，证道永恒天帝！</a
                  >
                </div>
              </li>
            </ul>
            <div class="more">
              <a href="/book/book_ranking.html?type=2">查看更多&gt;</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FriendLink/>

  <div class="footer">
    <div class="box_center cf">
      <div class="copyright">
        <ul>
          <li class="menu">
            <a href="/?to=mobile">手机站</a><i class="line">|</i
            ><a href="/">网站首页</a><i class="line">|</i
            ><a href="/about/default.html">关于我们</a><i class="line">|</i
            ><a href="/about/contact.html">联系我们</a><i class="line">|</i
            ><a href="/user/feedback.html">反馈留言</a><i class="line">|</i
            ><a href="/author/index.html">作家专区</a><i class="line">|</i
            ><a href="/mobile/fiction_house.apk">客户端</a>
          </li>
          <li>
            Copyright (C) xiongxyang.gitee.io All rights
            reserved&nbsp;&nbsp;小说精品屋版权所有
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import { listHomeBooks } from "@/api/home";
import { ElMessage, ElLoading } from "element-plus";
import Header from "@/components/Header";
import LatestNews from "@/components/LatestNews"
import FriendLink from "@/components/FriendLink"
export default {
  name: "home",
  components: {
    Header,
    LatestNews,
    FriendLink
  },
  setup() {
    const state = reactive({
      // 轮播图
      sliderContent: [],
      // 顶部栏
      topBooks1: [],
      //本周强推
      weekcommend: [],
      // 热门推荐
      hotRecommend: [],
      // 精品推荐
      goodRecommend: [],
      imgBaseUrl: process.env.VUE_APP_BASE_IMG_URL,
    });

    onMounted(async () => {
      const loadingInstance = ElLoading.service({
        target: "#topBooks2",
        text: "加载中。。。",
      });
      const { data } = await listHomeBooks();
      loadingInstance.close();

      await data.forEach((book) => {
        if (book.type == 0) {
          // 轮播图
          state.sliderContent[state.sliderContent.length] = book;
        }
        if (book.type == 1) {
          // 顶部栏
          state.topBooks1[state.topBooks1.length] = book;
        }
        if (book.type == 2) {
          //本周强推
          state.weekcommend[state.weekcommend.length] = book;
        }
        if (book.type == 3) {
          //热门推荐
          state.hotRecommend[state.hotRecommend.length] = book;
        }
        if (book.type == 4) {
          //精品推荐
          state.goodRecommend[state.goodRecommend.length] = book;
        }
      });

      var $div = $(".scBigImg dl"); //放置大图容器
      var $nav = $(".scSmallImg li"); //放置缩略图容器
      var num = -1;
      var open;

      function changeKv() {
        if (num >= $nav.length - 1) {
          num = 0;
        } else {
          num++;
        }
        $nav.eq(num).trigger("mouseenter");
        open = setTimeout(changeKv, 3000);
      }

      changeKv();
      $nav.each(function (index) {
        $(this)
          .off("mouseenter")
          .on("mouseenter", function () {
            clearTimeout(open);

            $(this).addClass("on").siblings().removeClass("on");
            $(".scBigImg dd")
              .eq(index)
              .addClass("on")
              .siblings()
              .removeClass("on");
            $(".scSmallImg")
              .off("mouseleave")
              .on("mouseleave", function () {
                num = index;
                setTimeout(function () {
                  changeKv();
                }, 3000);
              });
          });
      });
      $div.each(function () {
        $(this)
          .off("mouseenter")
          .on("mouseenter", function () {
            clearTimeout(open);
          });
      });
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>
