import { Grid, Image, Tooltip } from '@arco-design/web-react'
import { IconDoubleRight } from '@arco-design/web-react/icon'
import { MenuItem } from '../constants/menu'

const MAX_TOOL_COUNT = 42
export const ToolList = ({ menu }: { menu: MenuItem }) => {
  if (!menu.tools) return null
  return (
    <div id={menu.key}>
      <div className="flex mt-[40px] justify-between items-center">
        <div className="rounded-full bg-[#e0e0e0]">
          <div className="px-[12px] rounded-full bg-[#5a61f9] m-[4px] text-white flex items-center justify-center py-[4px]">
            {menu.icon}
            <div className="ml-[5px] select-none">{menu.name}</div>
          </div>
        </div>
        <div>
          {menu.tools.length > MAX_TOOL_COUNT && (
            <div className="hover:text-[#5961f9] mr-[5px] select-none cursor-pointer text-[12px] flex items-center text-[#282a2d]">
              <span className="mr-[5px]">全部该分类工具</span>
              <IconDoubleRight />
            </div>
          )}
        </div>
      </div>

      <Grid cols={6} colGap={30} rowGap={15} className="flex-1 mt-[20px]">
        {menu.tools.slice(0, MAX_TOOL_COUNT).map((tool) => {
          return (
            <Grid.GridItem
              key={tool.name}
              className="group bg-white rounded-[4px] p-[15px] flex items-center select-none hover:translate-y-[-5px] transition-all hover:shadow cursor-pointer"
            >
              <div className="w-[40px] h-[40px] flex-shrink-0">
                <Image
                  src="https://ai-bot.cn/wp-content/uploads/2023/03/novel-ai-icon.png"
                  lazyload={{ threshold: 1 }}
                  loader={<></>}
                  preview={false}
                ></Image>
              </div>
              <div className="overflow-hidden ml-[10px]">
                <div className="text-[#282a2d] text-[14px] group-hover:text-[#5961f9] truncate font-[700]">
                  {tool.name}
                </div>
                <Tooltip content={tool.desc} position="right">
                  <div className="text-[#6c757d] text-[12px] truncate">{tool.desc}</div>
                </Tooltip>
              </div>
            </Grid.GridItem>
          )
        })}
      </Grid>
    </div>
  )
}
