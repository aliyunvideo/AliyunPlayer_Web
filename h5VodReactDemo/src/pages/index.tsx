import "./assets/main.css";
import "./index.less"
import logo from './assets/logo.jpg'
import Aliplayer from "aliyun-aliplayer";
import ThePlayer from "./components/thePlayer/ThePlayer";
import VideoList from "./components/videoList/VideoList";
import { videoList } from "./components/testVideoList";
import { useState, useEffect } from "react";
import "aliyun-aliplayer/build/skins/default/aliplayer-min.css";
import type { PlayInfo } from "../types";

export default function HomePage() {
  const [player, setPlayer] = useState<typeof Aliplayer>(null); // 播放器实例
  const [playObj, setPlayObj] = useState<PlayInfo>(videoList[0]) //当前播放视频对象

  useEffect(() => {
    createPlayer(playObj.Source, playObj.CoverURL)
  }, [playObj.VideoId])

  const createPlayer = (source?: string, cover?: string) => {
    if (player) {
      player.dispose();
    }
    // 更多使用方法请参考接入文档：https://help.aliyun.com/zh/vod/developer-reference/integration
    const playerInstance = new Aliplayer(
      {
        id: "container",
        width: "100%",
        height: "485px",
        source: source, // 如果是私有加密播放请传入 vid/playauth/encryptType
        cover: cover,
        from: "reactdemo", // 仅在demo使用，正式环境请删除
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
      (_player: typeof Aliplayer) => {
        //播放下一个视频
        _player.on("ended", () => {
          let index = videoList.findIndex(
            (item) => item.VideoId === playObj.VideoId,
          );
          if (index === -1 || index === videoList.length - 1) {
            return;
          }
          update(videoList[index + 1]);
        });
      },
    );

    setPlayer(playerInstance);
  };
  //点击右侧列表视频切换
  const update = (video: PlayInfo) => {
    setPlayObj(video)
  };
  // 存储当前播放时间
  const saveTime = function (memoryVideo: string, currentTime: string) {
    localStorage.setItem(memoryVideo, currentTime);
  };
  // 获取此视频上次播放时间
  const getTime = function (memoryVideo: string): string | null {
    return localStorage.getItem(memoryVideo);
  };
  return (
    <div>
      <header>
        <div className="main-content">
          <img className="logo" src={logo} alt="" />
        </div>
      </header>
      <main>
        <div className="main-content content-wrap">
          {/* left */}
          <div className="left-area">
            <ThePlayer playingVideo={playObj} />
          </div>
          {/* right */}
          <div className="right-area">
            <VideoList update={update} />
          </div>
        </div>
      </main>

    </div>
  );
}
