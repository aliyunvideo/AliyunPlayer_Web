<script setup lang="ts">
import type { PlayInfo } from "../types";
import { videoList } from "./testVideoList";

const emit = defineEmits(["update"]);
const playVido = (video: PlayInfo) => {
  emit("update", video);
};
</script>
<template>
  <div class="containHeader">视频列表</div>
  <div class="play-content">
    <div
      class="item clearfix"
      v-for="video in videoList"
      :key="video.VideoId"
      @click="playVido(video)"
    >
      <div class="img-wrap">
        <img :src="video.CoverURL" />
        <span class="video-time">{{ video.Duration }}</span>
        <div class="play-cover"></div>
      </div>
      <div class="con-wrap">
        <p class="title">{{ video.Title }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.containHeader {
  margin-top: 20px;
  font-size: 20px;
  color: #fff;
  letter-spacing: 0;
  text-align: left;
  margin-bottom: 20px;
  line-height: 24px;
}
.play-content {
  height: 485px;
  overflow-y: scroll;
  scrollbar-width: thin;
  .item {
    margin-bottom: 8px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
  }
  .img-wrap {
    height: 100px;
    position: relative;
    width: 175px;
    img {
      display: block;
      width: 175px;
      height: 100px;
    }
    .video-time {
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      background-color: rgba(0, 0, 0, 0.8);
      bottom: 5px;
      color: #fff;
      display: block;
      font-size: 12px;
      font-weight: bold;
      padding: 0 5px;
      position: absolute;
      right: 5px;
      text-align: right;
    }
    .play-cover {
      position: absolute;
      display: none;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.8) url("../assets/play.png") center center
        no-repeat;
      background-size: 22px 22px;
    }
    &:hover {
      .play-cover {
        display: block;
      }
    }
  }
  .con-wrap {
    width: 215px;
    float: right;
    .title {
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 5;
      color: #fff;
      display: -webkit-box;
      font-size: 16px;
      letter-spacing: 0;
      line-height: 18px;
      overflow: hidden;
      text-align: left;
      text-overflow: ellipsis;
      white-space: normal;
      max-height: 92px;
      overflow: hidden;
    }
    .author {
      color: #c3c5c6;
      font-size: 12px;
      letter-spacing: 0;
      margin-top: 8px;
      text-align: left;
    }
  }
}
@media (max-width: 768px) {
  .play-content .con-wrap {
    width: 185px;
  }
}
</style>
