<template>
    <div class="player-demo">
        <div class="header">
            <div class="main-content">
                <img class="logo" src="./images/logo.png">                
            </div>
        </div>
        <div class="main-content clearfix">
            <div class="m-left">
                <div class="player-olympic" :class="{'player-olympic-sm-screen': !fullScreen}" ref="playerTemp">
                    <Loading v-show="videoLoading" :color-list="loadingColor"/>
                </div>
                <div class="vd-info">
                    <p class="vd-title">{{playingVideo.Title}}</p>
                    <p class="vd-duration"><i class="iconfont icon-time"></i>{{playingVideo.Duration}}</p>
                </div>
                <div class="vd-split" v-if="playingVideo.Description"></div>
                <div class="vd-intro">{{playingVideo.Description}}</div>
            </div>
            <div class="m-right">
                <div class="play-list">Play List</div>
                <div class="play-content">
                    <div class="item clearfix" v-for="video in videoList" :key="video.VideoId" @click="playVideo(video)">
                        <div class="img-wrap">
                            <img :src="video.CoverURL">
                            <span class="video-time">{{video.Duration}}</span>
                            <div class="play-cover"></div>
                        </div>
                        <div class="con-wrap">
                            <p class="title">{{video.Title}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import playerNextComponent from './components/playerNextComponent';
    import playerFullScreenTitle from './components/playerFullScreenTitle';
    import playerTipComponent from './components/playerTipComponent';
    import {videoList} from './js/testVideoList';

    export default {
        name: 'app',
        data() {
            return {
                videoList: videoList,
                player: null,
                playingVideo: {},
                loadingColor: ['#276cb3', '#f2ac1a', '#28130e', '#229849', '#db2344'],
                videoLoading: true,
                fullScreen: false
            }
        },
        mounted: function() {
            this.createDemoPlayer(this.videoList[0].source, this.videoList[0].CoverURL);
            this.playingVideo = videoList[0];
            this.videoLoading = false;
        },
        methods: {
            playVideo(video) {
                if (this.player === null || this.playingVideo.VideoId === video.VideoId) {
                    return;
                }
                this.player.loadByUrl(video.source);
                this.playingVideo = video;
                return;
            },
            createDemoPlayer(source, cover) {
                if (document.getElementById('player-con') === null) {
                    let playerDomWrap = this.$refs.playerTemp;
                    let playerDom = document.createElement('div');
                    playerDom.setAttribute('id', 'player-con');
                    playerDomWrap.appendChild(playerDom);
                }

                let props = {
                    id: 'player-con',
                    width: '100%',
                    height: '485px',
                    autoplay: true,
                    language:"en-us",
                    source: source,
                    isLive: false,
                    cover: cover,
                    components: [{
                        name: 'playerNextComponent',
                        type: playerNextComponent,
                        args: [this.playNextVideo]
                    }, {
                        name: 'playerFullScreenTitle',
                        type: playerFullScreenTitle
                    }, {
                        name: 'playerTipComponent',
                        type: playerTipComponent
                    }]

                }
                this.player = new Aliplayer(props);
                this.player.on('requestFullScreen', this.fullScreenHandle);
                this.player.on('cancelFullScreen', this.cancelFullScreenHandel);
            },
            playNextVideo() {
                let videoList = this.videoList;
                let index = videoList.findIndex(item => item.VideoId === this.playingVideo.VideoId);
                if (index === -1 || index === videoList.length - 1) {
                    this.player.getComponent('playerTipComponent').fadeOutTip();
                    return;
                }
                this.playVideo(videoList[index + 1]);
            },
            fullScreenHandle() {
                let title = this.playingVideo.Title;
                this.player.getComponent('playerFullScreenTitle').fullScreenHandle(title);
                this.fullScreen = true;
            },
            cancelFullScreenHandel() {
                this.player.getComponent('playerFullScreenTitle').cancelFullScreenHandle();
                this.fullScreen = false;
            }
        }
    }
</script>
<style lang="scss">
    ::-webkit-scrollbar    
    {    
        width: 6px;    
        height: 6px;    
        background-color: #F5F5F5;    
    }    
        
    ::-webkit-scrollbar-track    
    {    
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);    
        border-radius: 10px;    
        background-color: #FFF;    
    }    
        
    ::-webkit-scrollbar-thumb    
    {    
        border-radius: 10px;    
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);    
        background-color: #AAA;    
    }  
    .player-demo {
        min-height: 100%;
        color: #f3f3f3;
        background: #2c3134;
        .header {
            height: 58px;
            background-color: #373d41;
            img {
                margin-top: 20px;
            }
        }
        .main-content {
            width: 1300px;
            margin: 0 auto;
            .m-left {
                float: left;
                width: 864px;
                .vd-type {
                    margin-top: 25px;
                    .wrap {
                        float: left;
                        border: 1px solid #73777a;
                    }
                    a {
                        font-size: 18px;
                        color: #ffffff;
                        letter-spacing: 0;
                        text-align: center;
                        width:105px;
                        height:38px;
                        display: block;
                        float: left;
                        line-height: 38px;
                        cursor: pointer;
                        &.active {
                            background: #30adf2;
                        }
                    }
                }
                .player-olympic {
                    height: 485px;
                    background: #fff;
                    margin-top: 62px;
                    position: relative;
                    background-color: #373d41;
                    .prism-progress-cursor {
                        background-position: center center;
                    }
                    .az-loading {
                        line-height: 485px;
                    }
                    .prism-player .prism-big-play-btn {
                        top: 50% !important;
                        left: 50% !important;
                        margin-top: -32px;
                        margin-left: -32px;
                    }
                    .prism-player .prism-fullscreen-btn {
                        width: 38px;
                        height: 38px;
                        margin-top: 7px !important;
                        margin-right: 15px !important;
                    }
                    .prism-player .prism-volume {
                        margin-right: 15px !important;
                    }
                    .prism-player .prism-cc-btn {
                        margin-right: 25px !important;
                    }
                    .prism-player .prism-setting-btn {
                        margin-right: 25px !important;
                    }
                    .prism-player .prism-volume-control {
                        left: auto !important;
                        right: 165px;
                    }
                    &.player-olympic-sm-screen {
                        .prism-player .prism-volume-control {
                            left: auto !important;
                            right: 125px;
                        }
                        .prism-player .prism-fullscreen-btn {
                            margin-top: 15px !important;
                            width: 24px;
                            height: 24px;
                        }
                        .prism-player .prism-thumbnail {
                            border: none;
                        }
                        .prism-player .prism-play-btn {
                            width: 28px;
                            height: 28px;
                        }
                        .player-olympic-player-next {
                            width: 24px;
                            height: 28px;
                        }
                        .prism-volume {
                            margin-top: 14px !important;
                            margin-right: 12px !important;
                        }
                        .prism-player .prism-volume .volume-icon {
                            width: 27px;
                            height: 26px;
                            background-repeat: no-repeat;
                            .short-horizontal {
                                width: 2px;
                                height: 7px;
                            }
                            .long-horizontal {
                                width: 2px;
                                height: 13px;
                            }
                            &.mute {
                                .short-horizontal {
                                    height: 13px;
                                    top: 7px;
                                }
                                .long-horizontal {
                                    top: 7px;
                                    height: 13px;
                                }
                            }
                        }
                        .prism-player .prism-cc-btn {
                            height: 24px;
                            width: 20px;
                            margin-top: 14px !important;
                            margin-right: 22px !important;
                        }
                        .prism-player .prism-setting-btn {
                            width: 20px;
                            height: 22px;
                            margin-top: 15px !important;
                            margin-right: 23px !important;
                        }
                        .prism-time-display {
                            margin-top: 4px !important;
                            margin-left: 20px !important;
                        }
                    }
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
                        font-size: 20px;
                        color: #c3c5c6;
                        letter-spacing: 0;
                        text-align: left;
                        &.live {
                            color: #fc4347;
                        }
                        .icon-time {
                            font-size: 20px;
                            margin-right: 5px;
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
            }
            .m-right {
                float: right;
                width: 412px;
                .play-list {
                    margin-top: 20px;
                    font-size:20px;
                    color: #fff;
                    letter-spacing: 0;
                    text-align: left;
                    margin-bottom: 20px;
                    line-height: 24px;
                }
                .play-content {
                    height: 485px;
                    overflow-y: scroll;
                    .item {
                        margin-bottom: 8px;
                        cursor: pointer;
                    }
                    .img-wrap {
                        float: left;
                        height: 100px;
                        position: relative;
                        width: 175px;
                        img {
                            display: block;
                            width: 175px;
                            height:100px;
                        }
                        .video-time {
                            -moz-osx-font-smoothing: grayscale;
                            -webkit-font-smoothing: antialiased;
                            background-color: rgba(0, 0, 0, .8);
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
                            background: rgba(0,0,0, .8) url('./images/play.png') center center no-repeat;
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
            }
        }
    }
    @media (max-width: 768px) {
        .player-demo .main-content {
            width: 100%;
            padding: 0 20px;
        }
        .player-demo .main-content .m-left {
            width: 100%;
        }
        .player-demo .main-content .m-right {
            width: 100%;
        }
        .player-demo .main-content .m-right .play-content .con-wrap {
            width: 185px;
        }
    }
</style>