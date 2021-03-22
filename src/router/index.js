import SplitIndex from '../pages/splitAndAssemble/index/index'
import SplitSentenceTest from '../pages/splitAndAssemble/sentenceTest/index'
import MyCanvas from '../pages/memory/index'
import Memory from '../pages/memory/index'

const routerArr = [
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
  },
  {
    name: '/memory',
    component: Memory
  }
]

export default  routerArr