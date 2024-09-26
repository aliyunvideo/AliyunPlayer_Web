<script setup lang="ts">
import type { PlayInfo } from "../types";
import "aliyun-aliplayer/build/skins/default/aliplayer-min.css";

const { playingVideo } = defineProps<{ playingVideo: PlayInfo }>();
</script>
<template>
  <div id="container"></div>
  <div class="vd-info">
    <p class="vd-title">{{ playingVideo.Title }}</p>
    <div class="vd-duration">
      <img src="../assets/time.png" alt="" class="icon-time" />{{
        playingVideo.Duration
      }}
    </div>
  </div>
  <div class="vd-split" v-if="playingVideo.Description"></div>
  <div class="vd-intro">{{ playingVideo.Description }}</div>
</template>
<style scoped lang="less">
#container {
  width: 100%;
}
.vd-info {
  padding: 20px 0;
  .vd-title {
    font-size: 20px;
    color: #fff;
    letter-spacing: 0;
    text-align: left;
    font-weight: bold;
  }
  .vd-duration {
    display: flex;
    align-items: center;
    font-size: 20px;
    color: #c3c5c6;
    letter-spacing: 0;
    text-align: left;
    &.live {
      color: #fc4347;
    }
  }
}
.vd-split {
  border-bottom: 1px solid #73777a;
}
.vd-intro {
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 22px;
  text-align: left;
  padding: 22px 0;
}
.icon-time {
  width: 22px;
  height: 22px;
  margin-right: 5px;
}
</style>
