import * as S from './TweetList.css'
import TweetModel from './TweetModel/TweetModel'

const TweetList = () => {
  return (
    <S.TweetListContainer>
      <TweetModel/>
      <TweetModel/>
    </S.TweetListContainer>
  )
}

export default TweetList