import { useRef} from 'react'
import { POST_TWEET_ROUTE, PRODUCTION_SERVER_DOMAIN, PRODUCTION_SERVER_PORT } from '../../../frontend.config'
import * as S from './CreateTweet.css'

/* To do:
*         Use slate-js or another rich text editor instead of a textfield.
*/

//types
interface InterfaceTweetPayload {
  userName: string, postContent: string
}

const CreateTweet = () => {

  //Tweet button 
  const tweetButton = useRef<HTMLButtonElement>(null)
  const textField = useRef<HTMLTextAreaElement>(null)
  const clickedTweet = ():void => {
    if(textField.current!==null && textField.current.value!==''){
      const tweetContent = textField.current.value
      const payload = {
        userName: 'user', postContent: tweetContent
      }
      postToServer(payload)
    }
  }

  //Post tweet content to server
  const postToServer = (payload: InterfaceTweetPayload):void => {
    fetch(`http://${PRODUCTION_SERVER_DOMAIN}:${PRODUCTION_SERVER_PORT}/${POST_TWEET_ROUTE}`, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(payload),
        headers: {'Content-Type': 'application/json'}                                                     //Without this header, the server won't send back json data
    })
  }

  return (
    <S.CreateTweetContainer>
      <S.ProfileImage to='' className='center'>
        <img src='...' alt="" />
      </S.ProfileImage>
      <S.TextField placeholder="What's happening?" ref={textField}></S.TextField>
      <S.TweetButton ref={tweetButton} onClick={clickedTweet}>Tweet</S.TweetButton>
    </S.CreateTweetContainer>
  )
}

export default CreateTweet

/* Bug: 
*      If you keep don't keep spaces in the text field, the letters will go out of bounds.
*      For now, I made the text field overflow be scroll. 
*/