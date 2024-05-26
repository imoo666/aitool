import { Menu } from '@arco-design/web-react'
import { useState } from 'react'
import { menus } from '../constants/menu'
import { Logo, LogoImage } from '../../../components/Logo'
import { IconName } from '../../../components/IconName'
import { useNavigate } from 'react-router-dom'

const TITLE_HEIGHT = 74
const TITLE_WIDTH = 220
const LOGO_WIDTH = 48

export const Aside = () => {
  const [trigger, setTrigger] = useState(false)
  const naviagate = useNavigate()
  return (
    <Menu
      className="overflow-y-scroll h-full"
      style={{ width: trigger ? LOGO_WIDTH : TITLE_WIDTH }}
      hasCollapseButton
      onCollapseChange={(collapsed) => setTrigger(collapsed)}
    >
      {trigger ? (
        <div
          className="p-[10px] bg-white flex items-center justify-center"
          style={{ height: TITLE_HEIGHT, width: LOGO_WIDTH - 4 * 2 }}
        >
          <img src={LogoImage} />
        </div>
      ) : (
        <Logo style={{ height: TITLE_HEIGHT, width: TITLE_WIDTH - 8 * 2 }} text="管理平台"></Logo>
      )}
      <div className="overflow-y-scroll" style={{ height: `calc(100% - ${TITLE_HEIGHT}px)` }}>
        {menus.map((item) => (
          <Menu.Item key={item.key} onClick={() => naviagate(item.key)}>
            <IconName name={item.name} icon={item.icon} />
          </Menu.Item>
        ))}
      </div>
    </Menu>
  )
}
