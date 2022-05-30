import styled from 'styled-components'

export const LoginForm = styled.form`
    width: 100%;
    height: auto;
    padding: 2em 0;
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

    /* input field */
    & input{
        width: 200px;
        padding: 0 20px;        /*Note: If % was used instead, the padding does not increase the InputContainer's width*/
    }
`