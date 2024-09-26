<script setup lang="ts">
import type { PlayInfo } from "./types";
import { onMounted, ref } from "vue";
import ThePlayer from "./components/ThePlayer.vue";
import VideoList from "./components/VideoList.vue";
import Aliplayer from "aliyun-aliplayer";
import { videoList } from "./components/testVideoList";

const player = ref<typeof Aliplayer>(null); //播放器
const playObj = ref<PlayInfo>(videoList[0]); //当前播放视频对象

onMounted(() => {
  createPlayer(videoList[0].Source, videoList[0].CoverURL);
});

const createPlayer = (source?: string, cover?: string) => {
  // 更多使用方法请参考接入文档：https://help.aliyun.com/zh/vod/developer-reference/integration
  player.value = new Aliplayer(
    {
      id: "container",
      width: "100%",
      height: "485px",
      source: source, // 如果是私有加密播放请传入 vid/playauth/encryptType
      cover: cover,
      from: "vuedemo", // 仅在demo使用，正式环境请删除
      // 自定义组件请参考：https://video.aliyuncs.com/player/presentation/index.html?type=pictureAD
      components: [
        {
          name: "StartADComponent",
          type: window.AliPlayerComponent.StartADComponent,
          args: [
            "https://img.alicdn.com/tfs/TB1byi8afDH8KJjy1XcXXcpdXXa-1920-514.jpg",
            "https://www.aliyun.com/product/vod",
            3,
          ],
        },
        {
          name: "MemoryPlayComponent",
          type: window.AliPlayerComponent.MemoryPlayComponent,
          args: [false, getTime, saveTime],
        },
      ],
    },
    (player: typeof Aliplayer) => {
      //播放下一个视频
      player.on("ended", () => {
        let index = videoList.findIndex(
          (item) => item.VideoId === playObj.value.VideoId,
        );
        if (index === -1 || index === videoList.length - 1) {
          return;
        }
        update(videoList[index + 1]);
      });
    },
  );
};
//点击右侧列表视频切换
const update = (video: PlayInfo) => {
  playObj.value = video;
  player.value.dispose(); //销毁
  createPlayer(video.Source, video.CoverURL); //创建
};
// 存储当前播放时间
const saveTime = function (memoryVideo: string, currentTime: string) {
  localStorage.setItem(memoryVideo, currentTime);
};
// 获取此视频上次播放时间
const getTime = function (memoryVideo: string): string | null {
  return localStorage.getItem(memoryVideo);
};
</script>
<template>
  <header>
    <div class="main-content">
      <img class="logo" src="./assets/logo.png" alt="" />
    </div>
  </header>
  <main>
    <div class="main-content content-wrap">
      <!-- left -->
      <div class="left-area">
        <ThePlayer :playingVideo="playObj" />
      </div>
      <!-- right -->
      <div class="right-area">
        <VideoList @update="update" />
      </div>
    </div>
  </main>
</template>

<style scoped>
header {
  height: 58px;
  margin: 0 auto;
  background-color: var(--color-background-light);
}

.main-content {
  width: var(--content-width);
  margin: 0 auto;
  height: 100%;
}

.logo {
  margin-top: 20px;
}

.left-area {
  padding: 60px 20px;
  flex: 2;
}
.right-area {
  flex: 1;
}

@media (min-width: 768px) {
  .content-wrap {
    display: flex;
  }
}
@media (max-width: 768px) {
  .main-content {
    width: 100%;
    padding: 0 20px;
  }
  .main-content .left-area {
    width: 100%;
  }
  .main-content .right-area {
    width: 100%;
  }
}
</style>
