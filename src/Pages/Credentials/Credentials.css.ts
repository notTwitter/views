import styled from "styled-components";
import { MOBILE_BREAK_POINT, TABLET_BREAK_POINT } from "../../frontend.config";



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
    @media all and (max-width: ${`${TABLET_BREAK_POINT}px`}){
        flex-direction: column-reverse;     
        justify-content: flex-end;   
    }
`

export const ImageSection = styled.section`
    width: 50%;
    height: 100%;
    @media all and (max-width: 1300px){
        width:30%;
    }
    /* Tablet mode */
    @media all and (max-width: ${`${TABLET_BREAK_POINT}px`}){
        width: 100%;
        max-height: 800px;
        min-height: 500px;
        height: 50vh;
        flex-shrink: 0;
    }
    /* Mobile */
    @media all and (max-width: ${`${MOBILE_BREAK_POINT}px`}){
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
        height: 100%;
    }
    /* Tablet mode */
    @media all and (max-width: ${`${TABLET_BREAK_POINT}px`}){
        & img{
            height: 115%;
            min-height: 900px;
        }
    }
`

export const ContentSection = styled.section`
    flex-grow: 1;
    height: 100%;
    min-height: 800px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    justify-content: center;
    /* Tablet mode */
    @media all and (max-width: ${`${TABLET_BREAK_POINT}px`}){
        flex-shrink: 0;
        flex-grow: 0;
        height: 70vh;
        max-height: 1000px;
    }
    /* Mobile */
    @media all and (max-width: ${`${MOBILE_BREAK_POINT}px`}){
        height: 100%;
    }
`

export const InnerSection = styled.section`
    height: 90%; 
    max-height: 1000px;
    width: 90%;
    max-width: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
`

export const Title = styled.div`
    width: 100%;
    & h1, & h1 span{
        width: 100%;
        font-size: 50px;
        font-weight: 800;
        text-align: center;
    }
    & h1 span{
        color: #1D9AEE;
    }
`