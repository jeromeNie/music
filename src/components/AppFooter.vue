<template>
  <div class="app-footer">
    <div class="wrapper">
      <div class="info">
        <ul class="navbar">
          <li>
            <a href="https://music.163.com/about" target="_blank">关于网易</a>&nbsp;|
          </li>
          <li>
            <a href="https://help.mail.163.com/service.html" target="_blank">客户服务</a>&nbsp;|
          </li>
          <li>
            <a href="https://music.163.com/html/web2/service.html" target="_blank">服务条款</a>&nbsp;|
          </li>
          <li>
            <a href="https://corp.163.com/gb/legal.html" target="_blank">隐私政策</a>&nbsp;|
          </li>
          <li>
            <a href="https://music.163.com/st/staticdeal/complaints.html" target="_blank">版权投诉指引</a>&nbsp;|
          </li>
          <li>
            <a href="#">意见反馈</a>&nbsp;|
          </li>
        </ul>
        <p class="company">
          网易公司版权所有&copy;1997-2019 &nbsp;杭州乐读科技有限公司运营：
          <a
            href="http://p1.music.126.net/03WF0APmm-J0TqdbOc8-XQ==/109951163649544962.png"
            target="_blank"
          >浙网文[2018]3506-263号</a>
        </p>
        <p class="report">
          违法和不良信息举报电话：0571-89853516 &nbsp;举报邮箱：
          <a href="#">251522608@qq.com</a>
        </p>
      </div>

      <div class="icon-group">
        <div class="wrap">
          <span class="icon fa fa-user-o fa-2x"></span>
          <p class="text">
            <a href="https://music.163.com/st/userbasic#/auth" target="_blank">用户认证</a>
          </p>
        </div>
        <div class="wrap">
          <span class="icon fa fa-music fa-2x"></span>
          <p class="text">
            <a href="https://music.163.com/nmusician/web/index#/" target="_blank">独立音乐人</a>
          </p>
        </div>
        <div class="wrap">
          <span class="icon fa fa-thumbs-o-up fa-2x"></span>
          <p class="text">
            <a href="https://music.163.com/web/reward" target="_blank">赞赏</a>
          </p>
        </div>
        <div class="wrap">
          <span class="icon fa fa-play-circle-o fa-2x"></span>
          <p class="text">
            <a
              href="https://music.163.com/#/login?targetUrl=https%3A%2F%2Fmusic.163.com%2Fuservideo%23%2Fplan"
              target="_blank"
            >视频奖励</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "app-footer"
};
</script>
<style lang="stylus">
.app-footer {
  position: absolute;
  bottom: -185px;
  width: 100%;
  height: 185px;
  background: #ccc;
  border-top: 1px solid rgba(7, 17, 27, 0.1);

  .wrapper {
    width: 1200px;
    height: 185px;
    margin: 0 auto;
    display: flex;

    .info {
      margin-top: 25px;

      .navbar {
        display: flex;

        &>li {
          color: #999;

          &>a {
            margin: 0 10px;
            text-decoration: none;
            color: #999;

            &:hover {
              text-decoration: underline;
            }
          }

          &:nth-child(1) {
            &>a {
              margin-left: 0;
            }
          }
        }
      }

      .company {
        color: #666;
        margin-top: 20px;

        &>a {
          color: #999;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }
      }

      .report {
        color: #666;
        margin-top: 20px;

        &>a {
          color: #999;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    .icon-group {
      flex-grow: 1;
      text-align: center;
      display: flex;
      margin-top: 30px;
      margin-left: 200px;

      .wrap {
        width: 100px;

        .icon {
          display: inline-block;
          width: 50px;
          height: 50px;
          border: 2px solid #999;
          border-radius: 50%;
          line-height: 50px;
          color: #999;
        }

        .text {
          margin-top: 10px;

          &>a {
            color: #999;
            text-decoration: none;
          }
        }
      }
    }
  }
}
</style>


