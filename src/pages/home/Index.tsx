import { IconFire, IconNotification } from '@arco-design/web-react/icon'
import { Aside } from './components/Aside'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Search } from './components/Search'
import { ToolList } from './components/ToolList'
import { News } from './components/news/News'
import { menus } from './constants/menu'
import { hotTool } from './constants/tool/hot'
import { newTool } from './constants/tool/new'

const allMenus = [
  { name: '热门工具', key: 'hot', tools: hotTool, icon: <IconFire /> },
  { name: '最新收录', key: 'new', tools: newTool, icon: <IconNotification /> },
  ...menus
]
export const Home = () => {
  return (
    <div className="h-full flex">
      <Aside></Aside>
      <div className="flex-1 px-[30px] h-full overflow-y-scroll">
        <Header></Header>
        <Search></Search>
        <News></News>
        {allMenus.map((menu) => {
          return <ToolList key={menu.key} menu={menu}></ToolList>
        })}
        <Footer></Footer>
      </div>
    </div>
  )
}
