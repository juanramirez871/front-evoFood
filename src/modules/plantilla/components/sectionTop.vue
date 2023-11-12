<template>
  <div class="demo-image__error">
    <div class="block" style="position: relative">
      <el-image :src="coverImage">
        <template #error>
          <div class="image-slot">
            <el-icon>
              <icon-picture />
            </el-icon>
          </div>
        </template>
      </el-image>
      <div style="right: 60px; position: absolute; bottom: 10px">
        <EditImage
          @uploadImage="uploadImageCover"
          :aspectRatio="[13, 6]"
        />
      </div>
    </div>
  </div>
  <div class="demo-type">
    <el-avatar :size="200" @error="errorHandler">
      <img :src="avatarImage" />
    </el-avatar>
    <EditImage
      @uploadImage="uploadImage"
      :aspectRatio="[1]"
      :presentMode="{
        mode: 'round',
        width: 250,
        height: 250,
      }"
    />
  </div>
</template>
<script setup>
import EditImage from "../../../shared/components/EditImage.vue";
import { Picture as IconPicture } from "@element-plus/icons-vue";
import { ref } from "vue";
const avatarImage = ref();
const coverImage = ref();
const errorHandler = () => true;
const uploadImage = ({ base64 }) => {
  avatarImage.value = base64;
};
const uploadImageCover = ({ base64 }) => {
  coverImage.value = base64;
};
</script>
<style scoped>
.demo-type {
  display: flex;
  justify-content: center;
  position: relative;
  bottom: 6rem;
}
.demo-image__error .el-image {
  max-width: 100%;
  max-height: 55vh;
  width: 100%;
  height: 100vh;
}

.demo-image__error .image-slot {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--el-fill-color-light);
  color: var(--el-text-color-secondary);
  font-size: 30px;
}
.demo-image__error .image-slot .el-icon {
  font-size: 30px;
}
@media (max-width:768px) {
    .demo-image__error .el-image {
      max-height: 55vh;
      height: 35vh;
  }
}
</style>