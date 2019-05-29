<template>
  <div class="slider" ref="slide">
    <div class="wrapper">
      <transition-group tag="ul" class="slider-list" name="list">
        <li
          v-for="(list,index) in slideList"
          :key="index"
          v-show="index===currentIndex"
          @mouseenter="stop"
          @mouseleave="go"
        >
          <a :href="list.clickUrl">
            <img :src="list.image" :alt="list.desc">
          </a>
        </li>
      </transition-group>
      <div class="slider-items">
        <span
          v-for="(item,index) in slideList.length"
          :key="index"
          :class="{'active':index===currentIndex}"
          @click="change(index)"
        ></span>
      </div>
    </div>
    <div class="before" @click="previous">
      <span class="previous fa fa-chevron-left fa-3x"></span>
    </div>
    <div class="after" @click="next">
      <span class="next fa fa-chevron-right fa-3x"></span>
    </div>
  </div>
</template>
<script>
export default {
  name: "slider",
  props: {
    slideList: {
      type: Array
    },
    time: {
      type: Number,
      default: 3000
    }
  },
  data() {
    return {
      currentIndex: 0,
      timer: ""
    };
  },
  methods: {
    go() {
      this.timer = setInterval(() => {
        this.autoPlay();
      }, this.time);
    },
    stop() {
      clearInterval(this.timer);
      this.timer = null;
    },
    change(index) {
      this.currentIndex = index;
      this.stop();
      this.go();
    },
    autoPlay() {
      this.currentIndex++;
      if (this.currentIndex > this.slideList.length - 1) {
        this.currentIndex = 0;
      }
    },
    previous() {
      this.currentIndex--;
      if (this.currentIndex < 0) {
        this.currentIndex = this.slideList.length - 1;
      }
      this.stop();
      this.go();
    },
    next() {
      this.autoPlay();
      this.stop();
      this.go();
    },
    changeColor() {
      this.$refs.slide.style.backgroundColor = this.slideList[
        this.currentIndex
      ].bgColor;
    }
  },
  created() {
    this.$nextTick(() => {
      this.timer = setInterval(() => {
        this.autoPlay();
      }, this.time);
      setInterval(() => {
        this.changeColor();
      }, 100);
    });
  }
};
</script>
<style lang="stylus">
.slider {
  width: 100%;
  height: 420px;

  .wrapper {
    position: relative;
    height: 420px;
    width: 910px;
    margin: 0 auto;
    overflow: hidden;
    background-color: #fff;
    margin-left: 350px;

    .slider-list {
      width: 100%;
      height: 100%;

      li {
        position: absolute;
        width: 100%;
        height: 100%;

        a {
          width: 100%;
          height: 100%;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }

    .slider-items {
      position: absolute;
      z-index: 10;
      top: 380px;
      width: 100%;
      margin: 0 auto;
      text-align: center;
      font-size: 0;

      span {
        display: inline-block;
        height: 8px;
        width: 8px;
        border-radius: 50%;
        margin: 0 10px;
        background: #b2b2b2;
        cursor: pointer;
      }

      .active {
        background-color: red;
      }
    }

    .list-enter-active {
      transition: all 1s ease;
    }

    .list-leave-active {
      transition: all 1s ease;
    }

    .list-enter {
      opacity: 0;
    }

    .list-leave-to {
      opacity: 0;
    }
  }

  .before {
    z-index: 5;
    width: 40px;
    height: 70px;
    position: absolute;
    top: 175px;
    left: 280px;
    text-align: center;
    cursor: pointer;

    &:hover {
      background: rgba(7, 17, 27, 0.4);
    }

    .previous {
      display: inline-block;
      line-height: 70px;
      color: #fff;
    }
  }

  .after {
    z-index: 5;
    width: 40px;
    height: 70px;
    position: absolute;
    top: 175px;
    right: 280px;
    text-align: center;
    cursor: pointer;

    &:hover {
      background: rgba(7, 17, 27, 0.4);
    }

    .next {
      display: inline-block;
      line-height: 70px;
      color: #fff;
    }
  }
}
</style>
