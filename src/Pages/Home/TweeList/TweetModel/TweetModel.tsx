import { Link } from 'react-router-dom'
import * as S from './TweetModel.css'

const TweetModel = () => {
  return (
    <S.TweetContainer to =''>
        <S.ImageContainer>
            <Link to=''><img src="..." alt="" /></Link>
        </S.ImageContainer>
        <S.TextContainer>
            <S.UsernameContainer>
                <span>User</span>
            </S.UsernameContainer>
            <S.TweetText> 
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, voluptates sint neque dolore commodi quis dolorum illum qui vero optio, at ipsam hic est deleniti quaerat doloribus! Culpa, in illum?</p>
            </S.TweetText>
        </S.TextContainer>
    </S.TweetContainer>
  )
}

export default TweetModel

/* Bug: Cannot highlight tweet text*/