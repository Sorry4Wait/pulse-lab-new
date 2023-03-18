<template>
  <div data-aos="zoom-in" class="video my__container">
    <div>
      <div data-aos="zoom-in" class="topline"></div>
    </div>
    <video
      ref="myVideo"
      src="@/assets/video/Laboratory.mp4"
      poster="@/assets/img/demo/infolab.png"
    ></video>
    <a href="#" @click.prevent="videoPlay">
      <svg
        v-if="!playing"
        width="146"
        height="146"
        viewBox="0 0 146 146"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="play"
      >
        <circle cx="73" cy="73" r="72" stroke="#017CF8" stroke-width="2" />
        <path
          d="M107.316 82.7652C112.069 79.0876 112.069 71.9123 107.316 68.2348C92.9531 57.121 76.9145 48.3611 59.8008 42.283L56.6744 41.1726C50.6931 39.0483 44.3752 43.0951 43.5655 49.2694C41.303 66.5204 41.303 84.4795 43.5655 101.731C44.3752 107.905 50.6931 111.952 56.6744 109.827L59.8008 108.717C76.9144 102.639 92.9531 93.8789 107.316 82.7652Z"
          fill="#2776E3"
        />
      </svg>
      <svg
        v-if="playing"
        class="stop"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          d="M328 160h-144C170.8 160 160 170.8 160 184v144C160 341.2 170.8 352 184 352h144c13.2 0 24-10.8 24-24v-144C352 170.8 341.2 160 328 160zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"
        />
      </svg>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      playing: false,
    };
  },
  methods: {
    videoPlay() {
      this.playing = !this.playing;
      if (this.playing) {
        this.$refs.myVideo.play();
      } else {
        this.$refs.myVideo.pause();
        this.$refs.myVideo.currentTime = 0;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.video {
  position: relative;
  height: 527px;
  width: 100%;
  video {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 15px;
  }
  a {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120px;
    height: 120px;
    svg {
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: 0.5s;
      &.play {
        transform: scale(0.9);
        path {
          fill: white;
        }
        circle {
          stroke: white;
        }
        &:hover {
          transform: scale(1);
          path {
            fill: #2776e3;
          }
          circle {
            stroke: #017cf8;
          }
        }
      }
      &.stop {
        transform: scale(0);
        opacity: 0;
        transition: 0.5s;
        path {
          fill: white;
        }
        circle {
          stroke: white;
        }
      }
    }
  }
  &:hover {
    svg.stop {
      transform: scale(1);
      opacity: 1;
    }
  }
}

.topline {
  /*border-top: 5px solid #00356b;*/
  /*padding-top: 30px;*/
  margin-top: 170px;
}
</style>
