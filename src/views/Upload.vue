<template>
  <Tupload
    :file-list="getFileList['activeLabel']['activeIndex']?.fileList"
    :action="url"
    :before-upload="beforeAvatarUpload"
  >
  </Tupload>
  <el-upload
    :file-list="getFileList['activeLabel']['activeIndex']?.fileList"
    :action="url"
    list-type="picture-card"
    :before-upload="beforeAvatarUpload"
    :on-change="changeFn"
  >
    <el-icon><Plus /></el-icon>
  </el-upload>
  <!-- <Tform v-bind="bind"> </Tform> -->

  <!-- <Timgs :file-list="formData.imgs" width="100px" height="100px"></Timgs> -->

  <!-- <Tupload
    v-model:file-list="fileList"
    :action="url"
    :before-upload="beforeAvatarUpload"
    list-type="picture"
  >
  </Tupload> -->
  <!-- <Timgs :file-list="fileList2"> </Timgs>


  <el-button text @click="outerVisible = true">
    open the outer Dialog
  </el-button>

  <el-dialog v-model="outerVisible" title="Outer Dialog">
    <template #default>
      <el-dialog
        v-model="innerVisible"
        width="30%"
        title="Inner Dialog"
        append-to-body
      />
    </template>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="outerVisible = false">Cancel</el-button>
        <el-button type="primary" @click="innerVisible = true">
          open the inner Dialog
        </el-button>
      </div>
    </template>
  </el-dialog>  -->

  <ElButton @click="aa"> aa </ElButton>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { Tupload, Timgs, chris, Tform } from "../../packages/index";

import { ElMessage, ElUpload, UploadProps, UploadUserFile } from "element-plus";
import { teamBuildingApplicationAddList } from "@/api/index";

const url = "https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15";

const headers = {
  "X-Usertoken": sessionStorage.token,
};
const getFileList = ref({
  activeLabel: {
    activeIndex: {
      fileList: [
        {
          url: "http://172.31.27.67:9002/finance-file/fast/file/previewFile?filePath=group1/M00/00/08/rB8bN2a8TnKAOKCtABB3eeEW4Ns507.png&FinanceAuth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYjc0OTI5ZWNlNDBmMTA1YjNlZWI2YjhjZGY3YjljYjkiLCJ1c2VyX25hbWUiOiIxNTY3MDAwMDAwMSIsInNjb3BlIjpbImFsbCJdLCJuaWNrX25hbWUiOiLpl6vlub_lhbAiLCJyZWFsX25hbWUiOiLpl6vlub_lhbAiLCJleHAiOjE3MjcxNDI3MjQsImF1dGhvcml0aWVzIjpbIm51bGwiXSwianRpIjoiMmNlMmNkYmQtNWJlNi00NjdhLWI4YjQtNTRmNzA4ZWFjYjViIiwicGxhdGZvcm0iOiIyIiwiY2xpZW50X2lkIjoic2FiZXIifQ.kJVyiz_m6spApj558CeBjIGSikE1CjNDtxznzoRNYFg",
        },
      ],
    },
  },
});
const handlePreview = (files: File[], uploadFiles: UploadUserFile[]) => {
  console.log(uploadFiles, files);
};
const fileList = ref<UploadUserFile[]>([]);
const fileList2 = ref<{ url: string; name?: string }[]>([]);

const beforeAvatarUpload: UploadProps["beforeUpload"] = (rawFile) => {
  if (!/image\/[png|jpg|jpeg]/.test(rawFile.type)) {
    ElMessage.error("紧支持JPG,PNG,JPEG");
    return false;
  } else if (rawFile.size / 1024 / 1024 > 10) {
    ElMessage.error("图片不能超过10MB!");
    return false;
  }
  return true;
};
const changeFn = (a, b, c) => {
  console.log(a, b, c);
};

setTimeout(() => {
  fileList.value = [
    {
      name: "food.jpeg",
      url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
    },
    {
      name: "",
      url: "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
    },
  ];
}, 1000);

const formData = ref({});
setTimeout(() => {
  fileList2.value = [
    {
      name: "fod929929299292992929292999.jpeg",
      url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
    },
    {
      url: "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
    },
    {
      url: "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.pdf",
    },
    {
      name: "fod929929299292992929292999.jpeg",
      url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
    },
    {
      url: "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
    },
    {
      url: "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.pdf",
    },
    {
      name: "fod929929299292992929292999.jpeg",
      url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
    },
    {
      url: "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
    },
    {
      url: "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.pdf",
    },
    {
      name: "fod929929299292992929292999.jpeg",
      url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
    },
    {
      url: "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
    },
    {
      url: "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.pdf",
    },
  ];
  teamBuildingApplicationAddList().then((res) => {
    res.data.imgList.forEach((el, index) => {
      el.name = "22" + index + ".png";
    });
    formData.value = {
      //  imgs: fileList2.value,
      imgs: res.data.imgList,
    };
  });
}, 100);
const uploadRef = ref();
const aa = () => {
  console.log(fileList.value);
};
const outerVisible = ref(false);
const innerVisible = ref(false);
console.log(99);

const bind = computed(() => {
  return chris.useForm({
    request: formData.value,
    dataList: [
      {
        type: "prew",
        prop: "imgs",
        prew: {},
      },
    ],
  });
});
</script>
