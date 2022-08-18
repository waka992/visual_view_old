<template>
    <div>
        <BackGround />
        <Header title="企业风采"/>
        <div class="content">
            <video-player class="vjs-custom-skin" ref="videoPlayer"
            controls :options="playerOptions"  @ready="playerReadied" @play="onPlayerPlay($event)"  @ended="onPlayerEnded($event)" @pause="onPause($event)"></video-player>
        </div>
    </div>
</template>

<script>
import BackGround from "@/components/BackGround2";
import Header from "@/components/Header";
import { videoPlayer } from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css';

export default {
    name: "CorporateStyle",
    components: {
        Header,
        BackGround,
        videoPlayer
    },
    

    data() {
        return {
            playerOptions: {
                fluid: true,
                sources: [
                    {
                        src: 'https://lhbibucket.oss-cn-shenzhen.aliyuncs.com/video/%E5%AE%A3%E4%BC%A00810.mp4',
                        type: 'video/mp4'
                    }
                ],
                controlBar: {
                    timeDivider: true,
                    durationDisplay: true,
                    remainingTimeDisplay: false,
                    fullscreenToggle: true  //全屏按钮
                },
       
            },
            myPlayer: '',
            playstate: true
        };
    },

    methods: {
        // 视频加载完成回调
        playerReadied(e) {
            this.myPlayer = e;
            this.myPlayer.requestFullscreen();
        },

        onPlayerPlay(e) {
            console.log('play')
            this.playstate = true
            this.myPlayer.requestFullscreen();
        },
 
        // 结束回调
        onPlayerEnded (e) {
            console.log('end')
        },


        onPause(evt) {
            this.playstate = false
            this.myPlayer.exitFullscreen()
        },

    },

};
</script>

<style scoped>
    .content {
        height: 60vh;
        width: 60vw;

        margin: 10vh 20vw;
    }
</style>
