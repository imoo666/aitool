import { IconAlignCenter } from '@arco-design/web-react/icon'
import { ReactNode } from 'react'

export const IconName = ({ name, icon }: { name: string; icon?: ReactNode }) => {
  return (
    <>
      {icon || <IconAlignCenter></IconAlignCenter>}
      {name}
    </>
  )
}
