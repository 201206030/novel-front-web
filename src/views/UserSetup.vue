<template>
  <Header />

  <div class="main box_center cf">
    <div class="userBox cf">
      <div class="my_l">
        <ul class="log_list">
          <li><a class="link_8 on">账号设置</a></li>
        </ul>
      </div>
      <div class="my_r">
        <div class="my_info cf">
          <div class="my_info_txt">
            <ul class="mytab_list">
              <li>
                <i class="tit">我的头像</i>
                <el-upload
                  class="avatar-uploader"
                  :action="baseUrl + '/resource/image'"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload"
                >
                  <img
                    :src="userPhoto ? uploadImgBaseUrl + userPhoto : man"
                    class="avatar"
                  />
                </el-upload>
                <!--
                <a style="position: relative">
                  <img
                    id="imgLogo"
                    class="user_img"
                    alt="我的头像"
                    :src="userPhoto ? (uploadImgBaseUrl + userPhoto) : man"
                  />
                  <input
                    class="opacity"
                    onchange="picChange()"
                    type="file"
                    id="file0"
                    name="file"
                    title="点击上传图片"
                    style="
                      z-index: 100;
                      cursor: pointer;
                      left: 0px;
                      top: -25px;
                      width: 60px;
                      height: 80px;
                      opacity: 0;
                      position: absolute;
                    "
                  />
                </a>-->
              </li>
              <li>
                <i class="tit">我的昵称</i
                ><a id="my_name"
                  >{{ nickName
                  }}<!--<em class="ml10">[修改]</em>--></a
                >
              </li>
              <li style="display: none">
                <i class="tit">电子邮箱</i><a href="javascript:void(0);"></a>
              </li>
              <li>
                <i class="tit">我的性别</i
                ><a id="my_sex">男<!--<em class="ml10">[修改]</em>--></a>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import "@/assets/styles/user.css";
import man from "@/assets/images/man.png";
import { reactive, toRefs, onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { ElMessage } from "element-plus";
import { Plus } from "@element-plus/icons-vue";
import { UploadProps } from "element-plus";
import { getImgVerifyCode } from "@/api/resource";
import { getUserinfo ,updateUserInfo} from "@/api/user";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
export default {
  name: "userSetup",
  components: {
    Header,
    Footer,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();

    const state = reactive({
      userPhoto: "",
      nickName: "",
      baseUrl: process.env.VUE_APP_BASE_API_URL,
      uploadImgBaseUrl: process.env.VUE_APP_BASE_UPLOAD_IMG_URL,
    });

    onMounted(async () => {
      const { data } = await getUserinfo();
      state.userPhoto = data.userPhoto;
      state.nickName = data.nickName;
    });

    const beforeAvatarUpload = (rawFile) => {
      if (rawFile.type !== "image/jpeg") {
        ElMessage.error("必须上传 JPG 格式的图片!");
        return false;
      } else if (rawFile.size / 1024 / 1024 > 5) {
        ElMessage.error("图片大小最多 5MB!");
        return false;
      }
      return true;
    };

    const handleAvatarSuccess = (response, uploadFile) => {
      state.userPhoto = response.data;
      updateUserInfo({'userPhoto':state.userPhoto});
    };

    return {
      ...toRefs(state),
      man,
      beforeAvatarUpload,
      handleAvatarSuccess
    };
  },
};
</script>

<style scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>