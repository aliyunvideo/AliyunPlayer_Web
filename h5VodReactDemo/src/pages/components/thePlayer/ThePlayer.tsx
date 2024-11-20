import './index.less'
import type { PlayInfo } from "../../../types"
import time from '../../assets/time.png'
export default function ThePlayerList(props: { playingVideo: PlayInfo }) {
  const { playingVideo } = props
  return (
    <div>
      <div id="container"></div>
      <div className="vd-info">
        <p className="vd-title"> {playingVideo.Title} </p>
        <div className="vd-duration">
          <img src={time} alt="" className="icon-time" />
          {playingVideo.Duration}
        </div>
      </div>
      {playingVideo.Description ? <div className="vd-split"></div>: null}
      <div className="vd-intro">{playingVideo.Description}</div>
    </div>
  )
}

