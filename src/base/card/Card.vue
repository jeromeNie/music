<template>
  <div class="card">
    <div class="card-box" v-for="(song,index) in songs" :key="index">
      <a class="pic" :href="song.songsUrl">
        <img :src="song.image" :alt="song.desc">
      </a>
      <div class="opacity">
        <span class="phone fa fa-headphones"></span>
        <span>{{song.playTimes}}</span>
        <span class="play fa fa-play-circle-o"></span>
      </div>
      <div class="text">
        <a :href="song.songsUrl" class="radio" v-show="song.radio">
          <span>电台节目</span>
        </a>
        <a :href="song.songsUrl">{{song.introduce}}</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "card",
  props: {
    songs: {
      type: Array
    }
  }
};
</script>
<style lang="stylus">
.card {
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 799px;
  top: 50px;

  .card-box {
    position: relative;
    width: 150px;
    height: 200px;
    margin-left: 30px;
    margin-top: 50px;

    &:first-child, &:nth-child(5) {
      margin-left: 0;
    }

    .pic {
      display: block;
      height: 150px;
      width: 150px;

      img {
        width: 150px;
        height: 150px;
      }
    }

    .opacity {
      position: absolute;
      width: 150px;
      height: 30px;
      line-height: 30px;
      color: #fff;
      background: rgba(7, 17, 27, 0.6);
      border-top: 1px solid rgba(7, 17, 27, 0.4);
      border-bottom: 1px solid rgba(7, 17, 27, 0.4);
      bottom: 50px;

      .phone {
        margin-left: 10px;
      }

      .play {
        float: right;
        margin-right: 10px;
        margin-top: 7px;

        &:after {
          content: '';
          display: block;
          visibility: hidden;
          clear: both;
          overflow: hidden;
        }
      }
    }

    .text {
      margin-top: 15px;

      a {
        text-decoration: none;
        color: #000;
        font-size: 18px;
        line-height: 18px;

        &:last-child {
          &:hover {
            text-decoration: underline;
          }
        }
      }

      .radio {
        line-height: 18px;
        font-size: 8px;
        border: 1px solid red;
        color: red;
        cursor: pointer;
      }
    }
  }
}
</style>
