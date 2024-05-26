import { Grid } from '@arco-design/web-react'
import { useState } from 'react'
import { NewsSelector } from './NewsSelector'

export const News = () => {
  const [tab, setTab] = useState('news')
  return (
    <div className="flex bg-white rounded-[8px] p-[8px]">
      <NewsSelector value={tab} onChange={setTab} />
      <Grid
        cols={4}
        colGap={16}
        rowGap={16}
        className="bg-[#f2f2f2] flex-1 p-[10px] rounded-[8px] h-[200px] overflow-y-scroll"
      >
        <Grid.GridItem className="bg-[#e6e6e6] rounded-[8px] h-[150px]"></Grid.GridItem>
        <Grid.GridItem className="bg-[#e6e6e6] rounded-[8px] h-[150px]"></Grid.GridItem>
        <Grid.GridItem className="bg-[#e6e6e6] rounded-[8px] h-[150px]"></Grid.GridItem>
        <Grid.GridItem className="bg-[#e6e6e6] rounded-[8px] h-[150px]"></Grid.GridItem>
        <Grid.GridItem className="bg-[#e6e6e6] rounded-[8px] h-[150px]"></Grid.GridItem>
        <Grid.GridItem className="bg-[#e6e6e6] rounded-[8px] h-[150px]"></Grid.GridItem>
      </Grid>
    </div>
  )
}
