import { Aside } from './components/Aside'

export const Management = () => {
  return (
    <div className="h-full flex">
      <Aside></Aside>
      <div className="flex-1 px-[30px] h-full overflow-y-scroll"></div>
    </div>
  )
}
