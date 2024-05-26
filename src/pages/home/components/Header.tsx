import { Dropdown, Menu, Space } from '@arco-design/web-react'
import { IconDown } from '@arco-design/web-react/icon'
import { MenuItem, header } from '../constants/menu'
import { useNavigate } from 'react-router-dom'

// 定义处理函数类型
type ClickHandler = (key: string) => void

export const Header = () => {
  const navigate = useNavigate()
  // 定义菜单项点击处理函数的映射
  const clickHandlers: Record<string, ClickHandler> = {
    management: () => {
      navigate('/management')
    }
  }
  const handleMenuClick = (key: string) => {
    const handler = clickHandlers[key]
    if (handler) {
      handler(key)
    }
  }

  const renderMenuItem = (item: MenuItem) => (
    <Menu.Item key={item.key} onClick={() => handleMenuClick(item.key)}>
      {item.name}
    </Menu.Item>
  )

  const renderDropdown = (item: MenuItem) => (
    <Dropdown
      position="bl"
      key={item.key}
      trigger="click"
      droplist={<Menu>{item.children!.map(renderMenuItem)}</Menu>}
    >
      <div className="text-[#282a2d] select-none px-[10px] cursor-pointer">
        {item.name} <IconDown />
      </div>
    </Dropdown>
  )

  const renderItem = (item: MenuItem) => {
    return !item.children ? (
      <div
        key={item.key}
        className="text-[#282a2d] select-none py-[15px] px-[10px] cursor-pointer"
        onClick={() => handleMenuClick(item.key)}
      >
        {item.name}
      </div>
    ) : (
      renderDropdown(item)
    )
  }

  return <Space className="mb-[50px] mt-[10px]">{header.map(renderItem)}</Space>
}
