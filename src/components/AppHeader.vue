<template>
  <div class="app-header">
    <div class="navbar">
      <h1 class="Logo">
        <router-link class="index" to="/foundMusic">
          <img src="./musicLogo.jpg" class="icon">
          <span class="text">网易云音乐</span>
        </router-link>
      </h1>

      <nav class="navbar-nav">
        <ul class="nav">
          <li>
            <router-link to="/foundMusic">发现音乐</router-link>
          </li>
          <li>
            <router-link to="/myMusic">我的音乐</router-link>
          </li>
          <li>
            <router-link to="/friend">朋友</router-link>
          </li>
          <li>
            <a href="https://music.163.com/store/product" target="_blank">商城</a>
          </li>
          <li>
            <a href="https://music.163.com/nmusician/web/index#/" target="_blank">音乐人</a>
          </li>
          <li>
            <router-link to="/download">下载客户端</router-link>
          </li>
        </ul>
      </nav>

      <div class="search">
        <div class="search-box">
          <span class="fa fa-search icon"></span>
          <input type="text" placeholder="音乐/视频/电台/用户">
        </div>

        <button class="search-btn">创作者中心</button>
        <span class="dropdown">登录</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-header",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.app-header {
  width: 100%;
  height: 85px;
  background: #333;
  border-bottom: 2px solid red;

  .navbar {
    width: 80%;
    height: 85px;
    display: flex;
    margin: 0 auto;

    .Logo {
      height: 60px;
      line-height: 60px;
      box-sizing: border-box;
      padding: 12px 0;

      .index {
        display: inline-block;
        height: 60px;
        width: 200px;
        text-decoration: none;
        color: #fff;

        .icon {
          width: 80px;
          height: 60px;
          border-radius: 50%;
          display: inline-block;
        }

        .text {
          display: inline-block;
          vertical-align: top;
          font-size: 20px;
        }
      }
    }

    .navbar-nav {
      .nav {
        display: flex;

        &>li {
          width: 120px;
          height: 85px;
          position: relative;
          line-height: 85px;
          text-align: center;

          &>a {
            display: inline-block;
            width: 120px;
            height: 85px;
            color: #fff;
            text-decoration: none;

            &:hover {
              background: black;
            }
          }

          .router-link-active {
            background: black;

            &::after {
              content: '';
              display: block;
              position: absolute;
              bottom: 0;
              left: 50%;
              border-width: 5px;
              border-color: transparent transparent red transparent;
              border-style: solid;
            }
          }
        }

        &:last-child {
          position: relative;

          &:after {
            content: 'Hot';
            display: block;
            position: absolute;
            padding: 0 5px;
            top: 25px;
            right: -25px;
            background: red;
            color: #fff;
            border-radius: 20px;
          }
        }
      }
    }

    .search {
      flex-growth: 1;
      margin-left: 100px;
      height: 85px;
      line-height: 85px;

      .search-box {
        display: inline-block;
        position: relative;

        .icon {
          position: absolute;
          left: 10px;
          top: 35px;
        }

        input {
          width: 150px;
          height: 30px;
          padding: 3px 30px;
          border-radius: 30px;
          outline: none;
          border: none;
        }
      }

      .search-btn {
        width: 100px;
        height: 40px;
        margin-left: 30px;
        border-radius: 30px;
        outline: none;
        background: #333;
        cursor: pointer;
        color: #fff;
        border: 1px solid #ccc;
      }

      .dropdown {
        position: relative;
        margin-left: 30px;
        color: #fff;
        cursor: pointer;

        &::after {
          content: '';
          display: block;
          position: absolute;
          right: -20px;
          top: 50%;
          border-style: solid;
          border-color: #666 transparent transparent transparent;
          border-width: 5px;
        }
      }
    }
  }
}
</style>
