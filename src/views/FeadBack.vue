<template>
  <Header />

  <div class="main box_center cf">
    <div class="channelWrap channelFeedback cf">
      <div class="userBox cf">
        <div class="viewhistoryBox">
          <div class="my_bookshelf">
            <div class="title cf">
              <h2 class="fl ml10">
                <a href="javascript:void(0);">反馈留言</a>
              </h2>
            </div>
            <div class="feedbackBox">
              
                <ul class="reg_list">
                  <li>
                    <textarea
                      v-model="content"
                      name="txtDescription"
                      rows="2"
                      cols="20"
                      id="txtDescription"
                      class="textarea"
                      placeholder="请说明情况，并留下联系方式，你可以在个人中心【我的反馈】里查看回复~"
                    ></textarea>
                  </li>
                  <li class="mb20">
                    <input
                      @click="submit"
                      type="submit"
                      name="btnSave"
                      value="提交"
                      id="btnSave"
                      class="btn_red btn_big"
                    />
                  </li>
                  <li>
                    <span id="LabErr"></span>
                  </li>
                </ul>
              
            </div>
          </div>
        </div>
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
import { submitFeedBack } from "@/api/user";
import { setToken, setNickName } from "@/utils/auth";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
export default {
  name: "feadback",
  components: {
    Header,
    Footer,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();

    const state = reactive({
      content: "",
    });

    const submit = async () => {
      if (!state.content) {
        ElMessage.error("反馈内容不能为空！");
        return;
      }

      if (state.content.length < 10) {
        ElMessage.error("反馈内容不能少于 10 个字符！");
        return;
      }
      await submitFeedBack(state.content);
      state.content = "";
      ElMessage.success("提交成功！");
    };

    return {
      ...toRefs(state),
      submit,
    };
  },
};
</script>

