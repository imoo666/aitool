import classNames from 'classnames'
import { newTabs } from '../../constants/menu'

interface Props {
  value?: string
  onChange?: (value: string) => void
}
export const NewsSelector = ({ value, onChange }: Props) => {
  return (
    <div className="flex flex-col justify-between mr-[8px]">
      {newTabs.map((tab) => (
        <div
          key={tab.key}
          className={classNames(
            'w-[65px] h-[65px] p-[5px]  rounded-[8px] flex flex-col justify-center items-center select-none cursor-pointer group transition hover:bg-[#e6e6e6]',
            {
              'bg-[#e6e6e6]': value === tab.key,
              'bg-[transparent]': value !== tab.key
            }
          )}
          onClick={() => {
            onChange && onChange(tab.key)
          }}
        >
          <div className="group-hover:text-[#5961f9] text-[25px] leading-[1em] text-[#282a2d]">
            {tab.icon}
          </div>
          <div className="text-[12px] text-[#6c757d]">{tab.name}</div>
        </div>
      ))}
    </div>
  )
}
