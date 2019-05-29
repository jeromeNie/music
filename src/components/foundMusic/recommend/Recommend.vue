<template>
  <div class="recommend">
    <slider :slideList="this.sliderList"></slider>
    <div class="banner">
      <router-link to="/download">
        <span class="fa fa-download"></span>&nbsp;下载客户端
      </router-link>
      <span class="shadowl"></span>
      <span class="shadowr"></span>
    </div>
    <div class="content">
      <div class="main-content">
        <div class="hot-recommend">
          <h1 class="title">
            <span class="icon fa fa-circle-thin"></span>&nbsp;热门推荐
          </h1>
          <ul class="nav">
            <li>
              <a href="https://music.163.com/#/discover/playlist/?cat=%E5%8D%8E%E8%AF%AD">华语</a>&nbsp;|&nbsp;
            </li>
            <li>
              <a href="https://music.163.com/#/discover/playlist/?cat=%E6%B5%81%E8%A1%8C">流行</a>&nbsp;|&nbsp;
            </li>
            <li>
              <a href="https://music.163.com/#/discover/playlist/?cat=%E6%91%87%E6%BB%9A">摇滚</a>&nbsp;|&nbsp;
            </li>
            <li>
              <a href="https://music.163.com/#/discover/playlist/?cat=%E6%B0%91%E8%B0%A3">民谣</a>&nbsp;|&nbsp;
            </li>
            <li>
              <a href="https://music.163.com/#/discover/playlist/?cat=%E7%94%B5%E5%AD%90">电子</a>
            </li>
          </ul>
          <p class="more">
            <a href="https://music.163.com/#/discover/playlist/">更多</a>
            <span class="icon fa fa-arrow-right"></span>
          </p>
          <card :songs="this.songs" v-if="this.songs.length>0"></card>
        </div>
        <div class="new-disc">
          <h1 class="title">
            <span class="icon fa fa-circle-thin"></span>&nbsp;热门推荐
          </h1>
          <p class="more">
            <a href="https://music.163.com/#/discover/playlist/">更多</a>
            <span class="icon fa fa-arrow-right"></span>
          </p>
          <div class="slide-box">
            <card-slide ref="slide" :discs="this.discs" v-if="this.discs.length>0"></card-slide>
            <span class="left" @click="left">&lt;</span>
            <span class="right" @click="right">&gt;</span>
          </div>
        </div>
        <div class="rank">
          <h1 class="title">
            <span class="icon fa fa-circle-thin"></span>&nbsp;榜单
          </h1>
          <p class="more">
            <a href="https://music.163.com/#/discover/playlist/">更多</a>
            <span class="icon fa fa-arrow-right"></span>
          </p>
          <div class="wrap">
            <div class="improve">
              <div class="head">
                <div class="image">
                  <img src="./improve.png">
                </div>
                <div class="text">
                  <a class="link" href>云音乐飙升榜</a>
                  <span class="icon fa fa-play-circle-o fa-2x"></span>
                  <span class="icon fa fa-plus-square-o fa-2x"></span>
                </div>
              </div>
              <ul class="songs">
                <li v-for="(song,index) in this.songList1" :key="index">
                  <span class="text">{{index+1}}</span>
                  {{song.name}}
                </li>
              </ul>
              <div class="bottom">
                <a href="https://music.163.com/#/discover/toplist?id=19723756">查看全部&gt;</a>
              </div>
            </div>
            <div class="new">
              <div class="head">
                <div class="image">
                  <img src="./new.png">
                </div>
                <div class="text">
                  <a class="link" href>云音乐新歌榜</a>
                  <span class="icon fa fa-play-circle-o fa-2x"></span>
                  <span class="icon fa fa-plus-square-o fa-2x"></span>
                </div>
              </div>
              <ul class="songs">
                <li v-for="(song,index) in this.songList2" :key="index">
                  <span class="text">{{index+1}}</span>
                  {{song.name}}
                </li>
              </ul>
              <div class="bottom">
                <a href="https://music.163.com/#/discover/toplist?id=3779629">查看全部&gt;</a>
              </div>
            </div>
            <div class="origin">
              <div class="head">
                <div class="image">
                  <img src="./origin.png">
                </div>
                <div class="text">
                  <a class="link" href>网易原创歌曲榜</a>
                  <span class="icon fa fa-play-circle-o fa-2x"></span>
                  <span class="icon fa fa-plus-square-o fa-2x"></span>
                </div>
              </div>
              <ul class="songs">
                <li v-for="(song,index) in songList3" :key="index">
                  <span class="text">{{index+1}}</span>
                  {{song.name}}
                </li>
              </ul>
              <div class="bottom">
                <a href="https://music.163.com/#/discover/toplist?id=2884035">查看全部&gt;</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="side-bar">
        <div class="login">
          <p class="text">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
          <button class="btn">用户登录</button>
        </div>
        <div class="singer">
          <div class="head">
            <span class="title">入驻歌手</span>
            <a class="link" href="https://music.163.com/#/discover/artist/signed/">查看全部&nbsp;&gt;</a>
          </div>
          <div class="singer-box">
            <a
              class="singer-card"
              :href="singer.url"
              v-for="(singer,index) in singers"
              :key="index"
            >
              <img class="icon" :src="singer.imgUrl">
              <p class="info">
                {{singer.name}}
                <br>
                {{singer.desc}}
              </p>
            </a>
          </div>
          <a href="https://music.163.com/nmusician/web/index#/" class="btn">申请成为网易音乐人</a>
        </div>
        <div class="hoster">
          <div class="head">
            <span class="title">热门主播</span>
          </div>
          <div class="hoster-box">
            <div class="hoster-card" v-for="(hoster,index) in hosters" :key="index">
              <a class="icon" :href="hoster.url">
                <img :src="hoster.imgUrl">
              </a>
              <div class="info">
                <p class="name">{{hoster.name}}</p>
                <p class="desc">{{hoster.desc | ellipse}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Slider from "@/base/slider/Slider";
import Card from "@/base/card/Card";
import CardSlide from "@/base/cardslide/CardSlide";
export default {
  name: "recommend",
  data() {
    return {
      sliderList: [],
      songs: [],
      discs: [],
      songList1: [
        { name: "四块五" },
        { name: "是红" },
        { name: "谜语" },
        { name: "我的名字" },
        { name: "孤独之书" },
        { name: "鲸鱼" },
        { name: "我的一个道姑朋友" },
        { name: "孤身" },
        { name: "老少年" },
        { name: "Howlin'404" }
      ],
      songList2: [
        { name: "我的一个道姑朋友" },
        { name: "残酷月光" },
        { name: "四块五" },
        { name: "孤单心事" },
        { name: "别叫我达芬奇" },
        { name: "这一生关于你的风景" },
        { name: "是红" },
        { name: "Cross Me" },
        { name: "失眠飞行" },
        { name: "孤身" }
      ],
      songList3: [
        { name: "四块五" },
        { name: "孤身" },
        { name: "失眠飞行" },
        { name: "玻璃弹球" },
        { name: "一直很安静" },
        { name: "超人" },
        { name: "纵身跳入泥泞" },
        { name: "Black" },
        { name: "i'm with you" },
        { name: "浮云" }
      ],
      singers: [
        {
          name: "张惠妹aMEI",
          url: "https://music.163.com/#/user/home?id=29879272",
          desc: "台湾歌手张惠妹",
          imgUrl:
            "http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62"
        },
        {
          name: "Fine乐团",
          url: "https://music.163.com/#/user/home?id=100167517",
          desc: "独立音乐人",
          imgUrl:
            "http://p1.music.126.net/1EN_iqQWU_E3DafzEOh3cA==/3302932937408956.jpg?param=62y62"
        },
        {
          name: "万晓利",
          url: "https://music.163.com/#/user/home?id=58426904",
          desc: "民谣歌手",
          imgUrl:
            "http://p1.music.126.net/ZuktZvjcxpYBjcWC3gmbPg==/19027048718765608.jpg?param=62y62"
        },
        {
          name: "音乐人赵雷",
          url: "https://music.163.com/#/user/home?id=93504818",
          desc: "民谣歌手",
          imgUrl:
            "http://p1.music.126.net/v_zYgE9kmAwVGWV2c8hFxA==/7943971513291094.jpg?param=62y62"
        },
        {
          name: "王三溥",
          url: "https://music.163.com/#/user/home?id=46998208",
          desc: "音乐人",
          imgUrl:
            "http://p1.music.126.net/6wPGl_ddgAbJTx5kOohcyw==/109951163892302996.jpg?param=62y62"
        }
      ],
      hosters: [
        {
          name: "陈立",
          desc: "心理学家、美食学家陈立教授",
          imgUrl:
            "http://p1.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40",
          url: "https://music.163.com/#/user/home?id=278438485"
        },
        {
          name: "DJ艳秋",
          desc: "著名音乐节目主持人",
          imgUrl:
            "http://p1.music.126.net/y5-sM7tjnxnu_V9LWKgZlw==/7942872001461517.jpg?param=40y40",
          url: "https://music.163.com/#/user/home?id=91239965"
        },
        {
          name: "国家大剧院古典音乐频道",
          desc: "国家大剧院古典音乐官方",
          imgUrl:
            "http://p1.music.126.net/6cc6lgOfQTo6ovNnTHPyJg==/3427177769086282.jpg?param=40y40",
          url: "https://music.163.com/#/user/home?id=324314596"
        },
        {
          name: "谢谢收听",
          desc: "南京电台主持人王馨",
          imgUrl:
            "http://p1.music.126.net/xa1Uxrrn4J0pm_PJwkGYvw==/3130309604335651.jpg?param=40y40",
          url: "https://music.163.com/#/user/home?id=1611157"
        },
        {
          name: "DJ晓苏",
          desc: "独立DJ,CRI环球旅游广播",
          imgUrl:
            "http://p1.music.126.net/slpd09Tf5Ju82Mv-h8MP4w==/3440371884651965.jpg?param=40y40",
          url: "https://music.163.com/#/user/home?id=2313954"
        }
      ]
    };
  },
  components: {
    slider: Slider,
    card: Card,
    "card-slide": CardSlide
  },
  methods: {
    left() {
      let l = this.$refs.slide.$el.offsetLeft;
      if (l === 0) {
        l += -768;
      }
      this.$refs.slide.$el.style.left = l + "px";
    },
    right() {
      let l = this.$refs.slide.$el.offsetLeft;
      if (l === -768) {
        l += 768;
      }
      this.$refs.slide.$el.style.left = l + "px";
    }
  },
  created() {
    this.axios
      .get("/sliderList")
      .then(res => {
        return res.data;
      })
      .then(data => {
        this.sliderList = data.data;
      });

    this.axios
      .get("/songs")
      .then(res => {
        return res.data;
      })
      .then(data => {
        this.songs = data.data;
      });
    this.axios
      .get("/discs")
      .then(res => {
        return res.data;
      })
      .then(data => {
        this.discs = data.data;
      });
  },
  filters: {
    ellipse: function(value) {
      if (value.length > 10) {
        return (value = value.slice(0, 9) + "...");
      }
      return value;
    }
  }
};
</script>
<style lang="stylus">
.recommend {
  width: 100%;
  position: relative;

  .banner {
    width: 300px;
    height: 420px;
    background: red;
    position: absolute;
    right: 360px;
    top: 0;
    background: url('banner.png') no-repeat center;

    a {
      display: block;
      background: #2868C3;
      color: #fff;
      text-decoration: none;
      position: absolute;
      bottom: 86px;
      left: 18px;
      width: 260px;
      height: 70px;
      text-align: center;
      line-height: 70px;
      font-size: 30px;
      border-radius: 5px;
    }

    .shadowl {
      display: block;
      position: absolute;
      width: 1px;
      height: 420px;
      left: 0;
      box-shadow: -5px 0 10px rgba(7, 17, 27, 0.4);
    }

    .shadowr {
      display: block;
      position: absolute;
      width: 1px;
      height: 420px;
      right: 0;
      box-shadow: 5px 0 10px rgba(7, 17, 27, 0.4);
    }
  }

  .content {
    position: absolute;
    left: 350px;
    display: flex;
    height: 1600px;

    .main-content {
      width: 888px;
      height: 1785px;
      background-color: #fff;
      border-left: 1px solid rgba(7, 17, 27, 0.2);

      .hot-recommend {
        display: flex;
        width: 90%;
        margin: 30px auto;
        height: 30px;
        border-bottom: 3px solid red;

        .title {
          font-size: 25px;

          .icon {
            color: red;
          }
        }

        .nav {
          display: flex;
          flex-grow: 1;
          box-sizing: border-box;
          padding-left: 20px;

          li {
            height: 15px;
            line-height: 15px;
            margin: 5px;
            color: #999;

            a {
              text-decoration: none;
              color: #999;

              &:hover {
                text-decoration: underline;
              }
            }
          }
        }

        .more {
          height: 30px;
          line-height: 30px;
          font-size: 14px;

          a {
            text-decoration: none;
            color: #999;

            &:hover {
              text-decoration: underline;
            }
          }

          .icon {
            color: red;
          }
        }
      }

      .new-disc {
        display: flex;
        width: 90%;
        margin: 600px auto 350px auto;
        height: 30px;
        border-bottom: 3px solid red;

        .title {
          flex-grow: 1;
          font-size: 25px;

          .icon {
            color: red;
          }
        }

        .more {
          height: 30px;
          line-height: 30px;
          font-size: 14px;

          a {
            text-decoration: none;
            color: #999;

            &:hover {
              text-decoration: underline;
            }
          }

          .icon {
            color: red;
          }
        }

        .slide-box {
          position: absolute;
          top: 750px;
          width: 799px;
          height: 250px;
          background: #eee;
          overflow: hidden;

          .left {
            position: absolute;
            top: 40%;
            left: 10px;
            color: #ccc;
            font-weight: 700;
            cursor: pointer;
          }

          .right {
            position: absolute;
            top: 40%;
            right: 10px;
            color: #ccc;
            font-weight: 700;
            cursor: pointer;
          }
        }
      }

      .rank {
        display: flex;
        width: 90%;
        margin: 100px auto;
        height: 30px;
        border-bottom: 3px solid red;

        .title {
          flex-grow: 1;
          font-size: 25px;

          .icon {
            color: red;
          }
        }

        .more {
          height: 30px;
          line-height: 30px;
          font-size: 14px;

          a {
            text-decoration: none;
            color: #999;

            &:hover {
              text-decoration: underline;
            }
          }

          .icon {
            color: red;
          }
        }

        .wrap {
          width: 798px;
          display: flex;
          position: absolute;
          top: 1100px;
          background: #eee;
          border: 1px solid rgba(7, 17, 27, 0.2);

          .improve {
            width: 263px;
            box-sizing: border-box;
            padding: 20px 0 0 0;

            .head {
              display: flex;
              padding: 0 20px;

              .image {
                box-shadow: 0 5px 5px rgba(7, 17, 27, 0.6);
              }

              .text {
                margin-left: 20px;
              }
            }

            .songs {
              margin-top: 20px;

              li {
                width: 100%;
                height: 40px;
                box-sizing: border-box;
                padding: 0 20px;
                line-height: 40px;

                &:nth-child(even) {
                  background: #eee;
                }

                &:nth-child(odd) {
                  background: #ddd;
                }

                .text {
                  font-size: 20px;
                  font-weight: 400;
                  margin-right: 15px;
                  color: #999;
                }
              }
            }

            .bottom {
              height: 40px;
              background: #ddd;
              box-sizing: border-box;
              padding: 0 20px;

              a {
                text-decoration: none;
                color: black;
                line-height: 40px;
                font-size: 12px;
                float: right;
              }
            }
          }

          .new {
            width: 263px;
            box-sizing: border-box;
            padding: 20px 0 0 0;
            border-left: 1px solid rgba(7, 17, 27, 0.2);
            border-right: 1px solid rgba(7, 17, 27, 0.2);

            .head {
              display: flex;
              padding: 0 20px;

              .image {
                box-shadow: 0 5px 5px rgba(7, 17, 27, 0.6);
              }

              .text {
                margin-left: 20px;
              }
            }

            .songs {
              margin-top: 20px;

              li {
                width: 100%;
                height: 40px;
                box-sizing: border-box;
                padding: 0 20px;
                line-height: 40px;

                &:nth-child(even) {
                  background: #eee;
                }

                &:nth-child(odd) {
                  background: #ddd;
                }

                .text {
                  font-size: 20px;
                  font-weight: 400;
                  margin-right: 15px;
                  color: #999;
                }
              }
            }

            .bottom {
              height: 40px;
              background: #ddd;
              box-sizing: border-box;
              padding: 0 20px;

              a {
                text-decoration: none;
                color: black;
                line-height: 40px;
                font-size: 12px;
                float: right;
              }
            }
          }

          .origin {
            width: 263px;
            box-sizing: border-box;
            padding: 20px 0 0 0;

            .head {
              display: flex;
              box-sizing: border-box;
              padding: 0 20px;

              .image {
                box-shadow: 0 5px 5px rgba(7, 17, 27, 0.6);
              }

              .text {
                margin-left: 20px;
              }
            }

            .songs {
              margin-top: 20px;

              li {
                width: 100%;
                height: 40px;
                box-sizing: border-box;
                padding: 0 20px;
                line-height: 40px;

                &:nth-child(even) {
                  background: #eee;
                }

                &:nth-child(odd) {
                  background: #ddd;
                }

                .text {
                  font-size: 20px;
                  font-weight: 400;
                  margin-right: 15px;
                  color: #999;
                }
              }
            }

            .bottom {
              height: 40px;
              background: #ddd;
              box-sizing: border-box;
              padding: 0 20px;

              a {
                text-decoration: none;
                color: black;
                line-height: 40px;
                font-size: 12px;
                float: right;
              }
            }
          }

          .icon {
            display: inline-block;
            color: #ccc;
            cursor: pointer;
            margin-right: 10px;
            margin-top: 20px;
          }

          .link {
            display: block;
            text-decoration: none;
            color: #333;
            font-size: 18px;
            font-weight: 700;
            margin-top: 10px;
          }
        }
      }
    }

    .side-bar {
      width: 300px;
      height: 1785px;
      background-color: #fff;
      border-left: 1px solid rgba(7, 17, 27, 0.2);
      border-right: 1px solid rgba(7, 17, 27, 0.2);

      .login {
        width: 100%;
        height: 150px;
        box-sizing: border-box;
        padding: 20px;
        background: #ddd;
        text-align: center;
        box-shadow: 0 2px 2px 0 rgba(7, 17, 27, 0.3);

        .text {
          text-align: left;
          line-height: 30px;
          color: #666;
        }

        .btn {
          margin-top: 20px;
          background: red;
          width: 120px;
          height: 35px;
          color: #fff;
          border: none;
          border-radius: 5px;
          box-shadow: 0 0 5px black;
          font-size: 14px;
          font-family: Arial, Helvetica, sans-serif;
          font-weight: 300;
          cursor: pointer;
        }
      }

      .singer {
        box-sizing: border-box;
        padding: 20px;

        .head {
          display: flex;
          justify-content: space-between;
          height: 40px;
          line-height: 40px;
          border-bottom: 1px solid rgba(7, 17, 27, 0.4);

          .title {
            font-weight: 400;
            font-size: 14px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }

          .link {
            font-size: 14px;
            text-decoration: none;
            color: #999;

            &:hover {
              text-decoration: underline;
            }
          }
        }

        .singer-box {
          .singer-card {
            display: block;
            margin-top: 30px;
            background: #eee;
            width: 100%;
            height: 62px;
            border: 1px solid rgba(7, 17, 27, 0.2);

            &:hover {
              background: #ccc;
            }

            .icon {
              display: inline-block;
              width: 62px;
              height: 62px;
            }

            .info {
              display: inline-block;
              margin-left: 20px;
              line-height: 30px;
              vertical-align: top;
              color: #333;
              font-weight: 500;
            }
          }
        }

        .btn {
          display: block;
          text-decoration: none;
          color: #000;
          margin-top: 20px;
          width: 100%;
          height: 30px;
          line-height: 30px;
          text-align: center;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          border: 1px solid rgba(7, 17, 27, 0.2);
          border-radius: 3px;
          background: #eee;

          &:hover {
            background: #ccc;
          }
        }
      }

      .hoster {
        box-sizing: border-box;
        padding: 20px;

        .head {
          height: 40px;
          line-height: 40px;
          border-bottom: 1px solid rgba(7, 17, 27, 0.4);

          .title {
            font-weight: 400;
            font-size: 14px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }
        }

        .hoster-box {
          margin-top: 20px;

          .hoster-card {
            display: flex;
            margin-top: 15px;

            .icon {
              border-radius: 5px;
            }

            .info {
              flex-grow: 1;
              margin-left: 10px;

              .name {
                height: 20px;
                line-height: 20px;
              }

              .desc {
                height: 20px;
                line-height: 20px;
                color: #666;
              }
            }
          }
        }
      }
    }
  }
}
</style>
