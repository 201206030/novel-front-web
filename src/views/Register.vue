<template>
  <Header />

  <div class="main box_center cf">
    <div class="userBox cf">
      <form method="post" action="./register.html" id="form2">
        <div class="user_l">
          <h3>注册小说精品屋账号</h3>
          <ul class="log_list">
            <li><span id="LabErr"></span></li>
            <li>
              <input
                v-model="username"
                name="txtUName"
                type="text"
                id="txtUName"
                class="s_input icon_name"
                placeholder="请输入您的手机号码"
              />
            </li>
            <li>
              <input
                v-model="password"
                name="txtPassword"
                type="password"
                id="txtPassword"
                class="s_input icon_key"
                placeholder="请输入密码：6-20位字母/数字"
              />
            </li>
            <li class="log_code cf">
              <input
                v-model="velCode"
                name="TxtChkCode"
                type="text"
                maxlength="4"
                id="TxtChkCode"
                class="s_input icon_code"
                placeholder="请输入验证码"
              /><img
                style="cursor: pointer"
                class="code_pic"
                :src="imgVerifyCode"
                id="chkd"
                @click="loadImgVerifyCode"
              />
            </li>
            <li>
              <input
                type="button"
                name="btnRegister"
                value="注册"
                id="btnRegister"
                class="btn_red"
                @click="registerUser"
              />
            </li>
          </ul>
        </div>
      </form>
      <div class="user_r">
        <p class="tit">已有账号？</p>
        <router-link :to="{ name: 'login' }" class="btn_ora_white"
          >立即登录</router-link
        >
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
import { register } from "@/api/user";
import { setToken, setNickName, setUid } from "@/utils/auth";
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
      imgVerifyCode: "",
      sessionId: "",
      username: "",
      password: "",
      velCode: "",
    });
    onMounted(async () => {
      loadImgVerifyCode();
    });

    const loadImgVerifyCode = async () => {
      const { data } = await getImgVerifyCode();
      state.imgVerifyCode = "data:image/png;base64," + data.img;
      state.sessionId = data.sessionId;
    };

    const registerUser = async () => {
      if (!state.username) {
        ElMessage.error("用户名不能为空！");
        return;
      }
      if (!/^1[3-9]\d{9}$/.test(state.username)) {
        ElMessage.error("手机号格式不正确！");
        return;
      }
      if (!state.password) {
        ElMessage.error("密码不能为空！");
        return;
      }
      if (!state.velCode) {
        ElMessage.error("验证码不能为空！");
        return;
      }
      if (!/^\d{4}/.test(state.velCode)) {
        ElMessage.error("验证码格式不正确！");
        return;
      }
      const { data } = await register(state);

      setToken(data.token);
      setUid(data.uid);
      setNickName(state.username);
      router.push({ path: "/home" });
    };

    return {
      ...toRefs(state),
      loadImgVerifyCode,
      registerUser,
    };
  },
};
</script>

