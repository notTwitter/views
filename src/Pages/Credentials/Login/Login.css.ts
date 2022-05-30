import styled from 'styled-components'

export const LoginForm = styled.form`
    width: 100%;
    height: auto;
    margin-top:100px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
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

    /* input field */
    & input{
        width: 350px;
        height: 2em;
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
        transform: translate(0, -1.5em);
    }
`