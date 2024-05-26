import {
  IconBook,
  IconBug,
  IconBulb,
  IconCode,
  IconCodepen,
  IconFileImage,
  IconIdcard,
  IconLanguage,
  IconMessage,
  IconMusic,
  IconNotification,
  IconPalette,
  IconPen,
  IconPrinter,
  IconRobot,
  IconStorage,
  IconVideoCamera
} from '@arco-design/web-react/icon'
import { ReactNode } from 'react'
import { audioTool } from './tool/audio'
import { chatTool } from './tool/chat'
import { designTool } from './tool/design'
import { detectionTool } from './tool/detection'
import { evaluationTool } from './tool/evaluation'
import { frameworksTool } from './tool/frameworks'
import { hintsTool } from './tool/hints'
import { imageTool } from './tool/image'
import { officeTool } from './tool/office'
import { programmingTool } from './tool/programming'
import { trainingTool } from './tool/training'
import { translationTool } from './tool/translation'
import { videoTool } from './tool/video'
import { websitesTool } from './tool/websites'
import { writeTool } from './tool/write'

export interface MenuItem {
  name: string
  key: string
  icon?: ReactNode
  children?: MenuItem[]
  tools?: Tool[]
  onClick?: () => void
}
export interface Tool {
  name: string
  desc: string
  link: string
  image: string
}
export const menus: MenuItem[] = [
  { name: 'AI写作工具', key: 'write', tools: writeTool, icon: <IconPen /> },
  { name: 'AI图像工具', key: 'image', tools: imageTool, icon: <IconFileImage /> },
  { name: 'AI视频工具', key: 'video', tools: videoTool, icon: <IconVideoCamera /> },
  { name: 'AI办公工具', key: 'office', tools: officeTool, icon: <IconPrinter /> },
  { name: 'AI设计工具', key: 'design', tools: designTool, icon: <IconPalette /> },
  { name: 'AI对话聊天', key: 'chat', tools: chatTool, icon: <IconMessage /> },
  { name: 'AI编程工具', key: 'programming', tools: programmingTool, icon: <IconCode /> },
  { name: 'AI音频工具', key: 'audio', tools: audioTool, icon: <IconMusic /> },
  { name: 'AI语言翻译', key: 'translation', tools: translationTool, icon: <IconLanguage /> },
  { name: 'AI内容检测', key: 'detection', tools: detectionTool, icon: <IconBug /> },
  { name: 'AI提示指令', key: 'hints', tools: hintsTool, icon: <IconBulb /> },
  { name: 'AI训练模型', key: 'training', tools: trainingTool, icon: <IconRobot /> },
  { name: 'AI模型评测', key: 'evaluation', tools: evaluationTool, icon: <IconIdcard /> },
  { name: 'AI学习网站', key: 'websites', tools: websitesTool, icon: <IconBook /> },
  { name: 'AI开发框架', key: 'frameworks', tools: frameworksTool, icon: <IconCodepen /> }
]

export const header: MenuItem[] = [
  {
    name: 'AI工具集',
    key: 'tools',
    children: [
      { name: 'AI写作工具', key: 'write' },
      { name: 'AI图像工具', key: 'image' },
      { name: 'AI视频工具', key: 'video' },
      { name: 'AI办公工具', key: 'office' },
      { name: 'AI对话聊天', key: 'chat' },
      { name: 'AI音频工具', key: 'audio' },
      { name: 'AI编程工具', key: 'programming' },
      { name: 'AI设计工具', key: 'design' },
      { name: 'AI内容检测', key: 'detection' },
      { name: 'AI学习网站', key: 'websites' },
      { name: 'AI开发框架', key: 'frameworks' },
      { name: 'AI提示指令', key: 'hints' },
      { name: 'AI训练模型', key: 'training' },
      { name: 'AI模型评测', key: 'evaluation' }
    ]
  },
  { name: '提交AI工具', key: 'submit' },
  {
    name: '文章博客',
    key: 'blog',
    children: [
      { name: 'AI快讯', key: 'news' },
      { name: 'AI项目和框架', key: 'projects' },
      { name: 'AI教程', key: 'tutorials' },
      { name: 'AI百科', key: 'encyclopedia' },
      { name: 'AI名人堂', key: 'fame' }
    ]
  },
  { name: '每日AI快讯', key: 'daily' },
  { name: 'AI备案查询', key: 'record' },
  { name: '关于我们', key: 'about' },
  { name: '管理平台', key: 'management' }
]

export const searchList: MenuItem[] = [
  {
    name: '常用',
    key: 'common',
    children: [
      { name: '站内', key: 'zhannei' },
      { name: 'Bing', key: 'bing' },
      { name: '百度', key: 'baidu' },
      { name: '谷歌', key: 'google' },
      { name: 'Perplexity', key: 'perplexity' }
    ]
  },
  {
    name: '搜索',
    key: 'search',
    children: [
      { name: 'Bing', key: 'bing' },
      { name: '百度', key: 'baidu' },
      { name: '谷歌', key: 'google' },
      { name: 'Perplexity', key: 'perplexity' },
      { name: 'YOU', key: 'you' },
      { name: '360', key: '360' },
      { name: '搜狗', key: 'sogo' },
      { name: '神马', key: 'sm' }
    ]
  },
  {
    name: '社区',
    key: 'community',
    children: [
      { name: 'Hugging Face', key: 'huggingface' },
      { name: 'GitHub', key: 'github' },
      { name: '飞桨', key: 'paddlepaddle' },
      { name: '魔搭', key: 'modelscope' },
      { name: '和鲸', key: 'heywhale' },
      { name: '掘金', key: 'juejin' },
      { name: '知乎', key: 'zhihu' }
    ]
  },
  {
    name: '图片',
    key: 'images',
    children: [
      { name: '文心一格', key: 'baiduyige' },
      { name: '花瓣AI圈', key: 'huaban' },
      { name: 'Civitai', key: 'civitai' },
      { name: 'OpenArt', key: 'openart' },
      { name: 'NightCafe', key: 'nightcafe' },
      { name: 'DeviantArt', key: 'deviantArt' },
      { name: 'Lexica', key: 'lexica' }
    ]
  },
  {
    name: '生活',
    key: 'lifestyle',
    children: [
      { name: '淘宝', key: 'taobao' },
      { name: '京东', key: 'jd' },
      { name: '下厨房', key: 'xiachufang' },
      { name: '香哈菜谱', key: 'xiangha' },
      { name: '12306', key: '12306' },
      { name: '快递100', key: 'kd100' },
      { name: '去哪儿', key: 'qunar' }
    ]
  }
]

export const newTabs: MenuItem[] = [
  { name: 'AI快讯', key: 'news', icon: <IconNotification /> },
  { name: 'AI教程', key: 'tutorials', icon: <IconBook /> },
  { name: 'AI百科', key: 'encyclopedia', icon: <IconStorage /> }
]
