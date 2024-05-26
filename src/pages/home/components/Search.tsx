import { Input } from '@arco-design/web-react'
import classNames from 'classnames'
import { useEffect, useMemo, useState } from 'react'
import { MenuItem, searchList } from '../constants/menu'
import { Logo } from '../../../components/Logo'

export const Search = () => {
  const [selectedTypeKey, setSelectedTypeKey] = useState('common')
  const childrenList = useMemo(() => {
    return searchList.find((item) => item.key === selectedTypeKey)?.children || []
  }, [selectedTypeKey])

  const [selectedItem, setSelectedItem] = useState<MenuItem>(childrenList[0])
  useEffect(() => {
    setSelectedItem(childrenList[0])
  }, [childrenList])

  return (
    <div className="flex flex-col items-center justify-center">
      <Logo style={{ background: 'transparent' }}></Logo>
      <div className="relative mb-[15px] mt-[30px]">
        <div className="flex">
          {searchList.map((item) => (
            <div
              key={item.key}
              className={classNames(
                'text-[#282a2d] text-[15px] select-none cursor-pointer opacity-50 hover:opacity-100 transition w-[60px] text-center',
                { 'opacity-100': item.key === selectedTypeKey }
              )}
              onClick={() => setSelectedTypeKey(item.key)}
            >
              {item.name}
            </div>
          ))}
        </div>
        <div
          className="bg-[#888] rounded-[100px] h-[4px] w-[36px] absolute mt-[2px]"
          style={{
            left: searchList.findIndex((item) => item.key === selectedTypeKey) * 60 + (60 - 36) / 2,
            transition: 'left 0.3s ease'
          }}
        ></div>
      </div>
      <Input.Search
        className="hover:bg-[#c2c3c6] focus:bg-[#c2c3c6] bg-[#c3c5c8] w-[800px] py-[9px] px-[20px] rounded-[50px] mb-[10px]"
        placeholder={selectedItem?.name + ' 搜索'}
      ></Input.Search>
      <div className="relative" style={{ width: childrenList.length * (60 + 5 * 2) }}>
        <div
          className="h-0 w-0 absolute top-[-10px]"
          style={{
            left:
              childrenList.findIndex((item) => item.key === selectedItem.key) * 70 + (70 - 16) / 2,
            transition: 'left 0.3s ease',
            borderWidth: '8px 8px 0px 8px',
            borderStyle: 'solid',
            borderColor: '#c3c5c8 transparent transparent transparent'
          }}
        ></div>
      </div>

      <div className="flex mb-[50px]">
        {childrenList.map((item) => (
          <div
            key={item.key}
            className="text-[#6c757d] text-[13px] select-none cursor-pointer transition w-[60px] mx-[5px] text-center truncate"
            onClick={() => setSelectedItem(item)}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  )
}
