import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Interface_TweetData } from '../TweetList'
import * as S from './TweetModel.css'

//Prop types
interface Interface_TweetModelProps {
    tweetData?: Interface_TweetData
}

const TweetModel:FC<Interface_TweetModelProps> = (props) => {      //!!!!Computer breaking bug. If I try to desctructure THE props, my RAM starts increasing and my computer gets stuck. BEWARE 
  return (
    <S.TweetContainer to =''>
        <S.ImageContainer>
            <Link to=''><img src="..." alt="" /></Link>
        </S.ImageContainer>
        <S.TextContainer>
            <S.UsernameContainer>
                <span>{props.tweetData?.userName}</span>
            </S.UsernameContainer>
            <S.TweetText> 
                <p>{props.tweetData?.postContent}</p>
            </S.TweetText>
        </S.TextContainer>
    </S.TweetContainer>
  )
}

export default TweetModel

/* Bug: Cannot highlight tweet text*/