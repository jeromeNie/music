<template>
  <div class="card-slide">
    <div class="card-box" v-for="(disc,index) in this.discs" :key="index">
      <a class="pic" :href="disc.clickUrl">
        <img :src="disc.image" :alt="disc.desc">
      </a>
      <p class="name">{{disc.name}}</p>
      <p class="singer">{{disc.singer}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "card-slide",
  props: {
    discs: {
      type: Array
    }
  }
};
</script>
<style lang="stylus">
.card-slide {
  width: 1520px;
  height: 250px;
  display: flex;
  overflow: hidden;
  box-sizing: border-box;
  padding: 35px 40px;
  position: absolute;
  transition: all 1s linear;

  .card-box {
    width: 150px;
    height: 130px;
    margin-left: 40px;

    &:first-child {
      margin-left: 3px;
    }

    .pic {
      img {
        box-shadow: 0 2px 5px black;
      }
    }

    .name {
      margin-top: 10px;
      font-size: 14px;
      color: #666;
    }

    .singer {
      margin-top: 5px;
      font-size: 12px;
      color: #999;
    }
  }
}
</style>

