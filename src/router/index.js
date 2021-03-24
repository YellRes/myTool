import SplitIndex from '../pages/splitAndAssemble/index/index'
import SplitSentenceTest from '../pages/splitAndAssemble/sentenceTest/index'
import Memory from '../pages/memory/index'
import ClipImg from '../pages/memory/test/clipImg/index'

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
    name: '/memory',
    component: Memory
  },
  {
    name: '/test',
    component: ClipImg
  }
]

export default  routerArr