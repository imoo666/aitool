import { Divider } from '@arco-design/web-react'

export const Footer = () => {
  return (
    <div className="bg-[#f7f8fa] mt-[50px] mx-[-30px] pt-[80px] px-[100px] pb-[40px]">
      <div className="py-[70px] px-[60px] flex flex-col items-center bg-[white] rounded-[8px] flex-shrink-0">
        <div className="flex flex-col items-center">
          <div className="bg-[gray] h-[112px] w-[112px]"></div>
          <div className="mt-[28px] text-[#1d2129] text-[16px]">联系我们</div>
        </div>
        <div className="mt-[12px] text-[#4e5969] text-[14px]">扫码加入 AI 技术讨论群</div>
      </div>
      <Divider className="mt-[50px]" />
      <div className="flex justify-between text-[#86909c] text-[12px]">
        <div className="max-w-[1000px]">
          AI工具集导航收录了国内外数百个不同类型的AI工具，每日更新和添加最新AI工具，帮助你加入人工智能浪潮，自动化高效完成任务！
        </div>
        <div className="">Power by Imoo & Ai-bot</div>
      </div>
    </div>
  )
}
