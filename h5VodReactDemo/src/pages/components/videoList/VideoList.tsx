

import type { PlayInfo } from "../../../types";
import { videoList } from "../testVideoList";
import "./index.less"
interface updataInfo {
  (video: PlayInfo): void
}
export default function VideoList(props: { update: updataInfo }) {
  const { update } = props
  const playVido = (item: PlayInfo) => {
    update(item)
  }
  return (
    <div>
      <div className="containHeader">视频列表</div>
      <div className="play-content">
        {videoList.map(item => {
          return (
            <div className="item clearfix" onClick={() => playVido(item)} key={item.VideoId}>
              <div className="img-wrap">
                <img src={item.CoverURL} />
                <span className="video-time">{item.Duration}</span>
                <div className="play-cover"></div>
              </div>
              <div className="con-wrap">
                <p className="title">{item.Title}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

