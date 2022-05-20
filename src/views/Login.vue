<template>
  <Header />

  <div class="main box_center cf">
    <div class="userBox cf">
      <div class="user_l">
        <form method="post" action="./login.html" id="form1">
          <h3>登录小说精品屋</h3>
          <ul class="log_list">
            <li><span id="LabErr"></span></li>
            <li>
              <input
              v-model="username"
                name="txtUName"
                type="text"
                id="txtUName"
                placeholder="手机号码"
                class="s_input icon_name"
              />
            </li>
            <li>
              <input
              v-model="password"
                name="txtPassword"
                type="password"
                id="txtPassword"
                placeholder="密码"
                class="s_input icon_key"
              />
            </li>
            <!--
            <li class="autologin cf">
              <label class="fl"
                ><input id="autoLogin" type="checkbox" /><em
                  >下次自动登录</em
                ></label
              >
            </li>-->
            <li>
              <input
                type="button"
                name="btnLogin"
                value="登录"
                id="btnLogin"
                class="btn_red"
                @click="loginUser"
              />
            </li>
          </ul>
        </form>
      </div>
      <div class="user_r">
        <p class="tit">还没有注册账号？</p>
        <router-link :to="{name: 'register'}" class="btn_ora_white">立即注册</router-link>
        <!--
        <div class="fast_login" style="display: none">
          <div class="fast_tit">
            <p class="lines"></p>
            <span class="title">其他登录方式</span>
          </div>
          <ul class="fast_list">
            <li class="login_wb">
              <a href="/"
                ><img
                  src="/images/login_weibo.png"
                  alt="微博登录"
                  class="img"
                /><span>微博登录</span></a
              >
            </li>
            <li class="login_qq">
              <a href="/"
                ><img
                  src="/images/login_qq.png"
                  alt="QQ登录"
                  class="img"
                /><span>QQ登录</span></a
              >
            </li>
            <li class="login_wx">
              <a href="/"
                ><img
                  src="/images/login_weixin.png"
                  alt="微信登录"
                  class="img"
                /><span>微信登录</span></a
              >
            </li>
          </ul>
        </div>
        -->
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import "@/assets/styles/user.css";
import { reactive, toRefs, onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { ElMessage } from "element-plus";
import { getImgVerifyCode } from "@/api/resource";
import { login } from "@/api/user";
import { setToken, setNickName,setUid } from "@/utils/auth";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
export default {
  name: "register",
  components: {
    Header,
    Footer,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();

    const state = reactive({
      username: "",
      password: ""
    });

    const loginUser = async () => {
      if (!state.username) {
        ElMessage.error("用户名不能为空！");
        return;
      }
      if (!/^1[3|4|5|6|7|8|9][0-9]{9}/.test(state.username)) {
        ElMessage.error("手机号格式不正确！");
      }
      if (!state.password) {
        ElMessage.error("密码不能为空！");
        return;
      }
      
      const { data } = await login(state);

      setToken(data.token);
      setUid(data.uid)
      setNickName(data.nickName)
      router.push({ path: "/home" });
    };

    return {
      ...toRefs(state),
      loginUser,
    };
  },
};
</script>

