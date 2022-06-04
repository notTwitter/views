import { useState } from 'react'
import { useSelector } from 'react-redux'
import { InterfaceReduxState } from '../../../StateManager/mainSlice'
import * as S from './TweetList.css'
import TweetModel from './TweetModel/TweetModel'

//Types
interface Interface_TweetData {
  user: string, tweetContent: string
}
export type Type_TweetDataArray = Interface_TweetData[] | null

const TweetList = () => {

  //@ts-ignore
  const {tweetData} = useSelector((state: InterfaceReduxState) => state.tweetData)
  console.log(tweetData)

  if(tweetData!=null){
    return(
      <S.TweetListContainer>
        {/* {
          return(tweetData.forEach(tweet => {
            <TweetModel key={count}/>
          }))
        } */}
      </S.TweetListContainer>
    )
  }
  else{
    return(null)
  }
}

export default TweetList