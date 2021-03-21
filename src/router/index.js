import SplitIndex from '../pages/splitAndAssemble/index/index'
import SplitSentenceTest from '../pages/splitAndAssemble/sentenceTest/index'
import MyCanvas from '../pages/memory/index'
import SunBg from '../pages/memory/sunbg/index'


const routerArr = [
  {
    name: '/',
    component: SunBg
  },
  {
    name: '/splitIndex',
    component: SplitIndex
  },
  {
    name: '/splitSentenceTest',
    component: SplitSentenceTest
  },
  {
    name: '/myCanvas',
    component: MyCanvas
  }
]

export default  routerArr