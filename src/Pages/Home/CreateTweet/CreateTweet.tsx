import { useEffect, useRef, useState } from 'react'
import * as S from './CreateTweet.css'

/* To do:
*         Use slate-js or another rich text editor instead of a textfield.
*/

const CreateTweet = () => {


  return (
    <S.CreateTweetContainer>
      <S.ProfileImage to='' className='center'>
        <img src='...' alt="" />
      </S.ProfileImage>
      <S.TextField contentEditable='true' placeholder="What's happening?"></S.TextField>
      <S.TweetButton>Tweet</S.TweetButton>
    </S.CreateTweetContainer>
  )
}

export default CreateTweet

/* Bug: 
*      If you keep don't keep spaces in the text field, the letters will go out of bounds.
*      For now, I made the text field overflow be scroll. 
*/