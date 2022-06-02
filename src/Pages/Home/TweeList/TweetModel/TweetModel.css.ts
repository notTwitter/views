import styled from 'styled-components'

export const TweetContainer = styled.article`
    width: 100%;
    height: auto;
    display: flex;
    padding: 40px 0;
    border-bottom: 1px solid rgb(47,51,54);
`

export const ImageContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: flex-start;
    
    & a {
        width: 60px;
        height: 60px;
        border-radius: 9999px;
        background-color: white;
        margin: 0 20px;
    }

    & a img{
        height: 100%
    }
`

export const TextContainer = styled.div`    
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    max-width: 80%;
    height: auto;
    font-size: 1.2em;

    & > div{
        width: 100%;
    }
`

export const UsernameContainer = styled.div`
    height: auto;
    display: flex;
    justify-content: flex-start;

    & span{
        color: inherit;
        font-size: 1em;
        font-weight: 600;
    }
`

export const TweetText = styled.div`
    height: auto;

    & p{
        height: auto;
        width: 100%;
        color: inherit;
        font-size: 1.2em;
    }
`