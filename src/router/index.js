import Vue from 'vue'
import Router from 'vue-router'
import FoundMusic from "../components/foundMusic/FoundMusic"
import MyMusic from "../components/myMusic/MyMusic"
import Friend from "../components/friend/Friend"
import Download from "../components/download/Download"
import NewDisc from "../components/foundMusic/newdisc/NewDisc"
import Radio from "../components/foundMusic/radio/Radio"
import Rank from "../components/foundMusic/rank/Rank"
import Recommend from "../components/foundMusic/recommend/Recommend"
import Singer from "../components/foundMusic/singer/Singer"
import Songs from "../components/foundMusic/songs/Songs"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/foundMusic",
      component: FoundMusic,
      children: [
        { path: "/foundMusic/newdisc", component: NewDisc },
        { path: "/foundMusic/radio", component: Radio },
        { path: "/foundMusic/rank", component: Rank },
        { path: "/foundMusic/recommend", component: Recommend },
        { path: "/foundMusic/singer", component: Singer },
        { path: "/foundMusic/songs", component: Songs },
      ],
      redirect: { path: "/foundMusic/recommend" }
    },
    {
      path: "/myMusic",
      component: MyMusic
    },
    {
      path: "/friend",
      component: Friend
    },
    {
      path: "/download",
      component: Download
    },
    {
      path: "*",
      redirect: { path: "/foundMusic" }
    }
  ],
  mode: "history"
})
