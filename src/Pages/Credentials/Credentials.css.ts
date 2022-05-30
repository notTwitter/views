import styled from "styled-components";

export const MainSection = styled.section`
    width: 100%; 
    max-width: 3000px;
    height: 100vh;
    min-height: 700px;
    max-height: 2160px;  /*4k*/
    display: flex;
    position: relative;
    color: white;
    /* Tablet mode */
    @media all and (max-width: 1024px){
        flex-direction: column-reverse;
        max-height: 1366px;
    }
`

export const ImageSection = styled.section`
    width: 50%;
    height: 100%;
    max-height: 2160px;  
    @media all and (max-width: 1300px){
        width:30%;
    }
    /* Tablet mode */
    @media all and (max-width: 1024px){
        width: 100%;
        height:60vh;
        min-height: 200px;
    }
    /* Mobile */
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
    @media all and (max-width: 1024px){
        & img{
            width: 150%;
            height: auto;
        }
    }
`

export const ContentSection = styled.section`
    flex-grow: 1;
    height: 100%;
    min-height: 500px;
    /* Tablet mode */
    @media all and (max-width: 1024px){
        flex-shrink: 1;
    }
    /* Mobile */
    @media all and (max-width: 500px){
        height: 100%;
        flex-shrink: 0;
    }
`