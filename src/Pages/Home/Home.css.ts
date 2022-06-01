import styled from "styled-components";

const TITLE_HEIGHT = 3  //em
export const TITLE_MARGIN_LEFT = 20 //px

export const HomeContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    color: white;
`

export const Title = styled.div`
    width: 100%;
    position: sticky;
    top: 0; 
    left: 0;
    height:  ${TITLE_HEIGHT}em;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    & h2{
        font-size: 1.3em;
        font-weight: 800;
        color: inherit;
        margin-left: ${TITLE_MARGIN_LEFT}px;
    }
`

export const HomeContent = styled.div`
    width: 100%;
`