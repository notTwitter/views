import styled, { StyledComponent } from 'styled-components'

export const LoginForm = styled.form`
    width: 100%;
    height: auto;
    margin: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const InputContainer = styled.div`
    width: fit-content;
    height: auto;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #464646;
    border-radius: 5px;
    margin-bottom: 20px;
    &:last-of-type{margin-bottom: 50px}

    /* input field */
    & input{
        width: 350px;
        height: 2.5em;
        padding: 0.5em 20px;        /*Note: If % was used instead, the padding does not increase the InputContainer's width*/
        outline: 0; 
        border: 0;
        background-color: transparent;
        color: inherit;
    }

    /* Label */
    & label{
        position: absolute;
        color: rgb(113, 118, 123);
        background-color: black;
        transition:  transform ease-out 200ms;
    }

    /* Label transition */
    & input:focus ~ label{
        transform: translate(0, -1.8em);
    }
`

export const Button= styled.button<{bgColor?: string}>`
    font-weight: 700;
    width: 350px;
    height: 2.5em;
    padding: 0.5em 20px;
    margin-bottom: 10px;
    outline: 0; border: 0;
    border-radius: 5px;
    color: inherit;
    box-sizing: unset;      /* By default, box-sizing will be set to border-box. This causes an issue with the width*/
    background-color: ${ props=>  props.bgColor || 'gray'};
    cursor: pointer;
    &:hover,  &:focus{
        filter: brightness(0.8)
    }
`

