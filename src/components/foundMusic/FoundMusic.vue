<template>
  <div class="found-music">
    <div class="wrapper">
      <div class="sub-navbar">
        <ul class="nav">
          <li>
            <router-link to="/foundMusic/recommend">推荐</router-link>
          </li>
          <li>
            <router-link to="/foundMusic/rank">排行榜</router-link>
          </li>
          <li>
            <router-link to="/foundMusic/songs">
              歌单
              <span class="copyright">&copy;</span>
            </router-link>
          </li>
          <li>
            <router-link to="/foundMusic/radio">主播电台</router-link>
          </li>
          <li>
            <router-link to="/foundMusic/singer">歌手</router-link>
          </li>
          <li>
            <router-link to="/foundMusic/newdisc">新碟上架</router-link>
          </li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "found-music"
};
</script>
<style lang="stylus">
.found-music {
  .wrapper {
    width: 100%;
    height: 45px;
    background: red;

    .sub-navbar {
      width: 80%;
      height: 45px;
      margin: 0 auto;
      line-height: 45px;

      .nav {
        display: flex;
        margin-left: 200px;

        &>li {
          height: 45px;
          width: 120px;
          text-align: center;

          &:nth-child(3) {
            &>a {
              position: relative;

              .copyright {
                position: absolute;
                display: block;
                top: -5px;
                right: 10px;
              }
            }
          }

          &>a {
            display: inline-block;
            width: 70px;
            height: 29px;
            line-height: 29px;
            color: #fff;
            text-decoration: none;
            border-radius: 30px;
            font-size: 12px;

            &.router-link-active {
              background: rgba(7, 17, 27, 0.4);
            }
          }
        }
      }
    }
  }
}
</style>
