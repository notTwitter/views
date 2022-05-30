import styled from "styled-components";

export const MainSection = styled.section`
    width: 100%; 
    max-width: 3000px;
    height: 100vh;
    max-height: 2160px;  /*4k*/
    display: flex;
    position: relative;
    color: white;
    /* Tablet mode */
    @media all and (max-width: 1000px){
        flex-direction: column-reverse;
        max-height: 1300px;
    }
`

export const ImageSection = styled.section`
    width: 50%;
    height: 100%;
    max-height: 2160px;  
    /* Tablet mode */
    @media all and (max-width: 1000px){
        width: 100%;
        height:60vh;
        min-height: 200px;
    }
    /* Disappear */
    @media all and (max-width: 500px){
        display: none;
    }
`

export const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    & img{
        position: absolute;
        left: 0;
        height: 100%;
    }
    /* Tablet mode */
    @media all and (max-width: 1000px){
        & img{
            width: 100%;
            height: auto;
        }
    }
`

export const ContentSection = styled.section`
    flex-grow: 1;
    height: 100%;
    min-height: 500px;
    /* Tablet mode */
    @media all and (max-width: 1000px){
        flex-shrink: 1;
    }
    /* Mobile */
    @media all and (max-width: 500px){
        height: 100%;
        flex-shrink: 0;
    }
`