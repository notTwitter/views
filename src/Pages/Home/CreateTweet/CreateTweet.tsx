import * as S from './CreateTweet.css'

const CreateTweet = () => {
  return (
    <S.CreateTweetContainer>
      <S.ProfileImage to='' className='center'>
        <img src='...' alt="" />
      </S.ProfileImage>
      <S.TextField contentEditable='true' placeholder='Yo'></S.TextField>
      <S.TweetButton>Tweet</S.TweetButton>
    </S.CreateTweetContainer>
  )
}

export default CreateTweet

/* Bug: 
*      If you keep don't keep spaces in the text field, the letters will go out of bounds.
*      For now, I made the text field overflow be scroll. 
*/