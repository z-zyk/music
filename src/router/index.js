import First from "../components/first"
import Singer from "../components/singer"
import Rank from "../components/rank"
import Search from "../components/search"
export const routes=[
  {
    path:"/music/recommend",
    component:First
  },
  {
    path:"/music/singer",
    component:Singer
  },
  {
    path:"/music/rank",
    component:Rank
  },
  {
    path:"/music/search",
    component:Search
  },
]

