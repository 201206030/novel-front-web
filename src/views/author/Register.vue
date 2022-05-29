<template>
  <div
    style="
      width: 800px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 150px;
    "
  >
    <div id="main">
      <table
        width="100%"
        border="0"
        cellpadding="8"
        cellspacing="0"
        class="tableBasic"
        style="line-height: 40px"
      >
        <tbody>
          <tr>
            <td colspan="3" style="text-align: left">
              <div style="padding-left: 15px; height: 40px; line-height: 40px">
                我是网络小说写手，我要注册为小说精品屋签约作者：
              </div>
            </td>
          </tr>

          <tr>
            <td align="right">作者笔名：</td>
            <td>
              <input
                v-model="penName"
                name="penName"
                
                type="text"
                maxlength="8"
                id="TxtNiceName"
                class="
                  easyui-validatebox
                  inpMain
                  validatebox-text validatebox-invalid
                "
                data-options="required:true"
                validtype="checkPenName"
              />
            </td>
            <td><span class="notes"> *</span> 长度为2到8位的中英文</td>
          </tr>
          <tr>
            <td align="right">手机号码：</td>
            <td>
              <input
              v-model="telPhone"
                name="telPhone"
                
                type="text"
                id="TxtMobile"
                class="
                  easyui-validatebox
                  inpMain
                  validatebox-text validatebox-invalid
                "
                data-options="required:true"
                validtype="chinaMobile"
              />
            </td>
            <td>
              <span class="notes"> *</span>
              小说精品屋的编辑会通过这个号码与您联系
            </td>
          </tr>
          <tr>
            <td align="right">QQ或微信：</td>
            <td>
              <input
              v-model="chatAccount"
                name="chatAccount"
                
                type="text"
                id="TxtQQ"
                class="
                  easyui-validatebox
                  inpMain
                  validatebox-text validatebox-invalid
                "
                data-options="required:true"
              />
            </td>
            <td>
              <span class="notes"> *</span>
              小说精品屋的编辑会通过这个号码与您联系
            </td>
          </tr>
          <tr>
            <td align="right">电子邮箱：</td>
            <td>
              <input
              v-model="email"
                name="email"
                
                type="text"
                id="TxtEmail"
                class="
                  easyui-validatebox
                  inpMain
                  w300
                  validatebox-text validatebox-invalid
                "
                data-options="required:true"
                validtype="email"
                title=""
              />
            </td>
            <td><span class="notes"> *</span> 长度为2到15位的中英文，数字</td>
          </tr>
          <tr>
            <td align="right">男女主角：</td>
            <td>
              <div>
                <ul class="ipage">
                  <input v-model="workDirection" type="radio" name="workDirection" value="0" />男频
                  <input v-model="workDirection" type="radio" name="workDirection" value="1" />女频
                </ul>
              </div>
            </td>
            <td><span class="notes"> *</span> 请选择作品方向</td>
          </tr>
        </tbody>
      </table>
    </div>
    <table
      width="100%"
      border="0"
      cellpadding="8"
      cellspacing="0"
      class="tableBasic"
    >
      <tbody>
        <tr>
          <td>
            <div
              style="padding-left: 110px; margin-top: 10px; margin-bottom: 5px"
            >
              <input
                @click="registerAuthor"
                type="button"
                name="btnSubmit"
                value="立即开始您的作者生涯"
                id="btnSubmit"
                class="btn"
              />
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <span id="LabErr"></span>
          </td>
        </tr>
      </tbody>
    </table>
    <input type="hidden" name="HidUId" id="HidUId" value="1095" />
  </div>
</template>

<script>
import { reactive, toRefs, onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { ElMessage } from "element-plus";
import { getImgVerifyCode } from "@/api/resource";
import { register } from "@/api/author";
import { setToken, setNickName, setUid } from "@/utils/auth";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
export default {
  name: "authorRegister",
  components: {
    Header,
    Footer,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();

    const state = reactive({
      penName: "",
      telPhone: "",
      chatAccount: "",
      email: "",
      workDirection: "0",
    });

    const registerAuthor = async () => {
      if (!state.penName) {
        ElMessage.error("笔名不能为空！");
        return;
      }
      if (!state.telPhone) {
        ElMessage.error("手机号不能为空！");
        return;
      }
      if (!/^1[3-9]\d{9}$/.test(state.telPhone)) {
        ElMessage.error("手机号格式不正确！");
        return;
      }
      if (!state.chatAccount) {
        ElMessage.error("QQ或微信账号不能为空！");
        return;
      }
      if (!state.email) {
        ElMessage.error("电子邮箱不能为空！");
        return;
      }
      if (
        !/^[A-Za-z0-9\-_]+[A-Za-z0-9\.\-_]*[A-Za-z0-9\-_]+@[A-Za-z0-9]+[A-Za-z0-9\.\-_]*(\.[A-Za-z0-9\.\-_]+)*[A-Za-z0-9]+\.[A-Za-z0-9]+[A-Za-z0-9\.\-_]*[A-Za-z0-9]+$/.test(
          state.email
        )
      ) {
        ElMessage.error("电子邮箱格式不正确！");
        return;
      }
      
      const { data } = await register(state);

      router.push({ name: "authorBookList" });
    };

    return {
      ...toRefs(state),
      registerAuthor,
    };
  },
};
</script>


<style scoped>
.btn {
    display: inline-block;
    background-color: #f80;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border: 1px solid #f70;
    color: #FFF;
    line-height:1;
    padding: 7px 20px;
    cursor: pointer;
}
.btnGray {
    display: inline-block;
    background-color: #EEE;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border: 0;
    color: #666;
    padding: 6px 15px;
    font-weight: bold;
    text-transform: capitalize;
    cursor: pointer;
    -webkit-appearance: none;
}
.btnPayment {
    display: inline-block;
    background-color: #ff4246;
    color: #FFF;
    padding: 7px 28px;
    text-transform: capitalize;
    cursor: pointer;
    font-weight: bold;
    font-size:14px;
    text-align:center;
    -webkit-appearance: none;
}
.inpMain {
    border: 1px solid #DBDBDB;
    background-color: #FFF;
    padding: 4px 5px;
    color: #727272;
    font-size: 12x;
    line-height: 20px;
    -webkit-appearance: none;
}
.inpFlie {
    border: 1px solid #DBDBDB;
    background-color: #FFF;
    padding: 5px 5px;
    color: #999;
    -webkit-appearance: none;
}
.textArea {
    border: 1px solid #DBDBDB;
    background-color: #FFF;
    padding: 4px 5px;
    color: #727272;
    font-size: 12x;
    line-height: 20px;
    -webkit-appearance: none;
}
.textAreaAuto {
    border: 1px solid #DBDBDB;
    background-color: #FFF;
    padding: 0;
    color: #999;
    font-size: 12x;
    line-height: 20px;
    resize: none;
    min-height: 40px;
    -webkit-appearance: none;
}
select {
    border: 1px solid #DBDBDB;
    padding: 2px 5px 2px 4px;
}
/*- tab -*/
.tab {
    border-bottom: 1px solid #60BBFF;
    font-weight: bold;
    font-size: 14px;
    height: 35px;
    overflow: hidden;
}
.tab li {
    float: left;
    line-height: 35px;
    height: 35px;
}
.tab a {
    display: block;
    background-color: #F9F9F9;
    padding: 0 44px;
    text-decoration: none;
    color: #999;
}
.tab a.selected {
    background-color: #60BBFF;
    color: #FFF;
}
/*- tableBasic -*/
.tableBasic {
    background-color: #F9F9F9;
    /*color: #666666;*/
    border-left: 1px dotted #CCCCCC;
    border-top: 1px dotted #CCCCCC;
}
.tableBasic select {
    color: #727272;
}
.tableBasic td, .tableBasic th {
    border-right: 1px dotted #CCCCCC;
    border-bottom: 1px dotted #CCCCCC;
}
.tableBasic th {
    text-align:right;
    width:120px;
    font-weight:normal;
}
.notes{color:Red;line-height:20px;}
.showNote{background: #fffae2;}
.tableBasic .child {
    background-color: #FFFFFF;
}
/*- tableNobor -*/
.tableNobor td {
    border: 0;
}
/*- tableOnebor -*/
.tableOnebor td {
    border-right: 0;
}
</style>