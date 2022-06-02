import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { TITLE_MARGIN_LEFT } from '../Home.css'

export const CreateTweetContainer = styled.section`
    width: 100%;
    padding: 40px 0;
    border-bottom:1px solid rgb(47,51,54);
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ProfileImage = styled(Link)`
    flex-shrink: 0;
    height: 60px;
    width: 60px;
    border-radius: 9999px;
    overflow: hidden;
    background-color: white;
    margin: 0  ${TITLE_MARGIN_LEFT}px;
    & img{
        height: 100%;
    }
`

export const TextField = styled.textarea`
    color: inherit;
    height: 1.3em;
    resize: none;
    width: 55%;
    flex-grow: 1;
    font-size: 1.2em;
    overflow: scroll;
    background-color:inherit;
    outline: 0;
    border: 0;
    &:focus{
        outline: 0;
        border: 0;
    }
`

export const TweetButton = styled.button`
    flex-shrink: 0;
    color: inherit;
    width:80px;
    height: 40px;
    border-radius: 20px;
    background-color: rgb(29,155,240);
    outline: 0;
    border: 0;
    cursor: pointer;
    margin: 0  ${TITLE_MARGIN_LEFT}px;

    &:hover{
        filter: brightness(0.8)
    }
`